import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { DATA } from '../data.js';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(scrollY > 600);
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative z-10 border-t border-line py-7.5">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <div className="text-[13.5px] text-dim">
          © {new Date().getFullYear()} <b className="font-semibold text-muted">{DATA.profile.name}</b> — {DATA.profile.role}.
        </div>
        <div className="font-mono text-xs text-dim">React · Tailwind · Three.js · GSAP</div>
      </div>
      <button
        aria-label="Kembali ke atas"
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
        className={`icon-btn fixed right-5.5 bottom-5.5 z-30 bg-panel/85 backdrop-blur-md ${showTop ? '' : 'invisible opacity-0'}`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
