import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Mountain, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Accomplishments() {
  const sectionRef = useRef<HTMLElement>(null);

  const accomplishments = [
    {
      title: "Mountain Climber",
      description: "Embracing challenges with resilience and determination through mountain climbing adventures.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      icon: Mountain
    },
    {
      title: "Wrestling Champion",
      description: "Excellence in wrestling, teaching discipline, strength, and strategic thinking.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      icon: Zap
    },
    {
      title: "Strong Team Player",
      description: "Thriving in collaborative environments, whether in sports, academics, or leadership roles.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      icon: Users
    }
  ];

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
    <section ref={sectionRef} id="accomplishments" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">Accomplishments</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal">
              <div className="bg-dark-card p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Trophy size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">ICC Yukti 2.0</h3>
                    <p className="text-text-muted">Third Prize Winner</p>
                  </div>
                </div>
                <p className="text-text-muted mb-4">
                  Secured third prize in the ICC Yukti 2.0 Startup Project Demo Day, 
                  a prestigious competition showcasing innovative ideas and entrepreneurial talent.
                </p>
                <p className="text-sm text-text-muted">
                  This recognition reflects dedication, hard work, and problem-solving skills 
                  in developing an impactful project.
                </p>
              </div>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Startup competition"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accomplishments.map((accomplishment, index) => (
              <div key={index} className="bg-dark-card p-6 rounded-2xl shadow-2xl text-center reveal">
                <img
                  src={accomplishment.image}
                  alt={accomplishment.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <accomplishment.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{accomplishment.title}</h4>
                <p className="text-text-muted text-sm">{accomplishment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
