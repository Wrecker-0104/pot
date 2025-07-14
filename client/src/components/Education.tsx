import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      title: "B.Tech [CSE(AI/ML)]",
      subtitle: "Computer Engineering",
      period: "Expected graduation: 07/2027",
      status: "Current",
      description: "Pursuing advanced studies in AI/ML",
      side: "left"
    },
    {
      title: "Senior Secondary (12th Grade)",
      subtitle: "GBSSS NO.1 NAJAFGARH, NAJAFGARH DELHI",
      period: "Completed: 2023 | Percentage: 74.5%",
      status: "2023",
      description: "CBSE Board",
      side: "right"
    },
    {
      title: "Secondary (10th Grade)",
      subtitle: "GBSSS NO.1 NAJAFGARH, NAJAFGARH DELHI",
      period: "Completed: 2021 | Percentage: 75%",
      status: "2021",
      description: "CBSE Board",
      side: "left"
    }
  ];

  const certifications = [
    {
      title: "Google Cybersecurity",
      subtitle: "Professional Certificate",
      icon: Shield
    },
    {
      title: "Career Essentials in Data Analysis",
      subtitle: "Microsoft & LinkedIn",
      icon: TrendingUp
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
    <section ref={sectionRef} id="education" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">Education & Training</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            
            {education.map((item, index) => (
              <div key={index} className="flex items-center mb-16 reveal">
                {item.side === 'left' ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-dark-card p-6 rounded-2xl shadow-2xl">
                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-text-muted mb-2">{item.subtitle}</p>
                        <p className="text-sm text-text-muted">{item.period}</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-dark-bg z-10"></div>
                    <div className="w-1/2 pl-8">
                      <div className="text-text-muted">
                        <p className="font-semibold">{item.status}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="text-text-muted">
                        <p className="font-semibold">{item.status}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full border-4 border-dark-bg z-10"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-dark-card p-6 rounded-2xl shadow-2xl">
                        <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                        <p className="text-text-muted mb-2">{item.subtitle}</p>
                        <p className="text-sm text-text-muted">{item.period}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text reveal">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-dark-card p-8 rounded-2xl shadow-2xl text-center reveal">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <cert.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                <p className="text-text-muted">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
