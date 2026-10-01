import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

interface Props {
  phrases: readonly string[];
  hold?: number;
  className?: string;
}

/** Decodes each phrase from random glyphs, holds, then moves to the next one. */
export function ScrambleText({ phrases, hold = 2200, className }: Props) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(phrases[0] ?? '');
  const frame = useRef(0);

  useEffect(() => {
    if (reduced) {
      setDisplay(phrases[index] ?? '');
      const t = window.setTimeout(() => setIndex((i) => (i + 1) % phrases.length), hold + 800);
      return () => window.clearTimeout(t);
    }
    const target = phrases[index] ?? '';
    const from = display;
    const len = Math.max(from.length, target.length);
    const queue = Array.from({ length: len }, (_, i) => {
      const start = Math.floor(Math.random() * 18);
      return {
        from: from[i] ?? '',
        to: target[i] ?? '',
        start,
        end: start + 10 + Math.floor(Math.random() * 18),
      };
    });
    let f = 0;
    let raf = 0;
    const update = () => {
      let out = '';
      let done = 0;
      for (const q of queue) {
        if (f >= q.end) {
          done++;
          out += q.to;
        } else if (f >= q.start) {
          out += q.to === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        } else {
          out += q.from;
        }
      }
      setDisplay(out);
      if (done === queue.length) {
        frame.current = window.setTimeout(() => setIndex((i) => (i + 1) % phrases.length), hold);
        return;
      }
      f++;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reduced]);

  return (
    <span className={className}>
      <span className="sr-only">{phrases.join(', ')}</span>
      <span aria-hidden>{display}</span>
    </span>
  );
}
