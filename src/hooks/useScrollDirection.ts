import { useEffect, useState } from 'react';

/** true while the user is scrolling down past `threshold` px. */
export function useHideOnScroll(threshold = 120) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - last;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > threshold);
          last = y;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return hidden;
}
