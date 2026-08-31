import React, { useState, useRef, useEffect } from 'react';
import { RESEARCH_PUBLICATIONS } from '../data/portfolioData';
import { FileText, Users, Award, ExternalLink, Bookmark, CheckCircle2, Sparkles, BookOpen, ChevronDown, Mail, Download } from 'lucide-react';

export default function PublicationsSection() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="publications"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2] dark:border-[#27272A]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2] dark:border-[#27272A]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">§06</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] dark:text-[#FAFAFA] font-display">
            Research &amp; Publications
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA]">
          PEER-REVIEWED TECHNICAL PAPERS
        </span>
      </div>

      {/* Main Research Card */}
      <div className="mt-10 space-y-6">
        {RESEARCH_PUBLICATIONS.map((pub) => (
          <div
            key={pub.id}
            className="group relative transition-all duration-300 space-y-6"
          >
            {/* Top Meta Line: Badge, Year & Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE5DA] dark:border-[#1E1E1E]" ref={dropdownRef}>
              <div className="flex flex-wrap items-center gap-2.5">
                
                {/* Interactive Paper Badge Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdownId(openDropdownId === pub.id ? null : pub.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] hover:border-[#D94E28]/50 dark:hover:border-[#FF5A2A]/50 hover:bg-[#E2DDD2] dark:hover:bg-[#27272A] text-xs font-mono text-[#141413] dark:text-[#FAFAFA] font-semibold transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D94E28] dark:text-[#FF5A2A]" />
                    <span>{pub.paperType}</span>
                    <ChevronDown className={`w-3 h-3 text-[#6E6A61] dark:text-[#A1A1AA] transition-transform ${openDropdownId === pub.id ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdownId === pub.id && (
                    <div className="absolute top-full left-0 mt-2 z-50 min-w-[240px] bg-[#FAF7F2] dark:bg-[#121212] border border-[#D6CEBF] dark:border-[#3F3F46] rounded-lg shadow-xl p-1.5 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                      
                      <a
                        href={pub.acceptanceLetterUrl || '#'}
                        download="Acceptance-Letter.pdf"
                        className="flex items-center justify-between p-2.5 rounded-md hover:bg-[#EAE5DA] dark:hover:bg-[#1E1E1E] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5 text-xs font-mono text-[#141413] dark:text-[#FAFAFA]">
                          <Mail className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />
                          <span>Acceptance Letter</span>
                        </div>
                        <Download className="w-3.5 h-3.5 text-[#6E6A61] dark:text-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      
                      <a
                        href={pub.certificateUrl || '#'}
                        download="Certificate.pdf"
                        className="flex items-center justify-between p-2.5 rounded-md hover:bg-[#EAE5DA] dark:hover:bg-[#1E1E1E] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5 text-xs font-mono text-[#141413] dark:text-[#FAFAFA]">
                          <Award className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />
                          <span>Certificate PDF</span>
                        </div>
                        <Download className="w-3.5 h-3.5 text-[#6E6A61] dark:text-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>

                      <a
                        href={pub.paperPdfUrl || '#'}
                        download="Research-Paper.pdf"
                        className="flex items-center justify-between p-2.5 rounded-md hover:bg-[#EAE5DA] dark:hover:bg-[#1E1E1E] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5 text-xs font-mono text-[#141413] dark:text-[#FAFAFA]">
                          <FileText className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />
                          <span>Paper PDF</span>
                        </div>
                        <Download className="w-3.5 h-3.5 text-[#6E6A61] dark:text-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>

                    </div>
                  )}
                </div>

                <span className="px-3 py-1 rounded-full bg-[#D94E28]/10 dark:bg-[#FF5A2A]/10 border border-[#D94E28]/30 dark:border-[#FF5A2A]/30 text-xs font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">
                  {pub.year}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5E5B54] dark:text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] dark:text-[#34D399]" />
                <span className="font-semibold text-[#141413] dark:text-[#FAFAFA] uppercase tracking-wider">
                  {pub.status}
                </span>
              </div>
            </div>

            {/* Paper Title & Journal */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#141413] dark:text-[#FAFAFA] leading-snug group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors">
                {pub.title}
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#5E5B54] dark:text-[#A1A1AA]">
                <BookOpen className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A] shrink-0" />
                <span className="font-medium text-[#141413] dark:text-[#FAFAFA]">{pub.journalOrConference}</span>
              </div>
            </div>

            {/* Authors & Team Collaboration Grid */}
            <div className="group relative p-4 sm:p-5 rounded-xl bg-transparent border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] hover:border-[#D94E28]/40 dark:hover:border-[#FF5A2A]/40 transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D94E28]/20 dark:bg-[#FF5A2A]/20 group-hover:bg-[#D94E28] dark:group-hover:bg-[#FF5A2A] transition-colors duration-300" />
              
              <div className="relative z-10 pl-2 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141413] dark:text-[#FAFAFA] group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />
                    <span>Research Team ({pub.authors.length} Authors / Joint Collaboration)</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] dark:bg-[#121212] border border-[#DCD6C8] dark:border-[#333333] text-[#5E5B54] dark:text-[#A1A1AA]">
                    {pub.role}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {pub.authors.map((author, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        idx === 0
                          ? 'bg-[#141413] dark:bg-[#FAFAFA] text-[#FAF7F2] dark:text-[#121212] font-bold shadow-xs'
                          : 'bg-[#FAF7F2] dark:bg-[#121212] border border-[#DCD6C8] dark:border-[#333333] text-[#2B2925] dark:text-[#D4D4D8] group-hover:text-[#141413] dark:group-hover:text-[#FAFAFA] group-hover:border-[#D94E28]/30 dark:group-hover:border-[#FF5A2A]/30'
                      }`}
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Abstract */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E6A61] dark:text-[#A1A1AA]">
                Abstract / Research Summary:
              </div>
              <p className="text-sm sm:text-base text-[#3E3B34] dark:text-[#D4D4D8] leading-relaxed font-sans">
                {pub.abstract}
              </p>
            </div>

            {/* Key Contributions & Highlights */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E6A61] dark:text-[#A1A1AA]">
                Key Research Contributions:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {pub.keyHighlights.map((hl, idx) => (
                  <li
                    key={idx}
                    className="group relative p-3.5 rounded-lg bg-transparent border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] hover:border-[#D94E28]/40 dark:hover:border-[#FF5A2A]/40 text-xs font-sans text-[#4A4740] dark:text-[#D4D4D8] group-hover:text-[#141413] dark:group-hover:text-[#FAFAFA] leading-relaxed flex items-start gap-2 transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#D94E28]/20 dark:bg-[#FF5A2A]/20 group-hover:bg-[#D94E28] dark:group-hover:bg-[#FF5A2A] transition-colors duration-300" />
                    <span className="text-[#D94E28] dark:text-[#FF5A2A] font-bold font-mono text-sm leading-none mt-0.5 ml-1 relative z-10">•</span>
                    <span className="relative z-10">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Link */}
            {pub.doiOrLink && (
              <div className="pt-4">
                <a
                  href={pub.doiOrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#141413] dark:bg-[#FAFAFA] text-[#FAF7F2] dark:text-[#121212] hover:bg-[#2C2B29] dark:hover:bg-[#D4D4D8] text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />
                  <span>View Original Publication</span>
                </a>
              </div>
            )}

            {/* Keywords Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EAE5DA] dark:border-[#1E1E1E]">
              <span className="text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA] mr-1">KEYWORDS:</span>
              {pub.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-[11px] font-mono text-[#141413] dark:text-[#FAFAFA]"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
