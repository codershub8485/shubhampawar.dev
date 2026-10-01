import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { setLenis } from '@/lib/lenis';
import { useReducedMotion } from './useReducedMotion';

/** Smooth scrolling synced to GSAP's ticker so ScrollTrigger stays frame-accurate. */
export function useLenis(enabled = true) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!enabled || reduced) {
      setLenis(null);
      return;
    }
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, [enabled, reduced]);
}
