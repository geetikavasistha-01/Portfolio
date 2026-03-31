import React from 'react';
import { EXPERIENCE_LOG } from '../../data/mockData';
import { AnalogCard } from '../common/AnalogCard';

export const ProfessionalLog: React.FC = () => {
  return (
    <section className="mb-32" id="experience">
      <h3 className="font-headline text-[32px] italic mb-12 flex items-center gap-4 text-secondary-fixed">
        Professional Log <span className="h-[1px] flex-grow bg-outline-variant/20"></span>
      </h3>
      
      <div className="relative pl-12 border-l-2 border-dashed border-primary/40 ml-4 space-y-16">
        {EXPERIENCE_LOG.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline dot */}
            <div className={`absolute -left-[58px] top-0 w-8 h-8 rounded-full bg-surface border-2 ${exp.markerColor} flex items-center justify-center`}>
              <div className={`w-2 h-2 rounded-full ${exp.dotColor}`}></div>
            </div>
            
            <AnalogCard 
              className={`bg-secondary-fixed text-[#2a1f1a] p-8 shadow-xl`}
              style={{ rotate: exp.rotation }}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 -mr-12 -mt-12 rounded-full blur-2xl"></div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-headline text-2xl">{exp.title}</h4>
                  <p className="font-body font-bold text-[15px] text-primary-container uppercase tracking-widest">
                    {exp.company}
                  </p>
                </div>
                <span className="font-label text-[12px] bg-primary/20 px-3 py-1 rounded text-primary-container font-bold">
                  {exp.date}
                </span>
              </div>
              <p className="font-body text-[16px] leading-relaxed opacity-90">
                {exp.description}
              </p>
            </AnalogCard>
          </div>
        ))}
      </div>
    </section>
  );
};
