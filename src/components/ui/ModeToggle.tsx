import { motion } from 'motion/react';
import { Briefcase, Rocket } from 'lucide-react';
import { modes, type Mode } from '@/data/portfolio';
import { useUi } from '@/lib/ui-context';
import { EASE } from '@/lib/motion';

const ICON: Record<Mode, typeof Briefcase> = { hire: Briefcase, project: Rocket };

/** "I'm looking for: Full-time role / Freelance project". Switches which offer the page emphasises. */
export function ModeToggle({ id = 'mode' }: { id?: string }) {
  const { mode, setMode } = useUi();
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span id={`${id}-label`} className="eyebrow text-[11px]">
        I&apos;m looking for
      </span>
      <div
        role="radiogroup"
        aria-labelledby={`${id}-label`}
        className="glass inline-flex rounded-full p-1"
      >
        {(Object.keys(modes) as Mode[]).map((m) => {
          const Icon = ICON[m];
          const active = mode === m;
          return (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setMode(m)}
              className={`relative flex min-h-[44px] items-center gap-2 rounded-full px-4 text-sm transition-colors duration-300 ${
                active ? 'text-bg' : 'text-muted hover:text-fg'
              }`}
            >
              {active && (
                <motion.span
                  layoutId={`${id}-pill`}
                  className="absolute inset-0 rounded-full bg-fg"
                  transition={{ duration: 0.55, ease: EASE }}
                  aria-hidden
                />
              )}
              <Icon className="relative h-4 w-4" aria-hidden />
              <span className="relative whitespace-nowrap">{modes[m].toggle}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
