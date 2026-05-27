import React from 'react';
import { AWARDS } from '../../data/mockData';
import { motion } from 'framer-motion';

export const Commendations: React.FC = () => {
  const rotations = ['-1.5deg', '0.8deg', '-0.5deg'];

  return (
    <section className="mb-32 bg-[#0D0B0A] p-8 md:p-12 rounded-3xl border border-gray-800/40 relative overflow-hidden" id="awards">
      {/* Playful title with IM FELL font and white color, no underline */}
      <h3 
        className="italic mb-12 text-white w-fit"
        style={{ fontSize: '2.5rem', fontFamily: '"IM Fell DW Pica", serif', fontStyle: 'italic' }}
      >
        Commendations
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {AWARDS.map((award, index) => (
          <motion.div 
            key={award.event}
            className="relative p-6 cursor-pointer overflow-hidden rounded-xl"
            style={{ 
              rotate: rotations[index % rotations.length],
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: '#1A0A00',
              boxShadow: '6px 6px 0px #1A0A00',
              backgroundColor: '#FEF3EC',
              backgroundImage: 'radial-gradient(rgba(255, 107, 53, 0.12) 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
            }}
            whileHover={{ 
              rotate: 0,
              scale: 1.02,
              boxShadow: '8px 8px 0px #1A0A00',
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Exaggerated Corner Ribbon */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 100,0 100,100" fill="#FF6B35" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="#1A0A00" strokeWidth="2.5" />
              </svg>
              {/* Icon positioned on top of the ribbon */}
              <div className="absolute top-4 right-4 flex items-center justify-center text-white select-none">
                <span className="material-symbols-outlined text-2xl rotate-45">{award.icon}</span>
              </div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            
            {/* Title: Winner / Category */}
            <h5 className="font-bold text-[#1A0A00] mb-2 pr-12" style={{ fontSize: '1.25rem', lineHeight: '1.2', fontFamily: '"EB Garamond", serif' }}>
              {award.title}
            </h5>
            
            {/* Subtitle: Event */}
            <div>
              <span 
                className="inline-block uppercase font-bold tracking-wider text-[#E84C1E] pb-0.5"
                style={{ 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.12em', 
                  fontFamily: '"EB Garamond", serif'
                }}
              >
                {award.event}
              </span>
            </div>
            
            {/* Description */}
            <p className="font-body italic leading-relaxed" style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#3D1C00' }}>
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
