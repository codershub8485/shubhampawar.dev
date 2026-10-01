export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const GSAP_EASE = 'expo.out';

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
