import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Accomplishments from '@/components/Accomplishments';
import Contact from '@/components/Contact';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-dark-bg text-text-primary font-inter overflow-x-hidden">
      <CustomCursor />
      <LoadingScreen />
      <ParticleBackground />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Accomplishments />
        <Contact />
      </main>
      
      <footer className="bg-dark-surface py-8 border-t border-dark-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-muted mb-4 md:mb-0">
              <p>&copy; 2024 Arpit Pandey. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">Terms of Service</a>
              <a href="#contact" className="text-text-muted hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
