import { useRef, type ReactNode, type PointerEvent } from 'react';
import { cn } from '@/lib/cn';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useIsTouch } from '@/hooks/useIsTouch';

interface Props {
  children: ReactNode;
  className?: string;
  tilt?: number;
  cursorLabel?: string;
}

/** Card with a cursor-following glow border and gentle 3D tilt. */
export function SpotlightCard({ children, className, tilt = 6, cursorLabel }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const touch = useIsTouch();

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (reduced || touch) return;
    const rx = (y / r.height - 0.5) * -tilt;
    const ry = (x / r.width - 0.5) * tilt;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-cursor={cursorLabel}
      className={cn(
        'spotlight glass rounded-3xl transition-transform duration-500 ease-expo will-change-transform',
        className,
      )}
    >
      {children}
    </div>
  );
}
