import React from 'react';
import { FOOTER_SOCIALS } from '../../data/mockData';

export const FooterCTA: React.FC = () => {
  return (
    <footer className="w-full bg-[#141210] pt-24 pb-12 px-6 flex flex-col items-center overflow-hidden" id="connect">
      <div className="max-w-[1000px] w-full bg-[#f0e8d8] p-12 md:p-20 rounded-xl shadow-xl flex flex-col items-center text-center relative rotate-[-0.5deg] border border-black/5 hover:rotate-0 transition-transform duration-500">
        
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-8 spiral-binding opacity-5 rotate-180"></div>
        
        <h3 className="font-headline text-4xl md:text-6xl text-[#2a1f1a] mb-4 font-bold tracking-tight">
          Let's build something that thinks.
        </h3>
        <p className="font-label text-[14px] text-[#2a1f1a]/60 uppercase tracking-[0.2em] mb-12">
          Open to full-time · freelance · research collabs
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative">
          {/* Envelope Doodle */}
          <div className="hidden md:block absolute -left-28 top-1/2 -translate-y-1/2 rotate-[-15deg] opacity-60">
            <span className="material-symbols-outlined text-[#d95f3b] text-8xl" style={{ fontVariationSettings: "'wght' 100" }}>mail</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="bg-[#d95f3b] text-[#f0e8d8] px-10 py-4 rounded-full font-label font-bold text-[16px] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              Let's Chat →
            </a>
            <a href="#" className="bg-transparent border-2 border-[#d95f3b] text-[#d95f3b] px-10 py-4 rounded-full font-label font-bold text-[16px] hover:border-4 transition-all duration-150">
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* Social Rows */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {FOOTER_SOCIALS.map(social => (
            <a href="#" key={social.handle} className="group flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d95f3b] text-2xl group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
              <span className="hidden group-hover:block font-label text-[12px] text-[#2a1f1a] lowercase font-medium">
                {social.handle}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-20 flex flex-col items-center gap-4">
        <p className="font-headline italic text-[18px] text-secondary-fixed/50">Always happy to talk agents, RAG, or good chai.</p>
        <div className="font-label text-[10px] tracking-[0.3em] text-primary uppercase opacity-40">
          © {new Date().getFullYear()} Geetika Vasistha · built for the future
        </div>
      </div>
    </footer>
  );
};
