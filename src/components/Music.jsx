import { DATA } from '../data.js';

const embedUrl = DATA.profile.spotifyUrl?.replace('open.spotify.com/', 'open.spotify.com/embed/');

export default function Music() {
  if (!embedUrl) return null;

  return (
    <section aria-labelledby="music-heading" className="py-16">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <div data-reveal>
          <h2 id="music-heading" className="mb-4 text-[clamp(30px,4.5vw,44px)] font-bold">
            Kode jalan,
            <span className="block bg-linear-to-r from-accent to-glow bg-clip-text text-transparent">musik nyala.</span>
          </h2>
          <p className="max-w-[460px] text-muted">Playlist yang menemani saya saat menulis kode dan debugging sampai larut.</p>
        </div>
        <iframe
          data-reveal="0.1"
          title="Playlist Spotify"
          src={`${embedUrl}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="rounded-2xl border-0"
        />
      </div>
    </section>
  );
}
