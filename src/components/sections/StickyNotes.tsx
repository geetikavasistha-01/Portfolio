import React from 'react';
import { STICKY_NOTES } from '../../data/mockData';
import { motion } from 'framer-motion';

export const StickyNotes: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative h-[300px] md:h-auto">
      {STICKY_NOTES.map((note, idx) => (
        <motion.div
          key={idx}
          className={`text-[#2a1f1a] p-6 shadow-lg hover:z-10 transition-all hover:scale-105 font-hand text-xl w-64 absolute md:relative`}
          style={{ 
            backgroundColor: note.theme, 
            rotate: note.rotation,
            top: window.innerWidth < 768 ? note.top : '0',
            left: window.innerWidth < 768 ? note.left : '0'
          }}
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: note.rotation }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, type: 'spring', stiffness: 200 }}
        >
          <div className={`w-full h-4 ${note.barColor} mb-4 rounded-sm`}></div>
          {note.text}
          <div className="mt-4 text-xs font-label opacity-40 uppercase tracking-widest">
            {note.tag}
          </div>
        </motion.div>
      ))}
    </section>
  );
};
