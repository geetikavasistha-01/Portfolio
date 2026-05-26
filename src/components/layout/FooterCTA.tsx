import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '../animate-ui/components/buttons/icon';
import {
  MessageCircle,
  Mail,
  Download,
  ChevronRight,
  Sparkles
} from 'lucide-react';

// Official Brand SVG Icons
const Github = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Bluesky = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266 1.11 1.49C.635 1.735.268 2.23.268 2.911c0 .574.237 1.614.432 2.304.642 2.283 1.504 3.848 2.651 5.369 1.748 2.357 5.519 6.44 10.649 6.44 5.13 0 8.901-4.083 10.649-6.44 1.147-1.521 2.009-3.086 2.651-5.369.195-.69.432-1.73.432-2.304 0-.681-.367-1.176-.842-1.421-.451-.224-1.456-.546-4.092 1.315-2.752 1.942-5.711 5.881-6.798 7.995l-.094.19-.094-.19z" />
  </svg>
);

const Medium = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const Hashnode = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.351 8.019l-6.37-6.37A5.63 5.63 0 0 0 12.265 0L7.514 4.751a5.63 5.63 0 0 0 0 7.969l.754.754-4.6 4.6a2.815 2.815 0 0 0 0 3.982 2.815 2.815 0 0 0 3.982 0l4.6-4.6.754.754a5.63 5.63 0 0 0 7.969 0l4.751-4.751a5.63 5.63 0 0 0-.623-8.19zM3.664 20.336a.938.938 0 0 1-1.327 0 .938.938 0 0 1 0-1.327l4.6-4.6 1.327 1.327-4.6 4.6zm16.951-6.37l-4.751 4.751a3.754 3.754 0 0 1-5.313 0l-6.37-6.37a3.754 3.754 0 0 1 0-5.313l4.751-4.751a3.754 3.754 0 0 1 5.313 0l6.37 6.37a3.754 3.754 0 0 1 0 5.313z" />
  </svg>
);

const LeetCode = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .462 2.659c.015.034.032.067.048.1.034.07.07.138.114.205l1.015 1.739a.598.598 0 0 1 .161.787.588.588 0 0 1-.785.16l-1.739-1.013a2.633 2.633 0 0 1-.809-.727 5.332 5.332 0 0 1-.743-5.095L2.517 9.37a1.546 1.546 0 0 1 2.006-2.006l3.966 2.158a1.5 1.5 0 0 1 .65.65l2.159 3.966a1.546 1.546 0 0 1-2.006 2.006l-3.966-2.158a1.5 1.5 0 0 1-.65-.65l-2.159-3.966a.48.48 0 0 1-.046-.138 5.352 5.352 0 0 1-.125.513 5.266 5.266 0 0 0 1.209 2.104l3.854 4.126 5.406 5.788a1.378 1.378 0 0 0 1.922 0l5.788-5.406 4.126-3.854a5.266 5.266 0 0 0 1.209-2.104 5.334 5.334 0 0 0 0-2.627l-4.126-3.854-5.788-5.406a1.374 1.374 0 0 0-.961-.438z" />
  </svg>
);

const Kaggle = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.825 23.859c-.021.055-.082.091-.141.091h-3.183a.142.142 0 0 1-.141-.091l-1.553-3.794a.143.143 0 0 1 0-.109l1.553-3.793c.021-.055.082-.091.141-.091h3.183c.059 0 .12.036.141.091l1.553 3.793c.012.034.012.075 0 .109l-1.553 3.794zM6.532 23.95c-.059 0-.12-.036-.141-.091l-1.553-3.794a.143.143 0 0 1 0-.109l1.553-3.793c.021-.055.082-.091.141-.091h3.183c.059 0 .12.036.141.091l1.553 3.793c.012.034.012.075 0 .109l-1.553 3.794a.142.142 0 0 1-.141.091H6.532zm12.293-8.928c-.021.055-.082.091-.141.091h-3.183a.142.142 0 0 1-.141-.091l-1.553-3.794a.143.143 0 0 1 0-.109l1.553-3.793c.021-.055.082-.091.141-.091h3.183c.059 0 .12.036.141.091l1.553 3.793c.012.034.012.075 0 .109l-1.553 3.794zM6.532 15.022c-.059 0-.12-.036-.141-.091l-1.553-3.794a.143.143 0 0 1 0-.109l1.553-3.793c.021-.055.082-.091.141-.091h3.183c.059 0 .12.036.141.091l1.553 3.793c.012.034.012.075 0 .109l-1.553 3.794a.142.142 0 0 1-.141.091H6.532zm12.293-8.928c-.021.055-.082.091-.141.091h-3.183a.142.142 0 0 1-.141-.091l-1.553-3.794a.143.143 0 0 1 0-.109l1.553-3.793c.021-.055.082-.091.141-.091h3.183c.059 0 .12.036.141.091l1.553 3.793c.012.034.012.075 0 .109l-1.553 3.794zM6.532 6.094c-.059 0-.12-.036-.141-.091L4.838 2.209a.143.143 0 0 1 0-.109L6.391.307C6.412.252 6.473.216 6.532.216h3.183c.059 0 .12.036.141.091l1.553 3.793c.012.034.012.075 0 .109L9.856 6.003a.142.142 0 0 1-.141.091H6.532z" />
  </svg>
);

const HuggingFace = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.25 4.533a9.707 9.707 0 0 0-9.707 9.707h19.414a9.707 9.707 0 0 0-9.707-9.707zM6.736 18.707a4.514 4.514 0 0 1 4.514-4.514 4.514 4.514 0 0 1 4.514 4.514H6.736z" />
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/geetikavasistha-01', icon: Github, brandColor: '#333' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/geetikavasisthampy', icon: Linkedin, brandColor: '#0077B5' },
  { name: 'X', url: 'https://x.com/geetikavasistha', icon: XIcon, brandColor: '#000000' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/geetikavasistha.bsky.social', icon: Bluesky, brandColor: '#0085FF' },
  { name: 'Medium', url: 'https://medium.com/@geetikavasistha13', icon: Medium, brandColor: '#000000' },
  { name: 'Hashnode', url: 'https://hashnode.com/@geetikavasistha', icon: Hashnode, brandColor: '#2962FF' },
  { name: 'LeetCode', url: 'https://leetcode.com/geetikavasistha', icon: LeetCode, brandColor: '#FFA116' },
  { name: 'Kaggle', url: 'https://kaggle.com/geetikavasistha', icon: Kaggle, brandColor: '#20BEFF' },
  { name: 'Hugging Face', url: 'https://huggingface.co/geetikavasistha', icon: HuggingFace, brandColor: '#FFD21E' },
];

export const FooterCTA: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  // Monitor theme changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme !== 'light');
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  const handleDownload = () => {
    setDownloading(true);
    const resumeUrl = '/Geetika Vasistha Resume.pdf';
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          const link = document.createElement('a');
          link.href = resumeUrl;
          link.download = 'Geetika Vasistha Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Fallback: open in new tab so the user can save manually
          window.open(resumeUrl, '_blank');
        }
      })
      .catch(() => {
        window.open(resumeUrl, '_blank');
      })
      .finally(() => {
        setDownloading(false);
      });
  };

  const handleEmailClick = () => {
    const email = 'geetikavasistha13@gmail.com';
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent("Hi Geetika,\n\n");

    // Open Gmail directly in browser
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <footer className="w-full bg-transparent pt-24 pb-12 px-6 flex flex-col items-center overflow-hidden" id="connect">
      <div
        className="max-w-[1000px] w-full px-10 py-12 md:px-20 md:py-16 rounded-xl shadow-xl flex flex-col items-center text-center relative rotate-[-0.5deg] border border-black/5 hover:rotate-0 transition-transform duration-500 overflow-hidden gap-4"
        style={{
          backgroundColor: isDark ? '#f0e8d8' : '#ffffff',
          transition: 'background-color 0.4s ease, transform 0.5s ease'
        }}
      >

        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-8 spiral-binding opacity-5 rotate-180"></div>

        {/* Decorative inner border */}
        <div className="absolute inset-4 border border-dashed border-[#d95f3b]/15 pointer-events-none rounded-lg"></div>

        <h3
          className="text-[44px] md:text-[72px] text-[#2a1f1a] mb-1 leading-[1.1] max-w-[800px] whitespace-nowrap"
          style={{ fontFamily: '"EB Garamond", serif', fontWeight: 400 }}
        >
          Let's build something
        </h3>
        <h3
          className="text-[44px] md:text-[72px] mb-4 md:mb-6 leading-[1.1]"
          style={{ fontFamily: '"IM Fell DW Pica", serif', fontStyle: 'italic', fontWeight: 400, color: '#d95f3b' }}
        >
          that matters.
        </h3>
        <p
          className="text-[21px] md:text-[23px] text-[#2a1f1a]/70 mb-8 md:mb-10 max-w-[520px] leading-relaxed"
          style={{ fontFamily: '"IM Fell DW Pica", serif', fontStyle: 'italic', fontWeight: 400 }}
        >
          Got a problem worth solving? I turn ideas into shipped products — let's scope it out.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-10 md:mb-12 relative z-10 w-full max-w-[440px]">
          <div className="relative flex-1">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="w-full bg-[#d95f3b] text-white font-label font-bold py-4 px-8 rounded-xl shadow-lg border border-[#d95f3b] flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(217,95,59,0.4)] active:scale-95 group whitespace-nowrap"
            >
              Let's Chat
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles size={18} />
              </motion.div>
            </button>

            {/* Animated Let's Chat Popup */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  ref={popupRef}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 10 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-black/5 z-50 overflow-hidden"
                  style={{
                    backgroundColor: isDark ? 'rgba(240, 232, 216, 0.95)' : 'rgba(255, 255, 255, 0.95)'
                  }}
                >
                  <div className="relative flex flex-col gap-3">
                    {/* WhatsApp Option via IconButton */}
                    <IconButton
                      variant="outline"
                      size="md"
                      onClick={() => window.open('https://wa.me/7500102549', '_blank')}
                      className="w-full flex justify-start items-center gap-4 p-4 rounded-2xl bg-white/50 border-black/5 hover:bg-[#f5ede0]"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-110">
                        <MessageCircle size={20} fill="currentColor" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-label font-bold text-[#2a1f1a] text-sm leading-tight">WhatsApp</span>
                        <span className="font-label text-[10px] opacity-60">Chat instantly</span>
                      </div>
                      <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                    </IconButton>

                    {/* Email Option via IconButton */}
                    <IconButton
                      variant="outline"
                      size="md"
                      onClick={handleEmailClick}
                      className="w-full flex justify-start items-center gap-4 p-4 rounded-2xl bg-white/50 border-black/5 hover:bg-[#f5ede0]"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#d95f3b] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-110">
                        <Mail size={20} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-label font-bold text-[#2a1f1a] text-sm leading-tight">Email</span>
                        <span className="font-label text-[10px] opacity-60">Compose a message</span>
                      </div>
                      <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                    </IconButton>
                  </div>

                  {/* Bubble tail */}
                  <div
                    className="absolute top-full left-1/2 -ml-3 w-6 h-6 backdrop-blur-md rotate-45 border-br border-black/5 -mt-3"
                    style={{
                      backgroundColor: isDark ? 'rgba(240, 232, 216, 0.95)' : 'rgba(255, 255, 255, 0.95)'
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex-1 bg-[#d95f3b] text-white font-label font-bold py-4 px-8 rounded-xl shadow-lg border border-[#d95f3b] flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(217,95,59,0.4)] active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {downloading ? 'Downloading…' : 'Resume'}
            <Download size={18} className={`transition-transform group-hover:translate-y-0.5 ${downloading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Social Links Row */}
        <div
          className="w-full flex flex-nowrap justify-evenly gap-4 relative z-10 px-8 py-5 border border-[#d95f3b]/10 rounded-3xl backdrop-blur-sm"
          style={{
            backgroundColor: isDark ? 'rgba(235, 224, 204, 0.6)' : '#ffffff',
            transition: 'background-color 0.4s ease'
          }}
        >
          {SOCIAL_LINKS.map((social) => (
            <div key={social.name} className="relative group flex flex-col items-center gap-1">
              <motion.button
                onClick={() => window.open(social.url, '_blank')}
                aria-label={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-2xl text-[#d95f3b] transition-colors duration-200 hover:bg-[#d95f3b]/10"
                style={{ '--brand-color': social.brandColor } as React.CSSProperties}
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{
                  scale: 0.75,
                  rotate: [0, -12, 14, -8, 0],
                  y: [0, -6, 2, 0],
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = social.brandColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '';
                }}
              >
                <social.icon width={20} height={20} />
              </motion.button>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[7px] font-label tracking-widest uppercase text-[#d95f3b]/60 whitespace-nowrap pointer-events-none leading-none">
                {social.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="font-label text-[11px] uppercase tracking-[0.4em] opacity-30 text-surface">
          © 2026 GEETIKA VASISTHA.
        </p>
      </div>
    </footer>
  );
};
