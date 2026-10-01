import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDownRight, ArrowRight, Download } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { modes, profile } from '@/data/portfolio';
import { useUi } from '@/lib/ui-context';
import { EASE } from '@/lib/motion';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { scrollToTarget } from '@/lib/lenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { StatusPill } from '@/components/ui/StatusPill';
import { Magnetic } from '@/components/ui/Magnetic';

const NeuralField = lazy(() => import('@/components/three/NeuralField'));

// Badges live in the right half so they never sit on top of the hero copy.
const BADGE_POS = [
  'right-[30%] top-[16%]',
  'right-[5%] top-[22%]',
  'right-[38%] top-[52%]',
  'right-[4%] top-[58%]',
  'right-[20%] top-[36%]',
  'right-[24%] bottom-[14%]',
];

function useIdleMount(delay = 200) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: delay * 5 });
      return () => window.cancelIdleCallback(id);
    }
    const id = globalThis.setTimeout(() => setReady(true), delay);
    return () => globalThis.clearTimeout(id);
  }, [delay]);
  return ready;
}

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { mode } = useUi();
  const m = modes[mode];
  const mount3d = useIdleMount();

  useLayoutEffect(() => {
    if (!ready || !root.current) return;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.from('[data-hero-fade]', { opacity: 0, duration: 0.6, stagger: 0.05 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.from('[data-char]', { yPercent: 120, rotate: 6, duration: 1.2, stagger: 0.035 })
        .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, '-=0.8')
        .from('[data-badge]', { scale: 0.6, opacity: 0, duration: 0.9, stagger: 0.06 }, '-=0.9');

      // Badges drift with the pointer at different depths.
      const badges = gsap.utils.toArray<HTMLElement>('[data-badge]');
      const setters = badges.map((b) => ({
        x: gsap.quickTo(b, 'x', { duration: 1.2, ease: 'expo.out' }),
        y: gsap.quickTo(b, 'y', { duration: 1.2, ease: 'expo.out' }),
        depth: Number(b.dataset.depth ?? 1),
      }));
      const onMove = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        setters.forEach((s) => {
          s.x(nx * 40 * s.depth);
          s.y(ny * 40 * s.depth);
        });
      };
      window.addEventListener('pointermove', onMove, { passive: true });

      // Hero content lifts away as you scroll past.
      gsap.to('[data-hero-content]', {
        yPercent: -12,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      return () => window.removeEventListener('pointermove', onMove);
    }, root);
    return () => ctx.revert();
  }, [ready, reduced]);

  // Gradient is applied per letter: background-clip:text on a parent does not reach
  // the inline-block children that the letter animation needs.
  const renderName = (word: string, gradient = false) =>
    word.split('').map((c, i) => {
      const t = word.length > 1 ? Math.round((i / (word.length - 1)) * 100) : 0;
      return (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            data-char
            className="inline-block will-change-transform"
            style={
              gradient
                ? { color: `color-mix(in oklab, rgb(var(--accent-b)) ${t}%, rgb(var(--accent-a)))` }
                : undefined
            }
          >
            {c}
          </span>
        </span>
      );
    });

  return (
    <section
      id="top"
      ref={root}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      <div className="absolute inset-0 -z-0 opacity-90" aria-hidden>
        {mount3d && (
          <Suspense fallback={null}>
            <NeuralField animate={!reduced} />
          </Suspense>
        )}
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {profile.heroBadges.map((b, i) => (
          <span
            key={b}
            data-badge
            data-depth={(i % 3) + 1}
            className={`glass absolute rounded-full px-4 py-2 font-mono text-xs text-muted ${BADGE_POS[i] ?? ''}`}
          >
            {b}
          </span>
        ))}
      </div>

      <div data-hero-content className="container-x relative z-10">
        <div data-hero-fade className="mb-8 flex flex-wrap items-center gap-3">
          <StatusPill label="Open to full-time roles & freelance projects" />
        </div>
        <h1
          id="hero-title"
          className="font-display text-hero font-semibold"
          aria-label={profile.name}
        >
          <span aria-hidden className="block">
            {renderName(profile.firstName)}
          </span>
          <span aria-hidden className="block">
            {renderName(profile.lastName, true)}
          </span>
        </h1>
        <p data-hero-fade className="mt-6 font-mono text-lg text-muted md:text-2xl">
          <span className="text-fg/50">&gt; </span>
          <ScrambleText phrases={profile.rotatingRoles} className="text-fg" />
          <span
            className="ml-1 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.15em] animate-pulse bg-fg/70"
            aria-hidden
          />
        </p>
        <div data-hero-fade className="mt-8">
          <ModeToggle id="hero-mode" />
        </div>
        <div className="mt-5 min-h-[3.5rem] max-w-xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={mode}
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: EASE }}
              className="text-base text-muted md:text-lg"
            >
              {m.pitch}
            </motion.p>
          </AnimatePresence>
        </div>
        <div data-hero-fade className="mt-8 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={m.ctaHref}
              {...(mode === 'hire'
                ? { target: '_blank', rel: 'noopener' }
                : {
                    onClick: (e: React.MouseEvent) => {
                      e.preventDefault();
                      scrollToTarget('#contact');
                    },
                  })}
              data-cursor={mode === 'hire' ? 'Open' : 'Go'}
              className="group flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg"
            >
              {mode === 'hire' && <Download className="h-4 w-4" aria-hidden />}
              {m.cta}
              {mode === 'project' && (
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1"
                  aria-hidden
                />
              )}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#projects');
              }}
              data-cursor="View"
              className="btn-fill flex h-12 items-center rounded-full px-6 text-sm font-medium"
            >
              See the work
            </a>
          </Magnetic>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToTarget('#about')}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-muted"
        aria-label="Scroll to About section"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-fg/15" aria-hidden>
          <span className="bg-accent absolute inset-x-0 top-0 h-1/2 animate-scrollcue" />
        </span>
        <ArrowDownRight className="sr-only" />
      </button>
    </section>
  );
}
