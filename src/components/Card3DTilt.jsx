import React, { useState, useRef } from 'react';

export default function Card3DTilt({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  onClick,
  onMouseEnter,
  onMouseLeave
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 60%)'
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * maxTilt;
    const rotateX = -percentY * maxTilt;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.1, 0.8, 0.2, 1)'
    });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.35,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%)`
      });
    }
  };

  const handleMouseLeaveInner = (e) => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    });
    setGlareStyle({
      opacity: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 60%)'
    });
    if (onMouseLeave) onMouseLeave(e);
  };

  const handleMouseEnterInner = (e) => {
    if (onMouseEnter) onMouseEnter(e);
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterInner}
      onMouseLeave={handleMouseLeaveInner}
      className={`relative transform-gpu preserve-3d ${className}`}
      style={{
        ...tiltStyle,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}

      {/* Dynamic 3D Glare Light Reflection Overlay */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: glareStyle.opacity,
            background: glareStyle.background,
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </div>
  );
}
