import React from 'react';
import { MARQUEE_TECH } from '../data/portfolioData';

interface MarqueeTickerProps {
  dark?: boolean;
}

export default function MarqueeTicker({ dark = true }: MarqueeTickerProps) {
  // Double the array to ensure it's wide enough for large screens, 
  // then we render two identical blocks for seamless 50% translation.
  const baseItems = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div
      className={`w-full overflow-hidden border-y py-2.5 select-none ${
        dark
          ? 'bg-[#18181B] border-[#2C2B29] text-[#E2DDD2]'
          : 'bg-[#EAE5DA] dark:bg-[#1E1E1E] border-[#D6CEBF] dark:border-[#3F3F46] text-[#141413] dark:text-[#FAFAFA]'
      }`}
    >
      <div className="animate-marquee flex w-max">
        {/* First Half */}
        <div className="flex shrink-0 items-center">
          {baseItems.map((tech, idx) => (
            <div key={idx} className="flex items-center text-[11px] sm:text-xs font-mono tracking-[0.15em] uppercase font-semibold">
              <span className="hover:text-white transition-colors cursor-default">{tech}</span>
              <span className="mx-4 sm:mx-5 text-[#D94E28] dark:text-[#FF5A2A] font-bold">/</span>
            </div>
          ))}
        </div>
        {/* Second Half (Exact Duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center">
          {baseItems.map((tech, idx) => (
            <div key={`dup-${idx}`} className="flex items-center text-[11px] sm:text-xs font-mono tracking-[0.15em] uppercase font-semibold">
              <span className="hover:text-white dark:hover:text-black transition-colors cursor-default">{tech}</span>
              <span className="mx-4 sm:mx-5 text-[#D94E28] dark:text-[#FF5A2A] font-bold">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
