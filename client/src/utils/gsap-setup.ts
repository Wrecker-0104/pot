import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const setupGSAP = () => {
  // Set default GSAP settings
  gsap.defaults({
    ease: "power2.out",
    duration: 1
  });

  // Configure ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    start: "top 80%",
    end: "bottom 20%"
  });
};

export { gsap, ScrollTrigger, TextPlugin };
