import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function HeroField() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let animationId = null;
    let width = 0;
    let height = 0;

    const pointer = { x: 0.5, y: 0.45, targetX: 0.5, targetY: 0.45 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Smooth cursor easing
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      const glowX = pointer.x * width;
      const glowY = pointer.y * height;

      // Soft cursor spotlight gradient
      const radial = ctx.createRadialGradient(
        glowX,
        glowY,
        10,
        glowX,
        glowY,
        Math.max(width, height) * 0.48
      );
      radial.addColorStop(0, 'rgba(212, 255, 79, 0.13)');
      radial.addColorStop(0.45, 'rgba(123, 140, 255, 0.07)');
      radial.addColorStop(1, 'rgba(7, 8, 10, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Reactive dot lattice
      const spacing = width < 640 ? 34 : 44;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const baseX = c * spacing;
          const baseY = r * spacing;

          const dx = glowX - baseX;
          const dy = glowY - baseY;
          const dist = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - dist / 240);

          const wave = reducedMotion ? 0 : Math.sin(time * 0.0014 + c * 0.35 + r * 0.25) * 2.5;
          const offsetX = reducedMotion ? 0 : -dx * influence * 0.09 + wave;
          const offsetY = reducedMotion ? 0 : -dy * influence * 0.09 + wave;

          const radius = 1 + influence * 1.9;
          ctx.beginPath();
          ctx.arc(baseX + offsetX, baseY + offsetY, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            influence > 0.25
              ? `rgba(212, 255, 79, ${0.18 + influence * 0.55})`
              : 'rgba(244, 242, 237, 0.12)';
          ctx.fill();
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = (e.clientX - rect.left) / Math.max(rect.width, 1);
      pointer.targetY = (e.clientY - rect.top) / Math.max(rect.height, 1);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    if (reducedMotion) {
      drawFrame(0);
    } else {
      const loop = (t) => {
        drawFrame(t);
        animationId = requestAnimationFrame(loop);
      };
      animationId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}