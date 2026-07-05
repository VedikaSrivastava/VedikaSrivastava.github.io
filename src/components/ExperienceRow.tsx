import type { ContentItem } from '../types/content.ts';
import { useInView } from '../hooks/useInView.ts';
import SectionHeader from './SectionHeader.tsx';
import ScrollRail from './ScrollRail.tsx';

type ExperienceRowProps = {
  items: ContentItem[];
  onOpen: (item: ContentItem) => void;
};

export default function ExperienceRow({ items, onOpen }: ExperienceRowProps) {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      className={`section-reveal px-4 pb-12 sm:px-8 lg:px-12 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      aria-labelledby="experience-title"
    >
      <SectionHeader
        eyebrow="Experience"
        title="Experience"
        titleId="experience-title"
        subtitle="From healthcare AI research at Boston University / Boston Medical Center to founding-team applied AI engineering at Extuitive / Flagship Pioneering—the through-line is taking messy real-world problems and making them work in production."
      />
      <ScrollRail className="grid auto-cols-[clamp(17rem,34vw,22rem)] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain ps-3 pe-1 pt-4 pb-9 snap-x snap-mandatory sm:pe-1.5 sm:snap-none">
        {items.map((item, index) => (
          <button
            className="group row-card-trigger block"
            key={item.id}
            type="button"
            onClick={() => onOpen(item)}
          >
            <span className="rank-index">{index + 1}</span>
            <span className="row-card-surface relative z-10 flex aspect-[5/6] min-w-0 flex-col p-4">
              <span className="flex h-7 max-w-full items-center self-start truncate rounded-sm bg-signal px-2 text-[0.56rem] font-black tracking-wider text-white uppercase sm:text-[0.6rem]">
                {item.period}
              </span>
              <span className="mt-3 min-h-[3.6rem] text-sm leading-tight font-black text-white sm:text-base">
                <span className="line-clamp-2">{item.title}</span>
              </span>
              <span className="mt-1 min-h-[3.7rem] text-xs leading-4 font-semibold text-muted">
                <span className="line-clamp-2 block">{item.subtitle}</span>
                {item.location && <span className="mt-1 block line-clamp-1">{item.location}</span>}
              </span>
              <span className="mt-3 text-xs leading-5 text-white/70">
                <span className="line-clamp-4">{item.summary}</span>
              </span>
            </span>
          </button>
        ))}
      </ScrollRail>
    </section>
  );
}
