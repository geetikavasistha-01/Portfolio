'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface StarsBackgroundProps {
  className?: string;
  starColor?: string;
  starCount?: number;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({ 
  className, 
  starColor = '#FFF',
  starCount = 150 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

      stars.forEach(star => {
        const flicker = Math.abs(Math.sin(Date.now() * star.twinkle * 0.01)) * star.opacity;
        ctx.globalAlpha = 0.4 + flicker * 0.6; 
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(star.x % canvas.width, star.y % canvas.height, star.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

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

  return <canvas ref={canvasRef} className={cn('pointer-events-none', className)} />;
};
