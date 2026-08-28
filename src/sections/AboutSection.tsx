import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MINDSET_PILLARS } from '../data/portfolioData';
import { Code, Smartphone, Layers, ShieldCheck, Target, Sparkles } from 'lucide-react';

const FOCUS_AREAS = [
  {
    id: 'mern',
    number: '01',
    title: 'MERN & Full-Stack Engineering',
    tag: 'FULL-STACK DEVELOPMENT',
    description: 'Specializing in end-to-end web architecture: connecting interactive React component trees with scalable Node/Express server middleware and MongoDB document collections.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Vite', 'Docker'],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend & REST API Architecture',
    tag: 'SERVER & SECURITY',
    description: 'Designing clean, modular RESTful APIs with structured JSON payloads, input validation, JWT token refresh mechanisms, and Role-Based Access Control (RBAC).',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Security', 'RBAC Middleware', 'Postman'],
  },
  {
    id: 'database',
    number: '03',
    title: 'Database Design & Cloud Storage',
    tag: 'PERSISTENCE & SCHEMAS',
    description: 'Modeling normalized MongoDB schemas with Mongoose ODM, managing relational structures in MySQL, and configuring Cloudinary CDN pipelines for high-resolution assets.',
    skills: ['MongoDB Atlas', 'Mongoose ODM', 'MySQL', 'Firebase', 'Cloudinary CDN', 'Schema Validation'],
  },
  {
    id: 'frontend',
    number: '04',
    title: 'Frontend Engineering & Responsive UI/UX',
    tag: 'CLIENT & INTERACTION',
    description: 'Crafting responsive, pixel-accurate user interfaces with accessible navigation, fluid layout transitions, and intuitive feedback across mobile, tablet, and desktop.',
    skills: ['React 18', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Motion', 'Responsive Design'],
  },
];

export default function AboutSection() {
  const [activeArea, setActiveArea] = useState(FOCUS_AREAS[0]);

  const getMindsetIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />;
      case 'Target':
        return <Target className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-4 h-4 text-[#D94E28] dark:text-[#FF5A2A]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2] dark:border-[#27272A]"
    >
      {/* Section Header (Matching Image 6) */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2] dark:border-[#27272A]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">§03</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] dark:text-[#FAFAFA] font-display">
            About Me
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA]">
          4 CORE FOCUS AREAS
        </span>
      </div>

      {/* Main High-Impact Lead Paragraph (Matching Image 6) */}
      <div className="py-8">
        <p className="text-xl sm:text-2xl text-[#141413] dark:text-[#FAFAFA] font-sans font-medium leading-relaxed max-w-4xl">
          I'm Kasim Shah, a Computer Technology student and aspiring Software Engineer focused on building modern full-stack web applications: architecting robust backends and expressive frontends that solve real-world community and business problems.
        </p>
      </div>

      {/* Interactive Focus Areas Tabs (Matching Image 6) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pt-4 pb-12 border-b border-[#E2DDD2] dark:border-[#27272A]">
        {/* Left Focus Area Selector */}
        <div className="lg:col-span-5 space-y-3 lg:pr-8">
          {FOCUS_AREAS.map((area) => {
            const isActive = activeArea.id === area.id;
            return (
              <button
                key={area.id}
                onMouseEnter={() => setActiveArea(area)}
                onClick={() => setActiveArea(area)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3 border ${
                  isActive
                    ? 'bg-[#EFEBE1] dark:bg-[#1A1A1A] border-transparent border-l-4 border-l-[#D94E28] dark:border-l-[#FF5A2A]'
                    : 'bg-transparent border-transparent hover:bg-[#EFEBE1]/40 dark:hover:bg-[#1A1A1A]/40 text-[#5E5B54] dark:text-[#A1A1AA]'
                }`}
              >
                <span className={`text-xs font-mono font-bold mt-0.5 ${isActive ? 'text-[#D94E28] dark:text-[#FF5A2A]' : 'text-[#9C968B] dark:text-[#71717A]'}`}>
                  {area.number}
                </span>
                <span className={`text-sm sm:text-base font-bold font-display ${isActive ? 'text-[#141413] dark:text-[#FAFAFA]' : 'text-[#5E5B54] dark:text-[#A1A1AA]'}`}>
                  {area.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Active Focus Area Details Card */}
        <div className="lg:col-span-7 p-2 sm:p-4 lg:p-8 lg:border-l border-[#E2DDD2] dark:border-[#27272A] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArea.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-5 flex flex-col justify-between h-full"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D94E28] dark:text-[#FF5A2A] uppercase">
                  {activeArea.tag}
                </span>
                <h3 className="text-2xl font-bold font-display text-[#141413] dark:text-[#FAFAFA]">
                  {activeArea.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5E5B54] dark:text-[#A1A1AA] leading-relaxed">
                  {activeArea.description}
                </p>
              </div>

              {/* Tech Chips */}
              <div className="pt-4 border-t border-[#E2DDD2] dark:border-[#27272A] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6A61] dark:text-[#A1A1AA] block">
                  Core Technologies & Frameworks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeArea.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-xs font-mono text-[#141413] dark:text-[#FAFAFA] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Engineering Mindset: What I Care About */}
      <div className="mt-14 space-y-8">
        <div>
          <span className="text-xs font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold uppercase tracking-widest block">
            CORE PHILOSOPHY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141413] dark:text-[#FAFAFA] font-display mt-1">
            What I Care About as an Engineer
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MINDSET_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative p-4 sm:p-5 rounded-2xl border border-[#DCD6C8] dark:border-[#333333] bg-transparent hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] hover:border-[#D94E28]/40 dark:hover:border-[#FF5A2A]/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D94E28]/20 dark:bg-[#FF5A2A]/20 group-hover:bg-[#D94E28] dark:group-hover:bg-[#FF5A2A] transition-colors duration-300" />
              <div className="relative z-10 pl-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] shrink-0 text-[#141413] dark:text-[#FAFAFA] group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors">
                    {getMindsetIcon(pillar.iconName)}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold font-display text-[#141413] dark:text-[#FAFAFA] group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors leading-tight">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#5E5B54] dark:text-[#A1A1AA] leading-relaxed pl-1">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
