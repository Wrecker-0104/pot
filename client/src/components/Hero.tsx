import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, Github, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroNameRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroSocialRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2 });
    
    tl.to(heroNameRef.current, { duration: 1, opacity: 1, y: 0, ease: "power2.out" })
      .to(heroSubtitleRef.current, { duration: 1, opacity: 1, y: 0, ease: "power2.out" }, "-=0.5")
      .to(heroSocialRef.current, { duration: 1, opacity: 1, y: 0, ease: "power2.out" }, "-=0.5")
      .to(heroCtaRef.current, { duration: 1, opacity: 1, y: 0, ease: "power2.out" }, "-=0.5");
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="hero-content">
          <h1
            ref={heroNameRef}
            className="text-6xl md:text-8xl font-bold mb-6 opacity-0 transform translate-y-12"
          >
            <span className="gradient-text">ARPIT</span>
            <br />
            <span className="gradient-text">PANDEY</span>
          </h1>
          <p
            ref={heroSubtitleRef}
            className="text-xl md:text-2xl text-text-muted mb-8 opacity-0 transform translate-y-12"
          >
            Full Stack Developer & AI/ML Enthusiast
          </p>
          <div
            ref={heroSocialRef}
            className="flex justify-center space-x-6 mb-12 opacity-0 transform translate-y-12"
          >
            <a
              href="mailto:pandeyarpit0104@gmail.com"
              className="text-3xl hover:text-primary transition-colors"
            >
              <Mail size={32} />
            </a>
            <a
              href="tel:8505957042"
              className="text-3xl hover:text-primary transition-colors"
            >
              <Phone size={32} />
            </a>
            <a href="#" className="text-3xl hover:text-primary transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/arpitpandey-" className="text-3xl hover:text-primary transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
          <button
            ref={heroCtaRef}
            className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform opacity-0 transform translate-y-12"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-text-muted" />
      </div>
    </section>
  );
}
