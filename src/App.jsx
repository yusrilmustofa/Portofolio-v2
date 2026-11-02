import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DATA } from './data.js';
import Loader from './components/Loader.jsx';
import SpaceBackground from './components/SpaceBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Music from './components/Music.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const root = useRef(null);

  useEffect(() => {
    document.title = `${DATA.profile.name} | ${DATA.profile.role}`;
    const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#050510"/><text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#3c84f6">${DATA.profile.initials}</text></svg>`;
    document.querySelector('link[rel=icon]').href = `data:image/svg+xml,${encodeURIComponent(icon)}`;
  }, []);
  useEffect(() => {
    document.body.classList.toggle('is-loading', loading);
  }, [loading]);

  /* Semua elemen ber-atribut data-reveal muncul saat di-scroll; nilainya = delay (detik). */
  useGSAP(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0, y: 30, duration: 0.7, ease: 'power3.out',
          delay: Number(el.dataset.reveal) || 0,
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      });
    });
  }, { scope: root });

  return (
    <div ref={root}>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Music />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
