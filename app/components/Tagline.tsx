'use client';

import { useEffect, useRef, useState } from 'react';
import { about } from '../content/profile';

const words = about.tagline.split(' ');

/** Large type statement. Each word brightens as it crosses a trigger line while scrolling. */
export default function Tagline() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState<boolean[]>(() => words.map(() => false));
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduce(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduce || !ref.current) return;
    const spans = Array.from(ref.current.querySelectorAll<HTMLSpanElement>('[data-word]'));
    const observer = new IntersectionObserver(
      (entries) => {
        setActive((previous) => {
          const next = [...previous];
          let changed = false;
          for (const entry of entries) {
            const index = Number((entry.target as HTMLElement).dataset.word);
            if (entry.isIntersecting && !next[index]) {
              next[index] = true;
              changed = true;
            }
          }
          return changed ? next : previous;
        });
      },
      // Trigger line sits at 65% of the viewport height.
      { rootMargin: '0px 0px -35% 0px', threshold: 1 },
    );
    spans.forEach((span) => observer.observe(span));
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <section className="section container-x" aria-label="Working principle">
      <p ref={ref} className="heading-2 max-w-[680px] text-ink">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <span
              data-word={index}
              className={`inline-block transition-opacity duration-500 ease-out ${
                reduce || active[index] ? 'opacity-100' : 'opacity-30'
              }`}
            >
              {word}
            </span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    </section>
  );
}
