import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';

/* <dialog> native sudah menangani fokus, tombol Escape, dan backdrop. */
export default function Dialog({ label, width, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current.open) ref.current.showModal();
  }, []);

  useGSAP(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.from(ref.current, { autoAlpha: 0, y: 22, scale: 0.97, duration: 0.35, ease: 'power3.out' });
  }, { scope: ref });

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      style={{ width: `min(${width}px, calc(100vw - 32px))` }}
      className="m-auto max-h-[84vh] overflow-y-auto rounded-2xl border border-white/10 bg-panel text-fg backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <button
        aria-label="Tutup"
        onClick={() => ref.current.close()}
        className="absolute top-3 right-3 z-10 grid size-9.5 place-items-center rounded-xl border border-white/20 bg-black/50 text-white"
      >
        <X size={17} />
      </button>
      {children}
    </dialog>
  );
}
