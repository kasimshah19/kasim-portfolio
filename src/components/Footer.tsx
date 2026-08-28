import React from 'react';
import { ArrowUp, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
  onReplayIntro?: () => void;
}

export default function Footer({ onScrollToTop, onReplayIntro }: FooterProps) {
  return (
    <footer className="py-6 sm:py-8 px-6 sm:px-10 lg:px-14 bg-[#F4F0E8] dark:bg-[#0A0A0A] text-[#141413] dark:text-[#FAFAFA] border-t border-[#E2DDD2] dark:border-[#27272A] flex flex-col justify-between overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative z-10 w-full">
        {/* Left: Name and Role */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-xl font-bold font-display tracking-tight text-[#141413] dark:text-[#FAFAFA]">
            {PERSONAL_INFO.name}
          </h3>
          <p className="text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA] mt-1">
            {PERSONAL_INFO.role}
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="w-full lg:w-1/3 flex justify-center text-center text-[10px] sm:text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA]">
          <span className="whitespace-nowrap">© 2026 Kasim Shah. Built with React, Vite &amp; Tailwind.</span>
        </div>

        {/* Right: Buttons */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center gap-3">
          {onReplayIntro && (
            <button
              id="replay-intro-btn"
              onClick={onReplayIntro}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-[#FAF7F2] dark:bg-[#121212] border border-[#D6CEBF] dark:border-[#3F3F46] text-[#5E5B54] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#FAFAFA] hover:bg-[#EAE5DA] dark:hover:bg-[#1E1E1E] transition-colors cursor-pointer"
              title="Replay cinematic developer introduction"
            >
              <Play className="w-3 h-3 text-[#D94E28] dark:text-[#FF5A2A] fill-[#D94E28] dark:fill-[#FF5A2A]" />
              <span className="uppercase tracking-wider font-semibold whitespace-nowrap text-[10px] sm:text-[11px]">REPLAY INTRO</span>
            </button>
          )}

          <button
            id="back-to-top-btn"
            onClick={onScrollToTop}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-[#FAF7F2] dark:bg-[#121212] border border-[#D6CEBF] dark:border-[#3F3F46] text-[#141413] dark:text-[#FAFAFA] hover:bg-[#EAE5DA] dark:hover:bg-[#1E1E1E] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#D94E28] dark:text-[#FF5A2A]" />
            <span className="uppercase tracking-wider font-semibold whitespace-nowrap text-[10px] sm:text-[11px]">BACK TO TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
