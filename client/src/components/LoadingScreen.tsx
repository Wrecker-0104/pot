import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loading = loadingRef.current;
    const text = textRef.current;
    
    if (!loading || !text) return;

    const tl = gsap.timeline();
    
    tl.to(text, { duration: 1, opacity: 1, ease: "power2.out" })
      .to(text, { duration: 1, text: "Welcome to Portfolio...", ease: "power2.out" })
      .to(loading, { duration: 1, opacity: 0, ease: "power2.out", delay: 0.5 })
      .set(loading, { display: "none" });
  }, []);

  return (
    <div
      ref={loadingRef}
      className="loading-screen fixed top-0 left-0 w-full h-full bg-dark-bg flex justify-center items-center z-[10000]"
    >
      <div
        ref={textRef}
        className="loading-text text-4xl font-semibold opacity-0 gradient-text"
      >
        Loading Portfolio...
      </div>
    </div>
  );
}
