import { contactLinks } from '../content/contact-links.ts';
import type { ContactPlatform } from '../types/content.ts';
import { useInView } from '../hooks/useInView.ts';

function ContactIcon({ platform }: { platform: ContactPlatform }) {
  const className = 'h-4 w-4 shrink-0';

  switch (platform) {
    case 'email':
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m4.5 8 7.1 5.1a1 1 0 0 0 1.2 0L20 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
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
          <path d="M4.5 7.2c3.1-.1 5.5-.5 7.2-1.2 1.7-.7 2.8-1.7 3.3-3 .5 1.3 1.6 2.3 3.3 3 .7.3 1.5.5 2.4.7V16c-1.6.4-3.2.6-4.8.6-1.6 0-3.2-.2-4.8-.6V7.2Zm0 9.1c1.5.4 3.1.6 4.8.6 1.7 0 3.3-.2 4.8-.6v1.6c-1.5.4-3.1.6-4.8.6-1.7 0-3.3-.2-4.8-.6v-1.6Z" />
        </svg>
      );
  }
}

export default function SiteFooter() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <footer
      ref={ref}
      id="contact"
      className={`border-t border-line/60 px-4 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] pt-10 transition-all duration-700 ease-out sm:px-8 lg:px-12 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-5 max-w-4xl">
        <p className="mb-2 text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">
          Contact
        </p>
        <h2 className="text-2xl leading-none font-black tracking-[-0.04em] sm:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
          Open to senior applied AI roles, research collaborations, and problems worth losing sleep
          over.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
        {contactLinks.map((link) => (
          <a
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-line bg-white/8 px-3 py-3 text-xs font-bold text-white/85 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:justify-start sm:gap-2.5 sm:px-4 sm:text-sm"
            key={link.href}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <ContactIcon platform={link.platform} />
            <span className="truncate sm:hidden">{link.shortLabel ?? link.label}</span>
            <span className="hidden truncate sm:inline">{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
