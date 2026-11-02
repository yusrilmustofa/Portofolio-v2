import { useMemo } from 'react';

const random = (min, max) => min + Math.random() * (max - min);

export default function SpaceBackground() {
  const stars = useMemo(() => Array.from({ length: 110 }, () => ({
    left: `${random(0, 100)}%`,
    top: `${random(0, 100)}%`,
    width: random(1, 2.4),
    height: random(1, 2.4),
    opacity: random(0.25, 0.9),
  })), []);
  const meteors = useMemo(() => Array.from({ length: 10 }, () => ({
    left: `${random(5, 115)}%`,
    height: random(90, 180),
    animationDuration: `${random(4.5, 9.5)}s`,
    animationDelay: `${random(0, 8)}s`,
  })), []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((style, i) => <span key={i} className="absolute rounded-full bg-white" style={style} />)}
      {meteors.map((style, i) => <span key={i} className="meteor" style={style} />)}
    </div>
  );
}
