import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useInView(options = { threshold: 0.14, triggerOnce: true }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce !== false) {
            observer.unobserve(node);
          }
        } else if (options.triggerOnce === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold ?? 0.14,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, options.threshold, options.rootMargin, options.triggerOnce]);

  return [ref, isVisible];
}