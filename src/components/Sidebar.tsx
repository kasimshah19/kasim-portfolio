import React from 'react';
import { Github, Linkedin, MapPin, Moon, Sun } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export const NAV_ITEMS = [
  { id: 'home', number: '00', label: 'HOME' },
  { id: 'projects', number: '01', label: 'PROJECTS' },
  { id: 'experience', number: '02', label: 'EXPERIENCE' },
  { id: 'about', number: '03', label: 'ABOUT' },
  { id: 'skills', number: '04', label: 'SKILLS' },
  { id: 'education', number: '05', label: 'EDUCATION' },
  { id: 'publications', number: '06', label: 'PUBLICATIONS' },
  { id: 'contact', number: '07', label: 'CONTACT' },
];

export default function Sidebar({ activeSection, onNavigate, theme, toggleTheme }: SidebarProps) {
  return (
    <aside
      id="sidebar-navigation"
      className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 bg-[#F4F0E8] dark:bg-[#0A0A0A] border-r border-[#E2DDD2] dark:border-[#27272A] flex-col justify-between p-8 z-40 select-none"
    >
      {/* Top Logo and Theme Toggle */}
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="inline-flex items-baseline text-4xl font-extrabold tracking-tighter text-[#141413] dark:text-[#FAFAFA] hover:opacity-80 transition-opacity"
        >
          <span>KS</span>
          <span className="text-[#D94E28] dark:text-[#FF5A2A] ml-0.5">.</span>
        </a>
        
        {toggleTheme && (
          <button 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full text-[#6E6A61] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#FAFAFA] hover:bg-[#EAE5DA] dark:hover:bg-[#1A1A1A] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Center Nav Items */}
      <nav className="my-auto py-8">
        <ul className="space-y-4">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`group flex items-center text-xs font-mono tracking-widest transition-all duration-200 w-full text-left py-1 ${
                    isActive
                      ? 'text-[#D94E28] dark:text-[#FF5A2A] font-semibold'
                      : 'text-[#6E6A61] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#FAFAFA]'
                  }`}
                >
                  <span
                    className={`inline-block transition-all duration-200 mr-2.5 ${
                      isActive
                        ? 'w-4 h-[2px] bg-[#D94E28] dark:bg-[#FF5A2A]'
                        : 'w-2 h-[1px] bg-[#9C968B] dark:bg-[#71717A] group-hover:w-3 group-hover:bg-[#141413] dark:group-hover:bg-[#FAFAFA]'
                    }`}
                  />
                  <span className="mr-2 text-[11px] opacity-80">{item.number}</span>
                  <span className="tracking-[0.18em]">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Info & Socials */}
      <div className="space-y-4 pt-6 border-t border-[#E2DDD2]/70 dark:border-[#27272A]/70 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-[#6E6A61] dark:text-[#A1A1AA]">
          <MapPin className="w-3.5 h-3.5 text-[#D94E28] dark:text-[#FF5A2A]" />
          <span>Dhule, IN</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D94E28] dark:bg-[#FF5A2A] pulse-status" />
          <span className="text-[#141413] dark:text-[#FAFAFA] font-medium text-[11px] tracking-wide">
            {PERSONAL_INFO.statusShort}
          </span>
        </div>

        <div className="flex items-center gap-4 pt-1 text-[#6E6A61] dark:text-[#A1A1AA]">
          <a
            id="sidebar-linkedin"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kasim Shah on LinkedIn"
            className="p-1 hover:text-[#D94E28] dark:hover:text-[#FF5A2A] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="sidebar-github"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kasim Shah on GitHub"
            className="p-1 hover:text-[#D94E28] dark:hover:text-[#FF5A2A] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
