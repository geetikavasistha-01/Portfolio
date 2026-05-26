import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/mockData';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const TopNavigation: React.FC = () => {
  const [isLight, setIsLight] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    const initialIsLight = savedTheme === 'light' || (savedTheme === null && systemPrefersLight);
    setIsLight(initialIsLight);
    
    if (initialIsLight) {
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Scroll spy observer to update active section on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.href.substring(1));
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newIsLight = !isLight;
    setIsLight(newIsLight);
    const newTheme = newIsLight ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    
    if (newIsLight) {
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        position: 'sticky',
        top: '16px',
        zIndex: 100,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        background: isLight ? 'rgba(255, 255, 255, 0.65)' : 'rgba(15, 13, 12, 0.65)',
        backdropFilter: 'blur(16px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
        border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '9999px',
      }}
      className="w-[calc(100%-32px)] flex justify-between items-center max-w-[900px] mx-auto font-headline text-lg tracking-tight transition-all duration-300"
    >
      <div 
        style={{ whiteSpace: 'nowrap', minWidth: '200px' }}
        className={`text-2xl font-bold tracking-tighter font-headline transition-colors duration-300 ${
          isLight ? "text-[#1a1a1a]" : "text-secondary-fixed"
        }`}
      >
        The Agentic Mind
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 items-center font-label text-[12px] tracking-[0.08em] uppercase">
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative font-medium transition-colors duration-300 pb-1 cursor-pointer ${
                  isActive 
                    ? (isLight ? "text-[#d95f3b] font-bold" : "text-primary font-bold") 
                    : (isLight ? "text-[#2a1f1a] hover:text-[#d95f3b]" : "text-secondary-fixed/70 hover:text-primary")
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{
                      backgroundColor: isLight ? '#d95f3b' : '#ffb4a8'
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=geetikavasistha13@gmail.com&su=Hiring%20Inquiry%20-%20The%20Agentic%20Mind&body=Hi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px',
              height: '38px',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              borderRadius: '6px',
              backgroundColor: '#e8472a',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="font-bold hover:scale-95 transition-transform tracking-[0.08em] border-none outline-none text-center"
          >
            Hire Me
          </a>

          <motion.button 
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{
              width: '36px',
              height: '36px',
              flexShrink: 0,
              marginLeft: '8px',
              border: isLight ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(255,255,255,0.15)',
            }}
            className={`rounded-full flex items-center justify-center transition-all duration-300 ${
              isLight 
                ? "bg-[#1a1a1a]/5 text-[#1a1a1a] hover:bg-[#1a1a1a]/10" 
                : "bg-white/5 text-[#efe0cc] hover:bg-white/10"
            }`}
            aria-label="Toggle theme"
          >
            {isLight ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

