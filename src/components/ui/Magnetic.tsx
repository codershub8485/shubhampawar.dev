import type { ReactNode } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

interface Props {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Wraps any interactive child so it is pulled toward the cursor. */
export function Magnetic({ children, strength = 0.35, className }: Props) {
  const ref = useMagnetic<HTMLSpanElement>(strength);
  return (
    <span ref={ref} className={className ?? 'inline-block will-change-transform'}>
      {children}
    </span>
  );
}
