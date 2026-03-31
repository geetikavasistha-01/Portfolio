import React from 'react';

export const PaperTrail: React.FC = () => {
  return (
    <section className="mb-32" id="paper-trail">
      <h3 className="font-hand text-[42px] italic mb-12 flex items-center gap-4 text-primary lowercase">
        <span className="material-symbols-outlined text-error rotate-45 text-3xl">attachment</span> the paper trail
      </h3>
      
      <div className="bg-[#f0e8d8] text-[#2a1f1a] p-8 md:p-16 rounded-xl shadow-2xl relative overflow-hidden graph-paper coffee-ring">
        {/* Background Decorations */}
        <div className="absolute top-8 right-12 w-24 h-6 bg-[#d95f3b]/30 rotate-12 -z-0"></div>
        <div className="absolute bottom-12 left-20 w-32 h-32 border-4 border-[#8b4513]/5 rounded-full -z-0"></div>

        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          {/* Left Side: A4 Resume Card */}
          <div className="flex-1">
            <div className="bg-white p-12 shadow-2xl rotate-[-1.5deg] relative border border-black/5 min-h-[600px] notebook-lines hover:rotate-0 transition-transform duration-500">
              {/* Red corner fold */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-error/20 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
              
              <div className="mb-10 border-b border-black/10 pb-6">
                <h4 className="font-headline text-3xl mb-1">Geetika Vasistha</h4>
                <p className="font-label text-[11px] opacity-60 tracking-widest uppercase">Curriculum Vitae / AI Engineer</p>
              </div>
              
              <div className="space-y-8 font-label text-[13px] leading-relaxed">
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">Experience</p>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex justify-between font-bold"><span>Havish M Consultancy</span><span className="opacity-40 italic">2024 - Present</span></div>
                      <p className="opacity-70 text-[12px]">AI Intern · RAG Optimization & LLM Fine-tuning</p>
                    </li>
                    <li>
                      <div className="flex justify-between font-bold"><span>Raphsons Robotics</span><span className="opacity-40 italic">2022 - 2024</span></div>
                      <p className="opacity-70 text-[12px]">Co-founder/ML · Robot Navigation & CV</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">Recognition</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between"><span>Winner, IIT Delhi Hackathon</span><span className="opacity-40">2023</span></li>
                    <li className="flex justify-between"><span>GFG Global Challenge Ranker</span><span className="opacity-40">2022</span></li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">Stack</p>
                  <p className="opacity-80 text-[12px]">Python, PyTorch, LangChain, FastAPI, AWS, VectorDBs</p>
                </div>
              </div>

              {/* Viewed Stamp */}
              <div className="absolute bottom-12 right-12 opacity-10 rotate-[-12deg] pointer-events-none">
                <div className="border-4 border-error p-3 rounded-xl flex flex-col items-center">
                  <span className="material-symbols-outlined text-4xl text-error">visibility</span>
                  <span className="font-bold text-error uppercase tracking-tighter">VIEWED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Scattered Elements */}
          <div className="lg:w-[320px] flex flex-col gap-8">
            <div className="bg-[#fef9c3] p-5 shadow-lg rotate-3 hover:rotate-0 transition-transform">
              <div className="w-full h-3 bg-black/5 mb-3"></div>
              <p className="font-hand text-xl">Last updated:<br/>March 2026</p>
            </div>
            
            <div className="bg-white p-6 shadow-md rotate-[-5deg] border-l-4 border-error/40 relative">
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#f0e8d8] [clip-path:polygon(0_0,100%_0,100%_100%)]"></div>
              <p className="font-label text-[12px] font-bold text-error">METRICS:</p>
              <p className="font-label text-[13px] leading-tight text-error/80 uppercase">50% faster · 70% better · 40% accurate</p>
            </div>
            
            <div className="bg-[#d2b48c]/30 p-3 px-6 rounded-l-full border-r-2 border-black/20 self-end rotate-12">
              <div className="w-3 h-3 rounded-full bg-white mb-2 ml-[12px]"></div>
              <span className="font-label font-black text-sm uppercase tracking-widest">Open to Work</span>
            </div>
            
            <div className="flex items-center gap-3 font-body font-bold text-sm bg-white/50 p-2 pr-5 rounded-full border border-black/5 self-start">
              <span className="bg-yellow-400 p-2 rounded-full text-white">⭐</span>
              IIT Delhi Winner
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center items-center relative z-20">
          <button className="bg-[#d95f3b] text-white px-10 py-4 rounded-full font-label font-bold text-[14px] flex items-center gap-2 hover:scale-105 shadow-lg transition-all">
            Download Resume ↓
          </button>
          <button className="border-2 border-[#d95f3b] text-[#d95f3b] px-10 py-4 rounded-full font-label font-bold text-[14px] flex items-center gap-2 hover:bg-[#d95f3b]/5 transition-all">
            View Full PDF →
          </button>
        </div>
      </div>
    </section>
  );
};
