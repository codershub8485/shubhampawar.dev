import { cn } from '@/lib/cn';

interface Props {
  items: string[];
  reverse?: boolean;
}

export function Marquee({ items, reverse }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className="marquee relative flex overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
      aria-label={items.join(', ')}
      role="list"
    >
      <div
        className={cn(
          'marquee-track flex w-max shrink-0 gap-3 will-change-transform',
          reverse ? 'animate-marquee-rev' : 'animate-marquee',
        )}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            role={i < items.length ? 'listitem' : undefined}
            aria-hidden={i >= items.length}
            className="glass whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-sm text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
