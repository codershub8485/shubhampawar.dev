import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { processSteps } from '@/data/portfolio';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { SplitHeading } from '@/components/ui/SplitHeading';

/** A wavy path draws across the steps as you scroll; each node lights up as the line reaches it. */
export function Process() {
  const root = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const p = path.current;
    if (!el || !p) return;
    if (prefersReducedMotion()) {
      gsap.set(p, { strokeDashoffset: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 75%', end: 'bottom 60%', scrub: 0.8 },
      });
      tl.fromTo(p, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);
      gsap.utils.toArray<HTMLElement>('[data-step]').forEach((step, i, all) => {
        const at = (i / Math.max(all.length - 1, 1)) * 0.9;
        tl.fromTo(step, { y: 30 }, { y: 0, duration: 0.25, ease: 'power2.out' }, at);
        const node = step.querySelector('[data-node]');
        if (node)
          tl.fromTo(node, { scale: 0.4 }, { scale: 1, duration: 0.2, ease: 'back.out(3)' }, at);
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" aria-labelledby="process-title" className="container-x py-24 md:py-40">
      <SplitHeading id="process-title" eyebrow="07 — How I work" text="From idea to shipped." />
      <div ref={root} className="relative">
        <svg
          aria-hidden
          className="absolute left-[24px] right-0 top-[-8px] hidden h-16 lg:block"
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="proc-g" x1="0" x2="1">
              <stop offset="0" stopColor="rgb(var(--accent-a))" />
              <stop offset="1" stopColor="rgb(var(--accent-b))" />
            </linearGradient>
          </defs>
          <path
            d="M0 30 C 80 54, 170 6, 250 30 S 420 54, 500 30 S 670 6, 750 30 S 920 54, 1000 30"
            fill="none"
            stroke="rgb(var(--line) / 0.1)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            ref={path}
            d="M0 30 C 80 54, 170 6, 250 30 S 420 54, 500 30 S 670 6, 750 30 S 920 54, 1000 30"
            fill="none"
            stroke="url(#proc-g)"
            strokeWidth="2.5"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((s) => (
            <li key={s.n} data-step className="relative">
              <span
                data-node
                className="bg-accent relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-medium text-white ring-8 ring-bg"
              >
                {s.n}
              </span>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
