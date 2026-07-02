import type { ContentItem } from '../types/content.ts';

type HeroSectionProps = {
  item?: ContentItem;
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

export default function HeroSection({ item, onOpen }: HeroSectionProps) {
  if (!item) {
    return null;
  }

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

      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_23rem]">
        <div className="max-w-4xl">
          <p className="mb-4 flex items-center gap-2.5">
            <span className="text-2xl leading-none font-black tracking-[-0.08em] text-signal-hot">
              VS
            </span>
            <span className="text-[0.65rem] font-black tracking-[0.34em] text-white/55 uppercase sm:text-xs">
              An Original Series
            </span>
          </p>
          <h1
            id="hero-title"
            className="text-[clamp(3rem,12vw,7rem)] leading-[0.86] font-black tracking-[-0.075em] text-white"
          >
            Vedika Srivastava
          </h1>
          <p className="mt-4 text-[clamp(1.75rem,5vw,3rem)] leading-none font-black tracking-[-0.04em] text-white">
            Senior Applied AI Engineer
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-bold sm:text-base">
            <span className="text-[#46d369]">98% Match</span>
            <span className="text-white/60">2020–2026</span>
            <span className="text-white/60">8 Seasons</span>
            <span className="rounded-[2px] border border-white/35 px-1.5 text-[0.65rem] leading-4 font-bold text-white/60">
              HD
            </span>
            <span className="text-xs font-semibold text-white/35 italic">
              the missing 2% is me asking if it could&apos;ve shipped faster
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[3px] bg-signal text-center text-[0.5rem] leading-[1.05] font-black tracking-wide text-white uppercase shadow-signal-sm">
              Top
              <br />
              10
            </span>
            <span className="text-sm font-bold text-white sm:text-base">
              #1 in AI That Actually Ships Today
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/82 sm:text-lg">
            I build AI that actually ships—not slide-deck demos. Lately that means LangGraph agents,
            RAG pipelines, and the unglamorous work that keeps them running: evals, observability,
            integrations, and the frontend/backend glue in between.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62 sm:text-base">
            Research background in healthcare AI and computer vision. Product instincts from
            founding-team engineering. Still the person who will debug a broken Meta API webhook at
            midnight and sketch ideas on paper the next morning.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="#experience" aria-label="Play — jump to experience">
              <PlayIcon />
              Play
            </a>
            <button className="btn-secondary" type="button" onClick={() => onOpen(item)}>
              <InfoIcon />
              More Info
            </button>
          </div>
        </div>

        <aside className="rounded-md border border-line bg-panel/75 p-5 text-sm leading-6 shadow-stream backdrop-blur-xl">
          <dl className="grid gap-3.5">
            <div>
              <dt className="inline font-semibold text-white/45">Starring: </dt>
              <dd className="inline font-semibold text-white/85">
                LangGraph agents, RAG pipelines, evals that actually run, PyTorch, TypeScript
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold text-white/45">Genres: </dt>
              <dd className="inline font-semibold text-white/85">
                Production LLM Systems, Agentic Workflows, Multi-Tenant SaaS, Healthcare AI
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold text-white/45">Created by: </dt>
              <dd className="inline font-semibold text-white/85">
                a CS degree, a BU master&apos;s, and an unreasonable number of midnight debugging
                sessions
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold text-white/45">This engineer is: </dt>
              <dd className="inline font-semibold text-white/85">
                intense, chaotic-honest, allergic to &ldquo;good enough&rdquo;
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
