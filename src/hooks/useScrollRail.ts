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
    const nextCanScrollLeft = scrollLeft > SCROLL_EDGE_THRESHOLD;
    const nextCanScrollRight = scrollLeft + clientWidth < scrollWidth - SCROLL_EDGE_THRESHOLD;

    setCanScrollLeft((prev) => (prev === nextCanScrollLeft ? prev : nextCanScrollLeft));
    setCanScrollRight((prev) => (prev === nextCanScrollRight ? prev : nextCanScrollRight));
  }, []);

  const scrollByDirection = useCallback((direction: 'left' | 'right') => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const amount = element.clientWidth * 0.75;

    element.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'auto',
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
