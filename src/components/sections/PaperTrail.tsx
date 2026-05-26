import React from 'react';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Gloria+Hallelujah&display=swap');
</style>

export const PaperTrail: React.FC = () => {
  return (
    <section className="mb-32" id="paper-trail">
      <h3 className="font-hand text-[42px] italic mb-12 flex items-center gap-4 text-[#d95f3b] dark:text-white lowercase">
        <span className="material-symbols-outlined text-error rotate-45 text-3xl">attachment</span> the paper trail
      </h3>

      <div className="bg-[#f0e8d8] text-[#2a1f1a] p-8 md:p-16 rounded-xl shadow-2xl relative overflow-hidden graph-paper coffee-ring" style={{ boxShadow: '0 0 60px rgba(217, 95, 59, 0.15), 0 0 120px rgba(217, 95, 59, 0.08)' }}>
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
                <p className="font-label text-[11px] opacity-60 tracking-widest uppercase">AI Engineer · Data Scientist · Full Stack</p>
              </div>

              {/* Highlight bar */}
              <div className="mb-8 px-4 py-2 border-l-4 border-[#d95f3b] bg-[#fef9c3]/30">
                <p className="font-label text-[12px] opacity-80">
                  🎓 SRM IST Delhi NCR · BTech CSE (Data Science) · GPA 8.3 · 2027
                </p>
              </div>

              <div className="space-y-8 font-label text-[13px] leading-relaxed">
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">EXPERIENCE</p>
                  <ul className="space-y-1 opacity-80 text-[12px]">
                    <li><span className="font-bold">AI Engineering Intern</span>     · Havish M Consultancy          Jul–Dec 2025</li>
                    <li><span className="font-bold">ML Engineer</span>               · Raphsons Robotics*            Mar–Dec 2025</li>
                    <li><span className="font-bold">Backend Developer Intern</span>  · Sacred Gurukul                Dec 2025–Mar 2026</li>
                    <li><span className="font-bold">Visual & UX Designer</span>      · Aadi Art                      Mar–May 2026</li>
                  </ul>
                  <p className="text-[10px] opacity-50 italic mt-2">* Funded startup · ₹8L seed · Delhi-based angel investors</p>
                  <p className="font-bold text-[11px] text-[#d95f3b] mt-3">~1 year across 3 companies + 1 funded startup</p>
                </div>
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">CORE SKILLS</p>
                  <ul className="space-y-1 opacity-70 text-[12px]">
                    <li><span className="font-bold">AI/ML:</span>     PyTorch · TensorFlow · Scikit-learn · RAG · LLMs</li>
                    <li><span className="font-bold">Backend:</span>   Django · FastAPI · Node.js · REST APIs</li>
                    <li><span className="font-bold">Cloud:</span>     AWS (EC2, S3) · Docker · CI/CD · PostgreSQL · MongoDB</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">WINS</p>
                  <ul className="space-y-1 opacity-80 text-[12px]">
                    <li>🏆 Winner — IIT Delhi Tryst'25 CarbonXchange</li>
                    <li>🏆 Winner — GeeksforGeeks Hackathon 2025</li>
                    <li>🎖  Top 10 Finalist — Smart India Hackathon 2025</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold border-b border-black/5 mb-3 uppercase tracking-tighter text-[11px]">OPEN SOURCE</p>
                  <p className="opacity-70 text-[12px]">
                    GirlScript Summer of Code (GSSoC) · Contributor & Volunteer · 2025 & 2026
                  </p>
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
              <p className="text-xl" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>1 year of building cool stuff<br />3 amazing companies<br />1 startup with funding <br />ready for the next adventure!</p>
            </div>

            <div className="bg-white p-6 shadow-md rotate-[-5deg] border-l-4 border-error/40 relative">
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#f0e8d8] [clip-path:polygon(0_0,100%_0,100%_100%)]"></div>
              <p className="font-label text-[12px] font-bold text-error">METRICS:</p>
              <p className="font-label text-[13px] leading-tight text-[#2a1f1a] uppercase">150+ problems solved on LeetCode · 8+ projects built · AI/ML + Full Stack</p>
            </div>

            <div className="bg-[#d2b48c]/30 p-3 px-6 rounded-l-full border-r-2 border-black/20 self-end rotate-12">
              <div className="w-3 h-3 rounded-full bg-white mb-2 ml-[12px]"></div>
              <span className="font-label font-black text-sm uppercase tracking-widest text-white">Open to Work</span>
            </div>

            <div className="flex items-center gap-3 font-body font-bold text-sm bg-white/50 p-2 pr-5 rounded-full border border-black/5 self-start">
              <span className="bg-yellow-400 p-2 rounded-full text-white">⭐</span>
              IIT Delhi Tryst'25 CarbonXchange Winner
            </div>

            {/* Polaroid */}
            <div className="bg-white p-3 pt-4 pb-10 shadow-xl rotate-2 self-center relative">
              <div className="w-48 h-48 bg-secondary-container flex items-center justify-center overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLS9j8g4G0hPfM7sq_KAaGm0zlhZMFMA4XVvCgtEwz5cYBmdfplyHtyNFfThzHTpR3n3SWwQFjm6SWTfVvqmYd0EvLwc3s_XIpr5q61Nf8ZCy79rEheHbampejXOjJZR2RlTzxTO3Hz4jgRWxmdItWJD87ExSGWseFq1iQ9yxWTXyh1pzR3tM5ZOlJ9k05XKZaGICJYoJ-ky1NZrmeJ6CzaUtHbovWv7VC2HE3P_N170pkSNzipyxyesyOUCF4k8fYZ7LesDz-m4V"
                  alt="Mascot sketch"
                  className="w-32 h-32 object-contain opacity-50 grayscale"
                />
              </div>
              <p className="font-hand text-lg mt-3 text-center">Building cool things with code</p>
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-error rounded-full shadow-inner border-2 border-white/20"></div>
            </div>

            {/* Torn Paper Fun Fact Receipt */}
            <div className="bg-white p-4 shadow-lg rotate-[-3deg] self-end relative border-t-4 border-dashed border-black/10 mt-2"
              style={{ background: 'repeating-linear-gradient(white, white 24px, #e8e0d0 25px)' }}>
              {/* Perforated top edge */}
              <div className="absolute -top-[1px] left-0 right-0 flex justify-between px-1">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#f0e8d8]" />
                ))}
              </div>

              <p className="font-label text-[10px] uppercase tracking-widest opacity-40 mb-2">Receipt #404</p>

              <div className="space-y-1 font-label text-[12px]">
                <div className="flex justify-between gap-8">
                  <span className="opacity-70">Coffee consumed</span>
                  <span className="font-bold">∞ cups</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="opacity-70">Bugs fixed</span>
                  <span className="font-bold">most of them</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="opacity-70">Stack overflow visits</span>
                  <span className="font-bold">classified</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="opacity-70">Side projects started</span>
                  <span className="font-bold">8+</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="opacity-70">Side projects finished</span>
                  <span className="font-bold text-[#d95f3b]">also 8+</span>
                </div>
              </div>

              <div className="border-t border-dashed border-black/15 mt-3 pt-2 flex justify-between items-center">
                <span className="font-hand text-sm">ready to ship 🚀</span>
                <span className="font-label text-[10px] opacity-40">2026</span>
              </div>

              {/* Perforated bottom edge */}
              <div className="absolute -bottom-[1px] left-0 right-0 flex justify-between px-1">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#f0e8d8]" />
                ))}
              </div>
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
