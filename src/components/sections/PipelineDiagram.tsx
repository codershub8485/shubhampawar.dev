import { motion } from 'motion/react';
import type { Pipeline } from '@/data/portfolio';
import { EASE } from '@/lib/motion';

/** Staged pipeline (e.g. Kaiju's Draft → Lint Refine → Test Refine) with animated flowing connectors. */
export function PipelineDiagram({ pipeline, name }: { pipeline: Pipeline; name: string }) {
  const nodes = pipeline.nodes;
  return (
    <figure
      className="w-full"
      aria-label={`${name} pipeline: ${nodes.map((n) => n.label).join(', then ')}`}
    >
      <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
        {nodes.map((n, i) => (
          <div key={n.id} className="flex flex-1 flex-col items-center sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.18 }}
              className="glass relative w-full rounded-2xl px-4 py-4 text-center sm:w-auto sm:flex-1"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Stage {i + 1}
              </p>
              <p className="mt-1 font-display text-lg font-semibold">{n.label}</p>
              <p className="mt-1 text-xs text-muted">{n.detail}</p>
            </motion.div>
            {i < nodes.length - 1 && (
              <svg
                aria-hidden
                className="h-10 w-6 shrink-0 sm:h-6 sm:w-14"
                viewBox="0 0 56 24"
                preserveAspectRatio="none"
              >
                <g className="hidden sm:inline">
                  <line
                    x1="0"
                    y1="12"
                    x2="48"
                    y2="12"
                    stroke="rgb(var(--line) / 0.15)"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="12"
                    x2="48"
                    y2="12"
                    stroke="rgb(var(--accent-b))"
                    strokeWidth="2"
                    strokeDasharray="4 8"
                    className="animate-flow"
                  />
                  <path
                    d="M46 6 L54 12 L46 18"
                    fill="none"
                    stroke="rgb(var(--accent-b))"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            )}
            {i < nodes.length - 1 && (
              <svg aria-hidden className="h-8 w-6 sm:hidden" viewBox="0 0 24 32">
                <line
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="26"
                  stroke="rgb(var(--accent-b))"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  className="animate-flow"
                />
                <path
                  d="M6 22 L12 30 L18 22"
                  fill="none"
                  stroke="rgb(var(--accent-b))"
                  strokeWidth="2"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-center font-mono text-[11px] text-muted">
        {pipeline.caption}
      </figcaption>
    </figure>
  );
}
