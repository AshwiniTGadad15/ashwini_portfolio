import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorText, isProjectHovered }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch screens to disable custom cursor on mobile
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
      {/* Small Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#22D3EE] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isProjectHovered ? 0 : 4),
          y: mousePosition.y - (isProjectHovered ? 0 : 4),
          width: isProjectHovered ? 0 : 8,
          height: isProjectHovered ? 0 : 8,
          opacity: isProjectHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Ring / Outer Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#8B5CF6]/50 backdrop-blur-[1px] flex items-center justify-center text-[10px] font-mono tracking-wider font-semibold uppercase text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        animate={{
          x: mousePosition.x - (isProjectHovered ? 60 : isHovered ? 24 : 16),
          y: mousePosition.y - (isProjectHovered ? 20 : isHovered ? 24 : 16),
          width: isProjectHovered ? 140 : isHovered ? 48 : 32,
          height: isProjectHovered ? 40 : isHovered ? 48 : 32,
          borderRadius: isProjectHovered ? '20px' : '50%',
          backgroundColor: isProjectHovered ? 'rgba(11, 11, 15, 0.95)' : isHovered ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
          borderColor: isProjectHovered ? 'rgba(34, 211, 238, 0.8)' : isHovered ? 'rgba(139, 92, 246, 0.8)' : 'rgba(255, 255, 255, 0.2)',
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {isProjectHovered && (
          <span className="text-[#22D3EE] font-bold tracking-widest text-[11px] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            {cursorText || 'VIEW PROJECT →'}
          </span>
        )}
      </motion.div>
    </>
  );
}
