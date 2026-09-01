import type { CSSProperties } from 'react';
import type { BrowseRowVariant, ContentItem } from '../types/content.ts';
import ContentImg from './ContentImg.tsx';
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
  badges?: string[];
  action?: { label: string; href: string };
};

export default function BrowseRow({
  sectionId,
  eyebrow,
  title,
  subtitle,
  items,
  onOpen,
  variant = 'standard',
  badges,
  action,
}: BrowseRowProps) {
  const isEducationRow = sectionId === 'education';
  const isLogoTile = sectionId === 'research';
  const { cols, aspect } = variantStyles[variant];

  return (
    <section
      id={sectionId}
      className="px-4 pb-12 sm:px-8 lg:px-12"
      aria-labelledby={`${sectionId}-title`}
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        titleId={`${sectionId}-title`}
        subtitle={subtitle}
      />
      {(badges?.length || action) && (
        <div className="research-meta mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
          {badges?.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
          {action && (
            <a
              className="research-link focus-ring"
              href={action.href}
              target="_blank"
              rel="noreferrer"
            >
              {action.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
      <ScrollRail
        className={`grid grid-flow-col gap-3 overflow-x-auto overscroll-x-contain px-1 pt-4 pb-9 snap-x snap-proximity sm:px-1.5 sm:snap-none ${cols}`}
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
                <ContentImg
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
                  image={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 31vw, 85vw"
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
              <span className="browse-card-copy relative col-start-1 row-start-1 min-w-0 px-3 pt-3 pb-7">
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
