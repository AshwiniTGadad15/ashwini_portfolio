import React, { useEffect, useRef } from 'react';

export default function HeroOrbCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 440);
    let height = (canvas.height = canvas.parentElement.clientHeight || 440);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse interactive target for 3D tilt
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particles & Nodes
    const particleCount = 65;
    const particles = [];
    const codeSnippets = ['<React />', 'Python', 'const fn = () => {}', 'VTU 2027', 'REST API', 'Flask', 'PostgreSQL', 'Tailwind', 'CSE', 'JavaScript', 'Java', 'UI/UX'];
    const colors = ['#4F46E5', '#7C3AED', '#C026D3', '#06B6D4', '#2563EB'];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 140 + 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        baseRadius: radius,
        speed: 0.003 + Math.random() * 0.004,
        size: Math.random() * 3.5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        snippet: Math.random() > 0.65 ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : null,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for 3D parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const centerX = width / 2 + (mouse.x - width / 2) * 0.15;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.15;
      const orbRadius = Math.min(width, height) * 0.34;

      angleX += 0.006;
      angleY += 0.008;

      // 1. Draw outer 3D bright glass orb ambient lighting
      const ambientGlow = ctx.createRadialGradient(
        centerX - orbRadius * 0.3,
        centerY - orbRadius * 0.3,
        orbRadius * 0.1,
        centerX,
        centerY,
        orbRadius * 1.35
      );
      ambientGlow.addColorStop(0, 'rgba(79, 70, 229, 0.18)');
      ambientGlow.addColorStop(0.35, 'rgba(192, 38, 211, 0.12)');
      ambientGlow.addColorStop(0.75, 'rgba(6, 182, 212, 0.06)');
      ambientGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = ambientGlow;
      ctx.fill();

      // 2. Bright Glass Outer Rim Circle with Specular Light Highlight
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.25)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Specular Top Highlight arc for 3D Glass feel
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius - 2, Math.PI * 1.25, Math.PI * 1.75);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Inner Accent Rim Glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius - 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Render 3D Rotating Wireframe Latitude Rings for 3D Depth
      for (let ringIndex = -2; ringIndex <= 2; ringIndex++) {
        const ringY = (ringIndex / 3) * orbRadius;
        const ringRadius = Math.sqrt(Math.max(0, orbRadius * orbRadius - ringY * ringY));

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY + ringY * Math.cos(angleX * 0.5),
          ringRadius,
          ringRadius * Math.abs(Math.sin(angleX * 0.5)),
          angleY * 0.3,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 - Math.abs(ringIndex) * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // 4. Render 3D Particles and connecting mesh lines
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rotation around Y
        let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        let z1 = p.x * Math.sin(angleY) + p.z * Math.cos(angleY);

        // Rotation around X
        let y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = p.y * Math.sin(angleX) + z1 * Math.cos(angleX);

        // 3D Perspective Projection
        const scale = 340 / (340 + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y1 * scale;

        projected.push({ px, py, p, scale, z2 });
      }

      // Sort by Z for correct 3D depth rendering
      projected.sort((a, b) => b.z2 - a.z2);

      // Draw 3D connecting mesh lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            const alpha = (1 - dist / 85) * 0.3 * projected[i].scale;
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw node dots & bright code fragments
      for (let i = 0; i < projected.length; i++) {
        const { px, py, p, scale } = projected[i];

        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.snippet && scale > 0.85) {
          ctx.font = `700 ${Math.floor(11.5 * scale)}px "JetBrains Mono", monospace`;
          ctx.fillStyle = '#0F172A';
          ctx.fillText(p.snippet, px + 8, py + 4);
        }
      }

      // Center glowing core node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#4F46E5';
      ctx.shadowBlur = 16;
      ctx.shadowColor = '#4F46E5';
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] md:h-[480px] lg:h-[540px] flex items-center justify-center pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
