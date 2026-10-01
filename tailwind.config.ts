import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        violet: 'rgb(var(--accent-a) / <alpha-value>)',
        cyan: 'rgb(var(--accent-b) / <alpha-value>)',
        ok: 'rgb(var(--ok) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3rem, 11vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        display: ['clamp(2.25rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        mega: ['clamp(2.75rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'marquee-rev': { from: { transform: 'translateX(-50%)' }, to: { transform: 'translateX(0)' } },
        ping2: { '75%, 100%': { transform: 'scale(2.2)', opacity: '0' } },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate3d(4%, -3%, 0) rotate(8deg) scale(1.08)' },
        },
        flow: { to: { strokeDashoffset: '-24' } },
        scrollcue: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(200%)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee-rev 40s linear infinite',
        ping2: 'ping2 1.6s cubic-bezier(0,0,0.2,1) infinite',
        aurora: 'aurora 22s ease-in-out infinite',
        flow: 'flow 0.8s linear infinite',
        scrollcue: 'scrollcue 2s cubic-bezier(0.22,1,0.36,1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
