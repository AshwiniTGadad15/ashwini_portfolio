import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorText, isProjectHovered }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Center Glowing Gold Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#F59E0B] shadow-[0_0_10px_#F59E0B]"
        animate={{
          x: mousePosition.x - (isProjectHovered ? 0 : 4),
          y: mousePosition.y - (isProjectHovered ? 0 : 4),
          width: isProjectHovered ? 0 : 8,
          height: isProjectHovered ? 0 : 8,
          opacity: isProjectHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Follower Gold Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#F59E0B]/70 backdrop-blur-[2px] flex items-center justify-center text-[10px] font-mono tracking-wider font-bold uppercase text-white shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        animate={{
          x: mousePosition.x - (isProjectHovered ? 65 : isHovered ? 24 : 16),
          y: mousePosition.y - (isProjectHovered ? 20 : isHovered ? 24 : 16),
          width: isProjectHovered ? 150 : isHovered ? 48 : 32,
          height: isProjectHovered ? 42 : isHovered ? 48 : 32,
          borderRadius: isProjectHovered ? '24px' : '50%',
          backgroundColor: isProjectHovered ? 'rgba(10, 10, 15, 0.95)' : isHovered ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
          borderColor: isProjectHovered ? 'rgba(250, 204, 21, 0.9)' : isHovered ? 'rgba(245, 158, 11, 0.8)' : 'rgba(245, 158, 11, 0.4)',
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {isProjectHovered && (
          <span className="text-[#FACC15] font-extrabold tracking-widest text-[11px] drop-shadow-sm">
            {cursorText || 'VIEW PROJECT →'}
          </span>
        )}
      </motion.div>
    </>
  );
}
