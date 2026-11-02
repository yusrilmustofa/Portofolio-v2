/* ─────────── Icons (lucide, inline) ─────────── */
const I = (d, size = 18) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONS = {
  github:   '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin:      '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  focus:    '<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',
  server:   '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  clock:    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  folder:   '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  badge:    '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  award:    '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  check:    '<path d="M20 6 9 17l-5-5"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  close:    '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  zoom:     '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/>',
};
const svg = (name, size) => I(ICONS[name] || '', size);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

/* ─────────── Welcome loader ─────────── */
(function loader() {
  const numEl = $('#loaderNumber'), barEl = $('#loaderBar'), loaderEl = $('#welcomeLoader');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nameEl = $('#loaderName');
  nameEl.innerHTML = esc(DATA.profile.brand) + '<span>.dev</span>';
  let p = 0;
  const tick = () => {
    p = Math.min(100, p + (reduced ? 100 : 3 + Math.random() * 9));
    numEl.textContent = Math.floor(p) + '%';
    barEl.style.width = p + '%';
    if (p < 100) setTimeout(tick, 45 + Math.random() * 80);
    else setTimeout(() => {
      loaderEl.classList.add('done');
      document.body.classList.remove('is-loading');
      setTimeout(() => loaderEl.remove(), 700);
    }, 260);
  };
  tick();
})();

/* ─────────── Meteors ─────────── */
(function meteors() {
  const wrap = $('#meteorBackground');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 12; i++) {
    const m = document.createElement('span');
    m.className = 'meteor';
    m.style.left = (5 + Math.random() * 110) + '%';
    m.style.height = (90 + Math.random() * 90) + 'px';
    m.style.animationDuration = (4.5 + Math.random() * 5) + 's';
    m.style.animationDelay = (Math.random() * 8) + 's';
    wrap.appendChild(m);
  }
})();

/* ─────────── Static fills ─────────── */
$('#navLogo').textContent = DATA.profile.initials;
$('#navBrand').innerHTML = esc(DATA.profile.brand) + '<span class="navbar-logo-dot">.dev</span>';
document.title = `${DATA.profile.name} | ${DATA.profile.role}`;
$('#heroName').textContent = DATA.profile.name;
$('#heroRole').textContent = DATA.profile.role;
$('#heroStatus').textContent = DATA.profile.status;
$('#heroDesc').textContent = DATA.profile.tagline;
$('#aboutInitials').textContent = DATA.profile.initials;
$('#aboutTitle').innerHTML = `<span class="about-title-greeting">Hi, I&#39;m</span>${esc(DATA.profile.name)}`;
$('#aboutText').innerHTML = DATA.about.map(p => `<p class="about-text">${p}</p>`).join('');
$('#aboutFacts').innerHTML = DATA.facts.map(f =>
  `<div class="about-fact">${svg(f.icon, 17)}<span>${esc(f.label)}: <b>${f.value}</b></span></div>`).join('');
$('#contactEmail').textContent = DATA.profile.email;
$('#footerName').textContent = DATA.profile.name;
$('#year').textContent = new Date().getFullYear();

/* social buttons (hero + contact) */
const socialBtn = (s) =>
  `<a class="icon-btn" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}" title="${esc(s.label)}">${svg(s.icon, 18)}</a>`;
$('#heroSocials').innerHTML = DATA.profile.socials.map(socialBtn).join('');
$('#contactSocials').innerHTML = DATA.profile.socials.map(socialBtn).join('');

/* hero terminal */
$('#heroTerminal').innerHTML = `
  <div><span class="k">"role"</span>: <span class="s">"${esc(DATA.profile.role)}"</span>,</div>
  <div><span class="k">"focus"</span>: <span class="s">"API · Database · Infra"</span>,</div>
  <div><span class="k">"db"</span>: [<span class="s">"PostgreSQL"</span>, <span class="s">"Redis"</span>, <span class="s">"MySQL"</span>],</div>
  <div><span class="k">"infra"</span>: <span class="s">"Docker · Linux · CI/CD"</span>,</div>
  <div><span class="k">"status"</span>: <span class="s">"open_to_work"</span> <span class="c">// ${esc(DATA.profile.status.toLowerCase())}</span></div>
  <div><span class="b">$</span> uptime --me</div>
  <div class="c">always learning, always shipping ▊</div>`;

/* hero typing rotator */
(function typer() {
  const el = $('#heroTyped');
  const roles = DATA.profile.roles;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = roles[0]; return; }
  let r = 0, c = 0, del = false;
  const step = () => {
    const word = roles[r];
    el.textContent = word.slice(0, c);
    let delay = del ? 34 : 62;
    if (!del && c === word.length) { del = true; delay = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; delay = 350; }
    else c += del ? -1 : 1;
    setTimeout(step, delay);
  };
  step();
})();

/* ─────────── Experience section ─────────── */
const statCard = (icon, value, label, detail) => `
  <div class="glass edge-light experience-stat-card">
    <div class="experience-stat-icon">${svg(icon, 22)}</div>
    <div>
      <div class="experience-stat-value">${value}<em>+</em></div>
      <div class="experience-stat-label">${label}</div>
      <div class="experience-stat-detail">${detail}</div>
    </div>
  </div>`;
$('#expStats').innerHTML =
  statCard('folder', DATA.projects.length, 'Projects', 'Karya yang dibuat') +
  statCard('badge', DATA.certificates.length, 'Certificates', 'Skill yang divalidasi') +
  statCard('award', DATA.awards.length, 'Awards', 'Pencapaian diraih');

const expCard = (e) => `
  <article class="glass edge-light experience-card">
    <div class="experience-logo" style="background:${e.color}22;color:${e.color};border-color:${e.color}55">${esc(e.mark)}</div>
    <div class="experience-card-copy">
      <h3>${esc(e.title)}</h3>
      <p>${esc(e.sub)}</p>
      <span class="experience-date">${esc(e.date)}</span>
    </div>
  </article>`;
$('#eduList').innerHTML = DATA.education.map(expCard).join('');
$('#workList').innerHTML = DATA.experience.map(expCard).join('');

/* ─────────── Portfolio tabs ─────────── */
const TABS = [
  { id: 'projects', label: 'Proyek', count: DATA.projects.length },
  { id: 'skills', label: 'Keahlian', count: DATA.skills.reduce((a, c) => a + c.skills.length, 0) },
  { id: 'certificates', label: 'Sertifikat', count: DATA.certificates.length },
  { id: 'awards', label: 'Penghargaan', count: DATA.awards.length },
];
$('#tabBar').innerHTML = TABS.map((t, i) =>
  `<button class="portfolio-tab-btn${i === 0 ? ' is-active' : ''}" role="tab" data-tab="${t.id}" aria-selected="${i === 0}">
    ${esc(t.label)}<span class="count">${t.count}</span></button>`).join('');

const projectCard = (p) => `
  <article class="glass edge-light portfolio-project-card anim-card">
    <div class="portfolio-card-thumbnail">
      <span class="portfolio-card-category">${esc(p.categoryLabel)}</span>
      <div class="portfolio-card-thumbnail-image" style="background:${p.gradient}">
        <span class="portfolio-card-thumbnail-mono">${esc(p.abbr || p.title.slice(0, 2).toUpperCase())}</span>
      </div>
    </div>
    <div class="portfolio-card-body">
      <h3 class="portfolio-card-title">${esc(p.title)}</h3>
      <p class="portfolio-card-desc">${esc(p.description)}</p>
      <button class="portfolio-details-btn" data-project="${esc(p.id)}">
        Lihat Detail ${svg('arrowRight', 16)}
      </button>
    </div>
  </article>`;

const skillView = () => DATA.skills.map(cat => `
  <div class="portfolio-skills-category-title">${esc(cat.category)}</div>
  <div class="portfolio-skills-grid">
    ${cat.skills.map(s => `
      <div class="glass edge-light portfolio-skill-card anim-card" style="--sc:${s.color}">
        <div class="portfolio-skill-mark">${esc(s.abbr || s.name.slice(0, 2))}</div>
        <div class="portfolio-skill-name">${esc(s.name)}</div>
      </div>`).join('')}
  </div>`).join('');

const certCard = (c, i) => `
  <article class="glass edge-light portfolio-cert-card anim-card">
    <div class="portfolio-cert-preview" data-cert="${i}" role="button" tabindex="0" aria-label="Perbesar ${esc(c.title)}">
      ${svg('badge', 42)}
      <div class="portfolio-cert-preview-overlay">${svg('zoom', 30)}</div>
    </div>
    <h3>${esc(c.title)}</h3>
    <div class="portfolio-cert-meta"><span>${esc(c.issuer)}</span>·<span>${esc(c.year)}</span></div>
  </article>`;

const awardCard = (a) => `
  <article class="glass edge-light portfolio-cert-card anim-card" style="grid-column:span 1">
    <div class="portfolio-cert-preview" style="cursor:default">
      ${svg('award', 42)}
    </div>
    <h3>${esc(a.title)}</h3>
    <div class="portfolio-cert-meta"><span>${esc(a.event)}</span>·<span>${esc(a.year)}</span></div>
  </article>`;

$('#view-projects').innerHTML = `<div class="portfolio-cards-grid">${DATA.projects.map(projectCard).join('')}</div>`;
$('#view-skills').innerHTML = skillView();
$('#view-certificates').innerHTML = `<div class="portfolio-certificates-grid">${DATA.certificates.map(certCard).join('')}</div>`;
$('#view-awards').innerHTML = `<div class="portfolio-certificates-grid">${DATA.awards.map(awardCard).join('')}</div>`;

function activateView(id, animate = true) {
  $$('.portfolio-view').forEach(v => v.classList.toggle('is-active', v.id === 'view-' + id));
  $$('.portfolio-tab-btn').forEach(b => {
    const on = b.dataset.tab === id;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-selected', on);
  });
  const view = $('#view-' + id);
  if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.anim-card', view).forEach((c, i) => {
      c.classList.remove('shown');
      setTimeout(() => c.classList.add('shown'), 40 + i * 60);
    });
  } else {
    $$('.anim-card', view).forEach(c => c.classList.add('shown'));
  }
}
$('#tabBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.portfolio-tab-btn');
  if (btn) activateView(btn.dataset.tab);
});
activateView('projects', false);

/* ─────────── Project modal ─────────── */
const backdrop = $('#modalBackdrop');
function openProject(id) {
  const p = DATA.projects.find(x => x.id === id);
  if (!p) return;
  $('#modalContent').innerHTML = `
    <div class="portfolio-modal-header-banner" style="background:${p.gradient}">
      <button class="portfolio-modal-close-btn" data-close aria-label="Tutup">${svg('close', 17)}</button>
      <span class="portfolio-modal-title-z">${esc(p.abbr || p.title.slice(0, 2).toUpperCase())}</span>
    </div>
    <div class="portfolio-modal-body">
      <div class="portfolio-modal-subheading">${esc(p.categoryLabel)}</div>
      <h3 class="portfolio-modal-title">${esc(p.title)}</h3>
      <p class="portfolio-modal-desc">${esc(p.longDesc)}</p>
      <ul class="portfolio-modal-features">
        ${(p.features || []).map(f => `<li>${svg('check', 16)}<span>${esc(f)}</span></li>`).join('')}
      </ul>
      <div class="portfolio-modal-tags">${(p.tags || []).map(t => `<span class="portfolio-modal-tag-chip">${esc(t)}</span>`).join('')}</div>
      <div class="portfolio-modal-actions">
        ${(p.links || []).map(l => `<a class="btn ${l === p.links[0] ? 'btn-primary' : 'btn-secondary'}" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ${svg('external', 15)}</a>`).join('')}
      </div>
    </div>`;
  backdrop.classList.add('open');
  requestAnimationFrame(() => backdrop.classList.add('visible'));
  document.body.style.overflow = 'hidden';
  $('.portfolio-modal-close-btn').focus();
}
function closeModal() {
  backdrop.classList.remove('visible');
  setTimeout(() => { backdrop.classList.remove('open'); $('#modalContent').innerHTML = ''; }, 300);
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const det = e.target.closest('.portfolio-details-btn');
  if (det) openProject(det.dataset.project);
  if (e.target.closest('[data-close]')) closeModal();
  if (e.target === backdrop) closeModal();
});

/* ─────────── Certificate viewer ─────────── */
const certViewer = $('#certViewer');
function openCert(i) {
  const c = DATA.certificates[i];
  if (!c) return;
  $('#certViewerInner').innerHTML = `
    <button class="portfolio-cert-viewer-close" data-cert-close aria-label="Tutup">${svg('close', 18)}</button>
    <div class="portfolio-cert-viewer-image">
      <div style="text-align:center;display:grid;place-items:center;gap:12px">
        <span style="color:rgba(240,240,255,.8)">${svg('badge', 64)}</span>
        <div class="mono" style="font-size:15px;color:#f0f0ff;font-weight:700">${esc(c.title)}</div>
        <div class="mono" style="font-size:12px;color:#8a8ab0">${esc(c.issuer)} · ${esc(c.year)}</div>
      </div>
    </div>
    <div class="portfolio-cert-viewer-caption">pratinjau — ganti dengan gambar sertifikat asli</div>`;
  certViewer.classList.add('open');
  requestAnimationFrame(() => certViewer.classList.add('visible'));
  document.body.style.overflow = 'hidden';
  $('[data-cert-close]').focus();
}
function closeCert() {
  certViewer.classList.remove('visible');
  setTimeout(() => certViewer.classList.remove('open'), 300);
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const cert = e.target.closest('.portfolio-cert-preview[data-cert]');
  if (cert) openCert(Number(cert.dataset.cert));
  if (e.target.closest('[data-cert-close]') || e.target === certViewer) closeCert();
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (backdrop.classList.contains('open')) closeModal();
  if (certViewer.classList.contains('open')) closeCert();
});

/* ─────────── Navbar behaviour ─────────── */
const navbar = $('#navbar'), backToTop = $('#backToTop');
const onScroll = () => {
  navbar.classList.toggle('scrolled', scrollY > 24);
  backToTop.classList.toggle('show', scrollY > 600);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();
backToTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* mobile menu */
const burger = $('#navBurger'), panel = $('#navMobilePanel');
burger.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
$$('a', panel).forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));

/* scrollspy */
(function spy() {
  const links = $$('.navbar-link-item, .navbar-mobile-panel a');
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      links.forEach(a => a.classList.remove('active'));
      const link = map.get(id === 'Home' ? 'Home' : id);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['Home', 'About', 'Experience', 'Portofolio', 'Kontak'].forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

/* ─────────── Reveal on scroll ─────────── */
(function reveal() {
  const els = $$('.reveal');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

/* ─────────── Contact form (mailto) ─────────── */
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#cfName').value.trim(), email = $('#cfEmail').value.trim(), msg = $('#cfMsg').value.trim();
  const status = $('#formStatus');
  if (!name || !email || !msg) { status.textContent = 'Mohon lengkapi semua kolom.'; status.className = 'form-status err'; return; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { status.textContent = 'Format email belum benar.'; status.className = 'form-status err'; return; }
  const subject = encodeURIComponent(`Pesan dari ${name} — via portofolio`);
  const body = encodeURIComponent(`${msg}\n\n—\n${name}\n${email}`);
  location.href = `mailto:${DATA.profile.email}?subject=${subject}&body=${body}`;
  status.textContent = 'Membuka aplikasi email kamu… (cek tab baru jika tidak terbuka)';
  status.className = 'form-status ok';
});

/* copy email */
$('#copyEmailBtn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(DATA.profile.email);
    const btn = $('#copyEmailBtn');
    btn.style.color = 'var(--col-teal)';
    setTimeout(() => btn.style.color = '', 1200);
  } catch { /* clipboard tidak tersedia */ }
});

/* ─────────── Guestbook (localStorage) ─────────── */
const GB_KEY = 'portfolio_guestbook_v1';
const readGB = () => { try { return JSON.parse(localStorage.getItem(GB_KEY)) || []; } catch { return []; } };
const writeGB = (list) => localStorage.setItem(GB_KEY, JSON.stringify(list));
const avatarColor = (name) => {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return `hsl(${h}, 70%, 72%)`;
};
const timeAgo = (ts) => {
  const s = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return 'baru saja';
  if (s < 3600) return Math.floor(s / 60) + ' mnt lalu';
  if (s < 86400) return Math.floor(s / 3600) + ' jam lalu';
  return Math.floor(s / 86400) + ' hari lalu';
};
function renderGB() {
  const list = readGB();
  const el = $('#guestList');
  if (!list.length) {
    el.innerHTML = '<div class="guestbook-empty">Belum ada komentar — jadi yang pertama!</div>';
    return;
  }
  el.innerHTML = list.map((c, i) => `
    <div class="guestbook-item">
      <div class="guestbook-avatar" style="background:${avatarColor(c.name)}">${esc(c.name.slice(0, 2).toUpperCase())}</div>
      <div>
        <div class="guestbook-meta">
          <span class="guestbook-name">${esc(c.name)}</span>
          <span class="guestbook-time">${timeAgo(c.ts)}</span>
          <button data-del="${i}" aria-label="Hapus komentar" title="Hapus" style="margin-left:auto;color:var(--col-dim);font-size:12px">×</button>
        </div>
        <div class="guestbook-text">${esc(c.text)}</div>
      </div>
    </div>`).join('');
}
$('#guestForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#gbName').value.trim(), text = $('#gbMsg').value.trim();
  const status = $('#guestStatus');
  if (!name || !text) { status.textContent = 'Isi nama dan komentar dulu ya.'; status.className = 'form-status err'; return; }
  const list = readGB();
  list.unshift({ name, text, ts: Date.now() });
  writeGB(list.slice(0, 100));
  $('#gbName').value = ''; $('#gbMsg').value = '';
  status.textContent = 'Komentar terkirim (tersimpan lokal).';
  status.className = 'form-status ok';
  renderGB();
});
$('#guestList').addEventListener('click', (e) => {
  const del = e.target.closest('[data-del]');
  if (!del) return;
  const list = readGB();
  list.splice(Number(del.dataset.del), 1);
  writeGB(list);
  renderGB();
});
renderGB();
