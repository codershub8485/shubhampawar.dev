import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { kineticWords } from '@/data/portfolio';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Two rows of oversized type that slide in opposite directions as you scroll and
 * skew with scroll velocity, then settle back when scrolling stops.
 */
export function KineticBand() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('[data-row]');
      rows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { xPercent: i % 2 ? -30 : 0 },
          {
            xPercent: i % 2 ? 0 : -30,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          },
        );
      });
      const skewTo = gsap.quickTo(rows, 'skewX', { duration: 0.6, ease: 'power3.out' });
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => skewTo(gsap.utils.clamp(-12, 12, self.getVelocity() / -260)),
        onLeave: () => skewTo(0),
        onLeaveBack: () => skewTo(0),
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const line = [...kineticWords, ...kineticWords];
  return (
    <div ref={root} aria-hidden className="relative overflow-hidden py-16 md:py-24">
      {[0, 1].map((r) => (
        <div
          key={r}
          data-row
          className="flex w-max items-center gap-8 whitespace-nowrap py-1 font-display text-[clamp(3rem,10vw,9rem)] font-semibold leading-none tracking-tight will-change-transform"
        >
          {line.map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span
                className={(i + r) % 3 === 0 ? 'text-gradient' : 'text-transparent'}
                style={
                  (i + r) % 3 === 0 ? undefined : { WebkitTextStroke: '1px rgb(var(--fg) / 0.28)' }
                }
              >
                {w}
              </span>
              <span className="text-[0.4em] text-fg/20">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
