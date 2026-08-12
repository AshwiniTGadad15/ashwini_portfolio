import React from 'react';

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Fine Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* SVG Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-70" />

      {/* Top Left Radial Gradient Glow */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-radial from-[#8B5CF6]/15 via-[#8B5CF6]/5 to-transparent blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Bottom Right Radial Gradient Glow */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-radial from-[#22D3EE]/12 via-[#22D3EE]/3 to-transparent blur-[140px] pointer-events-none" />

      {/* Center Ambient Subtle Light */}
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-radial from-[#8B5CF6]/8 to-transparent blur-[150px] pointer-events-none" />
    </div>
  );
}
