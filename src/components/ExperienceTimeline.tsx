import type { PortfolioItem } from '../data/portfolio.ts';
import { useInView } from '../hooks/useInView.ts';

type ExperienceTimelineProps = {
  items: PortfolioItem[];
  onOpen: (item: PortfolioItem) => void;
};

export default function ExperienceTimeline({ items, onOpen }: ExperienceTimelineProps) {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      className={`px-4 pb-12 transition-all duration-700 ease-out sm:px-8 lg:px-12 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      aria-labelledby="experience-title"
    >
      <div className="mb-3 max-w-4xl">
        <p className="mb-2 text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">Experience</p>
        <h2 className="text-2xl leading-none font-black tracking-[-0.04em] sm:text-3xl" id="experience-title">
          Experience
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
          Production AI systems, healthcare AI research, and engineering work across product, platform, and ML.
        </p>
      </div>
      <div className="rail-scroll -mx-4 grid auto-cols-[clamp(17rem,34vw,22rem)] grid-flow-col gap-4 overflow-x-auto px-4 pt-3 pb-8 overscroll-x-contain sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        {items.map((item, index) => (
          <button
            className="group relative block text-left transition hover:z-10 hover:scale-[1.02] focus-visible:z-10 focus-visible:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            key={item.id}
            type="button"
            onClick={() => onOpen(item)}
          >
            <span className="pointer-events-none absolute bottom-2 left-[-0.55rem] z-0 text-7xl leading-none font-black tracking-[-0.12em] text-black opacity-80 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.48)] sm:left-[-0.7rem] sm:text-8xl">
              {index + 1}
            </span>
            <span className="relative z-10 flex aspect-[5/6] min-w-0 flex-col overflow-hidden rounded-sm border border-line bg-card p-4 shadow-stream transition group-hover:border-white/35 group-hover:bg-card-hover">
              <span className="flex h-7 max-w-full items-center self-start truncate rounded-sm bg-signal px-2 text-[0.56rem] font-black tracking-wider text-white uppercase sm:text-[0.6rem]">
                {item.period}
              </span>
              <span className="mt-3 min-h-[3.6rem] text-sm leading-tight font-black text-white sm:text-base">
                <span className="line-clamp-2">{item.title}</span>
              </span>
              <span className="mt-1 min-h-[2.6rem] text-xs leading-4 font-semibold text-muted">
                <span className="line-clamp-2">{item.subtitle}</span>
              </span>
              <span className="mt-3 text-xs leading-5 text-white/70">
                <span className="line-clamp-4">{item.summary}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
