import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function ProjectModal({ project, onClose, onNext, onPrev, hasNext, hasPrev }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, hasNext, hasPrev, onNext, onPrev]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#141413]/70 dark:bg-[#000000]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl h-full max-h-[100vh] sm:max-h-[90vh] bg-[#FAF7F2] dark:bg-[#121212] border border-[#DCD6C8] dark:border-[#333333] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] w-10 h-10 rounded-full border border-[#DCD6C8] dark:border-[#333333] bg-[#EFEBE1] dark:bg-[#1A1A1A] flex items-center justify-center hover:bg-[#E2DDD2] dark:hover:bg-[#27272A] transition-colors shadow-sm cursor-pointer group"
          >
            <X className="w-5 h-5 text-[#6E6A61] dark:text-[#A1A1AA] group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors" />
          </button>

          {/* Scrollable Content Area */}
          <div ref={modalRef} className="flex-1 overflow-y-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Top Cover Image Area */}
            <div className="w-full aspect-[16/9] md:aspect-[2.5/1] relative flex items-center justify-center bg-[#F4F0E8] dark:bg-[#0A0A0A] overflow-hidden border-b border-[#DCD6C8] dark:border-[#333333]">
              {/* Grid Background */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#E2DDD2_1px,transparent_1px),linear-gradient(to_bottom,#E2DDD2_1px,transparent_1px)]"
                style={{ backgroundSize: '40px 40px' }}
              />
              
              {/* Faint Center Text */}
              <h1 className="text-6xl sm:text-8xl md:text-[120px] font-mono font-bold text-[#E2DDD2] dark:text-[#27272A] select-none z-10 tracking-tighter">
                PROJ-{project.number}
              </h1>

              {/* Cover Coming Soon Badge */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 z-20">
                <span className="px-3.5 py-1.5 rounded bg-[#FAF7F2] dark:bg-[#121212] border border-[#DCD6C8] dark:border-[#333333] text-[#6E6A61] dark:text-[#A1A1AA] font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                  Cover Coming Soon
                </span>
              </div>
            </div>

            <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 space-y-16">
              
              {/* Header Block */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-xs sm:text-sm font-mono text-[#D94E28] dark:text-[#FF5A2A] font-semibold uppercase tracking-widest">
                    PROJ-{project.number}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-[#141413] dark:text-[#FAFAFA] leading-tight tracking-tight">
                    {project.title}
                  </h2>
                  <div className="text-[11px] sm:text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA] uppercase tracking-widest space-y-1.5 pt-1">
                    <div>{project.tagline}</div>
                    <div>{project.year}</div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D94E28] dark:bg-[#FF5A2A] text-white dark:text-black text-[11px] sm:text-xs font-mono font-medium hover:bg-[#C23F1C] dark:hover:bg-[#FF5A2A] transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Visit Live Site</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E2DDD2] dark:bg-[#27272A] text-[#A39E92] dark:text-[#71717A] text-[11px] sm:text-xs font-mono font-medium cursor-not-allowed shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo (Coming Soon)</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141413] dark:bg-[#FAFAFA] text-[#FAF7F2] dark:text-[#121212] text-[11px] sm:text-xs font-mono font-medium hover:bg-[#2C2B29] dark:hover:bg-[#D4D4D8] transition-colors shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Details Content */}
              <div className="space-y-12 pb-4">
                
                {/* Problem */}
                {project.problem && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold uppercase tracking-widest">Problem</h3>
                    <p className="text-base sm:text-lg text-[#5E5B54] dark:text-[#A1A1AA] font-normal leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Approach */}
                {project.solution && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold uppercase tracking-widest">Approach</h3>
                    <p className="text-base sm:text-lg text-[#5E5B54] dark:text-[#A1A1AA] leading-relaxed">
                      {project.solution}
                    </p>
                    
                    {project.features && project.features.length > 0 && (
                      <div className="pt-1 space-y-3">
                        {project.features.map((feature, idx) => (
                          <p key={idx} className="text-base sm:text-lg text-[#5E5B54] dark:text-[#A1A1AA] leading-relaxed">
                            {feature}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Result */}
                {project.overview && (
                  <div className="border-t border-[#DCD6C8] dark:border-[#333333] pt-10 space-y-4">
                    <h3 className="text-xs font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold uppercase tracking-widest">Result</h3>
                    <p className="text-base sm:text-lg text-[#141413] dark:text-[#FAFAFA] font-bold leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                )}
                
                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-4">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3.5 py-1.5 rounded-md bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-[#141413] dark:text-[#FAFAFA] font-mono text-[11px] sm:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Bottom Navigation Footer */}
          <div className="w-full h-14 bg-[#FAF7F2] dark:bg-[#121212] border-t border-[#DCD6C8] dark:border-[#333333] flex items-center justify-between px-6 sm:px-10 shrink-0">
             <button 
               onClick={onPrev} 
               disabled={!hasPrev}
               className={`flex items-center gap-2 text-xs sm:text-sm font-mono transition-colors ${hasPrev ? 'text-[#6E6A61] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#FAFAFA] cursor-pointer' : 'text-[#DCD6C8] dark:text-[#333333] cursor-not-allowed'}`}
             >
               <span>&larr;</span> Prev project
             </button>
             <button 
               onClick={onNext} 
               disabled={!hasNext}
               className={`flex items-center gap-2 text-xs sm:text-sm font-mono transition-colors ${hasNext ? 'text-[#6E6A61] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#FAFAFA] cursor-pointer' : 'text-[#DCD6C8] dark:text-[#333333] cursor-not-allowed'}`}
             >
               Next project <span>&rarr;</span>
             </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
