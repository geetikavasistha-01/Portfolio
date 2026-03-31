import React from 'react';
import { CURRENT_FOCUS } from '../../data/mockData';

export const CurrentFocus: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="bg-secondary-fixed text-surface p-12 rounded-xl relative overflow-hidden flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h4 className="font-headline text-3xl mb-8 flex items-center gap-4">
            Current Focus <span className="h-[2px] w-20 bg-primary/30"></span>
          </h4>
          
          <ul className="space-y-6">
            {CURRENT_FOCUS.map((focus) => (
              <li key={focus} className="flex items-center gap-6 group">
                <div className="w-8 h-8 rounded border-2 border-primary-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-surface opacity-0 group-hover:opacity-100 text-sm">check</span>
                </div>
                <span className="font-hand text-2xl group-hover:line-through transition-all">{focus}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-64 flex flex-col items-center justify-center text-center">
          <div className="relative w-full h-48 mb-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLS9j8g4G0hPfM7sq_KAaGm0zlhZMFMA4XVvCgtEwz5cYBmdfplyHtyNFfThzHTpR3n3SWwQFjm6SWTfVvqmYd0EvLwc3s_XIpr5q61Nf8ZCy79rEheHbampejXOjJZR2RlTzxTO3Hz4jgRWxmdItWJD87ExSGWseFq1iQ9yxWTXyh1pzR3tM5ZOlJ9k05XKZaGICJYoJ-ky1NZrmeJ6CzaUtHbovWv7VC2HE3P_N170pkSNzipyxyesyOUCF4k8fYZ7LesDz-m4V" 
              className="w-full h-full object-contain"
              alt="Mascot mouse sketching"
            />
          </div>
          <div className="font-hand text-primary italic">Status: Always Learning</div>
        </div>
      </div>
    </section>
  );
};
