import React from 'react';

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Black & Gold Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {/* SVG Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40" />

      {/* Top Left Radial Soft Gold Aura */}
      <div className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-radial from-[#F59E0B]/16 via-[#D4AF37]/8 to-transparent blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Bottom Right Radial Warm Amber Aura */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-radial from-[#D97706]/14 via-[#B45309]/6 to-transparent blur-[150px] pointer-events-none" />

      {/* Top Right Bright Warm Champagne Glow */}
      <div className="absolute top-[22%] right-[2%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-radial from-[#FACC15]/10 via-[#F59E0B]/5 to-transparent blur-[130px] pointer-events-none" />

      {/* Floating 3D Background Decorative Geometric Gold Shapes */}
      <div className="absolute top-[18%] left-[5%] w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#121218]/90 to-[#F59E0B]/20 border border-[#F59E0B]/30 backdrop-blur-md shadow-lg shadow-amber-500/10 animate-float-3d opacity-60 hidden md:block" />

      <div className="absolute top-[48%] right-[6%] w-32 h-32 rounded-full bg-gradient-to-br from-[#121218]/90 to-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-md shadow-lg shadow-yellow-500/10 animate-float-reverse-3d opacity-60 hidden md:block" />

      <div className="absolute top-[75%] left-[8%] w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#121218]/90 to-[#FACC15]/20 border border-[#FACC15]/30 backdrop-blur-md shadow-lg shadow-amber-500/10 animate-float-3d opacity-50 hidden md:block" />
    </div>
  );
}
