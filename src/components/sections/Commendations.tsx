import React from 'react';
import { AWARDS } from '../../data/mockData';
import { motion } from 'framer-motion';

export const Commendations: React.FC = () => {
  return (
    <section className="mb-32" id="awards">
      <h3 className="font-headline text-[32px] italic mb-12 flex items-center gap-4 text-secondary-fixed">
        Commendations <span className="h-[1px] flex-grow bg-outline-variant/20"></span>
      </h3>
      
      <div className="grid md:grid-cols-2 gap-12">
        {AWARDS.map((award) => (
          <motion.div 
            key={award.event}
            className="relative bg-secondary-fixed p-10 border-4 border-double border-primary/20 shadow-2xl group cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary-container/80 [clip-path:polygon(0_0,100%_0,100%_100%)] flex items-center justify-center text-white">
              <span className="material-symbols-outlined -mt-4 -mr-4 rotate-45">{award.icon}</span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <h5 className="font-headline text-[28px] text-surface mb-2 font-bold">{award.title}</h5>
            <p className="font-body font-bold text-[15px] text-primary-container tracking-widest mb-4">
              {award.event}
            </p>
            <p className="font-body text-[15px] text-surface/70 italic leading-relaxed">
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
