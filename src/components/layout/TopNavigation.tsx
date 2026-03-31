import React from 'react';
import { NAV_LINKS } from '../../data/mockData';
import { motion } from 'framer-motion';

export const TopNavigation: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 max-w-[1400px] left-1/2 bg-[#131313] font-headline text-lg tracking-tight"
    >
      <div className="text-2xl font-bold tracking-tighter text-secondary-fixed font-headline">
        The Agentic Mind
      </div>
      
      <div className="hidden md:flex gap-8 items-center font-label text-[13px] tracking-[0.08em] uppercase">
        {NAV_LINKS.map((link, idx) => (
          <a 
            key={link.label}
            href={link.href}
            className={`font-medium transition-colors duration-300 ${
              idx === 0 
                ? "text-primary border-b-2 border-primary pb-1 font-bold" 
                : "text-secondary-fixed/70 hover:text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-95 transition-transform text-[13px] tracking-[0.08em] border-none outline-none">
        Hire Me
      </button>
    </motion.nav>
  );
};
