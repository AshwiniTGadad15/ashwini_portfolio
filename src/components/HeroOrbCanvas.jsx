import React, { useEffect, useRef } from 'react';

export default function HeroOrbCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse interactive target
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Orb particles & nodes
    const particleCount = 45;
    const particles = [];
    const codeSnippets = ['<React />', 'Python', 'const fn = () => {}', '010101', 'REST API', 'Flask', 'PostgreSQL', 'DSA', 'CSS3', 'Django'];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 120 + 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        baseRadius: radius,
        speed: 0.003 + Math.random() * 0.005,
        size: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#8B5CF6' : '#22D3EE',
        snippet: Math.random() > 0.75 ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : null,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2 + (mouse.x - width / 2) * 0.15;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.15;
      const orbRadius = Math.min(width, height) * 0.32;

      angleX += 0.004;
      angleY += 0.006;

      // 1. Draw outer glass orb glow & gradient
      const gradient = ctx.createRadialGradient(
        centerX - orbRadius * 0.3,
        centerY - orbRadius * 0.3,
        orbRadius * 0.1,
        centerX,
        centerY,
        orbRadius * 1.2
      );
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.25)');
      gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.12)');
      gradient.addColorStop(0.85, 'rgba(11, 11, 15, 0.4)');
      gradient.addColorStop(1, 'rgba(5, 5, 5, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // 2. Glass Rim Circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner subtle cyan rim accent
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius - 2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.2)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // 3. Render 3D particles and lines
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
        const scale = 300 / (300 + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y1 * scale;

        projected.push({ px, py, p, scale, z2 });
      }

      // Sort by Z for correct depth buffering
      projected.sort((a, b) => b.z2 - a.z2);

      // Draw connecting mesh lines between nearby points
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            const alpha = (1 - dist / 75) * 0.15 * projected[i].scale;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw node dots & code fragments
      for (let i = 0; i < projected.length; i++) {
        const { px, py, p, scale } = projected[i];

        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.snippet && scale > 0.9) {
          ctx.font = `${Math.floor(10 * scale)}px "JetBrains Mono", monospace`;
          ctx.fillStyle = 'rgba(245, 245, 245, 0.7)';
          ctx.fillText(p.snippet, px + 8, py + 3);
        }
      }

      // Center glowing core dot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#22D3EE';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#22D3EE';
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
    <div className="relative w-full h-[360px] md:h-[480px] lg:h-[540px] flex items-center justify-center pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
