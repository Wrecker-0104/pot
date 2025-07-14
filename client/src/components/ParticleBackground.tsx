import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticles = () => {
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute w-0.5 h-0.5 bg-primary/60 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.animation = 'float 6s ease-in-out infinite';
        container.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="particles-container fixed inset-0 pointer-events-none z-0"
    />
  );
}
