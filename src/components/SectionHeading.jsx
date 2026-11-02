export default function SectionHeading({ id, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 id={id} className="mb-2.5 text-[clamp(30px,4.5vw,44px)] font-bold" data-reveal>{title}</h2>
      {subtitle && <p className="mx-auto max-w-[560px] text-muted" data-reveal="0.08">{subtitle}</p>}
    </div>
  );
}
