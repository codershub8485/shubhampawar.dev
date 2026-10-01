import type Lenis from 'lenis';

// Module-level handle so any component can scroll without prop drilling.
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function scrollToTarget(target: string | HTMLElement | number) {
  if (instance) {
    instance.scrollTo(target, { offset: -16, duration: 1.2 });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  el?.scrollIntoView({ block: 'start' });
}
