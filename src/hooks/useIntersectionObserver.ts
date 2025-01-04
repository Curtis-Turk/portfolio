import { useEffect, useRef } from "react";

export function useIntersectionObserver(
  onIntersect: (isIntersecting: boolean) => void,
  threshold = 0.5
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onIntersect(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onIntersect, threshold]);

  return ref;
}
