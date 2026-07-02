import { useEffect } from 'react';
import type { PortfolioItem } from '../data/portfolio.ts';

type DetailModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function DetailModal({ item, onClose }: DetailModalProps) {
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
    <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="absolute inset-0 bg-black/80 backdrop-blur-xl" type="button" aria-label="Close details" onClick={onClose} />
      <article className="relative max-h-[88svh] w-full max-w-4xl animate-modal-in overflow-auto rounded-sm border border-line bg-panel shadow-stream">
        {item.image && <img className="max-h-80 w-full object-cover opacity-70" src={item.image} alt="" />}
        <button className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-black/75 text-3xl leading-none text-white" type="button" onClick={onClose} aria-label="Close details">
          ×
        </button>
        <div className="grid gap-4 p-5 sm:p-9">
          <p className="text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">{item.rating ?? item.period ?? item.tags[0]}</p>
          <h2 className="text-3xl leading-none font-black tracking-[-0.045em] sm:text-5xl" id="modal-title">
            {item.title}
          </h2>
          <div className="grid gap-1">
            <p className="font-extrabold text-muted">{item.subtitle}</p>
            {item.period && <p className="font-extrabold text-muted">{item.period}</p>}
          </div>
          <p className="leading-7 text-white/82">{item.summary}</p>
          <div>
            <h3 className="mb-2 text-sm font-black text-white">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span className="rounded-sm border border-line bg-white/5 px-2.5 py-1.5 text-xs font-bold text-white/80" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-black text-white">What I built</h3>
            <ul className="grid gap-2 pl-5 leading-7 text-white/80">
              {item.details.map((detail) => (
                <li className="list-disc" key={detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          {item.link && (
            <a className="inline-flex min-h-11 max-w-full items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-black text-void transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href={item.link} target="_blank" rel="noreferrer">
              {item.linkLabel ?? 'Open link'}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
