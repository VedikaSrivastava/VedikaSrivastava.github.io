import { contactLinks } from '../content/contact-links.ts';
import type { ContactPlatform } from '../types/content.ts';
import { useInView } from '../hooks/useInView.ts';
import ScrollRail from './ScrollRail.tsx';

function ContactIcon({ platform }: { platform: ContactPlatform }) {
  const className = 'h-9 w-9 shrink-0 sm:h-10 sm:w-10';

  switch (platform) {
    case 'email':
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m4.5 8 7.1 5.1a1 1 0 0 0 1.2 0L20 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5 9.5v8h3v-8h-3Zm1.5-4.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM10 9.5h2.9v1.1h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6v3.85H16.5v-3.42c0-.81-.01-1.86-1.13-1.86-1.14 0-1.32.89-1.32 1.81v3.47H10V9.5Z" />
        </svg>
      );
    case 'github':
      return (
        <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 3.98 2.47 7.38 5.96 8.74.44.08.6-.19.6-.42 0-.21-.01-.76-.01-1.49-2.4.52-2.9-1.16-2.9-1.16-.39-.99-.96-1.25-.96-1.25-.78-.53.06-.52.06-.52.87.06 1.32.89 1.32.89.77 1.32 2.02.94 2.51.72.08-.56.3-.94.54-1.16-1.92-.22-3.94-.96-3.94-4.28 0-.94.34-1.71.89-2.32-.09-.22-.39-1.12.08-2.34 0 0 .73-.23 2.4.89a8.3 8.3 0 0 1 2.18-.29c.74 0 1.48.1 2.18.29 1.67-1.12 2.4-.89 2.4-.89.47 1.22.17 2.12.08 2.34.55.61.89 1.38.89 2.32 0 3.33-2.03 4.06-3.96 4.28.31.27.59.8.59 1.62 0 1.17-.01 2.11-.01 2.4 0 .23.16.5.61.42A9.01 9.01 0 0 0 21 12c0-4.97-4.03-9-9-9Z" />
        </svg>
      );
    case 'scholar':
      return (
        <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.5 8.5 12 4l6.5 4.5v2.2L12 19 5.5 10.7V8.5Zm6.5 8.3 5.2-6.8H8.8l5.2 6.8Z" />
        </svg>
      );
    case 'medium':
      return (
        <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.285 7.76a.573.573 0 0 0-.568.568v8.092a.573.573 0 0 0 .568.568h.568a.573.573 0 0 0 .568-.568V8.328a.573.573 0 0 0-.568-.568h-.568zm4.26 0a.573.573 0 0 0-.568.568v8.092a.573.573 0 0 0 .568.568h.568a.573.573 0 0 0 .568-.568V8.328a.573.573 0 0 0-.568-.568h-.568zm4.26 0a.573.573 0 0 0-.568.568v8.092a.573.573 0 0 0 .568.568h.568a.573.573 0 0 0 .568-.568V8.328a.573.573 0 0 0-.568-.568h-.568z" />
        </svg>
      );
  }
}

type ContactTileProps = {
  href: string;
  label: string;
  platform: ContactPlatform;
  className?: string;
};

function ContactTile({ href, label, platform, className = '' }: ContactTileProps) {
  return (
    <a
      className={`group flex flex-col gap-2.5 focus-ring ${className}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
    >
      <span className="contact-tile-surface" data-platform={platform}>
        <span className="contact-tile-accent" data-platform={platform}>
          <ContactIcon platform={platform} />
        </span>
      </span>
      <span className="contact-tile-label">{label}</span>
    </a>
  );
}

export default function SiteFooter() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <footer
      ref={ref}
      id="contact"
      className={`section-reveal relative isolate border-t border-line/60 px-4 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] pt-10 sm:px-8 lg:px-12 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 footer-glow" />

      <div className="mb-5 max-w-4xl border-l-2 border-signal/80 pl-4 sm:pl-5">
        <p className="mb-2 text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">
          Contact
        </p>
        <h2 className="text-2xl leading-none font-black tracking-[-0.04em] sm:text-3xl">
          Let&apos;s connect
        </h2>
      </div>

      <div className="hidden grid-cols-5 gap-3 sm:grid sm:gap-4 lg:gap-5">
        {contactLinks.map((link) => (
          <ContactTile
            key={link.href}
            href={link.href}
            label={link.shortLabel ?? link.label}
            platform={link.platform}
          />
        ))}
      </div>

      <ScrollRail
        className="overflow-x-auto overscroll-x-contain pb-1 sm:hidden"
        aria-label="Contact links"
      >
        <div className="flex w-max gap-3">
          {contactLinks.map((link) => (
            <ContactTile
              className="w-[5.5rem]"
              key={link.href}
              href={link.href}
              label={link.shortLabel ?? link.label}
              platform={link.platform}
            />
          ))}
        </div>
      </ScrollRail>
    </footer>
  );
}
