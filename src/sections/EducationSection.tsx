import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Building, BookOpen, GraduationCap } from 'lucide-react';
import educationTechBg from '../assets/images/education_academic_workspace_1787543695911.jpg';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2] dark:border-[#27272A]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2] dark:border-[#27272A]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">§05</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] dark:text-[#FAFAFA] font-display">
            Education &amp; Academic Background
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA]">
          {EDUCATION_DATA.length} ACADEMIC ENTRIES
        </span>
      </div>

      {/* Heroic Education Banner / Backdrop Container */}
      <div className="mt-10 rounded-2xl bg-[#121211] text-[#FAF7F2] p-6 sm:p-8 relative overflow-hidden shadow-xl border border-[#2B2925]">
        {/* Cinematic Background Video Layer with Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={educationTechBg}
            alt="Education Background"
            className="w-full h-full object-cover object-center opacity-70 scale-105 md:hidden"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/about-bg.mp4"
            className="w-full h-full object-cover object-center opacity-70 scale-105 hidden md:block"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#121211]/70 via-[#181716]/50 to-[#0E0E0D]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#D94E28_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#453F35]/50 hover:bg-[#453F35]/80 active:scale-[0.98] backdrop-blur-md border border-white/10 hover:border-[#D94E28]/60 flex flex-col transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgb(217,78,40,0.15)] overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D94E28]/20 group-hover:bg-[#D94E28] transition-colors duration-300" />
              
              <div className="flex flex-col space-y-2 mb-8 relative z-10 pl-2">
                {/* Year */}
                <div className="text-xs sm:text-sm font-mono text-white/90 group-hover:text-[#D94E28] tracking-widest mb-1 font-semibold transition-colors">
                  {edu.period}
                </div>
                
                {/* Degree */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-white/90 leading-snug transition-colors">
                  {edu.degree}
                </h3>
                
                <div className="text-sm sm:text-base text-white/70">
                  {edu.institution}, {edu.location}
                </div>
              </div>

              <div className="mt-auto space-y-5 relative z-10 pl-2">
                {/* Score Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded bg-[#653E31]/80 group-hover:bg-[#D94E28]/20 border border-[#855140] group-hover:border-[#D94E28]/40 dark:group-hover:border-[#FF5A2A]/40 text-xs font-mono text-white/90 group-hover:text-white transition-colors shadow-sm">
                  {edu.scoreOrStatus}
                </div>

                {/* Retained Additional Info */}
                <div className="text-xs text-white/50 space-y-1.5 pt-4 border-t border-white/5 group-hover:border-white/15 transition-colors">
                  <div className="font-mono text-[11px]">
                    <span className="text-white/70 font-semibold group-hover:text-white/90 transition-colors">Affiliation:</span> {edu.boardOrAffiliation}
                  </div>
                  {edu.details && (
                    <p className="text-[11px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
