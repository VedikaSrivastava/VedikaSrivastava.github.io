import { useLayoutEffect, useRef, useState } from 'react';

const ROOT_MARGIN_PX = 180;

export function useInView<TElement extends Element>() {
  const ref = useRef<TElement | null>(null);
  // Start visible to avoid SSR/hydration flash; hide offscreen before paint.
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const isInView = () => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight + ROOT_MARGIN_PX && rect.bottom > -ROOT_MARGIN_PX;
    };

    if (isInView()) {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${ROOT_MARGIN_PX}px` },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
