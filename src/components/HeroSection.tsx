import type { ContentItem, HeroCopy } from '../types/content.ts';

type HeroSectionProps = {
  copy: HeroCopy;
  profile: ContentItem;
  onOpen: (item: ContentItem) => void;
};

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 4.75c0-1.13 1.22-1.84 2.2-1.27l12.36 7.25c.97.57.97 1.97 0 2.54L8.2 20.52c-.98.57-2.2-.14-2.2-1.27V4.75Z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" className="h-4.5 w-4.5 shrink-0" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 11v5.2M12 7.6v.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function HeroSection({ copy, profile, onOpen }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative isolate min-h-[82svh] px-4 pt-32 pb-12 sm:min-h-[86svh] sm:px-8 sm:pt-36 sm:pb-18 lg:px-12 lg:pt-28"
      aria-labelledby="hero-title"
    >
      {/* Soft signal glow only — fades to transparent so it blends into the
          page background with no visible seam at the section edge. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75rem_38rem_at_82%_-12%,rgba(229,9,20,0.15),transparent_62%)]"
      />

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] items-end gap-8 lg:grid-cols-[minmax(0,1fr)_23rem]">
        <div className="min-w-0 max-w-4xl">
          <p className="mb-4">
            <span className="text-[0.65rem] font-black tracking-[0.34em] text-white/55 uppercase sm:text-xs">
              {copy.label}
            </span>
          </p>
          <h1
            id="hero-title"
            className="max-w-full text-[clamp(2.55rem,11.5vw,7rem)] leading-[0.86] font-black tracking-[-0.075em] text-white"
          >
            {copy.name}
          </h1>
          <p className="mt-4 max-w-full text-[clamp(1.55rem,5vw,3rem)] leading-none font-black tracking-[-0.04em] text-white">
            {copy.role}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-bold sm:text-base">
            <span className="text-[#46d369]">{copy.metadata[0]}</span>
            <span className="text-white/60">{copy.metadata[1]}</span>
            <span className="text-white/60">{copy.metadata[2]}</span>
            <span className="rounded-[2px] border border-white/35 px-1.5 text-[0.65rem] leading-4 font-bold text-white/60">
              {copy.metadata[3]}
            </span>
            <span className="text-xs font-semibold text-white/45 italic">
              the other 2% is where the next version gets better
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <span className="h-7 w-1 rounded-full bg-signal shadow-signal-sm" aria-hidden="true" />
            <span className="text-sm font-bold text-white sm:text-base">
              Trending in Applied AI
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/82 sm:text-lg">
            {copy.description}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62 sm:text-base">
            {copy.secondaryDescription}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="#experience" aria-label="Play - jump to experience">
              <PlayIcon />
              Play
            </a>
            <button className="btn-secondary" type="button" onClick={() => onOpen(profile)}>
              <InfoIcon />
              More Info
            </button>
          </div>
        </div>

        <aside className="min-w-0 rounded-md border border-line bg-panel/92 p-5 text-sm leading-6 shadow-stream">
          <dl className="grid gap-3.5">
            {copy.sidebar.map((item) => (
              <div key={item.label}>
                <dt className="inline font-semibold text-white/45">{item.label}: </dt>
                <dd className="inline font-semibold text-white/85">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
