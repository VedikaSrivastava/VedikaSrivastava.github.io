import { useEffect, useState } from 'react';
import type { ContentItem } from '../types/content.ts';

type ItemDetailModalProps = {
  item: ContentItem | null;
  onClose: () => void;
};

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    if (!item) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('overflow-hidden');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const isAbout = item.id === 'hero-profile';
  const canShowImage = item.image && !hasImageError;

  return (
    <div
      className="fixed inset-0 z-50 grid items-end sm:place-items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        type="button"
        aria-label="Close details"
        onClick={onClose}
      />
      <article className="relative max-h-[92dvh] w-full max-w-4xl animate-modal-in overflow-auto rounded-t-md bg-panel shadow-stream sm:max-h-[88svh] sm:rounded-md">
        {/* Billboard header: cover images fade into the panel with the title on
            top; logo images sit as a contained chip on a dark gradient. */}
        {canShowImage && item.imageStyle !== 'logo' ? (
          <div className="relative">
            <img
              className="max-h-64 w-full object-cover sm:max-h-96"
              src={item.image}
              alt={item.imageAlt ?? ''}
              onError={() => setHasImageError(true)}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-panel from-4% via-panel/45 via-38% to-transparent"
            />
            <div className="absolute right-5 bottom-0 left-5 pb-1 sm:right-9 sm:left-9">
              <p className="mb-2 text-[0.65rem] font-black tracking-[0.3em] text-signal-hot uppercase">
                {item.rating ?? item.period ?? item.tags[0]}
              </p>
              <h2
                className="max-w-2xl pr-10 text-2xl leading-[0.95] font-black tracking-[-0.045em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] sm:pr-0 sm:text-4xl lg:text-5xl"
                id="modal-title"
              >
                {item.title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="bg-[radial-gradient(ellipse_42rem_18rem_at_16%_-30%,rgba(229,9,20,0.28),transparent_70%),linear-gradient(180deg,#191919_0%,var(--color-panel)_100%)] px-5 pt-14 pb-1 sm:px-9 sm:pt-16">
            {canShowImage && (
              <span className="mb-4 inline-flex items-center rounded-sm bg-[#f5f5f1] px-4 py-2.5">
                <img
                  className="h-10 w-36 object-contain sm:h-12 sm:w-44"
                  src={item.image}
                  alt={item.imageAlt ?? ''}
                  onError={() => setHasImageError(true)}
                />
              </span>
            )}
            <p className="mb-2 text-[0.65rem] font-black tracking-[0.3em] text-signal-hot uppercase">
              {item.rating ?? item.period ?? item.tags[0]}
            </p>
            <h2
              className="max-w-2xl pr-10 text-2xl leading-[0.95] font-black tracking-[-0.045em] text-white sm:pr-0 sm:text-4xl lg:text-5xl"
              id="modal-title"
            >
              {item.title}
            </h2>
          </div>
        )}

        <button
          className="interactive absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-black/70 text-2xl leading-none text-white/80 hover:text-white sm:top-4 sm:right-4"
          type="button"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        <div className="p-5 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:p-9 sm:pt-5">
          {isAbout ? (
            <div className="grid gap-5">
              <p className="text-base leading-7 font-semibold text-white/90 sm:text-lg">
                {item.summary}
              </p>
              {item.details.map((detail) => (
                <p className="text-sm leading-7 text-white/75 sm:text-base" key={detail}>
                  {detail}
                </p>
              ))}
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 border-t border-line pt-5">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-xs font-bold text-white/75"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid gap-7 sm:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)] sm:gap-10">
              {/* Main column: story */}
              <div className="grid content-start gap-5">
                <p className="text-base leading-7 font-semibold text-white/90 sm:text-lg">
                  {item.summary}
                </p>
                {item.sections?.map((section) => (
                  <div key={section.label}>
                    <h3 className="mb-1 text-[0.68rem] font-black tracking-[0.18em] text-white/40 uppercase">
                      {section.label}
                    </h3>
                    <p className="text-sm leading-7 text-white/78 sm:text-[0.95rem]">
                      {section.body}
                    </p>
                  </div>
                ))}
                {!item.sections && item.details.length > 0 && (
                  <div>
                    <h3 className="mb-1.5 text-[0.68rem] font-black tracking-[0.18em] text-white/40 uppercase">
                      What I built
                    </h3>
                    <ul className="grid gap-2 pl-5 text-sm leading-7 text-white/78 sm:text-[0.95rem]">
                      {item.details.map((detail) => (
                        <li className="list-disc" key={detail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Meta column: quick facts + publication link */}
              <aside className="grid content-start gap-3.5 text-sm leading-6">
                <div>
                  <span className="font-semibold text-white/40">{item.subtitle}</span>
                </div>
                {item.link && (
                  <a
                    className="btn-primary w-full justify-center sm:w-auto sm:justify-start"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.linkLabel ?? 'Open link'}
                  </a>
                )}
                {item.period && (
                  <div>
                    <span className="font-semibold text-white/40">Aired: </span>
                    <span className="font-semibold text-white/85">{item.period}</span>
                  </div>
                )}
                {item.location && (
                  <div>
                    <span className="font-semibold text-white/40">Filmed in: </span>
                    <span className="font-semibold text-white/85">{item.location}</span>
                  </div>
                )}
                {item.tags.length > 0 && (
                  <div>
                    <span className="font-semibold text-white/40">Stack: </span>
                    <span className="font-semibold text-white/85">{item.tags.join(', ')}</span>
                  </div>
                )}
              </aside>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
