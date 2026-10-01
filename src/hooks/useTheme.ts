import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
const KEY = 'sp-theme';

function readStored(): Theme {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch {
    /* storage unavailable */
  }
  return 'dark'; // dark by default
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === 'undefined' ? 'dark' : readStored(),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', theme === 'dark' ? '#0A0A0F' : '#F8F8FA');
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return { theme, toggle };
}
