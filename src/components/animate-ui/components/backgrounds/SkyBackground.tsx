'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkyBackgroundProps {
  className?: string;
  starColor?: string;
  starCount?: number;
}

export const SkyBackground: React.FC<SkyBackgroundProps> = ({
  className,
  starColor = '#FFF',
  starCount = 150
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(true);

  // Monitor theme changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme !== 'light');
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Stars canvas logic (active only in dark mode to save CPU/GPU)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * 3000,
      y: Math.random() * 3000,
      size: Math.random() * 1.0 + 0.2,
      opacity: Math.random(),
      twinkle: Math.random() * 0.05 + 0.01
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only draw stars if dark mode is active
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme !== 'light') {
        stars.forEach((star) => {
          const flicker = Math.abs(Math.sin(Date.now() * star.twinkle * 0.01)) * star.opacity;
          ctx.globalAlpha = 0.4 + flicker * 0.6;
          ctx.fillStyle = starColor;
          ctx.beginPath();
          ctx.arc(
            star.x % canvas.width,
            star.y % canvas.height,
            star.size * 1.5,
            0,
            Math.PI * 2
          );
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starColor, starCount]);

  return (
    <div className={cn('fixed inset-0 -z-10 pointer-events-none overflow-hidden sky-bg-container', className)}>
      {/* Light Mode: Daytime Sky Gradient & Image */}
      <div
        className="absolute inset-0 sky-bg-light"
        style={{ opacity: isDark ? 0 : 1 }}
      />

      {/* Dark Mode: Night/Space Gradient */}
      <div
        className="absolute inset-0 sky-bg-dark"
        style={{ opacity: isDark ? 1 : 0 }}
      />

      {/* Stars Canvas (transitions opacity) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none stars-canvas"
        style={{ opacity: isDark ? 0.85 : 0 }}
      />
    </div>
  );
};
