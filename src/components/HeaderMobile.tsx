import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderMobileProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export default function HeaderMobile({ activeSection, onNavigate, theme, toggleTheme }: HeaderMobileProps) {
  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <header
      id="mobile-header"
      className="lg:hidden sticky top-0 z-40 bg-[#F4F0E8]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#E2DDD2] dark:border-[#27272A] px-4 py-3.5 flex items-center justify-between"
    >
      {/* Brand */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('home');
        }}
        className="text-2xl font-extrabold tracking-tighter text-[#141413] dark:text-[#FAFAFA]"
      >
        <span>KS</span>
        <span className="text-[#D94E28] dark:text-[#FF5A2A]">.</span>
      </a>

      {/* Center status pill */}
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-[11px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D94E28] dark:bg-[#FF5A2A] pulse-status" />
        <span>Open to work</span>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        {toggleTheme && (
          <button 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-full text-[#6E6A61] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#FAFAFA] hover:bg-[#EAE5DA] dark:hover:bg-[#1A1A1A] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
        
        {/* Contact Link */}
        <button
          id="mobile-contact-btn"
          onClick={() => handleLinkClick('contact')}
          className="text-[#141413] dark:text-[#FAFAFA] hover:text-[#D94E28] dark:hover:text-[#FF5A2A] font-mono text-[13px] uppercase tracking-widest font-bold transition-colors"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}
