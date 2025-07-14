import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Initialize GSAP settings
      gsap.defaults({
        ease: "power2.out",
        duration: 1
      });

      // Set up ScrollTrigger defaults
      ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
        start: "top 80%",
        end: "bottom 20%"
      });

      initialized.current = true;
    }
  }, []);

  return gsap;
};
