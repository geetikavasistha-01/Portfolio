import React from 'react';
import { PROJECTS } from '../../data/mockData';
import { AnalogCard } from '../common/AnalogCard';

export const ProjectsGrid: React.FC = () => {
  return (
    <section className="mb-32" id="projects">
      <h3 className="font-headline text-[32px] italic mb-12 flex items-center gap-4 text-secondary-fixed">
        Selected Works <span className="h-[1px] flex-grow bg-outline-variant/20"></span>
      </h3>
      
      <div className="grid md:grid-cols-2 gap-12 graph-paper p-10 rounded-2xl border border-outline-variant/5">
        {PROJECTS.map((project) => (
          <AnalogCard 
            key={project.title}
            className="bg-secondary-fixed p-4"
            style={{ rotate: project.rotation }}
          >
            <div className="aspect-[4/3] bg-surface overflow-hidden relative mb-6">
              <img 
                src={project.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            </div>
            
            <div className="px-2">
              <h5 className="font-headline text-2xl text-surface font-bold mb-2">{project.title}</h5>
              <p className="font-body text-[13px] text-surface/70 line-clamp-2 mb-4 italic">
                {project.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="font-label text-[12px] text-primary-container font-black">
                  {project.tag}
                </span>
                <span className="material-symbols-outlined text-surface">arrow_outward</span>
              </div>
            </div>
          </AnalogCard>
        ))}
      </div>
    </section>
  );
};
