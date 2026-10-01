import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Copy,
  Download,
  Github,
  Hash,
  Linkedin,
  Moon,
  Rocket,
  Search,
} from 'lucide-react';
import { paletteLinks, profile } from '@/data/portfolio';
import { scrollToTarget } from '@/lib/lenis';
import { useUi } from '@/lib/ui-context';
import { EASE } from '@/lib/motion';

interface Command {
  id: string;
  label: string;
  group: 'Navigate' | 'Actions' | 'Links';
  icon: ReactNode;
  run: () => void;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: Props) {
  const { copyEmail, toggleTheme, setMode } = useUi();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);

  const commands = useMemo<Command[]>(
    () => [
      { id: 'top', label: 'Home', group: 'Navigate', icon: <Hash />, run: () => scrollToTarget(0) },
      ...paletteLinks.map<Command>((l) => ({
        id: l.href,
        label: l.label,
        group: 'Navigate',
        icon: <Hash />,
        run: () => scrollToTarget(l.href),
      })),
      {
        id: 'project',
        label: 'Start a freelance project',
        group: 'Actions',
        icon: <Rocket />,
        run: () => {
          setMode('project');
          scrollToTarget('#contact');
        },
      },
      {
        id: 'email',
        label: 'Copy email address',
        group: 'Actions',
        icon: <Copy />,
        run: copyEmail,
      },
      {
        id: 'resume',
        label: 'Download resume',
        group: 'Actions',
        icon: <Download />,
        run: () => window.open(profile.resume, '_blank', 'noopener'),
      },
      {
        id: 'theme',
        label: 'Toggle light / dark theme',
        group: 'Actions',
        icon: <Moon />,
        run: toggleTheme,
      },
      {
        id: 'gh',
        label: 'Open GitHub',
        group: 'Links',
        icon: <Github />,
        run: () => window.open(profile.github, '_blank', 'noopener'),
      },
      {
        id: 'li',
        label: 'Open LinkedIn',
        group: 'Links',
        icon: <Linkedin />,
        run: () => window.open(profile.linkedin, '_blank', 'noopener'),
      },
    ],
    [copyEmail, toggleTheme, setMode],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  useEffect(() => {
    if (open) {
      restoreFocus.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      restoreFocus.current?.focus?.();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const runAt = (i: number) => {
    const cmd = filtered[i];
    if (!cmd) return;
    onClose();
    // Let the dialog close before scrolling so focus restore does not fight Lenis.
    window.setTimeout(cmd.run, 60);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runAt(active);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'Tab') {
      e.preventDefault(); // keep focus trapped in the input; arrows move the selection
    }
  };

  let lastGroup = '';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-bg/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="glass relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl"
            onKeyDown={onKeyDown}
          >
            <div className="hairline flex items-center gap-3 border-b px-4">
              <Search className="h-4 w-4 text-muted" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or run an action…"
                aria-label="Search commands"
                aria-controls="cmdk-list"
                aria-activedescendant={filtered[active] ? `cmdk-${filtered[active].id}` : undefined}
                className="h-14 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-muted focus-visible:outline-none"
              />
              <kbd className="chip">Esc</kbd>
            </div>
            <ul
              id="cmdk-list"
              role="listbox"
              className="max-h-[50vh] overflow-y-auto p-2"
              data-lenis-prevent
            >
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted">No results</li>
              )}
              {filtered.map((c, i) => {
                const header = c.group !== lastGroup ? c.group : null;
                lastGroup = c.group;
                return (
                  <li key={c.id} role="presentation">
                    {header && <p className="eyebrow px-3 pb-1 pt-3 text-[10px]">{header}</p>}
                    <div
                      id={`cmdk-${c.id}`}
                      role="option"
                      aria-selected={i === active}
                      onPointerMove={() => setActive(i)}
                      onClick={() => runAt(i)}
                      className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-xl px-3 text-sm transition-colors ${
                        i === active ? 'bg-fg/[0.07] text-fg' : 'text-muted'
                      }`}
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4" aria-hidden>
                        {c.icon}
                      </span>
                      <span className="flex-1">{c.label}</span>
                      {i === active && <ArrowRight className="h-4 w-4" aria-hidden />}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
