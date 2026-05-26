import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Brain, Network, Shield, Leaf, type LucideIcon } from 'lucide-react';

interface RadialItem {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  angle: number;
  icon: LucideIcon;
  href: string;
}

const ORBITAL_ITEMS: RadialItem[] = [
  {
    id: 'agentic',
    title: 'Agentic AI Systems',
    subtitle: 'Autonomous Logic & Multi-Agent Loops',
    details: 'Orchestrating stateful agent topologies, workflow routers, tool-use loops, and memory stores.',
    angle: 45, // Top-Right
    icon: Brain,
    href: '#stack',
  },
  {
    id: 'climate',
    title: 'Climate Infrastructure',
    subtitle: 'Carbon-Aware Engineering',
    details: 'Dynamic spatio-temporal solar yield forecasting, green computing loops, and emission audits.',
    angle: 135, // Top-Left
    icon: Leaf,
    href: '#stack',
  },
  {
    id: 'safety',
    title: 'Alignment & Safety',
    subtitle: 'Safe Intelligence Paradigms',
    details: 'Preference modeling optimization, automated validation red-teaming, and real-time moderation guardrails.',
    angle: 225, // Bottom-Left
    icon: Shield,
    href: '#stack',
  },
  {
    id: 'infra',
    title: 'Distributed Systems',
    subtitle: 'Fault-Tolerant Pipelines',
    details: 'High-throughput stream processing, scalable orchestration, cluster topology, and low-latency cache layers.',
    angle: 315, // Bottom-Right
    icon: Network,
    href: '#stack',
  },
];

export const RadialNav: React.FC = () => {
  const [activeId, setActiveId] = React.useState('agentic');
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  const [isDark, setIsDark] = React.useState(true);
  const shouldReduceMotion = useReducedMotion();

  // Monitor theme changes
  React.useEffect(() => {
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

  const activeItem = ORBITAL_ITEMS.find((item) => item.id === activeId) || ORBITAL_ITEMS[0];
  const center = 144; // Half of w-72 (288px)
  const radius = 96; // Orbit circle radius

  const getCoords = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center - radius * Math.sin(rad),
    };
  };

  const handleNodeClick = (item: RadialItem) => {
    setActiveId(item.id);
    const targetElement = document.querySelector(item.href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center select-none">
      {/* 288px Core Visualization Area */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* SVG connector tracks */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Orbital path guides */}
          <circle 
            cx={center} 
            cy={center} 
            r={radius} 
            fill="none" 
            className="stroke-zinc-200 dark:stroke-zinc-800/40 transition-colors duration-500" 
            strokeWidth={1} 
            strokeDasharray="4 4" 
          />
          <circle 
            cx={center} 
            cy={center} 
            r={radius - 48} 
            fill="none" 
            className="stroke-zinc-200 dark:stroke-zinc-800/20 transition-colors duration-500" 
            strokeWidth={1} 
          />
          
          {/* Active Connector Lines (Center -> Satellites) */}
          {ORBITAL_ITEMS.map((item) => {
            const coords = getCoords(item.angle);
            const isActive = activeId === item.id;
            const isHovered = hoveredId === item.id;
            const isLighted = isActive || isHovered;
            
            return (
              <motion.line
                key={item.id}
                x1={center}
                y1={center}
                x2={coords.x}
                y2={coords.y}
                className="transition-colors duration-300"
                stroke={isLighted ? '#d95f3b' : isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}
                strokeWidth={isLighted ? 2 : 1}
                animate={isLighted && !shouldReduceMotion ? { strokeWidth: [1, 2.5, 2] } : {}}
                transition={{ duration: 0.3 }}
              />
            );
          })}
        </svg>

        {/* Center Node: Safe Intelligence Core */}
        <motion.div 
          className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center cursor-pointer border border-[#d95f3b]/20 transition-all duration-500 shadow-lg dark:shadow-none animate-none"
          style={{
            backgroundColor: isDark ? 'rgba(15, 15, 15, 0.95)' : '#ffffff',
            boxShadow: isDark 
              ? '0 0 25px -5px rgba(217,95,59,0.15), inset 0 1px 0 0 rgba(255,255,255,0.02)' 
              : '0 4px 20px -2px rgba(0,0,0,0.05)'
          }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
        >
          {/* Pulsing ring inside core */}
          <div className="absolute inset-0 rounded-full border border-[#d95f3b]/10 animate-pulse pointer-events-none" />
          
          <span className="font-label text-[9px] uppercase tracking-[0.25em] text-[#d95f3b] dark:text-[#f4604d] font-bold">
            SAFE
          </span>
          <span className="font-headline text-[9px] uppercase tracking-wider text-zinc-800 dark:text-zinc-100 font-extrabold leading-none mt-0.5">
            INTELLIGENCE
          </span>
          <span className="font-label text-[7px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold mt-1">
            CORE
          </span>
        </motion.div>

        {/* Satellites */}
        {ORBITAL_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;
          const isSelected = isActive || isHovered;
          const coords = getCoords(item.angle);
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className="absolute z-20"
              style={{
                left: coords.x,
                top: coords.y,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleNodeClick(item)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
            >
              {/* Orbital Glow Ring on select */}
              {isSelected && (
                <motion.div
                  layoutId="glow-ring"
                  className="absolute inset-[-6px] rounded-full border border-[#d95f3b]/30 animate-pulse pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}

              {/* Node container */}
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border focus:outline-none focus:ring-1 focus:ring-[#d95f3b]/30 ${
                  isSelected
                    ? 'bg-[#d95f3b] border-[#d95f3b] text-white'
                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
                aria-label={item.title}
                title={item.title}
              >
                <Icon size={16} strokeWidth={isSelected ? 2 : 1.5} />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Contextual Description HUD Panel */}
      <div 
        className="mt-6 w-80 p-4 rounded-xl transition-all duration-300 relative overflow-hidden text-center z-10"
        style={{
          backgroundColor: isDark ? 'rgba(24, 24, 27, 0.4)' : 'rgba(250, 250, 250, 0.85)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(217, 95, 59, 0.1)',
          boxShadow: isDark ? '0 10px 30px -10px rgba(0,0,0,0.5)' : '0 6px 20px -10px rgba(0,0,0,0.02)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 5 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d95f3b] animate-pulse" />
              <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-[#d95f3b] dark:text-[#f4604d]">
                {activeItem.title}
              </h4>
            </div>
            <p className="font-headline text-[9px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-2">
              {activeItem.subtitle}
            </p>
            <p className="font-body text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300">
              {activeItem.details}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
