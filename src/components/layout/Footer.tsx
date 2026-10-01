import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';
import { scrollToTarget } from '@/lib/lenis';
import { Magnetic } from '@/components/ui/Magnetic';

function useClock(timeZone: string) {
  const fmt = () =>
    new Intl.DateTimeFormat('en-IN', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = window.setInterval(() => setTime(fmt()), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

export function Footer() {
  const time = useClock(profile.timeZone);
  return (
    <footer className="container-x hairline border-t py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="eyebrow">Local time</p>
          <p className="font-mono text-sm">
            <span className="tabular-nums">{time}</span> {profile.timeZoneLabel} · Gurugram, India
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                className="link-underline inline-flex min-h-[44px] items-center text-sm text-muted hover:text-fg"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <Magnetic>
          <button
            type="button"
            onClick={() => scrollToTarget(0)}
            aria-label="Back to top"
            className="glass flex h-12 w-12 items-center justify-center rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </Magnetic>
      </div>
      <p className="mt-10 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with React, GSAP & Motion.
      </p>
    </footer>
  );
}
