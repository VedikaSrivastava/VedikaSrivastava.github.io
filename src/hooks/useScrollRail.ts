import { useCallback, useEffect, useRef, useState } from 'react';

const SCROLL_EDGE_THRESHOLD = 2;

export function useScrollRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = element;

    setCanScrollLeft(scrollLeft > SCROLL_EDGE_THRESHOLD);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - SCROLL_EDGE_THRESHOLD);
  }, []);

  const scrollByDirection = useCallback((direction: 'left' | 'right') => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const amount = element.clientWidth * 0.75;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    element.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, []);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    updateScrollState();

    element.addEventListener('scroll', updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  return { scrollRef, canScrollLeft, canScrollRight, scrollByDirection };
}
