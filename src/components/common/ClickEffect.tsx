import React, { useEffect, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

const COLORS = ['#378ADD', '#1D9E75', '#D85A30', '#7F77DD', '#BA7517'];

interface Dot {
  id: string;
  x: number;
  y: number;
  color: string;
  size: number;
  dx: number;
  dy: number;
}

export const ClickEffect: React.FC = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const colorIndex = useRef(0);

  const handleClick = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const color = COLORS[colorIndex.current];
    colorIndex.current = (colorIndex.current + 1) % COLORS.length;

    const newDots: Dot[] = Array.from({ length: 10 }).map(() => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 30 + Math.random() * 50; // Random distance between 30 and 80px
      return {
        id: Math.random().toString(36).substring(2, 9) + '-' + Date.now(),
        x: clientX,
        y: clientY,
        color,
        size: 5 + Math.random() * 7, // Random size between 5 and 12px
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
      };
    });

    setDots(prev => [...prev, ...newDots]);

    // Remove the dots exactly after the CSS animation completes (600ms)
    setTimeout(() => {
      setDots(prev => prev.filter(dot => !newDots.find(nd => nd.id === dot.id)));
    }, 600);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {dots.map(dot => (
        <DotElement key={dot.id} dot={dot} />
      ))}
    </div>,
    document.body
  );
};

const DotElement: React.FC<{ dot: Dot }> = ({ dot }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Triggers the CSS transition in the next paint frame
    const frame = requestAnimationFrame(() => {
      const nextFrame = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(nextFrame);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: dot.y - dot.size / 2,
        left: dot.x - dot.size / 2,
        width: dot.size,
        height: dot.size,
        backgroundColor: dot.color,
        borderRadius: '50%',
        transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
        transform: animate 
          ? `translate(${dot.dx}px, ${dot.dy}px) scale(0)` 
          : 'translate(0px, 0px) scale(1)',
        opacity: animate ? 0 : 1,
      }}
    />
  );
};
