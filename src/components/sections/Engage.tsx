import { ArrowRight, Check, Download } from 'lucide-react';
import { engagements, profile, type Mode } from '@/data/portfolio';
import { scrollToTarget } from '@/lib/lenis';
import { useUi } from '@/lib/ui-context';
import { SplitHeading } from '@/components/ui/SplitHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Magnetic } from '@/components/ui/Magnetic';
import { cn } from '@/lib/cn';

/** Two side-by-side offers. The one matching the visitor's mode gets the animated border. */
export function Engage() {
  const { mode, setMode } = useUi();

  return (
    <section id="engage" aria-labelledby="engage-title" className="container-x py-24 md:py-40">
      <SplitHeading
        id="engage-title"
        eyebrow="08 — Work with me"
        text="Two ways to work together."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {(Object.keys(engagements) as Mode[]).map((m) => {
          const e = engagements[m];
          const featured = mode === m;
          return (
            <div
              key={m}
              className={cn(
                'rounded-[26px] p-px transition-opacity duration-500',
                featured ? 'conic-border' : 'opacity-80',
              )}
            >
              <SpotlightCard
                tilt={3}
                className="flex h-full flex-col p-8 md:p-12"
                cursorLabel={featured ? undefined : 'Pick'}
              >
                <div onClick={() => setMode(m)} className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="chip">{e.kicker}</span>
                    {featured && <span className="font-mono text-xs text-ok">● selected</span>}
                  </div>
                  <h3 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    {e.title}
                  </h3>
                  <ul className="mt-8 space-y-4">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-fg/85">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <Magnetic>
                      {m === 'hire' ? (
                        <a
                          href={profile.resume}
                          target="_blank"
                          rel="noopener"
                          data-cursor="Open"
                          className="btn-fill flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium"
                        >
                          <Download className="h-4 w-4" aria-hidden />
                          {e.cta}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setMode('project');
                            scrollToTarget('#contact');
                          }}
                          className="btn-fill flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium"
                        >
                          {e.cta}
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </button>
                      )}
                    </Magnetic>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
