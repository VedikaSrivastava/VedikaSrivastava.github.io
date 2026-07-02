import { useEffect, useRef, useState } from 'react';
import { observedSectionIds, siteNavigation } from '../content/navigation.ts';
import { useActiveSection } from '../hooks/useActiveSection.ts';
import { useNavIndicator } from '../hooks/useNavIndicator.ts';

function SectionNav({ activeSection }: { activeSection: string | null }) {
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  useNavIndicator(activeSection, navRef, indicatorRef, linkRefs);

  return (
    <nav
      ref={navRef}
      className="header-nav-scroll relative flex w-full min-w-0 items-center overflow-x-auto overscroll-x-contain lg:overflow-visible"
      aria-label="Section navigation"
    >
      <span ref={indicatorRef} aria-hidden="true" className="nav-indicator" />

      <div className="relative z-10 flex w-max gap-1 lg:w-auto lg:pe-0 pe-4">
        {siteNavigation.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              ref={(element) => {
                if (element) {
                  linkRefs.current.set(item.id, element);
                } else {
                  linkRefs.current.delete(item.id);
                }
              }}
              className={`interactive focus-ring-nav shrink-0 rounded-full px-3 py-2 text-xs font-bold tracking-wide sm:px-3.5 sm:text-sm ${
                isActive ? 'text-white' : 'text-white/55 hover:text-white/90'
              }`}
              href={item.href}
              key={item.id}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(observedSectionIds);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-20 w-full pt-[env(safe-area-inset-top,0px)] ${
        isScrolled ? 'bg-void/96' : 'bg-linear-to-b from-void/95 via-void/70 to-transparent'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3 sm:gap-5 sm:px-8 lg:gap-8 lg:px-12">
        <a
          className="group interactive inline-flex shrink-0 items-center gap-3.5 hover:-translate-y-px sm:gap-4"
          href="#top"
          aria-label="Vedika Srivastava home"
        >
          <span className="logo-mark">
            <span className="text-sm font-black tracking-[-0.06em] text-white sm:text-base">
              VS
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-[0.2rem] ring-1 ring-white/25 ring-inset" />
          </span>
          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="text-[1.35rem] font-black tracking-[0.06em] text-signal-hot uppercase lg:text-[1.55rem]">
              Vedika
            </span>
            <span className="mt-1.5 text-[0.62rem] font-bold tracking-[0.28em] text-white/42 uppercase lg:text-[0.68rem]">
              Srivastava
            </span>
          </span>
        </a>

        <span aria-hidden="true" className="hidden h-9 w-px shrink-0 bg-line/80 lg:block" />

        <div className="min-w-0 flex-1">
          <SectionNav activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}
