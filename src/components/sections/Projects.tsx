import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { projects } from '@/data/portfolio';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { ProjectCard } from './ProjectCard';
import { MoreWork } from './MoreWork';

/** Desktop: pinned horizontal scroll. Mobile / reduced motion: plain vertical stack. */
export function Projects() {
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pinEl = pin.current;
    const trackEl = track.current;
    if (!pinEl || !trackEl) return;

    const mm = gsap.matchMedia();
    mm.add(
      { desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)' },
      (ctx) => {
        if (!ctx.conditions?.desktop) return;
        const distance = () => trackEl.scrollWidth - window.innerWidth;
        const tween = gsap.to(trackEl, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinEl,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        // Each media block un-clips as it slides into view.
        gsap.utils.toArray<HTMLElement>('[data-reveal]', trackEl).forEach((m) => {
          gsap.fromTo(
            m,
            { clipPath: 'inset(12% 12% 12% 12% round 24px)' },
            {
              clipPath: 'inset(0% 0% 0% 0% round 0px)',
              ease: 'none',
              scrollTrigger: {
                trigger: m,
                containerAnimation: tween,
                start: 'left 95%',
                end: 'left 45%',
                scrub: true,
              },
            },
          );
        });
      },
    );
    mm.add({ mobile: '(max-width: 1023px)' }, () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>('[data-reveal]', trackEl).forEach((m) => {
        gsap.fromTo(
          m,
          { clipPath: 'inset(10% 10% 10% 10% round 24px)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            duration: 1.2,
            scrollTrigger: { trigger: m, start: 'top 85%' },
          },
        );
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    return () => mm.revert();
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-40">
      <div className="container-x">
        <SplitHeading id="projects-title" eyebrow="05 — Projects" text="Selected work." />
      </div>
      <div ref={pin} className="lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <div
          ref={track}
          className="container-x flex flex-col gap-6 lg:w-max lg:max-w-none lg:flex-row lg:gap-8 lg:pr-[10vw]"
        >
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={
                p.diagram
                  ? 'lg:h-[78vh] lg:w-[min(64vw,920px)]'
                  : 'lg:h-[78vh] lg:w-[min(42vw,620px)]'
              }
            >
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
      <MoreWork />
    </section>
  );
}
