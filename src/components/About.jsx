import { ArrowRight, Award, BadgeCheck, Folder, Layers, Send } from 'lucide-react';
import { DATA } from '../data.js';
import { ICONS } from './icons.jsx';
import SectionHeading from './SectionHeading.jsx';

const { profile } = DATA;

function Portrait() {
  return (
    <div className="edge-light relative mx-auto grid aspect-[4/5] w-full max-w-[360px] place-items-center overflow-hidden rounded-3xl border border-line bg-linear-to-br from-[#0d1640] to-[#07071a]">
      {profile.photo
        ? <img src={profile.photo} alt={profile.name} className="absolute inset-0 size-full object-cover" />
        : <span className="bg-linear-to-br from-accent to-glow bg-clip-text font-display text-[clamp(80px,10vw,120px)] font-bold text-transparent">{profile.initials}</span>}
    </div>
  );
}

function TimelineCard({ item }) {
  return (
    <article className="glass edge-light mb-3.5 flex items-start gap-4 p-4.5">
      <div
        className="grid size-13 flex-none place-items-center rounded-2xl border font-display text-[19px] font-bold"
        style={{ background: `${item.color}22`, color: item.color, borderColor: `${item.color}55` }}
      >
        {item.mark}
      </div>
      <div>
        <h4 className="mb-0.5 font-display text-[16.5px] font-semibold">{item.title}</h4>
        <p className="text-sm text-muted">{item.sub}</p>
        <span className="mt-2 inline-block rounded-full border border-accent/25 bg-brand/10 px-3 py-0.5 font-mono text-xs text-accent">{item.date}</span>
      </div>
    </article>
  );
}

function Timeline({ title, items, delay }) {
  return (
    <div data-reveal={delay}>
      <h3 className="label mb-4 flex items-center gap-2.5 font-medium after:h-px after:flex-1 after:bg-line">{title}</h3>
      {items.map((item) => <TimelineCard key={item.title} item={item} />)}
    </div>
  );
}

function Stat({ icon: Icon, value, label, detail }) {
  return (
    <div className="glass edge-light flex items-center gap-4 p-5.5" data-reveal>
      <div className="grid size-12 flex-none place-items-center rounded-xl border border-accent/25 bg-brand/10 text-accent"><Icon size={22} /></div>
      <div>
        <div className="font-display text-3xl leading-tight font-bold">{value}<span className="text-accent">+</span></div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-[12.5px] text-dim">{detail}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="About" aria-labelledby="about-heading" className="py-24">
      <div className="wrap">
        <SectionHeading id="about-heading" title="About Me" />

        <div className="mb-16 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div data-reveal="0.1">
            <h3 className="mb-4 text-[clamp(30px,4.5vw,44px)] font-bold">
              <span className="mb-1.5 block text-[.55em] font-semibold text-accent">Hi, I&apos;m</span>
              {profile.name}
            </h3>
            {DATA.about.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-muted [&_strong]:font-semibold [&_strong]:text-fg" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="my-6 grid gap-2.5 sm:grid-cols-2">
              {DATA.facts.map((fact) => {
                const Icon = ICONS[fact.icon];
                return (
                  <div key={fact.label} className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-3 text-sm text-muted">
                    <Icon size={17} className="flex-none text-accent" />
                    <span>{fact.label}: <b className="font-semibold text-fg">{fact.value}</b></span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3.5">
              <a href="#Kontak" className="btn btn-primary"><Send size={16} /> Hubungi Saya</a>
              <a href="#Portofolio" className="btn btn-secondary">Lihat Projek <ArrowRight size={17} /></a>
            </div>
          </div>
          <div data-reveal><Portrait /></div>
        </div>

        <div className="mb-14 grid gap-10 lg:grid-cols-2">
          <Timeline title="Education" items={DATA.education} />
          <Timeline title="Experience" items={DATA.experience} delay="0.1" />
        </div>

        <div className="grid gap-4 md:auto-cols-fr md:grid-flow-col">
          <Stat icon={Folder} value={DATA.projects.length} label="Projects" detail="Karya yang dibuat" />
          <Stat icon={BadgeCheck} value={DATA.certificates.length} label="Certificates" detail="Skill yang divalidasi" />
          {DATA.awards?.length > 0 && <Stat icon={Award} value={DATA.awards.length} label="Awards" detail="Pencapaian diraih" />}
          <Stat icon={Layers} value={DATA.skills.reduce((sum, c) => sum + c.skills.length, 0)} label="Tech Stack" detail="Teknologi yang dikuasai" />
        </div>
      </div>
    </section>
  );
}
