import { useEffect, useState } from 'react';

const LINKS = ['Home', 'About', 'Portofolio', 'Kontak'];

export default function Navbar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: '-40% 0px -55% 0px' });
    LINKS.forEach((id) => observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed top-4 left-1/2 z-40 flex -translate-x-1/2 gap-0.5 rounded-full border border-white/20 bg-black/55 p-1.5 shadow-[0_8px_30px_rgb(0_0_0/.4)] backdrop-blur-lg"
    >
      {LINKS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? 'true' : undefined}
          className={`rounded-full px-3 py-2 text-[13px] font-semibold transition sm:px-5 sm:text-sm ${
            active === id
              ? 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/.14)]'
              : 'text-muted hover:text-white'
          }`}
        >
          {id}
        </a>
      ))}
    </nav>
  );
}
