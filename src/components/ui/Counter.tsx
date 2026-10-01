import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { Stat } from '@/data/portfolio';
import { EASE } from '@/lib/motion';

export function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? stat.value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, stat.value]);

  return (
    <div ref={ref} className="hairline border-t pt-5">
      <p className="font-display text-5xl font-semibold tabular-nums tracking-tight md:text-6xl">
        <span className="text-muted">{stat.prefix}</span>
        {n}
        <span className="text-gradient">{stat.suffix}</span>
      </p>
      <p className="eyebrow mt-2">{stat.label}</p>
    </div>
  );
}
