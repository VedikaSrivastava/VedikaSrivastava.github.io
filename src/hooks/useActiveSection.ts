import { useEffect, useState } from 'react';

const PAGE_BOTTOM_THRESHOLD = 48;
// How far down the visible area (below the header) the "reading line" sits.
// A section becomes active once its top crosses this line, so the chip
// switches while the section is filling the screen — not only when its top
// has already scrolled all the way up to the header.
const READING_LINE_RATIO = 0.35;

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

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      setActiveSection(resolveActiveSection(sectionIds));
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [sectionIds]);

  return activeSection;
}
