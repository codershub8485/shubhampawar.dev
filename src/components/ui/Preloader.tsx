import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { profile } from '@/data/portfolio';

const KEY = 'sp-preloaded';

function seen() {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** Monogram stroke draws in with a 0→100 counter, then a clip-path curtain reveals the page. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [skip] = useState(seen);
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (skip) onDone();
  }, [skip, onDone]);

  useLayoutEffect(() => {
    if (skip || !root.current) return;
    document.documentElement.style.overflow = 'hidden';
    const finish = () => {
      document.documentElement.style.overflow = '';
      try {
        sessionStorage.setItem(KEY, '1');
      } catch {
        /* ignore */
      }
      onDone();
    };

    if (prefersReducedMotion()) {
      const t = gsap.to(root.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.3,
        onComplete: finish,
      });
      return () => {
        t.kill();
        document.documentElement.style.overflow = '';
      };
    }

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const tl = gsap.timeline({ onComplete: finish });
      tl.to(
        '[data-stroke]',
        { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', stagger: 0.15 },
        0,
      )
        .to(
          counter,
          {
            v: 100,
            duration: 1.8,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (count.current)
                count.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
            },
          },
          0,
        )
        .to('[data-fill]', { opacity: 1, duration: 0.4 }, 1.4)
        .to('[data-pre-content]', { y: -40, opacity: 0, duration: 0.6, ease: 'expo.in' }, 2)
        .to(root.current, { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, 2.2);
    }, root);
    return () => {
      ctx.revert();
      document.documentElement.style.overflow = '';
    };
  }, [skip, onDone]);

  if (skip) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
      role="status"
      aria-label="Loading"
    >
      <div data-pre-content className="flex flex-col items-center gap-8">
        <svg viewBox="0 0 220 120" className="w-48 md:w-64" aria-hidden>
          <defs>
            <linearGradient id="pre-g" x1="0" x2="1">
              <stop offset="0" stopColor="rgb(var(--accent-a))" />
              <stop offset="1" stopColor="rgb(var(--accent-b))" />
            </linearGradient>
          </defs>
          {['S', 'P'].map((ch, i) => (
            <g key={ch}>
              <text
                data-stroke
                x={i === 0 ? 30 : 118}
                y="96"
                fontFamily="Space Grotesk Variable, sans-serif"
                fontSize="110"
                fontWeight="600"
                fill="none"
                stroke="url(#pre-g)"
                strokeWidth="1.2"
                strokeDasharray="600"
                strokeDashoffset="600"
              >
                {ch}
              </text>
              <text
                data-fill
                x={i === 0 ? 30 : 118}
                y="96"
                fontFamily="Space Grotesk Variable, sans-serif"
                fontSize="110"
                fontWeight="600"
                fill="url(#pre-g)"
                opacity="0"
              >
                {ch}
              </text>
            </g>
          ))}
        </svg>
        <div className="flex w-48 items-center justify-between font-mono text-xs text-muted md:w-64">
          <span>{profile.name}</span>
          <span ref={count} className="tabular-nums text-fg">
            000
          </span>
        </div>
      </div>
    </div>
  );
}
