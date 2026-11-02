import { lazy, Suspense, useEffect, useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { DATA } from '../data.js';
import { ICONS } from './icons.jsx';
import { drawCard } from './lanyard/card.js';

const Lanyard = lazy(() => import('./lanyard/Lanyard.jsx'));
const { profile } = DATA;

function useTyping(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let word = 0, char = 0, deleting = false, timer;
    const step = () => {
      const current = words[word];
      setText(current.slice(0, char));
      let delay = deleting ? 34 : 62;
      if (!deleting && char === current.length) { deleting = true; delay = 1600; }
      else if (deleting && char === 0) { deleting = false; word = (word + 1) % words.length; delay = 350; }
      else char += deleting ? -1 : 1;
      timer = setTimeout(step, delay);
    };
    step();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

function HeroLanyard() {
  const [card, setCard] = useState(profile.cardImage);

  useEffect(() => {
    if (card) return;
    Promise.all([
      document.fonts.load('700 96px "Space Grotesk"'),
      document.fonts.load('500 46px "JetBrains Mono"'),
    ]).catch(() => {}).then(() => drawCard(profile)).then(setCard);
  }, [card]);

  if (!card) return null;
  return (
    <Suspense fallback={null}>
      <Lanyard frontImage={card} cardColor="#07071a" strapColor="#2c67ed" finish="matte" size={0.5} strapLength={0.4} />
    </Suspense>
  );
}

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="Home" className="relative flex min-h-svh flex-col justify-center max-lg:gap-6 max-lg:pb-10">
      <div className="wrap">
        <div className="max-w-[560px]">
          <h1 className="mb-3 text-[clamp(44px,6vw,72px)] font-bold" data-reveal>
            <span className="block bg-linear-to-r from-accent to-glow bg-clip-text text-transparent">Welcome to</span>
            My Portfolio
          </h1>
          <p className="mb-5 min-h-[1.7em] font-mono text-[clamp(15px,2vw,18px)] text-accent" data-reveal="0.05">
            {typed}<span className="cursor-blink">▏</span>
          </p>
          <p className="mb-8 text-[16.5px] text-muted" data-reveal="0.1">{profile.tagline}</p>
          <div className="mb-9 flex flex-wrap gap-3.5" data-reveal="0.15">
            <a href="#Portofolio" className="btn btn-primary">Lihat Projek <ArrowRight size={17} /></a>
            <a href="#Kontak" className="btn btn-secondary">Hubungi Saya <Send size={16} /></a>
          </div>
          <div className="flex items-center gap-3.5" data-reveal="0.2">
            <span className="label">Find me</span>
            {profile.socials.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label} className="icon-btn">
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="h-[480px] w-full max-lg:order-first lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52vw]">
        <HeroLanyard />
      </div>
    </section>
  );
}
