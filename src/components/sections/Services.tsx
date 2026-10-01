import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { services } from '@/data/portfolio';
import { gsap } from '@/lib/gsap';
import { EASE } from '@/lib/motion';
import { scrollToTarget } from '@/lib/lenis';
import { useUi } from '@/lib/ui-context';
import { useIsTouch } from '@/hooks/useIsTouch';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SplitHeading } from '@/components/ui/SplitHeading';

/**
 * Big typographic list. On desktop a preview card follows the cursor and swaps content
 * per row; on touch every row shows its details inline instead.
 */
export function Services() {
  const { setMode } = useUi();
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = preview.current;
    const host = list.current;
    if (!el || !host || touch) return;
    const xTo = gsap.quickTo(el, 'x', { duration: reduced ? 0.01 : 0.7, ease: 'expo.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: reduced ? 0.01 : 0.7, ease: 'expo.out' });
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      xTo(e.clientX - r.left + 28);
      yTo(e.clientY - r.top - 90);
    };
    host.addEventListener('pointermove', onMove);
    return () => host.removeEventListener('pointermove', onMove);
  }, [touch, reduced]);

  const current = active === null ? null : services[active];

  return (
    <section id="services" aria-labelledby="services-title" className="container-x py-24 md:py-40">
      <SplitHeading id="services-title" eyebrow="02 — Services" text="What I can build for you." />
      <div className="relative">
        <ul
          ref={list}
          className="hairline relative border-t"
          onPointerLeave={() => setActive(null)}
        >
          {services.map((s, i) => {
            const isActive = active === i;
            return (
              <li key={s.id} className="hairline border-b">
                <button
                  type="button"
                  data-cursor="Let's talk"
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => {
                    setMode('project');
                    scrollToTarget('#contact');
                  }}
                  aria-describedby={`svc-${s.id}`}
                  className="group relative grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden py-7 text-left md:gap-10 md:py-10"
                >
                  <span
                    aria-hidden
                    className="bg-accent absolute inset-0 origin-left scale-x-0 opacity-[0.07] transition-transform duration-700 ease-expo group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                  <span
                    className={`relative font-mono text-sm transition-colors duration-500 ${
                      isActive ? 'text-cyan' : 'text-muted'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative">
                    <span className="block font-display text-[clamp(1.6rem,4.6vw,4rem)] font-semibold leading-[1.05] tracking-tight transition-transform duration-700 ease-expo group-hover:translate-x-3 md:group-hover:translate-x-6">
                      {s.title}
                    </span>
                    <span
                      id={`svc-${s.id}`}
                      className={`mt-3 block max-w-2xl text-sm text-muted md:text-base ${touch ? '' : 'lg:sr-only'}`}
                    >
                      {s.blurb} <span className="text-fg/80">{s.proof}.</span>
                    </span>
                    <span
                      aria-hidden
                      className={`mt-3 flex flex-wrap gap-2 ${touch ? '' : 'lg:hidden'}`}
                    >
                      {s.stack.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="relative h-6 w-6 text-muted transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:text-fg md:h-8 md:w-8"
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {!touch && (
          <div
            ref={preview}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 w-[340px]"
          >
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.85, rotate: -4, y: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="glass overflow-hidden rounded-3xl p-6 shadow-2xl"
                >
                  <div className="bg-accent mb-5 flex h-10 w-10 items-center justify-center rounded-xl">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm text-fg/85">{current.blurb}</p>
                  <p className="text-gradient mt-4 font-mono text-xs uppercase tracking-wider">
                    {current.proof}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {current.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-fg/[0.07] px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
