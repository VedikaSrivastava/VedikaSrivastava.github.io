import { useEffect, useRef, useState } from 'react';

export function useInView<TElement extends Element>() {
  const ref = useRef<TElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => typeof window === 'undefined');

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '180px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
