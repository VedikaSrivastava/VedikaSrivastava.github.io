import { useEffect } from 'react';
import type { ContentItem } from '../types/content.ts';

type ItemDetailModalProps = {
  item: ContentItem | null;
  onClose: () => void;
};

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
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
      <article className="relative max-h-[92dvh] w-full max-w-4xl animate-modal-in overflow-auto rounded-t-md border border-line bg-panel shadow-stream sm:max-h-[88svh] sm:rounded-sm">
        {item.image && (
          <img
            className="max-h-56 w-full object-cover opacity-70 sm:max-h-80"
            src={item.image}
            alt=""
          />
        )}
        <button
          className="absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-black/75 text-3xl leading-none text-white sm:top-4 sm:right-4"
          type="button"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>
        <div className="grid gap-4 p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:p-9 sm:pb-9">
          <p className="text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">
            {item.rating ?? item.period ?? item.tags[0]}
          </p>
          <h2
            className="pr-10 text-2xl leading-none font-black tracking-[-0.045em] sm:pr-0 sm:text-5xl"
            id="modal-title"
          >
            {item.title}
          </h2>
          <div className="grid gap-1">
            <p className="font-extrabold text-muted">{item.subtitle}</p>
            {item.period && <p className="font-extrabold text-muted">{item.period}</p>}
          </div>
          <p className="text-sm leading-7 text-white/82 sm:text-base">{item.summary}</p>
          <div>
            <h3 className="mb-2 text-sm font-black text-white">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  className="rounded-sm border border-line bg-white/5 px-2.5 py-1.5 text-xs font-bold text-white/80"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-black text-white">What I built</h3>
            <ul className="grid gap-2 pl-5 text-sm leading-7 text-white/80 sm:text-base">
              {item.details.map((detail) => (
                <li className="list-disc" key={detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          {item.link && (
            <a className="btn-primary" href={item.link} target="_blank" rel="noreferrer">
              {item.linkLabel ?? 'Open link'}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
