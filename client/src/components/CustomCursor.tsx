import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const animateFollower = () => {
      followerPosition.current.x += (mousePosition.current.x - followerPosition.current.x) * 0.1;
      followerPosition.current.y += (mousePosition.current.y - followerPosition.current.y) * 0.1;
      
      follower.style.left = `${followerPosition.current.x}px`;
      follower.style.top = `${followerPosition.current.y}px`;
      
      requestAnimationFrame(animateFollower);
    };

    const handleMouseEnter = () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, .project-card').forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, .project-card').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full pointer-events-none z-[9999] transition-all duration-300 mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="cursor-follower fixed w-10 h-10 border border-primary/30 rounded-full pointer-events-none z-[9998] transition-all duration-300"
      />
    </>
  );
}
