import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'expo.out', duration: 1 });

export { gsap, ScrollTrigger };
