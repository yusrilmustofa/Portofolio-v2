import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Award, BadgeCheck, Check, ExternalLink, ZoomIn } from 'lucide-react';
import { DATA } from '../data.js';
import Dialog from './Dialog.jsx';
import SectionHeading from './SectionHeading.jsx';

const initials = (project) => project.abbr || project.title.slice(0, 2).toUpperCase();
const CARD_GLOW = {
  background: 'radial-gradient(240px 180px at 25% 15%, rgb(60 132 246 / .3), transparent 60%), radial-gradient(220px 180px at 85% 90%, rgb(16 185 129 / .2), transparent 60%), linear-gradient(150deg, #0b0b24, #08081c)',
};

function ProjectModal({ project, onClose }) {
  return (
    <Dialog label="Detail proyek" width={680} onClose={onClose}>
      {project.image
        ? <img src={project.image} alt={project.title} className="w-full" />
        : (
          <div className="grid-lines relative grid aspect-[16/6.5] place-items-center" style={{ background: project.gradient }}>
            <span className="relative font-mono text-[clamp(30px,5vw,46px)] font-bold text-white/90">{initials(project)}</span>
          </div>
        )}
      <div className="px-6.5 pt-6 pb-7">
        <div className="label mb-1.5">{project.categoryLabel}</div>
        <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
        <p className="mb-5.5 text-[15px] text-muted">{project.longDesc || project.description}</p>
        <ul className="mb-5.5 grid gap-2.5 empty:hidden">
          {project.features?.map((feature) => (
            <li key={feature} className="flex gap-3 text-[14.5px] text-muted"><Check size={16} className="mt-1 flex-none text-mint" />{feature}</li>
          ))}
        </ul>
        <div className="mb-6 flex flex-wrap gap-2 empty:hidden">
          {project.tags?.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">{tag}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, i) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}>
              {link.label} <ExternalLink size={15} />
            </a>
          ))}
        </div>
      </div>
    </Dialog>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(310px,100%),1fr))] gap-5.5">
      {DATA.projects.map((project) => (
        <article key={project.id} data-card className="glass edge-light group flex flex-col overflow-hidden">
          <div className="relative aspect-[16/9.5] overflow-hidden rounded-t-2xl">
            <span className="absolute top-3 left-3 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[11px] tracking-wider text-white">{project.categoryLabel}</span>
            {project.image
              ? <img src={project.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              : (
                <div className="grid-lines absolute inset-0 grid place-items-center transition-transform duration-500 group-hover:scale-105" style={{ background: project.gradient }}>
                  <span className="relative font-mono text-[44px] font-bold text-white/85">{initials(project)}</span>
                </div>
              )}
          </div>
          <div className="flex flex-1 flex-col px-5 pt-4.5 pb-5">
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="mb-4 flex-1 text-sm text-muted">{project.description}</p>
            <button onClick={() => setSelected(project)} className="inline-flex items-center gap-2 self-start py-1.5 text-sm font-semibold text-accent transition-all hover:gap-3">
              Details <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

/* Dipakai oleh tab Certificates dan Achievements. */
function Gallery({ items, icon: Icon, label, getMeta }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-5.5">
      {items.map((item) => (
        <button key={item.title} data-card onClick={() => setSelected(item)} aria-label={`Perbesar ${item.title}`} className="glass edge-light group cursor-zoom-in p-5 text-left">
          <div style={CARD_GLOW} className="relative mb-4 grid aspect-[16/10] w-full place-items-center overflow-hidden rounded-xl border border-line text-fg/75">
            {item.image
              ? <img src={item.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
              : <Icon size={42} />}
          </div>
          <h3 className="mb-1 text-base font-semibold">{item.title}</h3>
          <div className="text-[13px] text-dim">{getMeta(item)}</div>
          <ZoomIn size={20} className="absolute top-7 right-7 text-white opacity-0 drop-shadow transition group-hover:opacity-100" />
        </button>
      ))}
      {selected && (
        <Dialog label={label} width={selected.image ? 900 : 620} onClose={() => setSelected(null)}>
          {selected.image
            ? <img src={selected.image} alt={selected.title} className="w-full" />
            : (
              <div style={CARD_GLOW} className="grid aspect-[16/10] place-items-center p-6 text-center">
                <div className="grid place-items-center gap-3">
                  <Icon size={64} className="text-fg/80" />
                  <div className="font-mono text-[15px] font-bold">{selected.title}</div>
                  <div className="font-mono text-xs text-dim">{getMeta(selected)}</div>
                </div>
              </div>
            )}
        </Dialog>
      )}
    </div>
  );
}

const Certificates = () => (
  <Gallery items={DATA.certificates} icon={BadgeCheck} label="Pratinjau sertifikat" getMeta={(c) => `${c.issuer} · ${c.year}`} />
);
const Awards = () => (
  <Gallery items={DATA.awards} icon={Award} label="Pratinjau penghargaan" getMeta={(a) => `${a.event} · ${a.year}`} />
);

function TechStack() {
  return DATA.skills.map((category) => (
    <div key={category.category} className="mb-7 last:mb-0">
      <h3 className="label mb-4 flex items-center gap-2.5 font-medium after:h-px after:flex-1 after:bg-line">{category.category}</h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(158px,1fr))] gap-3.5">
        {category.skills.map((skill) => (
          <div key={skill.name} data-card className="glass edge-light flex items-center gap-3 p-4" style={{ '--skill': skill.color }}>
            <div className="grid size-11 flex-none place-items-center rounded-xl border border-(--skill)/45 bg-(--skill)/13 font-mono text-[15px] font-bold text-(--skill)">
              {skill.abbr}
            </div>
            <div className="text-[14.5px] font-semibold">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  ));
}

const TABS = [
  { id: 'projects', label: 'Projects', count: DATA.projects.length, View: Projects },
  { id: 'certificates', label: 'Certificates', count: DATA.certificates.length, View: Certificates },
  { id: 'awards', label: 'Achievements', count: DATA.awards?.length ?? 0, View: Awards },
  { id: 'skills', label: 'Tech Stack', count: DATA.skills.reduce((sum, c) => sum + c.skills.length, 0), View: TechStack },
].filter((tab) => tab.count > 0);

export default function Portfolio() {
  const [tabId, setTabId] = useState(TABS[0].id);
  const panel = useRef(null);
  const { View } = TABS.find((tab) => tab.id === tabId);

  useGSAP(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return ScrollTrigger.refresh();
    gsap.from('[data-card]', {
      autoAlpha: 0, y: 26, scale: 0.96, duration: 0.5, stagger: 0.05, ease: 'power3.out',
      onComplete: () => ScrollTrigger.refresh(), /* tinggi section berubah saat ganti tab */
    });
    return undefined;
  }, { scope: panel, dependencies: [tabId], revertOnUpdate: true });

  return (
    <section id="Portofolio" aria-labelledby="portfolio-heading" className="py-24">
      <div className="wrap">
        <SectionHeading id="portfolio-heading" title="Portfolio" subtitle="Proyek, pencapaian, dan teknologi yang saya pakai." />
        <div className="mb-10 flex justify-center" data-reveal>
          <div role="tablist" aria-label="Kategori portofolio" className="inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-line bg-surface p-1.5">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={tab.id === tabId}
                onClick={() => setTabId(tab.id)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4.5 py-2.5 text-[14.5px] font-semibold transition ${
                  tab.id === tabId ? 'bg-linear-to-br from-brand to-accent text-white' : 'text-muted hover:text-fg'
                }`}
              >
                {tab.label}
                <span className="rounded-full bg-white/10 px-2 font-mono text-[11px]">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
        <div ref={panel} role="tabpanel"><View /></div>
      </div>
    </section>
  );
}
