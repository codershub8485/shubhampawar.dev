import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { moreWork, type MoreWork as Item } from '@/data/portfolio';
import { EASE } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function Tile({ item, i }: { item: Item; i: number }) {
  const v = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const Wrapper = item.href ? 'a' : 'div';
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay: (i % 4) * 0.05 }}
    >
      <Wrapper
        {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener' } : {})}
        data-cursor={item.href ? 'Open' : item.kind === 'video' ? 'View' : undefined}
        className="glass group block overflow-hidden rounded-2xl"
        onPointerEnter={() => !reduced && v.current?.play().catch(() => undefined)}
        onPointerLeave={() => v.current?.pause()}
      >
        <div className="relative aspect-video overflow-hidden bg-surface">
          {item.kind === 'video' ? (
            <video
              ref={v}
              src={item.media}
              poster={item.poster}
              muted
              loop
              playsInline
              preload="none"
              aria-label={`${item.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-105"
            />
          ) : (
            <img
              src={item.media}
              alt={item.todo ? '' : item.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain p-10 opacity-80"
            />
          )}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent"
          />
        </div>
        <div className="flex items-start justify-between gap-3 p-4">
          <div>
            <h4 className={`font-display font-semibold ${item.todo ? 'text-muted' : ''}`}>
              {item.title}
            </h4>
            <p className="mt-1 text-xs text-muted">{item.description}</p>
          </div>
          {item.href && (
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:rotate-45"
              aria-hidden
            />
          )}
        </div>
      </Wrapper>
    </motion.li>
  );
}

const visible = moreWork.filter((m) => import.meta.env.DEV || !m.todo);

export function MoreWork() {
  if (!visible.length) return null;
  return (
    <div className="container-x mt-24 md:mt-32">
      <h3 className="eyebrow mb-8">More work</h3>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((m, i) => (
          <Tile key={m.id} item={m} i={i} />
        ))}
      </ul>
    </div>
  );
}
