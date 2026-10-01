import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useIsTouch } from '@/hooks/useIsTouch';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Dot + trailing ring. Over any element with [data-cursor="Label"] (or a link/button) the ring
 * grows and shows the label. Not rendered on touch devices.
 */
export function Cursor() {
  const touch = useIsTouch();
  const reduced = useReducedMotion();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (touch) return;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;
    document.documentElement.classList.add('has-custom-cursor');

    const lag = reduced ? 0.01 : 0.5;
    const dx = gsap.quickTo(d, 'x', { duration: 0.08, ease: 'power3.out' });
    const dy = gsap.quickTo(d, 'y', { duration: 0.08, ease: 'power3.out' });
    const rx = gsap.quickTo(r, 'x', { duration: lag, ease: 'expo.out' });
    const ry = gsap.quickTo(r, 'y', { duration: lag, ease: 'expo.out' });
    gsap.set([d, r], { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMove = (e: PointerEvent) => {
      gsap.to([d, r], { opacity: 1, duration: 0.3, overwrite: 'auto' });
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };
    const onOver = (e: Event) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>(
        '[data-cursor], a, button, [role="button"]',
      );
      setHovering(!!t);
      setLabel(t?.dataset.cursor ?? '');
    };
    const onLeave = () => gsap.to([d, r], { opacity: 0, duration: 0.3 });

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [touch, reduced]);

  if (touch) return null;

  const big = hovering && label;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div ref={dot} className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-fg" />
      <div ref={ring} className="fixed left-0 top-0">
        <div
          className="flex items-center justify-center rounded-full border border-fg/40 transition-[width,height,background-color,border-color] duration-500 ease-expo"
          style={{
            width: big ? 84 : hovering ? 52 : 34,
            height: big ? 84 : hovering ? 52 : 34,
            transform: 'translate(-50%, -50%)',
            backgroundColor: big ? 'rgb(var(--fg))' : 'transparent',
            borderColor: big ? 'transparent' : undefined,
          }}
        >
          <span
            className="font-mono text-[11px] font-medium uppercase tracking-wider text-bg transition-opacity duration-300"
            style={{ opacity: big ? 1 : 0 }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
