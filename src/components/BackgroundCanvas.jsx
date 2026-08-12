import React from 'react';

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Bright Light Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {/* SVG Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Top Left Radial Soft Indigo Aura */}
      <div className="absolute -top-[12%] -left-[8%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-radial from-[#4F46E5]/14 via-[#7C3AED]/8 to-transparent blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Bottom Right Radial Cyan-Blue Aura */}
      <div className="absolute -bottom-[12%] -right-[8%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-radial from-[#06B6D4]/14 via-[#2563EB]/6 to-transparent blur-[150px] pointer-events-none" />

      {/* Top Right Bright Warm Pink Aura */}
      <div className="absolute top-[25%] right-[2%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-radial from-[#EC4899]/10 via-[#C026D3]/5 to-transparent blur-[130px] pointer-events-none" />

      {/* Floating 3D Background Decorative Geometric Polyhedrons */}
      <div className="absolute top-[18%] left-[5%] w-24 h-24 rounded-2xl bg-gradient-to-tr from-white/80 to-[#4F46E5]/20 border border-white/90 backdrop-blur-md shadow-lg shadow-indigo-500/10 animate-float-3d opacity-60 hidden md:block" />

      <div className="absolute top-[45%] right-[6%] w-32 h-32 rounded-full bg-gradient-to-br from-white/90 to-[#06B6D4]/20 border border-white/90 backdrop-blur-md shadow-lg shadow-cyan-500/10 animate-float-reverse-3d opacity-60 hidden md:block" />

      <div className="absolute top-[75%] left-[8%] w-28 h-28 rounded-3xl bg-gradient-to-tr from-white/80 to-[#C026D3]/20 border border-white/90 backdrop-blur-md shadow-lg shadow-fuchsia-500/10 animate-float-3d opacity-50 hidden md:block" />
    </div>
  );
}
