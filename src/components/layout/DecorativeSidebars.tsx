import React, { useEffect, useRef, useState } from 'react';

// --- Waypoints & interpolation ---

const leftWaypoints = [
  { y: 0, x: 36 }, { y: 200, x: 28 }, { y: 400, x: 44 }, { y: 600, x: 30 },
  { y: 800, x: 42 }, { y: 1000, x: 26 }, { y: 1200, x: 40 }, { y: 1400, x: 32 },
  { y: 1600, x: 44 }, { y: 1800, x: 28 }, { y: 2000, x: 38 }, { y: 2200, x: 30 },
  { y: 2400, x: 42 }, { y: 2600, x: 36 }, { y: 3000, x: 36 }
];

const rightWaypoints = [
  { y: 0, x: 36 }, { y: 200, x: 44 }, { y: 400, x: 28 }, { y: 600, x: 42 },
  { y: 800, x: 30 }, { y: 1000, x: 46 }, { y: 1200, x: 32 }, { y: 1400, x: 40 },
  { y: 1600, x: 28 }, { y: 1800, x: 44 }, { y: 2000, x: 34 }, { y: 2200, x: 42 },
  { y: 2400, x: 30 }, { y: 2600, x: 36 }, { y: 3000, x: 36 }
];

function getThreadX(y: number, waypoints: { y: number; x: number }[]): number {
  for (let i = 0; i < waypoints.length - 1; i++) {
    const a = waypoints[i];
    const b = waypoints[i + 1];
    if (y >= a.y && y <= b.y) {
      const t = (y - a.y) / (b.y - a.y);
      return a.x + t * (b.x - a.x);
    }
  }
  return 36;
}

// Build a smooth cubic bezier path through waypoints using Catmull-Rom → Bezier conversion
function buildSmoothPath(wps: { y: number; x: number }[]): string {
  if (wps.length < 2) return '';
  let d = `M ${wps[0].x},${wps[0].y}`;
  for (let i = 0; i < wps.length - 1; i++) {
    const p0 = wps[Math.max(0, i - 1)];
    const p1 = wps[i];
    const p2 = wps[i + 1];
    const p3 = wps[Math.min(wps.length - 1, i + 2)];
    // Catmull-Rom to cubic bezier control points
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
}

// --- Component ---

export const DecorativeSidebars = () => {
  const leftRef = useRef<SVGSVGElement>(null);
  const rightRef = useRef<SVGSVGElement>(null);

  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute('data-theme') !== 'light'
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!leftRef.current || !rightRef.current) return;
      const scrollY = window.scrollY;
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / Math.max(1, totalScroll);
      const maxTranslate = -2000;
      const translateY = progress * maxTranslate;
      leftRef.current.style.transform = `translateY(${translateY}px)`;
      rightRef.current.style.transform = `translateY(${translateY}px)`;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const threadColor = isDark ? '#D85A30' : '#c07a5a';
  const objectOpacity = isDark ? 0.45 : 0.55;
  const glowColor = isDark
    ? 'rgba(216, 90, 48, 0.9)'
    : 'rgba(192, 122, 90, 0.9)';

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '72px',
    pointerEvents: 'none',
    zIndex: 10,
    overflow: 'hidden'
  };

  const svgProps = {
    viewBox: "0 0 72 3000",
    preserveAspectRatio: "xMidYMin meet",
    style: { width: '100%', height: '3000px', willChange: 'transform' } as React.CSSProperties
  };

  const objStyle: React.SVGAttributes<SVGElement> = { stroke: threadColor, fill: 'none', strokeWidth: 1.2 };
  const lineStyle: React.SVGAttributes<SVGLineElement> = { stroke: threadColor, strokeWidth: 1 };

  // Precompute paths
  const leftPathD = buildSmoothPath(leftWaypoints);
  const rightPathD = buildSmoothPath(rightWaypoints);

  // Helper shorthand for left thread x
  const lx = (y: number) => getThreadX(y, leftWaypoints);
  const rx = (y: number) => getThreadX(y, rightWaypoints);

  // Connector length
  const CL = 30;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .decorative-sidebar {
            display: none !important;
          }
        }
        .thread-object {
          opacity: ${objectOpacity};
          transition: opacity 0.3s ease, filter 0.3s ease;
          pointer-events: all;
          cursor: default;
        }
        .thread-object:hover {
          opacity: 1;
          filter: drop-shadow(0 0 6px ${glowColor}) drop-shadow(0 0 12px ${glowColor});
        }
        .thread-object:hover .illustration {
          animation: sway 0.6s ease-in-out infinite;
          transform-origin: center top;
        }
        @keyframes sway {
          0%   { transform: rotate(0deg); }
          25%  { transform: rotate(3deg); }
          75%  { transform: rotate(-3deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      {/* ===== LEFT SIDEBAR ===== */}
      <div className="decorative-sidebar" style={{ ...containerStyle, left: 0 }}>
        <svg ref={leftRef} {...svgProps}>
          {/* Thread line */}
          <path d={leftPathD} fill="none" stroke={threadColor} strokeWidth="1.5" opacity="0.35" />

          {/* Bird — attachY=150 */}
          {(() => {
            const ay = 150; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M-10 0 Q-6 -8, 0 0 Q6 -8, 10 0 M0 0 Q0 6, -4 3" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Fish — attachY=350 */}
          {(() => {
            const ay = 350; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <ellipse cx="0" cy="0" rx="10" ry="5" {...objStyle} />
                  <polygon points="10,0 16,-4 16,4" {...objStyle} />
                  <circle cx="-4" cy="-2" r="1" fill={threadColor} />
                </g>
              </g>
            );
          })()}

          {/* Tree — attachY=550 */}
          {(() => {
            const ay = 550; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <line x1="0" y1="-10" x2="0" y2="15" {...objStyle} />
                  <polygon points="0,-15 -8,-5 8,-5" {...objStyle} />
                  <polygon points="0,-8 -10,2 10,2" {...objStyle} />
                  <polygon points="0,-1 -12,9 12,9" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Crescent moon — attachY=750 */}
          {(() => {
            const ay = 750; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M4 -10 A8 8 0 1 0 -1 5 A10 10 0 0 1 4 -10 Z" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Jellyfish — attachY=950 */}
          {(() => {
            const ay = 950; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M-10 0 A10 10 0 0 1 10 0 Z" {...objStyle} />
                  <path d="M-8 0 Q-10 5, -8 10 T-8 20 M-4 0 Q-6 5, -4 10 T-4 20 M0 0 Q-2 5, 0 10 T0 20 M4 0 Q2 5, 4 10 T4 20 M8 0 Q6 5, 8 10 T8 20" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Butterfly — attachY=1150 */}
          {(() => {
            const ay = 1150; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <line x1="0" y1="-5" x2="0" y2="5" {...objStyle} />
                  <path d="M0 -3 C-8 -10, -16 0, 0 1 C-16 2, -8 12, 0 5 M0 -3 C8 -10, 16 0, 0 1 C16 2, 8 12, 0 5" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Hot air balloon — attachY=1350 */}
          {(() => {
            const ay = 1350; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M0 -15 C-12 -15, -12 0, -6 5 L-2 10 L2 10 L6 5 C12 0, 12 -15, 0 -15 Z" {...objStyle} />
                  <rect x="-4" y="13" width="8" height="6" {...objStyle} />
                  <line x1="-2" y1="10" x2="-4" y2="13" {...objStyle} />
                  <line x1="2" y1="10" x2="4" y2="13" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Dragonfly — attachY=1550 */}
          {(() => {
            const ay = 1550; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <line x1="0" y1="-10" x2="0" y2="15" {...objStyle} />
                  <ellipse cx="-6" cy="-5" rx="6" ry="2" {...objStyle} />
                  <ellipse cx="6" cy="-5" rx="6" ry="2" {...objStyle} />
                  <ellipse cx="-6" cy="0" rx="5" ry="2" {...objStyle} />
                  <ellipse cx="6" cy="0" rx="5" ry="2" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* House — attachY=1750 */}
          {(() => {
            const ay = 1750; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <polygon points="0,-10 -12,0 12,0" {...objStyle} />
                  <rect x="-10" y="0" width="20" height="15" {...objStyle} />
                  <rect x="-3" y="5" width="6" height="10" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Star — attachY=1950 */}
          {(() => {
            const ay = 1950; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <polygon points="0,-10 3,-2 10,-2 5,3 7,10 0,6 -7,10 -5,3 -10,-2 -3,-2" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Whale — attachY=2150 */}
          {(() => {
            const ay = 2150; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M10 0 C10 -5, -10 -5, -10 5 C-10 10, 0 10, 6 10 C8 10, 10 5, 10 0 Z" {...objStyle} />
                  <path d="M10 0 L16 -5 L16 5 Z" {...objStyle} />
                  <path d="M0 -5 Q-6 -10, -2 -15 M0 -5 Q6 -10, 2 -15" {...objStyle} />
                  <circle cx="-4" cy="2" r="1" fill={threadColor} />
                </g>
              </g>
            );
          })()}

          {/* Leaf — attachY=2350 */}
          {(() => {
            const ay = 2350; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M0 0 C-6 10, -6 20, 0 25 C6 20, 6 10, 0 0 Z" {...objStyle} />
                  <line x1="0" y1="0" x2="0" y2="20" {...objStyle} />
                  <line x1="0" y1="8" x2="-3" y2="5" {...objStyle} />
                  <line x1="0" y1="12" x2="3" y2="9" {...objStyle} />
                  <line x1="0" y1="16" x2="-2" y2="14" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Kite — attachY=2550 */}
          {(() => {
            const ay = 2550; const tx = lx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <polygon points="0,-10 6,-2 0,10 -6,-2" {...objStyle} />
                  <line x1="0" y1="-10" x2="0" y2="10" {...objStyle} />
                  <line x1="-6" y1="-2" x2="6" y2="-2" {...objStyle} />
                  <path d="M0 10 Q-4 15, 0 20 T0 30" {...objStyle} />
                </g>
              </g>
            );
          })()}
        </svg>
      </div>

      {/* ===== RIGHT SIDEBAR ===== */}
      <div className="decorative-sidebar" style={{ ...containerStyle, right: 0 }}>
        <svg ref={rightRef} {...svgProps}>
          {/* Thread line */}
          <path d={rightPathD} fill="none" stroke={threadColor} strokeWidth="1.5" opacity="0.35" />

          {/* Telescope — attachY=200 */}
          {(() => {
            const ay = 200; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <polygon points="-6,-5 9,-15 11,-12 -4,-2" {...objStyle} />
                  <line x1="2" y1="-8" x2="-2" y2="5" {...objStyle} />
                  <line x1="2" y1="-8" x2="6" y2="5" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Saturn — attachY=400 */}
          {(() => {
            const ay = 400; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <circle cx="0" cy="0" r="8" {...objStyle} />
                  <ellipse cx="0" cy="0" rx="16" ry="4" transform="rotate(-15)" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* DNA helix — attachY=600 */}
          {(() => {
            const ay = 600; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M-6 -20 Q6 -10, -6 0 T-6 20" {...objStyle} />
                  <path d="M6 -20 Q-6 -10, 6 0 T6 20" {...objStyle} />
                  <line x1="-3" y1="-15" x2="3" y2="-15" {...objStyle} />
                  <line x1="-3" y1="-5" x2="3" y2="-5" {...objStyle} />
                  <line x1="-3" y1="5" x2="3" y2="5" {...objStyle} />
                  <line x1="-3" y1="15" x2="3" y2="15" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Compass rose — attachY=800 */}
          {(() => {
            const ay = 800; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <circle cx="0" cy="0" r="10" {...objStyle} />
                  <polygon points="0,-14 3,-3 11,0 3,3 0,14 -3,3 -11,0 -3,-3" {...objStyle} />
                  <circle cx="0" cy="0" r="1" fill={threadColor} />
                </g>
              </g>
            );
          })()}

          {/* Quill pen — attachY=1000 */}
          {(() => {
            const ay = 1000; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M8 -15 C4 -5, 0 5, -6 10 L-8 12 L-3 7 C2 0, 6 -10, 8 -15 Z" {...objStyle} />
                  <line x1="6" y1="-10" x2="2" y2="-12" {...objStyle} />
                  <line x1="3" y1="-5" x2="-1" y2="-7" {...objStyle} />
                  <line x1="0" y1="1" x2="-4" y2="-1" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Rocket — attachY=1200 */}
          {(() => {
            const ay = 1200; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M0 -15 Q6 -5, 4 5 L-4 5 Q-6 -5, 0 -15 Z" {...objStyle} />
                  <polygon points="-4,5 -8,10 -4,0" {...objStyle} />
                  <polygon points="4,5 8,10 4,0" {...objStyle} />
                  <path d="M-2 5 Q0 15, 2 5" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Hourglass — attachY=1400 */}
          {(() => {
            const ay = 1400; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <line x1="-6" y1="-8" x2="6" y2="-8" {...objStyle} />
                  <polygon points="-4,-8 4,-8 0,0" {...objStyle} />
                  <polygon points="0,0 -4,8 4,8" {...objStyle} />
                  <line x1="-6" y1="8" x2="6" y2="8" {...objStyle} />
                  <circle cx="0" cy="4" r="0.5" fill={threadColor} />
                  <circle cx="0" cy="6" r="0.5" fill={threadColor} />
                </g>
              </g>
            );
          })()}

          {/* Lightbulb — attachY=1600 */}
          {(() => {
            const ay = 1600; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M-5 -6 A6 6 0 1 1 5 -6 L3 0 L-3 0 Z" {...objStyle} />
                  <line x1="-2" y1="2" x2="2" y2="2" {...objStyle} />
                  <path d="M-2 0 Q0 -9, 2 0" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Camera — attachY=1800 */}
          {(() => {
            const ay = 1800; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <rect x="-10" y="-7" width="20" height="14" rx="2" {...objStyle} />
                  <circle cx="0" cy="0" r="4" {...objStyle} />
                  <rect x="4" y="-5" width="4" height="3" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Anchor — attachY=2000 */}
          {(() => {
            const ay = 2000; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <circle cx="0" cy="-10" r="2" {...objStyle} />
                  <line x1="0" y1="-8" x2="0" y2="8" {...objStyle} />
                  <line x1="-6" y1="-4" x2="6" y2="-4" {...objStyle} />
                  <path d="M-8 3 A10 10 0 0 0 8 3" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Snowflake — attachY=2200 */}
          {(() => {
            const ay = 2200; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <line x1="0" y1="-8" x2="0" y2="8" {...objStyle} />
                  <line x1="-7" y1="-4" x2="7" y2="4" {...objStyle} />
                  <line x1="-7" y1="4" x2="7" y2="-4" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Umbrella — attachY=2400 */}
          {(() => {
            const ay = 2400; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M-12 0 A12 12 0 0 1 12 0 Z" {...objStyle} />
                  <line x1="0" y1="0" x2="0" y2="12" {...objStyle} />
                  <path d="M0 12 A2 2 0 0 0 -4 12" {...objStyle} />
                  <line x1="0" y1="-12" x2="-6" y2="0" {...objStyle} />
                  <line x1="0" y1="-12" x2="6" y2="0" {...objStyle} />
                </g>
              </g>
            );
          })()}

          {/* Open book — attachY=2550 */}
          {(() => {
            const ay = 2550; const tx = rx(ay); const cy = ay + CL;
            return (
              <g className="thread-object">
                <line x1={tx} y1={ay} x2={tx} y2={cy} {...lineStyle} />
                <g className="illustration" transform={`translate(${tx}, ${cy}) scale(1.4)`}>
                  <path d="M-10 0 Q-5 5, 0 8 Q5 5, 10 0 L10 12 Q5 17, 0 20 Q-5 17, -10 12 Z" {...objStyle} />
                  <line x1="0" y1="8" x2="0" y2="20" {...objStyle} />
                  <line x1="-7" y1="5" x2="-3" y2="7" {...objStyle} />
                  <line x1="-7" y1="9" x2="-3" y2="11" {...objStyle} />
                  <line x1="7" y1="5" x2="3" y2="7" {...objStyle} />
                  <line x1="7" y1="9" x2="3" y2="11" {...objStyle} />
                </g>
              </g>
            );
          })()}
        </svg>
      </div>
    </>
  );
};
