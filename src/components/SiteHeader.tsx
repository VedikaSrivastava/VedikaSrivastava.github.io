import { useEffect, useState } from 'react';
import { primaryNavigation } from '../content/navigation.ts';

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('hashchange', closeMenu);
    return () => window.removeEventListener('hashchange', closeMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-20 w-full pt-[env(safe-area-inset-top,0px)] transition-all duration-200 ease-out ${
        isScrolled || isMenuOpen
          ? 'border-b border-line bg-void/95 backdrop-blur-xl'
          : 'bg-linear-to-b from-black/90 to-transparent'
      }`}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:gap-5 sm:px-8 lg:px-12">
        <a
          className="inline-flex min-w-0 items-center gap-3 font-black tracking-[-0.04em]"
          href="#top"
          aria-label="Vedika Srivastava home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-signal text-xs shadow-[0_0_28px_rgba(229,9,20,0.45)]">
            VS
          </span>
          <span className="hidden truncate text-xl text-signal-hot uppercase sm:inline lg:text-2xl">
            Vedika
          </span>
        </a>

        <nav
          className="hidden items-center justify-center gap-5 text-sm font-semibold text-white/80 md:flex lg:gap-6"
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => (
            <a
              className="transition hover:-translate-y-px hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            className="inline-flex size-11 items-center justify-center rounded-sm border border-line bg-white/8 text-white transition hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-current transition-transform duration-200 ${
                  isMenuOpen ? 'top-[0.42rem] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute top-[0.42rem] left-0 h-0.5 w-4 bg-current transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-current transition-transform duration-200 ${
                  isMenuOpen ? 'top-[0.42rem] -rotate-45' : 'top-[0.84rem]'
                }`}
              />
            </span>
          </button>

          <a
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-3 text-xs font-black text-void transition hover:-translate-y-px hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-4 sm:text-sm"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Get in touch</span>
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-line px-4 py-3 md:hidden"
          id="mobile-nav"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <a
                  className="flex min-h-11 items-center rounded-sm px-3 text-base font-semibold text-white/85 transition hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
