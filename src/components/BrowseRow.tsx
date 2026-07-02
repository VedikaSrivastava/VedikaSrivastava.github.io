import type { BrowseRowVariant, ContentItem } from '../types/content.ts';
import { useInView } from '../hooks/useInView.ts';

type BrowseRowProps = {
  sectionId: string;
  eyebrow: string;
  title: string;
  items: ContentItem[];
  onOpen: (item: ContentItem) => void;
  subtitle?: string;
  variant?: BrowseRowVariant;
  ranked?: boolean;
};

export default function BrowseRow({
  sectionId,
  eyebrow,
  title,
  subtitle,
  items,
  onOpen,
  variant = 'standard',
  ranked = false,
}: BrowseRowProps) {
  const { ref, isVisible } = useInView<HTMLElement>();
  const isEducationRow = sectionId === 'education';

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`px-4 pb-12 transition-all duration-700 ease-out sm:px-8 lg:px-12 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="mb-3 max-w-4xl">
        <p className="mb-2 text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">
          {eyebrow}
        </p>
        <h2
          className="text-2xl leading-none font-black tracking-[-0.04em] sm:text-3xl"
          id={`${sectionId}-title`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">{subtitle}</p>
        )}
      </div>
      <div
        className={`rail-scroll -mx-4 grid grid-flow-col gap-3 overflow-x-auto px-4 pt-3 pb-8 overscroll-x-contain snap-x snap-mandatory sm:-mx-8 sm:px-8 sm:snap-none lg:-mx-12 lg:px-12 ${
          variant === 'wide' ? 'auto-cols-[clamp(17rem,34vw,24rem)]' : ''
        } ${variant === 'standard' ? 'auto-cols-[clamp(15rem,28vw,19rem)]' : ''} ${
          variant === 'compact' ? 'auto-cols-[clamp(14rem,24vw,17rem)]' : ''
        } ${ranked ? 'auto-cols-[clamp(17rem,32vw,22rem)]' : ''}`}
        role="list"
      >
        {items.map((item, index) => (
          <button
            className={`group relative grid origin-center snap-start overflow-hidden rounded-sm border border-line bg-card text-left shadow-stream transition duration-200 hover:z-10 hover:scale-[1.02] hover:border-white/40 hover:bg-card-hover hover:shadow-stream-lg focus-visible:z-10 focus-visible:scale-[1.02] focus-visible:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
              variant === 'wide' ? 'aspect-[5/6]' : ''
            } ${variant === 'standard' ? 'aspect-[5/6]' : ''} ${
              variant === 'compact' ? 'aspect-[4/5]' : ''
            } ${ranked ? 'aspect-[5/6] bg-transparent shadow-none' : ''}`}
            key={item.id}
            type="button"
            onClick={() => onOpen(item)}
            role="listitem"
          >
            {ranked && (
              <span className="pointer-events-none absolute bottom-2 left-[-0.55rem] z-20 text-7xl leading-none font-black tracking-[-0.12em] text-black opacity-80 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.48)] sm:left-[-0.7rem] sm:text-8xl">
                {index + 1}
              </span>
            )}
            <span className="relative z-10 grid h-full min-w-0 overflow-hidden rounded-sm">
              {item.image ? (
                <img
                  className={`col-start-1 row-start-1 h-full w-full ${
                    isEducationRow ? 'object-contain p-10' : 'object-cover'
                  }`}
                  src={item.image}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <span className="col-start-1 row-start-1 grid h-full place-items-center bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.38),transparent_12rem),linear-gradient(135deg,#272727,#090909)] text-6xl font-black tracking-[-0.12em] text-white/16">
                  {item.title.slice(0, 2)}
                </span>
              )}
              <span
                className={`col-start-1 row-start-1 ${
                  isEducationRow
                    ? 'bg-[linear-gradient(180deg,rgba(24,24,24,0.9),rgba(12,12,12,0.5)_48%,rgba(0,0,0,0.95)_100%)]'
                    : 'bg-linear-to-b from-black/0 from-20% via-black/35 via-50% to-black/95'
                }`}
              />
              <span className="col-start-1 row-start-1 flex min-w-0 flex-col justify-end p-3">
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
      </div>
    </section>
  );
}
