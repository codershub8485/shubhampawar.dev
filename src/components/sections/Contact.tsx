import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Copy, Send } from 'lucide-react';
import { modes, profile, socials, type Mode } from '@/data/portfolio';
import { useUi } from '@/lib/ui-context';
import { EASE } from '@/lib/motion';
import { Magnetic } from '@/components/ui/Magnetic';
import { ModeToggle } from '@/components/ui/ModeToggle';

const PROJECT_TYPES = [
  'AI / LLM feature',
  'Web app',
  'Backend / API',
  'ML infrastructure',
  'Something else',
];
const TIMELINES = ['ASAP', 'Within a month', '1–3 months', 'Flexible'];

/**
 * No backend: the form composes an email in the visitor's mail client, so there is nothing
 * to configure or break on Vercel.
 */
function buildMailto(mode: Mode, data: Record<string, string>) {
  const subject =
    mode === 'project'
      ? `Project enquiry: ${data.type ?? ''} — ${data.name ?? ''}`
      : `Role opportunity for Shubham — ${data.company || data.name || ''}`;
  const lines =
    mode === 'project'
      ? [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Project type: ${data.type}`,
          `Timeline: ${data.timeline}`,
          '',
          data.message,
        ]
      : [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Company: ${data.company}`,
          `Role: ${data.role}`,
          '',
          data.message,
        ];
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

const field =
  'w-full rounded-2xl border bg-transparent px-4 py-3.5 text-base text-fg outline-none transition-colors duration-300 placeholder:text-muted/70 focus:border-cyan hairline';

export function Contact() {
  const { copyEmail, mode, toast } = useUi();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = 'Please add your name';
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? '')) next.email = 'Please add a valid email';
    if (!data.message?.trim()) next.message = 'A line or two is enough';
    setErrors(next);
    if (Object.keys(next).length) return;
    window.location.href = buildMailto(mode, data);
    toast('Opening your email app…');
  };

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1.5 text-xs text-red-400">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="container-x py-24 md:py-40">
      <p className="eyebrow mb-6 flex items-center gap-3">
        <span className="bg-accent inline-block h-px w-8" aria-hidden />
        09 — Contact
      </p>
      <h2
        id="contact-title"
        className="fill-hover font-display text-mega font-semibold"
        data-cursor="Hi"
      >
        Let&apos;s build something intelligent.
      </h2>

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="font-display text-2xl md:text-3xl"
            >
              {modes[mode].contactTitle}
            </motion.p>
          </AnimatePresence>
          <p className="mt-4 text-muted">
            Tell me a little about it and I&apos;ll reply from {profile.email}. Prefer to skip the
            form? Copy my email below.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={copyEmail}
                data-cursor="Copy"
                className="glass group flex min-h-[52px] items-center gap-3 rounded-full px-6 text-sm"
                aria-label={`Copy email address ${profile.email}`}
              >
                <span className="break-all">{profile.email}</span>
                <Copy className="h-4 w-4 shrink-0" aria-hidden />
              </button>
            </Magnetic>
            <ul className="flex flex-wrap gap-3">
              {socials
                .filter((s) => s.label !== 'Email')
                .map((s) => (
                  <li key={s.label}>
                    <Magnetic>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener"
                        data-cursor="Open"
                        className="glass flex min-h-[52px] items-center gap-2 rounded-full px-6 text-sm"
                      >
                        {s.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                    </Magnetic>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <form
          noValidate
          onSubmit={onSubmit}
          className="glass rounded-3xl p-6 md:p-10 lg:col-span-7"
          aria-label="Contact form"
        >
          <div className="mb-8">
            <ModeToggle id="contact-mode" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="eyebrow mb-2 block">
                Your name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                className={field}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-err' : undefined}
              />
              {err('name')}
            </div>
            <div>
              <label htmlFor="email" className="eyebrow mb-2 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={field}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-err' : undefined}
              />
              {err('email')}
            </div>
            <AnimatePresence mode="popLayout" initial={false}>
              {mode === 'project' ? (
                <motion.div
                  key="p"
                  className="contents"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label htmlFor="type" className="eyebrow mb-2 block">
                      Project type
                    </label>
                    <select id="type" name="type" className={`${field} bg-bg`}>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="eyebrow mb-2 block">
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" className={`${field} bg-bg`}>
                      {TIMELINES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="h"
                  className="contents"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label htmlFor="company" className="eyebrow mb-2 block">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="eyebrow mb-2 block">
                      Role
                    </label>
                    <input id="role" name="role" placeholder="e.g. AI Engineer" className={field} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow mb-2 block">
                {mode === 'project' ? 'What are you building?' : 'About the role'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${field} resize-y`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-err' : undefined}
              />
              {err('message')}
            </div>
          </div>
          <div className="mt-8">
            <Magnetic strength={0.3}>
              <button
                type="submit"
                data-cursor="Send"
                className="bg-accent group flex min-h-[56px] items-center gap-3 rounded-full px-8 font-medium text-white"
              >
                Send message
                <Send
                  className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-1"
                  aria-hidden
                />
              </button>
            </Magnetic>
          </div>
        </form>
      </div>
    </section>
  );
}
