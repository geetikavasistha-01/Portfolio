import React from 'react';
import { motion } from 'framer-motion';
import { Database, Network, Cpu, Activity, ShieldCheck, Boxes } from 'lucide-react';

// --- Premium Telemetry Visualizations (matching the design image) ---

const RAGVisual = ({ colorClass }: { colorClass: string }) => {
  const accentHex = colorClass.includes('blue') ? '#3b82f6' : '#60a5fa';
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 80" fill="none" overflow="visible">
        {/* Central Heptagon/Octagon Node */}
        <motion.polygon
          points="100,28 112,35 112,47 100,54 88,47 88,35"
          stroke={accentHex}
          strokeWidth="1.5"
          fill="rgba(59, 130, 246, 0.1)"
          animate={{ scale: [1, 1.05, 1], rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="100" cy="41" r="3" fill={accentHex} className="animate-pulse" />

        {/* Converging/Diverging Data Paths */}
        <path d="M 10,25 Q 50,20 88,35" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        <path d="M 10,41 L 88,41" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
        <path d="M 10,57 Q 50,62 88,47" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />

        <path d="M 112,35 Q 150,20 190,25" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        <path d="M 112,41 L 190,41" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
        <path d="M 112,47 Q 150,62 190,57" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />

        {/* Dynamic Signals */}
        <motion.circle r="2" fill={accentHex} animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 10,25 Q 50,20 88,35')" }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
        <motion.circle r="2" fill={accentHex} animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 10,41 L 88,41')" }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }} />
        <motion.circle r="2" fill={accentHex} animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 10,57 Q 50,62 88,47')" }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.2 }} />

        <motion.circle r="2" fill={accentHex} animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 112,35 Q 150,20 190,25')" }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.8 }} />
        <motion.circle r="2" fill={accentHex} animate={{ offsetDistance: ["0%", "100%"] }} style={{ offsetPath: "path('M 112,41 L 190,41')" }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 1.2 }} />
      </svg>
    </div>
  );
};

const AgentsVisual = ({ colorClass }: { colorClass: string }) => {
  const accentHex = colorClass.includes('emerald') ? '#10b981' : '#34d399';
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 80" fill="none" overflow="visible">
        {/* Connective Mesh Lines */}
        <path d="M 30,40 L 70,25 L 100,45 L 130,25 L 170,40 L 130,55 L 100,45 L 70,55 Z" stroke={accentHex} strokeWidth="1" strokeDasharray="2 2" className="opacity-20" />
        <path d="M 70,25 L 70,55 M 130,25 L 130,55" stroke={accentHex} strokeWidth="0.75" className="opacity-15" />

        {/* Nodes */}
        {[
          { cx: 30, cy: 40, r: 3 },
          { cx: 70, cy: 25, r: 4 },
          { cx: 70, cy: 55, r: 3 },
          { cx: 100, cy: 45, r: 5 },
          { cx: 130, cy: 25, r: 3.5 },
          { cx: 130, cy: 55, r: 4 },
          { cx: 170, cy: 40, r: 3 },
        ].map((node, idx) => (
          <circle
            key={idx}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={idx === 3 ? accentHex : "rgba(16, 185, 129, 0.2)"}
            stroke={accentHex}
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${idx * 0.3}s` }}
          />
        ))}

        {/* Packet Signals */}
        <motion.circle r="1.8" fill={accentHex} animate={{ cx: [30, 70, 100, 130, 170], cy: [40, 25, 45, 55, 40] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle r="1.8" fill={accentHex} animate={{ cx: [170, 130, 100, 70, 30], cy: [40, 25, 45, 55, 40] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </svg>
    </div>
  );
};

const InferenceVisual = ({ colorClass }: { colorClass: string }) => {
  const accentHex = colorClass.includes('orange') ? '#f97316' : '#fb923c';
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      {/* Background Frequency Grid Bars */}
      <div className="absolute inset-x-4 bottom-2 flex items-end justify-between h-16 opacity-10">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-orange-500 rounded-t"
            animate={{ height: [`${10 + Math.sin(i * 0.5) * 20}%`, `${30 + Math.cos(i * 0.8) * 40}%`, `${10 + Math.sin(i * 0.5) * 20}%`] }}
            transition={{ duration: 2 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 80" fill="none" overflow="visible">
        {/* Main Waveforms */}
        <motion.path
          d="M 10,40 Q 50,15 100,40 T 190,40"
          stroke={accentHex}
          strokeWidth="2"
          className="opacity-80"
          animate={{
            d: [
              "M 10,40 Q 50,15 100,40 T 190,40",
              "M 10,40 Q 50,65 100,40 T 190,40",
              "M 10,40 Q 50,15 100,40 T 190,40"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 10,40 Q 50,55 100,40 T 190,40"
          stroke={accentHex}
          strokeWidth="1"
          className="opacity-40"
          animate={{
            d: [
              "M 10,40 Q 50,55 100,40 T 190,40",
              "M 10,40 Q 50,25 100,40 T 190,40",
              "M 10,40 Q 50,55 100,40 T 190,40"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
};

const SystemsVisual = ({ colorClass }: { colorClass: string }) => {
  const accentHex = colorClass.includes('purple') ? '#a855f7' : '#c084fc';
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 80" fill="none" overflow="visible">
        {/* Central Core */}
        <g transform="translate(100,40)">
          {/* Central Cube Wireframe Representation */}
          <motion.polygon
            points="0,-10 9,-5 9,5 0,10 -9,5 -9,-5"
            stroke={accentHex}
            strokeWidth="1.2"
            fill="rgba(168, 85, 247, 0.1)"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <line x1="0" y1="-10" x2="0" y2="10" stroke={accentHex} strokeWidth="0.8" className="opacity-40" />
          <line x1="-9" y1="-5" x2="9" y2="5" stroke={accentHex} strokeWidth="0.8" className="opacity-40" />
          <line x1="9" y1="-5" x2="-9" y2="5" stroke={accentHex} strokeWidth="0.8" className="opacity-40" />
        </g>

        {/* Orbit Rings */}
        <ellipse cx="100" cy="40" rx="60" ry="18" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" className="opacity-20" />
        <ellipse cx="100" cy="40" rx="85" ry="25" stroke={accentHex} strokeWidth="1" strokeDasharray="4 4" className="opacity-15" />

        {/* Orbiting Entities */}
        <motion.circle
          r="2.5"
          fill={accentHex}
          animate={{
            cx: [100 - 60, 100, 100 + 60, 100, 100 - 60],
            cy: [40, 40 + 18, 40, 40 - 18, 40],
            r: [2.5, 3.5, 2.5, 1.5, 2.5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          r="2"
          fill={accentHex}
          animate={{
            cx: [100 + 85, 100, 100 - 85, 100, 100 + 85],
            cy: [40, 40 - 25, 40, 40 + 25, 40],
            r: [2, 1, 2, 3, 2]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>
    </div>
  );
};

const SafetyVisual = ({ colorClass }: { colorClass: string }) => {
  const accentHex = colorClass.includes('rose') ? '#f43f5e' : '#fb7185';
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 80" fill="none" overflow="visible">
        {/* Pulsing Concentric Radar Rings */}
        {[18, 32, 48].map((radius, idx) => (
          <motion.circle
            key={idx}
            cx="100"
            cy="40"
            r={radius}
            stroke={accentHex}
            strokeWidth="0.75"
            strokeDasharray="2 2"
            className="opacity-30"
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Sweeping Line Effect */}
        <motion.line
          x1="100"
          y1="40"
          x2="148"
          y2="40"
          stroke={accentHex}
          strokeWidth="1.5"
          className="opacity-20"
          style={{ originX: "100px", originY: "40px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Central Safe Shield Indicator */}
        <g transform="translate(93,33) scale(0.6)">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke={accentHex}
            strokeWidth="2.5"
            fill="rgba(244, 63, 94, 0.15)"
            className="animate-pulse"
          />
        </g>
      </svg>
    </div>
  );
};

const MultiAgentVisual = ({ colorClass }: { colorClass: string }) => {
  const accentHex = colorClass.includes('cyan') ? '#06b6d4' : '#22d3ee';
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 80" fill="none" overflow="visible">
        {/* Decentralized Swarm Connections */}
        <path d="M 50,40 L 100,40 M 150,40 L 100,40 M 75,20 L 100,40 M 125,20 L 100,40 M 75,60 L 100,40 M 125,60 L 100,40" stroke={accentHex} strokeWidth="1" className="opacity-25" />
        <path d="M 50,40 L 75,20 L 125,20 L 150,40 L 125,60 L 75,60 Z" stroke={accentHex} strokeWidth="0.75" strokeDasharray="3 3" className="opacity-20" />

        {/* Swarm Node Group */}
        {[
          { cx: 100, cy: 40, r: 5, isCenter: true },
          { cx: 50, cy: 40, r: 3 },
          { cx: 75, cy: 20, r: 3 },
          { cx: 125, cy: 20, r: 3 },
          { cx: 150, cy: 40, r: 3 },
          { cx: 125, cy: 60, r: 3 },
          { cx: 75, cy: 60, r: 3 },
        ].map((node, idx) => (
          <circle
            key={idx}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={node.isCenter ? accentHex : "rgba(6, 182, 212, 0.2)"}
            stroke={accentHex}
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${idx * 0.2}s` }}
          />
        ))}

        {/* Message Routing Signals */}
        <motion.circle r="1.5" fill={accentHex} animate={{ cx: [50, 100], cy: [40, 40] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
        <motion.circle r="1.5" fill={accentHex} animate={{ cx: [150, 100], cy: [40, 40] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }} />
        <motion.circle r="1.5" fill={accentHex} animate={{ cx: [75, 100], cy: [20, 40] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.2 }} />
        <motion.circle r="1.5" fill={accentHex} animate={{ cx: [125, 100], cy: [60, 40] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }} />
      </svg>
    </div>
  );
};

// --- Data ---

const RESEARCH_MODULES = [
  {
    id: "rag-scale",
    title: "Scaling RAG",
    descriptor: "Context orchestration",
    icon: Database,
    Visual: RAGVisual,
    color: "from-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/30",
    accent: "text-blue-500 dark:text-blue-400",
    bgAccent: "bg-blue-500",
  },
  {
    id: "rl-agents",
    title: "Autonomous Agents",
    descriptor: "RL workflows",
    icon: Network,
    Visual: AgentsVisual,
    color: "from-emerald-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/30",
    accent: "text-emerald-500 dark:text-emerald-400",
    bgAccent: "bg-emerald-500",
  },
  {
    id: "edge-infer",
    title: "Edge Inference",
    descriptor: "CoreML optimization",
    icon: Cpu,
    Visual: InferenceVisual,
    color: "from-orange-500/10 to-transparent",
    borderGlow: "group-hover:border-orange-500/30",
    accent: "text-orange-500 dark:text-orange-400",
    bgAccent: "bg-orange-500",
  },
  {
    id: "dist-sys",
    title: "Distributed Systems",
    descriptor: "Fault-tolerance",
    icon: Activity,
    Visual: SystemsVisual,
    color: "from-purple-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/30",
    accent: "text-purple-500 dark:text-purple-400",
    bgAccent: "bg-purple-500",
  },
  {
    id: "safe-ai",
    title: "Safe Intelligence",
    descriptor: "Red teaming",
    icon: ShieldCheck,
    Visual: SafetyVisual,
    color: "from-rose-500/10 to-transparent",
    borderGlow: "group-hover:border-rose-500/30",
    accent: "text-rose-500 dark:text-rose-400",
    bgAccent: "bg-rose-500",
  },
  {
    id: "multi-agent",
    title: "Multi-Agent Coordination",
    descriptor: "Distributed reasoning",
    icon: Boxes,
    Visual: MultiAgentVisual,
    color: "from-cyan-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/30",
    accent: "text-cyan-500 dark:text-cyan-400",
    bgAccent: "bg-cyan-500",
  }
];

// --- Animations ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

// --- Component ---

export const CurrentFocus: React.FC = () => {
  return (
    <section className="mb-8 relative pt-16 pb-4">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 px-6">

        {/* Minimal Section Header (White bold text from the mockup image) */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl text-orange tracking-tight" style={{ fontFamily: '"IM Fell DW Pica", serif', fontStyle: 'italic' }}>
            Current Focus
          </h3>
        </div>

        {/* 3-Column Grid Layout (exactly like the mockup design) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {RESEARCH_MODULES.map((mod) => (
            <motion.div
              key={mod.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-2xl border border-gray-800/40 bg-[#08090d]/60 backdrop-blur-md p-6 transition-all duration-500 hover:bg-[#0c0d12]/90 hover:border-gray-700/80 ${mod.borderGlow}`}
            >
              {/* Subtle Glowing Radial Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Card Header (Icon, Title, Descriptor, Dot & Check) */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {/* Styled Icon Wrapper */}
                  <div className="p-2 rounded-xl bg-gray-900/30 border border-gray-800/40 group-hover:border-gray-700/60 transition-colors">
                    <mod.icon className={`w-7 h-7 ${mod.accent}`} />
                  </div>

                  {/* Title & Descriptor */}
                  <div className="flex flex-col">
                    <h4 className="font-sans font-semibold text-[17px] text-white tracking-tight leading-snug">
                      {mod.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 mt-0.5">
                      {mod.descriptor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3.5">
                  {/* Glowing Status Dot */}
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${mod.bgAccent}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${mod.bgAccent}`}></span>
                  </span>

                  {/* Circular Check Indicator */}
                  <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center transition-colors duration-300 group-hover:border-gray-600 bg-[#0c0d12]">
                    <svg
                      className={`w-3.5 h-3.5 ${mod.accent}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.polyline
                        points="20 6 9 17 4 12"
                        variants={{
                          hidden: { pathLength: 0 },
                          hover: { pathLength: 1 }
                        }}
                        initial="hidden"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tech Visual Component Area (Taller visual box spanning width) */}
              <div className="relative z-10 w-full h-28 flex items-center justify-center rounded-xl bg-gray-950/20 border border-gray-900/50 mt-4 overflow-hidden group-hover:border-gray-800/40 transition-colors">
                <mod.Visual colorClass={mod.accent} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
