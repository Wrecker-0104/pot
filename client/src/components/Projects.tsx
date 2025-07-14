import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "ApnaVehicle",
      description: "Online vehicle marketplace with search filters and buyer-seller communication tools",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Web Development", "UI/UX", "Database"],
      details: [
        "Developed a user-friendly interface for vehicle listings and searches",
        "Implemented advanced filtering options for efficient vehicle discovery",
        "Created secure messaging system for buyer-seller communications"
      ]
    },
    {
      title: "Cancer Detection AI Chatbot",
      description: "Intelligent healthcare assistant leveraging machine learning for early cancer detection support",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["AI/ML", "Python", "NLP"],
      details: [
        "Developed AI-powered diagnostic assistant using deep learning algorithms",
        "Integrated medical knowledge base with NLP for symptom analysis",
        "Implemented secure patient data handling with HIPAA-compliant privacy measures",
        "Created intuitive conversational interface for healthcare professionals",
        "Achieved high accuracy in preliminary screening through ensemble learning"
      ]
    },
    {
      title: "AI Chatbot",
      description: "Python-based conversational agent with NLP capabilities",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "NLP", "ML"],
      details: [
        "Integrated natural language processing libraries for text understanding",
        "Developed response generation algorithms for contextual conversations",
        "Implemented learning capabilities for continuous improvement"
      ]
    },
    {
      title: "Snake Game",
      description: "Classic arcade game built with Python",
      image: "https://pixabay.com/get/g2fe1661a404aa62aad377e0662a87f3946fbf34306fdef25dee98d34b906af522356eaa211859b9c68c7370ca0f39dc010c4c4216731c2ca3c837aed54c52626_1280.jpg",
      tags: ["Python", "Game Dev", "Pygame"],
      details: [
        "Created responsive controls and game mechanics",
        "Implemented score tracking and level progression",
        "Designed visually appealing game elements"
      ]
    },
    {
      title: "Connect 4",
      description: "Two-player strategy game with CLI interface",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Game Logic", "CLI"],
      details: [
        "Developed game logic with win condition detection",
        "Created command-line interface for gameplay",
        "Implemented turn-based player interactions"
      ]
    },
    {
      title: "ICC Yukti 2.0 Project",
      description: "Third prize-winning startup project demo",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Innovation", "Startup", "3rd Prize"],
      details: [
        "Developed innovative solution for a competitive startup challenge",
        "Presented functional prototype to judges and industry experts",
        "Secured third place recognition among numerous competing teams"
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

    // Project card hover animations
    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, { duration: 0.3, scale: 1.05, ease: "power2.out" });
      });
      
      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, { duration: 0.3, scale: 1, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-dark-card rounded-2xl overflow-hidden shadow-2xl reveal transform transition-transform duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="text-primary hover:text-secondary transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="text-primary hover:text-secondary transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
