import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { experience } from '@/data/portfolio';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function Experience() {
  const root = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const p = path.current;
    if (!el || !p) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      if (!reduced) {
        // The timeline line draws itself as the section scrolls.
        gsap.fromTo(
          p,
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 70%', end: 'bottom 70%', scrub: true },
          },
        );
      } else {
        gsap.set(p, { strokeDashoffset: 0 });
      }
      gsap.utils.toArray<HTMLElement>('[data-role]').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          x: reduced ? 0 : 40,
          duration: reduced ? 0.5 : 1.1,
          scrollTrigger: { trigger: card, start: 'top 80%' },
        });
        const dot = card.querySelector('[data-dot]');
        if (dot && !reduced) {
          gsap.from(dot, {
            scale: 0,
            duration: 0.8,
            ease: 'back.out(3)',
            scrollTrigger: { trigger: card, start: 'top 75%' },
          });
        }
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" aria-labelledby="exp-title" className="container-x py-24 md:py-40">
      <SplitHeading id="exp-title" eyebrow="04 — Experience" text="Where I've shipped." />
      <div ref={root} className="relative">
        <svg
          aria-hidden
          className="absolute left-[7px] top-0 h-full w-[2px] md:left-[calc(25%+7px)]"
          viewBox="0 0 2 100"
          preserveAspectRatio="none"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="rgb(var(--line) / 0.1)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient id="exp-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgb(var(--accent-a))" />
              <stop offset="1" stopColor="rgb(var(--accent-b))" />
            </linearGradient>
          </defs>
          <path
            ref={path}
            d="M1 0 L1 100"
            stroke="url(#exp-g)"
            strokeWidth="2"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="space-y-16 md:space-y-24">
          {experience.map((r) => (
            <li
              key={r.company}
              data-role
              className="relative grid gap-6 pl-10 md:grid-cols-4 md:gap-10 md:pl-0"
            >
              <span
                data-dot
                aria-hidden
                className="bg-accent absolute left-0 top-2 h-4 w-4 rounded-full ring-4 ring-bg md:left-[25%]"
              />
              <div className="md:pr-12 md:text-right">
                <p className="font-mono text-sm text-muted">{r.period}</p>
                <p className="mt-1 font-mono text-xs text-muted/80">{r.location}</p>
                {r.current && (
                  <span className="chip mt-3 border-ok/40 text-ok" aria-label="Current role">
                    Now
                  </span>
                )}
              </div>
              <SpotlightCard tilt={2} className="p-6 md:col-span-3 md:ml-8 md:p-10">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{r.company}</h3>
                <p className="text-gradient mt-1 font-medium">{r.title}</p>
                <ul className="mt-6 space-y-3">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-fg/80">
                      <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-fg/30" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
