import { TopNavigation } from './components/layout/TopNavigation';
import { DecorativeSidebars } from './components/layout/DecorativeSidebars';
import { FooterCTA } from './components/layout/FooterCTA';

import { HeroSection } from './components/sections/HeroSection';
import { StickyNotes } from './components/sections/StickyNotes';
import { ResearchDomains } from './components/sections/ResearchDomains';
import { SkillsStrip } from './components/sections/SkillsStrip';
import { ProfessionalLog } from './components/sections/ProfessionalLog';
import { PaperTrail } from './components/sections/PaperTrail';
import { ProjectsGrid } from './components/sections/ProjectsGrid';
import { Commendations } from './components/sections/Commendations';
import { CurrentFocus } from './components/sections/CurrentFocus';
import { ClickEffect } from './components/common/ClickEffect';
import { SkyBackground } from '@/components/animate-ui/components/backgrounds/SkyBackground';

function App() {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      <SkyBackground
        starColor="#FFF"
        starCount={150}
        className="fixed inset-0 -z-10"
      />
      <ClickEffect />
      <TopNavigation />
      <DecorativeSidebars />
      
      {/* Main Content Spine */}
      <main className="max-w-[900px] mx-auto pt-32 pb-20 px-6 relative z-10">
        <HeroSection />
        <StickyNotes />
        <ResearchDomains />
        <SkillsStrip />
        <ProfessionalLog />
        <PaperTrail />
        <ProjectsGrid />
        <Commendations />
        <CurrentFocus />
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
