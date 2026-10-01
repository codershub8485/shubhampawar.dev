import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Command, Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useHideOnScroll } from '@/hooks/useScrollDirection';
import { scrollToTarget } from '@/lib/lenis';
import { useUi } from '@/lib/ui-context';
import { EASE } from '@/lib/motion';
import { Magnetic } from '@/components/ui/Magnetic';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const ids = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const hidden = useHideOnScroll();
  const active = useActiveSection(ids);
  const { openPalette } = useUi();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-3 z-[80] flex justify-center px-3 md:top-5"
      animate={{ y: hidden && !menuOpen ? -120 : 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <nav
        aria-label="Primary"
        className="glass flex w-full max-w-5xl items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5"
      >
        <a
          href="#top"
          onClick={go('#top')}
          className="mr-auto font-display text-lg font-semibold tracking-tight"
        >
          {profile.monogram}
          <span className="text-gradient">.</span>
          <span className="sr-only"> {profile.name}, back to top</span>
        </a>

        <ul className="relative hidden items-center xl:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fg/[0.08]"
                    transition={{ duration: 0.5, ease: EASE }}
                    aria-hidden
                  />
                )}
                <a
                  href={l.href}
                  onClick={go(l.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative flex h-11 items-center px-4 text-sm transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={openPalette}
          aria-label="Open command palette (Ctrl or Command + K)"
          className="hidden h-11 items-center gap-1.5 rounded-full px-3 font-mono text-xs text-muted transition-colors hover:text-fg md:flex"
        >
          <Command className="h-3.5 w-3.5" aria-hidden />K
        </button>
        <ThemeToggle />
        <Magnetic>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            data-cursor="Open"
            aria-label="Resume (PDF)"
            className="bg-accent flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </Magnetic>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full xl:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="glass absolute inset-x-3 top-[4.25rem] rounded-3xl p-3 xl:hidden"
          >
            <ul>
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.5, ease: EASE }}
                >
                  <a
                    href={l.href}
                    onClick={go(l.href)}
                    className="flex min-h-[48px] items-center rounded-2xl px-4 font-display text-xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
