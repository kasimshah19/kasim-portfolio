import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2] dark:border-[#27272A]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E2DDD2] dark:border-[#27272A]">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">§02</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] dark:text-[#FAFAFA] font-display">
            Experience
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA] font-semibold">
          AUG 2026 – PRESENT &nbsp;•&nbsp; 2 ROLES
        </span>
      </div>

      {/* Main Experience Flow */}
      <div className="mt-12 space-y-14">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            id={`experience-block-${exp.id}`}
            className="space-y-6"
          >
            {/* Role Header */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl sm:text-[28px] font-bold font-display text-[#141413] dark:text-[#FAFAFA] flex items-center gap-1.5 flex-wrap">
                  <span>{exp.rolePrefix || 'Web Development Intern at '}</span>
                  {exp.companyLink ? (
                    <a
                      id={`experience-company-link-${exp.id}`}
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D94E28] dark:text-[#FF5A2A] inline-flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer group/link transition-colors hover:text-[#B83E1E] dark:hover:text-[#FF5A2A]"
                    >
                      <span>{exp.companyName}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#D94E28] dark:text-[#FF5A2A] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform stroke-[2.5]" />
                    </a>
                  ) : (
                    <span className="text-[#D94E28] dark:text-[#FF5A2A] inline-flex items-center gap-1">
                      {exp.companyName}
                    </span>
                  )}
                </h3>
                <span className="text-xs sm:text-sm font-mono text-[#6E6A61] dark:text-[#A1A1AA] tracking-wider font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#5E5B54] dark:text-[#A1A1AA] mt-3 max-w-4xl leading-relaxed">
                {exp.summary}
              </p>
            </div>

            {/* Sub-item Modules / Cards */}
            <div className="space-y-4 pt-1">
              {exp.modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="py-3 sm:py-4 space-y-3.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">
                        {mod.number}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold tracking-wide text-[#141413] dark:text-[#FAFAFA]">
                        {mod.title}
                      </span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {mod.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-md bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-xs font-mono text-[#141413] dark:text-[#FAFAFA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-1.5 pt-1">
                    {mod.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4740] dark:text-[#D4D4D8] leading-relaxed"
                      >
                        <span className="text-[#9C968B] dark:text-[#71717A] font-mono select-none font-medium">—</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Target Dot Indicator on Bottom Right */}
      <div className="flex justify-end pt-8">
      </div>

      {/* Experience Summary Statistics */}
      <div className="mt-8 pt-8 border-t border-[#E2DDD2] dark:border-[#27272A]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD2] dark:divide-[#27272A]">
          <div className="sm:pr-6">
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#141413] dark:text-[#FAFAFA] tracking-tight">
              300+
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA] mt-1.5 font-medium">
              COMMITS &amp; REVISIONS
            </div>
          </div>

          <div className="pt-6 sm:pt-0 sm:px-6">
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#141413] dark:text-[#FAFAFA] tracking-tight">
              100%
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA] mt-1.5 font-medium">
              TASK COMPLETION RATE
            </div>
          </div>

          <div className="pt-6 sm:pt-0 sm:pl-6">
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#141413] dark:text-[#FAFAFA] tracking-tight">
              2+
            </div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA] mt-1.5 font-medium">
              PRACTICAL INTERNSHIPS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
