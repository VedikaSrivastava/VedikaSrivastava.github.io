import { contactLinks } from '../data/portfolio.ts';

export default function SiteFooter() {
  return (
    <footer id="contact" className="px-4 pb-10 sm:px-8 lg:px-12">
      <div className="rounded-sm border border-line bg-panel px-5 py-8 sm:px-8">
        <p className="mb-2 text-[0.68rem] font-black tracking-[0.18em] text-signal-hot uppercase">Contact</p>
        <h2 className="text-2xl leading-none font-black tracking-[-0.04em] text-white sm:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
          Applied AI, LLM systems, agentic workflows, ML engineering, healthcare AI, and
          full-stack AI product work.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {contactLinks.map((link) => (
            <a
              className="rounded-sm border border-line bg-card px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:bg-card-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
