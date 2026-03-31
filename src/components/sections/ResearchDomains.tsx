import React from 'react';
import { RESEARCH_DOMAINS } from '../../data/mockData';
import { AnalogCard } from '../common/AnalogCard';

export const ResearchDomains: React.FC = () => {
  return (
    <section className="mb-32">
      <h3 className="font-headline text-[32px] italic mb-12 flex items-center gap-4 text-secondary-fixed">
        Research Domains <span className="h-[1px] flex-grow bg-outline-variant/20"></span>
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {RESEARCH_DOMAINS.map((domain) => (
          <AnalogCard
            key={domain.title}
            className="border-secondary-fixed/20 p-8 bg-surface-container group"
            style={{ rotate: domain.rotation }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-primary-container/10">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                {domain.icon}
              </span>
            </div>
            <h4 className="font-headline text-2xl mb-4 text-secondary-fixed">{domain.title}</h4>
            <p className="font-body text-on-surface-variant text-[15px] leading-relaxed">
              {domain.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {domain.tags.map(tag => (
                <span key={tag} className="text-[12px] font-label px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </AnalogCard>
        ))}
      </div>
    </section>
  );
};
