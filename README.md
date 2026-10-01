# Shubham Pawar — Portfolio

Single-page portfolio for **Shubham Pawar, AI Engineer & Full Stack Engineer**.

**Stack:** Vite · React 18 · TypeScript (strict) · Tailwind CSS (CSS-variable design tokens, dark/light) · Motion · GSAP + ScrollTrigger · Lenis · React Three Fiber · lucide-react.

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Components only render that data.

## Scripts

```bash
npm install
npm run dev          # local dev server (also shows the TODO "More work" tiles)
npm run build        # type-check + production build to dist/
npm run preview      # serve dist/ locally
npm run lint         # ESLint
npm run format       # Prettier
```

## Deploy (Vercel)

`vercel.json` already pins everything, so the defaults just work:

| Setting | Value |
|---|---|
| Framework | Vite |
| Install | `npm ci` (uses the committed `package-lock.json`, which includes the Linux esbuild/rollup binaries) |
| Build | `npm run build` (type-check + `vite build`) |
| Output | `dist` |
| Node | 20.11+ (`engines` in package.json) |

Also included:
- Long-term caching for hashed JS/CSS/fonts.
- One-week caching for videos and posters.
- Basic security headers.

No environment variables or serverless functions are needed. The contact form opens the visitor's email app, so there's nothing to configure.

Deploy by pushing to the GitHub repo connected to Vercel, or from this folder with `npx vercel --prod`.

## Full-time + freelance

- The hero and contact toggle switches between **Full-time role** and **Freelance project** (labelled "I'm looking for"). It changes the pitch, the primary CTA, the highlighted "Work with me" card and the contact form fields.
- Share-able links:
  - `https://shubhampawar-dev.vercel.app/?for=freelance` for clients.
  - `?for=hire` for recruiters.
- Services, process and engagement copy lives in `src/data/portfolio.ts` (`services`, `processSteps`, `engagements`, `modes`). Review it before publishing.

## Structure

```
src/
  data/portfolio.ts        all copy, links, stats, projects
  styles/globals.css       tokens (dark + light), grain, spotlight, utilities
  lib/                     gsap setup, lenis handle, motion easing, UI context
  hooks/                   useLenis, useMagnetic, useReducedMotion, useIsTouch,
                           useActiveSection, useHideOnScroll, useTheme
  components/
    ui/                    Preloader, Cursor, ScrollProgress, Background, Magnetic,
                           SplitHeading, ScrambleText, Counter, SpotlightCard,
                           Marquee, StatusPill, Toast, ThemeToggle, CommandPalette, ModeToggle
    layout/                Navbar, Footer
    sections/              Hero, About, KineticBand, Services, Skills, Experience,
                           Projects, ProjectCard, PipelineDiagram, MoreWork,
                           Education, Process, Engage, Contact
    three/NeuralField.tsx  lazy-loaded particle network (hero)
public/
  assets/posters/          poster frames extracted from the .webm previews
  og-image.png, favicon.svg, robots.txt, sitemap.xml
```

## Accessibility & motion

- `prefers-reduced-motion`: no Lenis, no pinning or parallax, no scramble, and simple fades only.
- Custom cursor and magnetic effects are off on touch devices.
- `Ctrl/⌘ + K` opens the command palette.
