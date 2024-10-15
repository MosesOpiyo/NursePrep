// hooks/useAnimateOnScroll.ts
import { useEffect, useRef } from 'react';

export const useAnimateOnScroll = (animationClass: string, threshold: number = 0.1) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    // Cleanup function to unobserve the element
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass, threshold]);

  return elementRef;
};
