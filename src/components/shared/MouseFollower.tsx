'use client';
import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-pink-400 mix-blend-difference"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        transition: 'all 0.1s ease',
      }}
    ></div>
  );
};

export default MouseFollower;
