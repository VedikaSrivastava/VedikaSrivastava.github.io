import type { CSSProperties } from 'react';
import type { BrowseRowVariant, ContentItem } from '../types/content.ts';
import { useInView } from '../hooks/useInView.ts';
import SectionHeader from './SectionHeader.tsx';
import ScrollRail from './ScrollRail.tsx';

const variantStyles: Record<BrowseRowVariant, { cols: string; aspect: string }> = {
  standard: {
    cols: 'auto-cols-[clamp(15rem,28vw,19rem)]',
    aspect: 'aspect-[5/6]',
  },
  wide: {
    cols: 'auto-cols-[clamp(17rem,34vw,24rem)]',
    aspect: 'aspect-[5/6]',
  },
  compact: {
    cols: 'auto-cols-[clamp(14rem,24vw,17rem)]',
    aspect: 'aspect-[4/5]',
  },
};

type BrowseRowProps = {
  sectionId: string;
  eyebrow: string;
  title: string;
  items: ContentItem[];
  onOpen: (item: ContentItem) => void;
  subtitle?: string;
  variant?: BrowseRowVariant;
};

export default function BrowseRow({
  sectionId,
  eyebrow,
  title,
  subtitle,
  items,
  onOpen,
  variant = 'standard',
}: BrowseRowProps) {
  const { ref, isVisible } = useInView<HTMLElement>();
  const isEducationRow = sectionId === 'education';
  const isLogoTile = sectionId === 'research';
  const { cols, aspect } = variantStyles[variant];

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`section-reveal px-4 pb-12 sm:px-8 lg:px-12 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      aria-labelledby={`${sectionId}-title`}
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        titleId={`${sectionId}-title`}
        subtitle={subtitle}
      />
      <ScrollRail
        className={`grid grid-flow-col gap-3 overflow-x-auto overscroll-x-contain px-1 pt-4 pb-9 snap-x snap-mandatory sm:px-1.5 sm:snap-none ${cols}`}
        role="list"
      >
        {items.map((item) => (
          <button
            className={`group row-card-trigger grid origin-center ${aspect}`}
            key={item.id}
            type="button"
            onClick={() => onOpen(item)}
            role="listitem"
          >
            <span className="row-card-surface relative z-10 grid h-full min-w-0 overflow-hidden">
              {item.image ? (
                <img
                  className={`col-start-1 row-start-1 h-full w-full ${
                    isEducationRow
                      ? 'logo-tile-art object-contain px-14 pt-8 pb-32 drop-shadow-[0_18px_28px_rgba(0,0,0,0.65)] transition-transform duration-300 ease-out group-hover:scale-[1.06]'
                      : isLogoTile
                        ? 'bg-[#f5f5f1] object-contain px-7 pt-6 pb-28'
                        : 'object-cover'
                  }`}
                  style={
                    isEducationRow && item.accent
                      ? ({ '--tile-accent': item.accent } as CSSProperties)
                      : undefined
                  }
                  src={item.image}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <span className="col-start-1 row-start-1 grid h-full place-items-center bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.38),transparent_12rem),linear-gradient(135deg,#272727,#090909)] text-6xl font-black tracking-[-0.12em] text-white/16">
                  {item.title.slice(0, 2)}
                </span>
              )}
              {/* `relative` keeps these above the image: its drop-shadow filter
                  creates a stacking context that otherwise paints over
                  non-positioned siblings. */}
              <span
                className={`relative col-start-1 row-start-1 ${
                  isEducationRow || isLogoTile
                    ? 'bg-linear-to-b from-black/0 from-45% to-black/96'
                    : 'bg-linear-to-b from-black/0 from-20% via-black/35 via-50% to-black/95'
                }`}
              />
              <span className="relative col-start-1 row-start-1 flex min-w-0 flex-col justify-end p-3">
                <span className="flex h-6 max-w-full items-center self-start truncate rounded-sm bg-signal px-2 text-[0.58rem] font-black tracking-wider text-white uppercase sm:text-[0.62rem]">
                  {item.rating ?? item.tags[0]}
                </span>
                <strong className="mt-2 min-h-[2.9rem] text-sm leading-tight text-white sm:text-base">
                  <span className="line-clamp-2">{item.title}</span>
                </strong>
                <span className="mt-1 min-h-[2rem] text-xs leading-4 text-white/70">
                  <span className="line-clamp-2">{item.summary}</span>
                </span>
              </span>
            </span>
          </button>
        ))}
      </ScrollRail>
    </section>
  );
}
