import { createContext, useContext } from 'react';
import type { Theme } from '@/hooks/useTheme';
import type { Mode } from '@/data/portfolio';

export interface UiContextValue {
  theme: Theme;
  toggleTheme: () => void;
  openPalette: () => void;
  toast: (message: string) => void;
  copyEmail: () => void;
  /** Whether the visitor is hiring full-time or has a freelance project. */
  mode: Mode;
  setMode: (m: Mode) => void;
}

export const UiContext = createContext<UiContextValue | null>(null);

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error('useUi must be used inside UiContext');
  return ctx;
}
