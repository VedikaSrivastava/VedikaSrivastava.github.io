import { useState } from 'react';
import type { ContentItem } from '../types/content.ts';
import ContentImg from './ContentImg.tsx';
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
      <ContentImg
        className="col-start-1 row-start-1 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        image={item.image}
        alt={item.imageAlt ?? ''}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1280px) 22vw, (min-width: 768px) 31vw, 85vw"
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
  return (
    <section
      id="experience"
      className="px-4 pb-12 sm:px-8 lg:px-12"
      aria-labelledby="experience-title"
    >
      <SectionHeader
        eyebrow="Experience"
        title="Experience"
        titleId="experience-title"
        subtitle="From founding-team AI product engineering to clinical ML research, the through-line is taking ambiguous, real-world problems and building systems that work beyond the prototype."
      />
      <ScrollRail
        className="grid auto-cols-[clamp(17rem,34vw,22rem)] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain ps-3 pe-1 pt-4 pb-9 snap-x snap-proximity sm:pe-1.5 sm:snap-none"
        role="list"
      >
        {items.map((item) => (
          <button
            className="group row-card-trigger block"
            key={item.id}
            type="button"
            onClick={() => onOpen(item)}
            role="listitem"
          >
            <span className="row-card-surface relative z-10 grid aspect-[5/6] min-w-0 overflow-hidden">
              <ExperienceCardArtwork item={item} />
              <span className="relative col-start-1 row-start-1 bg-linear-to-b from-black/10 from-10% via-black/40 via-48% to-black/96" />
              <span className="experience-card-copy relative col-start-1 row-start-1 min-w-0 px-3 pt-3 pb-7">
                <span className="flex h-6 max-w-full items-center self-start truncate rounded-sm bg-signal px-2 text-[0.58rem] font-black tracking-wider text-white uppercase sm:text-[0.62rem]">
                  {item.period}
                </span>
                <span className="mt-2 min-h-[2.9rem] text-sm leading-tight font-black text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-base">
                  <span className="line-clamp-2">{item.title}</span>
                </span>
                <span className="mt-1 min-h-[3rem] text-xs leading-4 font-semibold text-white/78">
                  <span className="line-clamp-2 block">{item.subtitle}</span>
                  {item.location && (
                    <span className="mt-1 block line-clamp-1">{item.location}</span>
                  )}
                </span>
                <span className="mt-1 min-h-[4rem] text-xs leading-4 text-white/72">
                  <span className="line-clamp-3">{item.summary}</span>
                </span>
              </span>
            </span>
          </button>
        ))}
      </ScrollRail>
    </section>
  );
}
