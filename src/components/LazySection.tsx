import { type ReactNode, Suspense, useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  placeholderClassName?: string;
  placeholderMinHeight?: string;
  rootMargin?: string;
  fallback?: ReactNode;
}

const LazySection = ({
  children,
  className = "",
  placeholderClassName = "",
  placeholderMinHeight = "auto",
  rootMargin = "220px",
  fallback = null,
}: LazySectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} className={className} style={{ minHeight: placeholderMinHeight }}>
      {isVisible ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        <div aria-hidden="true" className={placeholderClassName} />
      )}
    </div>
  );
};

export default LazySection;