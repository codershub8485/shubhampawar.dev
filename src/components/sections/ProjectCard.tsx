import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { PipelineDiagram } from './PipelineDiagram';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = video.current;
    if (!v || reduced) return;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => undefined);
  };
  const stop = () => {
    const v = video.current;
    if (!v) return;
    v.pause();
    setPlaying(false);
  };

  return (
    <SpotlightCard
      tilt={4}
      cursorLabel={project.href ? 'Open' : project.video ? 'View' : undefined}
      className="flex h-full w-full flex-col overflow-hidden"
    >
      <article
        className="flex h-full flex-col"
        onPointerEnter={play}
        onPointerLeave={stop}
        onFocus={play}
        onBlur={stop}
        aria-labelledby={`proj-${project.id}`}
      >
        <div
          data-reveal
          className={`relative overflow-hidden bg-surface ${project.diagram ? 'sm:aspect-[16/10]' : 'aspect-[16/10]'}`}
          style={{ clipPath: 'inset(0 0 0 0 round 0px)' }}
        >
          {project.diagram ? (
            <div className="flex h-full items-center justify-center p-5 py-8 md:p-8">
              <PipelineDiagram pipeline={project.diagram} name={project.title} />
            </div>
          ) : project.video ? (
            <>
              <video
                ref={video}
                src={project.video}
                poster={project.poster}
                muted
                loop
                playsInline
                preload="none"
                aria-label={`${project.title} preview video`}
                className="h-full w-full object-cover object-top transition-transform duration-1000 ease-expo hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent transition-opacity duration-500 ${
                  playing ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </>
          ) : (
            <div
              aria-hidden
              className="flex h-full items-center justify-center bg-gradient-to-br from-violet/20 via-transparent to-cyan/15"
            >
              <span className="font-display text-7xl font-semibold text-fg/10">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-muted">{project.period}</p>
              <h3
                id={`proj-${project.id}`}
                className="mt-2 font-display text-2xl font-semibold md:text-3xl"
              >
                {project.title}
              </h3>
              <p className="text-gradient mt-1 text-sm font-medium">{project.subtitle}</p>
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener"
                aria-label={`Open ${project.title} live site`}
                className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-expo hover:rotate-45"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
          <ul className="mt-5 space-y-2 text-sm text-fg/75">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-2.5">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {b}
              </li>
            ))}
          </ul>
          <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
            {project.stack.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </SpotlightCard>
  );
}
