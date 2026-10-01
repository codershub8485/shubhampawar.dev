import { motion } from 'motion/react';
import { Brain, CheckCircle2, Cloud, Code2, Database, LayoutTemplate, Server } from 'lucide-react';
import { marqueeRows, skills, type SkillGroup } from '@/data/portfolio';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Marquee } from '@/components/ui/Marquee';
import { EASE } from '@/lib/motion';
import { cn } from '@/lib/cn';

const ICONS: Record<SkillGroup['icon'], typeof Brain> = {
  brain: Brain,
  code: Code2,
  server: Server,
  layout: LayoutTemplate,
  cloud: Cloud,
  database: Database,
  check: CheckCircle2,
};

const SPAN: Record<SkillGroup['span'], string> = {
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  normal: '',
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 md:py-40">
      <div className="container-x">
        <SplitHeading id="skills-title" eyebrow="03 — Skills" text="The stack I ship with." />
        <div className="grid auto-rows-auto gap-4 md:grid-cols-3">
          {skills.map((g, i) => {
            const Icon = ICONS[g.icon];
            return (
              <motion.div
                key={g.id}
                className={cn(SPAN[g.span])}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.06 }}
              >
                <SpotlightCard className="h-full p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fg/[0.06]">
                      <Icon className="h-5 w-5 text-cyan" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-fg/[0.05] px-3 py-1.5 text-sm text-fg/80"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="mt-16 space-y-2">
        <Marquee items={marqueeRows[0] ?? []} />
        <Marquee items={marqueeRows[1] ?? []} reverse />
      </div>
    </section>
  );
}
