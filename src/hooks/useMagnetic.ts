import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from './useReducedMotion';
import { useIsTouch } from './useIsTouch';

/** Pulls the element toward the cursor while it is within `radius` px of the element's centre. */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, radius = 90) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const touch = useIsTouch();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || touch) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'expo.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'expo.out' });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const reach = Math.max(r.width, r.height) / 2 + radius;
      if (Math.hypot(dx, dy) < reach) {
        xTo(dx * strength);
        yTo(dy * strength);
      } else {
        xTo(0);
        yTo(0);
      }
    };
    const reset = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', reset);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', reset);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength, radius, reduced, touch]);

  return ref;
}
