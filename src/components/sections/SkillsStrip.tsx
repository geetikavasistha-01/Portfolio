import React from 'react';
import { TECH_STACK } from '../../data/mockData';

export const SkillsStrip: React.FC = () => {
  return (
    <section className="mb-32 p-12 bg-surface-container-low rounded-2xl border border-outline-variant/10 relative" id="stack">
      <div className="absolute top-4 right-8 font-hand text-primary opacity-60 rotate-6">Tech Stack Log</div>
      
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label text-[12px] uppercase tracking-widest font-bold">Core AI</button>
        <button className="px-6 py-2 hover:bg-surface-variant text-on-surface-variant rounded-full font-label text-[12px] uppercase tracking-widest transition-all">RAG</button>
        <button className="px-6 py-2 hover:bg-surface-variant text-on-surface-variant rounded-full font-label text-[12px] uppercase tracking-widest transition-all">ML</button>
        <button className="px-6 py-2 hover:bg-surface-variant text-on-surface-variant rounded-full font-label text-[12px] uppercase tracking-widest transition-all">Infra</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TECH_STACK.map(tech => (
          <div key={tech.title} className="group perspective-1000 h-16">
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
              
              <div className="absolute inset-0 bg-secondary-fixed/5 rounded-lg border border-outline-variant/20 flex items-center justify-center gap-3 [backface-visibility:hidden]">
                <span className="material-symbols-outlined text-primary-container">{tech.icon}</span>
                <span className="font-label text-[12px] font-medium">{tech.title}</span>
              </div>
              
              <div className="absolute inset-0 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center font-bold text-[12px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {tech.role}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
