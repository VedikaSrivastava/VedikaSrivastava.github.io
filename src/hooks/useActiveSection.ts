import { useEffect, useState } from 'react';

const PAGE_BOTTOM_THRESHOLD = 48;
const READING_LINE_RATIO = 0.35;
const HEADER_SCROLL_THRESHOLD = 24;

function getScrollAnchor(): number {
  const header = document.querySelector('header');
  const headerBottom = header ? header.getBoundingClientRect().bottom : 72;
  return headerBottom + (window.innerHeight - headerBottom) * READING_LINE_RATIO;
}

function resolveActiveSection(sectionIds: string[]): string | null {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((element): element is HTMLElement => element !== null);

  if (sections.length === 0) {
    return null;
  }

  const nearPageBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - PAGE_BOTTOM_THRESHOLD;

  if (nearPageBottom) {
    const lastSection = sections.at(-1);
    return lastSection?.id === 'top' ? null : (lastSection?.id ?? null);
  }

  const anchor = getScrollAnchor();

  for (const section of sections) {
    const { top, bottom } = section.getBoundingClientRect();

    if (top <= anchor && bottom > anchor) {
      return section.id === 'top' ? null : section.id;
    }
  }

  let activeSection: string | null = null;
  let closestDistance = Infinity;

  for (const section of sections) {
    const { top } = section.getBoundingClientRect();

    if (top <= anchor) {
      const distance = anchor - top;

      if (distance < closestDistance) {
        closestDistance = distance;
        activeSection = section.id === 'top' ? null : section.id;
      }
    }
  }

  return activeSection;
}

function syncHeaderScrolled(scrollY: number) {
  const scrolled = scrollY > HEADER_SCROLL_THRESHOLD;
  const root = document.documentElement;
  const current = root.dataset.headerScrolled === 'true';

  if (current !== scrolled) {
    root.dataset.headerScrolled = scrolled ? 'true' : 'false';
  }
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let frameId = 0;
    let lastActiveSection: string | null | undefined;

    const updateFromScroll = () => {
      const nextActiveSection = resolveActiveSection(sectionIds);
      syncHeaderScrolled(window.scrollY);

      if (nextActiveSection !== lastActiveSection) {
        lastActiveSection = nextActiveSection;
        setActiveSection(nextActiveSection);
      }
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      delete document.documentElement.dataset.headerScrolled;
    };
  }, [sectionIds]);

  return activeSection;
}
