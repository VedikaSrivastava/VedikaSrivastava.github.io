import type { ContentItem } from '../types/content.ts';

type HeroSectionProps = {
  item?: ContentItem;
  onOpen: (item: ContentItem) => void;
};

export default function HeroSection({ item, onOpen }: HeroSectionProps) {
  if (!item) {
    return null;
  }

  return (
    <section
      id="top"
      className="relative isolate min-h-[82svh] px-4 pt-28 pb-12 sm:min-h-[86svh] sm:px-8 sm:pt-32 sm:pb-18 lg:px-12"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-20 animate-hero-drift bg-[radial-gradient(circle_at_72%_24%,rgba(229,9,20,0.18),transparent_22rem),linear-gradient(115deg,#050505_0%,#0c0c0c_42%,#172017_74%,#050505_100%)] opacity-100" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.78)_38%,rgba(0,0,0,0.22)_72%),linear-gradient(0deg,#050505,transparent_30%)]" />
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-black tracking-[0.18em] text-signal-hot uppercase">
            Production AI Systems
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
          <p className="mt-3 text-sm leading-6 font-bold text-muted sm:text-base md:text-xl">
            Production LLM Systems · Agentic Workflows · Multi-Tenant SaaS
          </p>
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
            <a
              className="inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-black text-void transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              href="#work"
            >
              View work
            </a>
            <button
              className="inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              type="button"
              onClick={() => onOpen(item)}
            >
              More info
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Core tags">
            {[
              'LLM Systems',
              'Agentic AI',
              'RAG',
              'ML Platforms',
              'Multi-Tenant SaaS',
              'Full-Stack AI',
              'Healthcare AI',
            ].map((highlight) => (
              <span
                className="rounded-sm border border-line bg-white/8 px-2.5 py-1.5 text-xs font-bold text-white/75"
                key={highlight}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        <aside className="rounded-md border border-line bg-panel/75 p-5 shadow-stream backdrop-blur-xl">
          <p className="mb-3 text-xs font-black tracking-[0.16em] text-signal-hot uppercase">
            Core areas
          </p>
          <ul className="grid gap-3 text-sm font-semibold text-white/82">
            {[
              'Production LLM systems',
              'Agentic AI workflows',
              'Multi-tenant SaaS platforms',
              'Healthcare AI research',
              'Full-stack AI products',
            ].map((area) => (
              <li className="border-b border-line pb-3 last:border-b-0 last:pb-0" key={area}>
                {area}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
