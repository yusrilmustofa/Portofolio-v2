import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DATA } from '../data.js';

export default function Loader({ onDone }) {
  const root = useRef(null);
  const number = useRef(null);
  const bar = useRef(null);

  useGSAP(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progress = { value: 0 };
    gsap.timeline({ onComplete: onDone })
      .to(progress, {
        value: 100,
        duration: reduced ? 0 : 1.5,
        ease: 'power1.inOut',
        onUpdate() {
          number.current.textContent = `${Math.floor(progress.value)}%`;
          bar.current.style.width = `${progress.value}%`;
        },
      })
      .to(root.current, { autoAlpha: 0, duration: reduced ? 0 : 0.5, delay: 0.15 });
  }, { scope: root });

  return (
    <div ref={root} aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center bg-ink">
      <div className="w-[min(320px,80vw)] text-center">
        <div className="mb-6 font-display text-[22px] font-bold tracking-wider">
          {DATA.profile.brand}<span className="text-accent">.dev</span>
        </div>
        <div ref={number} className="mb-4 font-mono text-[54px] leading-none font-bold">0%</div>
        <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
          <div ref={bar} className="h-full w-0 rounded-full bg-linear-to-r from-brand to-glow" />
        </div>
        <div className="mt-4 font-mono text-[11px] tracking-[.12em] text-dim uppercase">memuat aset portofolio…</div>
      </div>
    </div>
  );
}
