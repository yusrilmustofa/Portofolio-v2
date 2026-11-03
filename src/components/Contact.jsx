import { useEffect, useState } from 'react';
import { Copy, MessageSquare, Send } from 'lucide-react';
import { DATA } from '../data.js';
import { ICONS } from './icons.jsx';
import SectionHeading from './SectionHeading.jsx';

const { profile } = DATA;
const STATUS_COLOR = { ok: 'text-mint', err: 'text-rose' };

function Field({ label, id, full, as: Tag = 'input', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={id} className="text-[13px] font-semibold text-muted">{label}</label>
      <Tag id={id} name={id} required className={`field ${Tag === 'textarea' ? 'min-h-[120px] resize-y' : ''}`} {...props} />
    </div>
  );
}

function Status({ status }) {
  return <div role="status" className={`form-status ${STATUS_COLOR[status?.type] ?? ''}`}>{status?.text}</div>;
}

function ContactForm() {
  const [status, setStatus] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    const [name, email, message] = [form.name, form.email, form.message].map((v) => v.trim());
    if (!name || !email || !message) return setStatus({ type: 'err', text: 'Mohon lengkapi semua kolom.' });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setStatus({ type: 'err', text: 'Format email belum benar.' });
    const subject = encodeURIComponent(`Pesan dari ${name} — via portofolio`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return setStatus({ type: 'ok', text: 'Membuka aplikasi email kamu…' });
  };

  return (
    <div className="glass edge-light p-6.5" data-reveal>
      <h3 className="mb-1 text-lg font-semibold">Kirim Pesan</h3>
      <p className="mb-5 text-[13.5px] text-dim">Form ini membuka aplikasi email kamu dengan pesan yang sudah terisi.</p>
      <form onSubmit={submit} noValidate>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Nama" id="name" autoComplete="name" placeholder="Nama kamu" maxLength={80} />
          <Field label="Email" id="email" type="email" autoComplete="email" placeholder="email@kamu.com" maxLength={120} />
          <Field label="Pesan" id="message" as="textarea" full placeholder="Ceritakan kebutuhan proyek atau posisinya…" maxLength={2000} />
        </div>
        <Status status={status} />
        <button type="submit" className="btn btn-primary"><Send size={16} /> Kirim Pesan</button>
      </form>
    </div>
  );
}

function FindMe() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch { /* clipboard tidak tersedia */ }
  };

  return (
    <div className="glass edge-light p-6.5" data-reveal="0.1">
      <div className="label mb-3">Email</div>
      <div className="mb-6 flex flex-wrap items-center gap-2.5">
        <span className="font-mono text-[15.5px] break-all">{profile.email}</span>
        <button onClick={copyEmail} aria-label="Salin email" title="Salin email" className={`icon-btn size-9.5! ${copied ? 'text-mint!' : ''}`}><Copy size={16} /></button>
      </div>
      <div className="label mb-3">Find me</div>
      <div className="grid gap-2.5">
        {profile.socials.map((social) => {
          const Icon = ICONS[social.icon];
          return (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3 text-sm font-semibold text-muted transition hover:border-accent/50 hover:text-fg">
              <Icon size={18} /> {social.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

/* Komentar disimpan di Supabase lewat REST (tanpa SDK). Kunci publishable/anon aman di frontend — keamanan diatur RLS di postgre/supabase.sql. */
const SB_URL = import.meta.env.VITE_SUPABASE_URL;
const SB_KEY = import.meta.env.VITE_SUPABASE_KEY;
const sb = async (query = '', init = {}) => {
  const res = await fetch(`${SB_URL}/rest/v1/comments${query}`, {
    ...init,
    headers: { apikey: SB_KEY, 'Content-Type': 'application/json', Prefer: 'return=representation', ...init.headers },
  });
  if (!res.ok) throw new Error(res.status);
  return res.json();
};
const avatarColor = (name) => {
  let hue = 0;
  for (const ch of name) hue = (hue * 31 + ch.charCodeAt(0)) % 360;
  return `hsl(${hue}, 70%, 72%)`;
};
const timeAgo = (iso) => {
  const s = Math.max(1, Math.floor((Date.now() - Date.parse(iso)) / 1000));
  if (s < 60) return 'baru saja';
  if (s < 3600) return `${Math.floor(s / 60)} mnt lalu`;
  if (s < 86400) return `${Math.floor(s / 3600)} jam lalu`;
  return `${Math.floor(s / 86400)} hari lalu`;
};

function Guestbook() {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState(SB_URL && SB_KEY ? null : { type: 'err', text: 'Supabase belum dikonfigurasi (lihat .env.example).' });

  useEffect(() => {
    if (!SB_URL || !SB_KEY) return;
    sb('?select=id,name,text,created_at&order=created_at.desc&limit=100')
      .then(setComments)
      .catch(() => setStatus({ type: 'err', text: 'Gagal memuat komentar.' }));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.gbName.value.trim();
    const text = form.gbMessage.value.trim();
    if (!name || !text) return setStatus({ type: 'err', text: 'Isi nama dan komentar dulu ya.' });
    try {
      const [created] = await sb('?select=id,name,text,created_at', { method: 'POST', body: JSON.stringify({ name, text }) });
      setComments((prev) => [created, ...prev]);
      form.reset();
      return setStatus({ type: 'ok', text: 'Komentar terkirim. Terima kasih!' });
    } catch {
      return setStatus({ type: 'err', text: 'Gagal mengirim komentar, coba lagi.' });
    }
  };

  return (
    <div className="glass edge-light mt-5.5 p-6.5" data-reveal>
      <h3 className="mb-1 text-lg font-semibold">Komentar ({comments.length})</h3>
      <p className="mb-5 text-[13.5px] text-dim">Komentar bersifat publik dan bisa dilihat semua pengunjung.</p>
      <form onSubmit={submit} noValidate>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Nama" id="gbName" placeholder="Nama kamu" maxLength={40} />
          <Field label="Komentar" id="gbMessage" placeholder="Komentar singkat…" maxLength={300} />
        </div>
        <Status status={status} />
        <button type="submit" className="btn btn-secondary"><MessageSquare size={16} /> Kirim Komentar</button>
      </form>
      <div className="mt-4.5 grid max-h-[380px] gap-3 overflow-y-auto pr-1">
        {comments.length === 0 && (
          <div className="rounded-xl border border-dashed border-line p-3.5 text-center text-[13.5px] text-dim">Belum ada komentar — jadi yang pertama!</div>
        )}
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 rounded-xl border border-line bg-surface p-3.5">
            <div className="grid size-9.5 flex-none place-items-center rounded-full text-[13.5px] font-bold text-ink" style={{ background: avatarColor(comment.name) }}>
              {comment.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 flex items-baseline gap-2.5">
                <span className="text-sm font-semibold">{comment.name}</span>
                <span className="font-mono text-[11px] text-dim">{timeAgo(comment.created_at)}</span>
              </div>
              <div className="text-sm break-words text-muted">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="Kontak" aria-labelledby="contact-heading" className="py-24">
      <div className="wrap">
        <SectionHeading id="contact-heading" title="Hubungi Saya" subtitle="Punya proyek atau posisi yang cocok? Kirim pesan." />
        <div className="grid items-start gap-5.5 lg:grid-cols-[1.1fr_.9fr]">
          <ContactForm />
          <FindMe />
        </div>
        <Guestbook />
      </div>
    </section>
  );
}
