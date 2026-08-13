'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number; // duration in ms
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const currentCount = Math.min(Math.floor((progress / duration) * end), end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(animateCount);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.unobserve(element);
    };
  }, [end, duration]);

  return <span ref={elementRef} className="count">{count}</span>;
}
