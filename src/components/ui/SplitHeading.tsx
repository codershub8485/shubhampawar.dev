import { useLayoutEffect, useRef, type ElementType } from 'react';
import { gsap } from '@/lib/gsap';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  eyebrow?: string;
  id?: string;
}

/** Masked, per-word slide-up reveal triggered on scroll. */
export function SplitHeading({ text, as: Tag = 'h2', className, eyebrow, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = root.querySelectorAll<HTMLElement>('[data-word]');
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.from(root, {
          opacity: 0,
          duration: 0.6,
          scrollTrigger: { trigger: root, start: 'top 85%' },
        });
      }, root);
      return () => ctx.revert();
    }
    const ctx = gsap.context(() => {
      gsap.from(words, {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.06,
        ease: 'expo.out',
        scrollTrigger: { trigger: root, start: 'top 85%' },
      });
      const eb = root.querySelector('[data-eyebrow]');
      if (eb) {
        gsap.from(eb, {
          opacity: 0,
          y: 12,
          duration: 0.8,
          scrollTrigger: { trigger: root, start: 'top 88%' },
        });
      }
    }, root);
    return () => ctx.revert();
  }, [text]);

  return (
    <div ref={ref} className="mb-12 md:mb-20">
      {eyebrow && (
        <p data-eyebrow className="eyebrow mb-4 flex items-center gap-3">
          <span className="bg-accent inline-block h-px w-8" aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={cn('font-display text-display font-semibold', className)}>
        <span className="sr-only">{text}</span>
        {text.split(' ').map((w, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-top">
            <span data-word className="inline-block will-change-transform">
              {w}
              {' '}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
