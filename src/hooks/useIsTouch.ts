import { useSyncExternalStore } from 'react';

const QUERY = '(hover: none), (pointer: coarse)';

function subscribe(cb: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
}

export function useIsTouch() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true,
  );
}
