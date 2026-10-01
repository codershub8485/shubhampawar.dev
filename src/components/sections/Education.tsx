import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function Education() {
  return (
    <section id="education" aria-labelledby="edu-title" className="container-x py-24 md:py-32">
      <SplitHeading id="edu-title" eyebrow="06 — Education" text="Foundations." />
      <SpotlightCard
        tilt={3}
        className="grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fg/[0.06]">
          <GraduationCap className="h-6 w-6 text-cyan" aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-2xl font-semibold md:text-3xl">{education.school}</h3>
          <p className="mt-1 text-muted">{education.degree}</p>
        </div>
        <div className="md:text-right">
          <p className="text-gradient font-display text-3xl font-semibold">{education.grade}</p>
          <p className="mt-1 font-mono text-sm text-muted">{education.period}</p>
        </div>
      </SpotlightCard>
    </section>
  );
}
