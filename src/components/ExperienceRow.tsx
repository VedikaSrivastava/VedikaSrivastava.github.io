import { useState } from 'react';
import type { ContentItem } from '../types/content.ts';
import { useInView } from '../hooks/useInView.ts';
import SectionHeader from './SectionHeader.tsx';
import ScrollRail from './ScrollRail.tsx';

type ExperienceRowProps = {
  items: ContentItem[];
  onOpen: (item: ContentItem) => void;
};

function ExperienceCardArtwork({ item }: { item: ContentItem }) {
  const [hasImageError, setHasImageError] = useState(false);

  if (item.image && !hasImageError) {
    return (
      <img
        className="col-start-1 row-start-1 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        src={item.image}
        alt={item.imageAlt ?? ''}
        loading="lazy"
        onError={() => setHasImageError(true)}
      />
    );
  }

  return (
    <span className="col-start-1 row-start-1 grid h-full place-items-center bg-[radial-gradient(circle_at_18%_22%,rgba(229,9,20,0.32),transparent_9rem),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.12),transparent_7rem),linear-gradient(135deg,#242424,#080808)]">
      <svg
        className="h-14 w-14 text-white/18 sm:h-16 sm:w-16"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 40C23 18 39 18 50 33"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M18 48C27 29 39 29 46 42"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="45" cy="19" r="5" fill="currentColor" />
      </svg>
    </span>
  );
}

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
            <span className="row-card-surface relative z-10 grid aspect-[5/6] min-w-0 overflow-hidden">
              <ExperienceCardArtwork item={item} />
              <span className="relative col-start-1 row-start-1 bg-linear-to-b from-black/10 from-10% via-black/40 via-48% to-black/96" />
              <span className="relative col-start-1 row-start-1 flex min-w-0 flex-col justify-end p-4">
                <span className="flex h-7 max-w-full items-center self-start truncate rounded-sm bg-signal px-2 text-[0.56rem] font-black tracking-wider text-white uppercase sm:text-[0.6rem]">
                  {item.period}
                </span>
                <span className="mt-3 min-h-[3.6rem] text-sm leading-tight font-black text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-base">
                  <span className="line-clamp-2">{item.title}</span>
                </span>
                <span className="mt-1 min-h-[3.7rem] text-xs leading-4 font-semibold text-white/78">
                  <span className="line-clamp-2 block">{item.subtitle}</span>
                  {item.location && (
                    <span className="mt-1 block line-clamp-1">{item.location}</span>
                  )}
                </span>
                <span className="mt-3 text-xs leading-5 text-white/72">
                  <span className="line-clamp-4">{item.summary}</span>
                </span>
              </span>
            </span>
          </button>
        ))}
      </ScrollRail>
    </section>
  );
}
