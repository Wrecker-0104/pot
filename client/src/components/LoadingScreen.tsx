import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loading = loadingRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    
    if (!loading || !text || !progress) return;

    const tl = gsap.timeline();
    
    // Animate tech circles
    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        gsap.set(circle, { scale: 0, opacity: 0 });
        tl.to(circle, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: index * 0.1
        }, 0.2);
        
        // Rotating animation
        gsap.to(circle, {
          rotation: 360,
          duration: 2,
          ease: "none",
          repeat: -1
        });
      }
    });
    
    // Animate text
    tl.to(text, { 
      duration: 0.8, 
      opacity: 1, 
      y: 0,
      ease: "power2.out" 
    }, 0.5);
    
    // Progress bar animation
    tl.to(progress, {
      width: "100%",
      duration: 1.5,
      ease: "power2.out"
    }, 1);
    
    // Final fade out
    tl.to(loading, { 
      duration: 0.6, 
      opacity: 0, 
      ease: "power2.out",
      delay: 0.2
    })
    .set(loading, { display: "none" });
  }, []);

  return (
    <div
      ref={loadingRef}
      className="loading-screen fixed top-0 left-0 w-full h-full bg-dark-bg flex flex-col justify-center items-center z-[10000]"
    >
      {/* Tech Circles */}
      <div className="relative mb-8">
        <div className="flex space-x-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={(el) => circleRefs.current[i] = el}
              className="w-4 h-4 border-2 border-primary rounded-full relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Center Tech Symbol */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border-2 border-secondary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div
        ref={textRef}
        className="loading-text text-2xl font-semibold opacity-0 gradient-text transform translate-y-4 mb-6"
      >
        Initializing Portfolio...
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 h-1 bg-dark-surface rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-4 h-full w-full p-8">
          {[...Array(96)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
