import { useCallback, useEffect, useLayoutEffect, type RefObject } from 'react';

function applyIndicator(
  indicator: HTMLSpanElement | null,
  nav: HTMLElement | null,
  link: HTMLAnchorElement | undefined,
) {
  if (!indicator || !nav || !link) {
    if (indicator) {
      indicator.style.opacity = '0';
    }
    return;
  }

  const navRect = nav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  indicator.style.left = `${linkRect.left - navRect.left + nav.scrollLeft}px`;
  indicator.style.width = `${linkRect.width}px`;
  indicator.style.opacity = '1';
}

export function useNavIndicator(
  activeSection: string | null,
  navRef: RefObject<HTMLElement | null>,
  indicatorRef: RefObject<HTMLSpanElement | null>,
  linkRefs: RefObject<Map<string, HTMLAnchorElement>>,
) {
  const updateIndicator = useCallback(() => {
    const link = activeSection ? linkRefs.current?.get(activeSection) : undefined;
    applyIndicator(indicatorRef.current, navRef.current, link);
  }, [activeSection, indicatorRef, linkRefs, navRef]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener('resize', onResize);

    const nav = navRef.current;
    nav?.addEventListener('scroll', onResize, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      nav?.removeEventListener('scroll', onResize);
    };
  }, [navRef, updateIndicator]);

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const nav = navRef.current;
    const link = linkRefs.current?.get(activeSection);

    // Scroll only the nav strip horizontally. scrollIntoView would also
    // consider ancestor scroll containers and can interrupt the user's
    // in-progress page scroll, which makes scrolling feel sticky.
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) {
      return;
    }

    const targetLeft = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, targetLeft), behavior: 'auto' });
  }, [activeSection, linkRefs, navRef]);
}
