import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  element: HTMLDivElement;
  size: number;
  color: string;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    const particleCount = window.innerWidth < 768 ? 40 : 60; // Reduce particles on mobile

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = 'particle absolute rounded-full';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.opacity = '0.6';
      particle.style.filter = 'blur(0.5px)';
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      container.appendChild(particle);

      const particleData: Particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        element: particle,
        size,
        color
      };

      particlesRef.current.push(particleData);
    }

    // Animation loop
    const animate = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= window.innerWidth) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= window.innerHeight) {
          particle.vy *= -1;
        }

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));

        // Update element position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;

        // Add some randomness to movement
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        particle.vx = Math.max(-1, Math.min(1, particle.vx));
        particle.vy = Math.max(-1, Math.min(1, particle.vy));
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      particlesRef.current.forEach(particle => {
        particle.x = Math.min(particle.x, window.innerWidth);
        particle.y = Math.min(particle.y, window.innerHeight);
      });
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particlesRef.current.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx -= (dx / distance) * force * 0.1;
          particle.vy -= (dy / distance) * force * 0.1;
          
          // Glow effect on interaction
          gsap.to(particle.element, {
            opacity: 0.9,
            scale: 1.5,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to(particle.element, {
            opacity: 0.6,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.innerHTML = '';
      }
      particlesRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="particles-container fixed inset-0 pointer-events-none z-0"
    />
  );
}
