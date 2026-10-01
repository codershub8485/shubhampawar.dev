import { motion, useScroll, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="bg-accent fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
    />
  );
}
