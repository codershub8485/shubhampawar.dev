import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { profile, type Mode } from '@/data/portfolio';
import { useLenis } from '@/hooks/useLenis';
import { useTheme } from '@/hooks/useTheme';
import { UiContext, type UiContextValue } from '@/lib/ui-context';
import { ScrollTrigger } from '@/lib/gsap';
import { Background } from '@/components/ui/Background';
import { Cursor } from '@/components/ui/Cursor';
import { Preloader } from '@/components/ui/Preloader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Toast } from '@/components/ui/Toast';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

// Below-the-fold sections are code-split.
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects })),
);
const Education = lazy(() =>
  import('@/components/sections/Education').then((m) => ({ default: m.Education })),
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
);
const Services = lazy(() =>
  import('@/components/sections/Services').then((m) => ({ default: m.Services })),
);
const KineticBand = lazy(() =>
  import('@/components/sections/KineticBand').then((m) => ({ default: m.KineticBand })),
);
const Process = lazy(() =>
  import('@/components/sections/Process').then((m) => ({ default: m.Process })),
);
const Engage = lazy(() =>
  import('@/components/sections/Engage').then((m) => ({ default: m.Engage })),
);

const MODE_KEY = 'sp-mode';

/**
 * Share-able links: `?for=freelance` (or `project`, `client`) opens in freelance mode,
 * `?for=hire` (or `job`, `recruiter`) in full-time mode. Otherwise the last choice is reused.
 */
function initialMode(): Mode {
  const q = new URLSearchParams(window.location.search).get('for')?.toLowerCase();
  if (q && ['freelance', 'project', 'client'].includes(q)) return 'project';
  if (q && ['hire', 'job', 'recruiter', 'fulltime', 'full-time'].includes(q)) return 'hire';
  try {
    const v = localStorage.getItem(MODE_KEY);
    if (v === 'hire' || v === 'project') return v;
  } catch {
    /* storage unavailable */
  }
  return 'hire';
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [mode, setModeState] = useState<Mode>(initialMode);
  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    try {
      localStorage.setItem(MODE_KEY, m);
    } catch {
      /* ignore */
    }
  }, []);
  const toastTimer = useRef<number>(0);
  const { theme, toggle } = useTheme();

  useLenis(loaded);

  const onPreloaded = useCallback(() => setLoaded(true), []);

  const toast = useCallback((message: string) => {
    window.clearTimeout(toastTimer.current);
    setToastMsg(message);
    toastTimer.current = window.setTimeout(() => setToastMsg(null), 2400);
  }, []);

  const copyEmail = useCallback(() => {
    const done = () => toast('Email copied to clipboard');
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(profile.email).then(done, () => {
        window.location.href = `mailto:${profile.email}`;
      });
    } else {
      window.location.href = `mailto:${profile.email}`;
    }
  }, [toast]);

  // Cmd/Ctrl + K opens the palette from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lazy sections change page height; recompute trigger positions once they mount.
  useEffect(() => {
    if (!loaded) return;
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => window.clearTimeout(id);
  }, [loaded]);

  const ui = useMemo<UiContextValue>(
    () => ({
      theme,
      toggleTheme: toggle,
      openPalette: () => setPaletteOpen(true),
      toast,
      copyEmail,
      mode,
      setMode,
    }),
    [theme, toggle, toast, copyEmail, mode, setMode],
  );

  return (
    <UiContext.Provider value={ui}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Preloader onDone={onPreloaded} />
      <Background />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero ready={loaded} />
        <About />
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <KineticBand />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Process />
          <Engage />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <Toast message={toastMsg} />
    </UiContext.Provider>
  );
}
