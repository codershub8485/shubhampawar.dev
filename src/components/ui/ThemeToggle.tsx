import { Moon, Sun } from 'lucide-react';
import { useUi } from '@/lib/ui-context';

export function ThemeToggle() {
  const { theme, toggleTheme } = useUi();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
