import React from 'react';
import { HERO_DATA } from '../../data/mockData';
import { AnalogCard } from '../common/AnalogCard';


export const HeroSection: React.FC = () => {
  return (
    <section className="relative mb-32" id="about">
      <AnalogCard 
        className="bg-secondary-fixed text-surface p-10 md:p-16 rotate-[-1deg]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Red Spiral Binding */}
        <div className="absolute left-0 top-0 bottom-0 w-8 spiral-binding opacity-20 z-0"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
          <div className="flex-1">
            <h1 className="font-hand text-5xl md:text-7xl text-primary-container mb-2">{HERO_DATA.name}</h1>
            <h2 className="font-label text-sm tracking-widest text-on-secondary-fixed-variant opacity-80 mb-8">{HERO_DATA.subtitle}</h2>
            <p className="font-headline text-5xl md:text-7xl leading-tight mb-8 text-surface-container-lowest">
              {HERO_DATA.headline[0]} <br/>
              <span className="italic font-light">{HERO_DATA.headline[1]}</span>
            </p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative w-full aspect-square border-2 border-primary/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-primary/40 animate-pulse">
                smart_toy
              </span>
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={HERO_DATA.image} 
                  alt="Avatar representation" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* CSS Ticker */}
        <div className="mt-12 overflow-hidden whitespace-nowrap border-t border-b border-primary/20 py-3 relative z-10">
          <div className="inline-block animate-scroll font-label text-xs font-bold uppercase tracking-tighter text-on-secondary-fixed-variant">
             {HERO_DATA.ticker}
          </div>
        </div>
      </AnalogCard>
    </section>
  );
};
