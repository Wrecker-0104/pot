import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, GraduationCap, Mountain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text reveal">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="reveal text-left">
              <p className="text-lg text-text-muted mb-6">
                Highly-motivated Computer Science student with a passion for AI/ML and web development. 
                Strong work ethic, adaptability, and exceptional interpersonal skills. 
                Adept at working effectively unsupervised and quickly mastering new skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={20} />
                  <span>Roshanpura Najafgarh Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-primary" size={20} />
                  <span>B.Tech CSE (AI/ML) - Expected 2027</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="text-primary" size={20} />
                  <span>Mountain Climber & Wrestler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
