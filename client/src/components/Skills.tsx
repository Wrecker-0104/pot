import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      category: "Technical Skills",
      color: "primary",
      items: [
        { name: "Web Development", percentage: 90 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "Python", percentage: 85 },
        { name: "AI/ML", percentage: 80 },
      ]
    },
    {
      category: "Design & Tools",
      color: "secondary",
      items: [
        { name: "Web Design", percentage: 88 },
        { name: "Figma", percentage: 85 },
        { name: "Bug Resolution", percentage: 92 },
        { name: "Issue Debugging", percentage: 90 },
      ]
    },
    {
      category: "Soft Skills",
      color: "accent",
      items: [
        { name: "Team Leadership", percentage: 85 },
        { name: "Time Management", percentage: 88 },
        { name: "Problem Solving", percentage: 90 },
        { name: "Communication", percentage: 87 },
      ]
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

    // Skill progress animations
    const progressBars = sectionRef.current?.querySelectorAll('.skill-progress');
    progressBars?.forEach((bar) => {
      const progressElement = bar as HTMLElement;
      const width = progressElement.dataset.width;
      
      gsap.to(progressElement, {
        width: width + '%',
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: progressElement,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-dark-card p-8 rounded-2xl reveal">
              <h3 className={`text-2xl font-bold mb-6 text-${skillGroup.color}`}>{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-dark-surface rounded-full h-2">
                      <div 
                        className={`skill-progress bg-gradient-to-r from-${skillGroup.color} to-secondary h-2 rounded-full`}
                        data-width={skill.percentage}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
