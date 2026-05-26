import React from 'react';
import { STICKY_NOTES } from '../../data/mockData';
import { motion } from 'framer-motion';

export const StickyNotes: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {STICKY_NOTES.map((note, idx) => (
          <div
            key={idx}
            className="p-8 w-full select-none z-10 flex flex-col justify-between min-h-[220px] rounded-xl bg-white dark:bg-transparent border border-black/[0.08] dark:border-white/[0.08]"
          >
            {/* Card Content Layer */}
            <div className="relative z-20 h-full flex flex-col">
              <div className="h-[2px] w-12 bg-[#c55a11] mb-8"></div>
              
              <div 
                className="text-[18px] leading-[1.75] text-black/75 dark:text-white/80 flex-grow"
              >
                {note.text}
              </div>
              
              <div 
                className="text-[10px] tracking-[0.2em] uppercase text-[#c55a11] mt-10"
              >
                {note.tag}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
