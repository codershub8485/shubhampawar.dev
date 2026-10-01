import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { stats, summary } from '@/data/portfolio';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { Counter } from '@/components/ui/Counter';

export function About() {
  const para = useRef<HTMLParagraphElement>(null);

  // Words brighten one by one as the paragraph scrolls through the viewport.
  useLayoutEffect(() => {
    const el = para.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('[data-w]'),
        { opacity: 0.45 }, // dim state still meets 3:1 large-text contrast
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" aria-labelledby="about-title" className="container-x py-24 md:py-40">
      <SplitHeading id="about-title" eyebrow="01 — About" text="Engineer of intelligent systems." />
      <div className="grid gap-16 lg:grid-cols-12">
        <p
          ref={para}
          className="font-display text-2xl leading-snug tracking-tight md:text-4xl lg:col-span-8"
        >
          <span className="sr-only">{summary}</span>
          {summary.split(' ').map((w, i) => (
            <span key={i} data-w aria-hidden className="will-change-[opacity]">
              {w}{' '}
            </span>
          ))}
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 self-end lg:col-span-4 lg:grid-cols-1">
          {stats.map((s) => (
            <Counter key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
