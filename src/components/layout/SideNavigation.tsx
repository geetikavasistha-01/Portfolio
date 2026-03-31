import React from 'react';
import { SIDE_NAV } from '../../data/mockData';
import { motion } from 'framer-motion';

export const SideNavigation: React.FC = () => {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
      className="hidden lg:flex fixed left-0 top-0 h-full w-20 flex-col items-center py-12 gap-8 border-r border-outline-variant/10 bg-surface-container-lowest z-40 font-label text-[10px] uppercase"
    >
      <div className="flex flex-col gap-10 mt-20">
        {SIDE_NAV.map((item, idx) => (
          <div 
            key={item.label}
            className={`flex flex-col items-center gap-2 cursor-pointer transition-transform ${
              idx === 0 
                ? "text-primary scale-110 group" 
                : "text-secondary-fixed/40 hover:text-primary hover:rotate-6"
            }`}
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: item.fill ? "'FILL' 1" : "" }}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </motion.aside>
  );
};
