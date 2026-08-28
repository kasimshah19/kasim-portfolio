import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicPreloaderProps {
  key?: React.Key;
  onComplete?: () => void;
  enableSessionStorage?: boolean;
}

export const ENABLE_INTRO = true;
export const INTRO_TOTAL_DURATION_MS = 2400; // ~2.4s cinematic duration

export default function CinematicPreloader({
  onComplete,
  enableSessionStorage = false,
}: CinematicPreloaderProps) {
  const [phase, setPhase] = useState<'loading' | 'ready' | 'revealing' | 'done'>('loading');
  const [progress, setProgress] = useState<number>(1);
  const [statusIndex, setStatusIndex] = useState<number>(0);
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Status updates matching tech stack
  const systemStatuses = [
    'INITIALIZING PORTFOLIO KERNEL',
    'MOUNTING MERN STACK ARCHITECTURE',
    'CONNECTING REST API SERVICES',
    'OPTIMIZING CLIENT INTERFACES',
    'SYSTEM READY',
  ];

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !ENABLE_INTRO) {
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    // Check session storage ONLY if explicitly enabled
    if (enableSessionStorage && typeof window !== 'undefined') {
      const hasSeenIntro = sessionStorage.getItem('ks_intro_viewed');
      if (hasSeenIntro === 'true') {
        setShouldRender(false);
        if (onComplete) onComplete();
        return;
      }
    }

    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';

    const duration = INTRO_TOTAL_DURATION_MS;

    const animateProgress = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const linearProgress = Math.min(elapsed / (duration * 0.75), 1);

      // Smooth custom easing for natural developer progress curve
      // Fast initial start, smooth plateau around 60%, rapid finish to 100%
      const easedProgress = Math.min(
        Math.floor(
          linearProgress < 0.5
            ? 4 * linearProgress * linearProgress * linearProgress * 100
            : (1 - Math.pow(-2 * linearProgress + 2, 3) / 2) * 100
        ),
        100
      );

      setProgress(Math.max(1, easedProgress));

      // Update technical status lines based on percentage
      if (easedProgress < 25) setStatusIndex(0);
      else if (easedProgress < 55) setStatusIndex(1);
      else if (easedProgress < 82) setStatusIndex(2);
      else if (easedProgress < 100) setStatusIndex(3);
      else setStatusIndex(4);

      if (linearProgress < 1) {
        animFrameRef.current = requestAnimationFrame(animateProgress);
      } else {
        // Progress reaches 100%
        setProgress(100);
        setStatusIndex(4);
        setPhase('ready');

        // Hold SYSTEM READY for 250ms then start cinematic split reveal
        setTimeout(() => {
          setPhase('revealing');

          // Trigger page reveal callback to notify Hero synchronization
          if (onComplete) onComplete();

          if (enableSessionStorage && typeof window !== 'undefined') {
            sessionStorage.setItem('ks_intro_viewed', 'true');
          }

          // After split panels finish moving outward, remove preloader from DOM
          setTimeout(() => {
            setPhase('done');
            setShouldRender(false);
            document.body.style.overflow = '';
          }, 850);
        }, 300);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.overflow = '';
    };
  }, [enableSessionStorage, onComplete]);

  if (!shouldRender || phase === 'done') return null;

  // Floating ambient background tech symbols (subtle & non-distracting)
  const ambientTokens = [
    { text: '{ }', top: '15%', left: '8%', delay: 0 },
    { text: 'React.js', top: '22%', right: '10%', delay: 0.2 },
    { text: 'const dev = "Kasim";', top: '78%', left: '10%', delay: 0.4 },
    { text: '<FullStack />', top: '80%', right: '8%', delay: 0.6 },
    { text: 'Node.js', top: '35%', left: '5%', delay: 0.3 },
    { text: 'MongoDB', top: '65%', right: '6%', delay: 0.5 },
    { text: 'git commit', top: '12%', right: '25%', delay: 0.1 },
    { text: '01', top: '88%', left: '22%', delay: 0.7 },
  ];

  return (
    <div
      id="cinematic-developer-preloader"
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
      aria-label="Loading Kasim Shah Developer Portfolio"
      role="status"
    >
      {/* LEFT CINEMATIC PANEL */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#0C0C0B] border-r border-[#262422]/60 z-20 flex items-center justify-end overflow-hidden"
        initial={{ x: 0 }}
        animate={{
          x: phase === 'revealing' ? '-102%' : 0,
        }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1], // Expo-like smooth cinematic split
        }}
      >
        {/* Subtle grid background on left panel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#FAF7F2 1px, transparent 1px), linear-gradient(90deg, #FAF7F2 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient radial glow at center point */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D94E28]/10 dark:bg-[#FF5A2A]/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* RIGHT CINEMATIC PANEL */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-[#0C0C0B] border-l border-[#262422]/60 z-20 flex items-center justify-start overflow-hidden"
        initial={{ x: 0 }}
        animate={{
          x: phase === 'revealing' ? '102%' : 0,
        }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Subtle grid background on right panel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#FAF7F2 1px, transparent 1px), linear-gradient(90deg, #FAF7F2 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient radial glow at center point */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D94E28]/10 dark:bg-[#FF5A2A]/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* FLOATING DEVELOPER TOKENS (Extremely subtle, low opacity) */}
      <AnimatePresence>
        {phase !== 'revealing' && (
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {ambientTokens.map((token, idx) => (
              <motion.div
                key={idx}
                className="absolute font-mono text-[11px] text-[#7A756B]/20 dark:text-[#71717A]/20 tracking-wider select-none font-medium"
                style={{
                  top: token.top,
                  left: token.left,
                  right: token.right,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: token.delay,
                }}
              >
                {token.text}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CENTRAL LOGO & IDENTITY STAGE */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6 pointer-events-none">
        <motion.div
          className="w-full max-w-md flex flex-col items-center text-center space-y-6 sm:space-y-7"
          animate={{
            opacity: phase === 'revealing' ? 0 : 1,
            scale: phase === 'revealing' ? 1.05 : 1,
            filter: phase === 'revealing' ? 'blur(8px)' : 'blur(0px)',
          }}
          transition={{
            duration: 0.55,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* 1. CENTRAL KS MONOGRAM REVEAL */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Subtle glow circle behind logo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D94E28]/15 dark:from-[#FF5A2A]/15 via-[#FAF7F2]/5 dark:via-[#121212]/5 to-[#D94E28]/15 dark:to-[#FF5A2A]/15 rounded-3xl blur-xl opacity-60" />

            {/* KS Monogram Badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#141413] border border-[#2B2925] shadow-2xl flex items-center justify-center">
              {/* Inner geometric corners */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#D94E28]/50 dark:border-[#FF5A2A]/50" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#D94E28]/50 dark:border-[#FF5A2A]/50" />

              <span className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#FAF7F2] dark:text-[#121212] font-display flex items-baseline">
                <span>KS</span>
                <span className="text-[#D94E28] dark:text-[#FF5A2A] ml-0.5 text-3xl sm:text-4xl leading-none">.</span>
              </span>
            </div>
          </motion.div>

          {/* 2. DEVELOPER IDENTITY */}
          <div className="space-y-2">
            {/* Primary Name */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.35,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-[#FAF7F2] dark:text-[#121212] font-display uppercase">
                Kasim Shah
              </h1>
            </motion.div>

            {/* Role / Tech Focus */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1"
            >
              <div className="text-xs sm:text-sm font-mono tracking-[0.22em] text-[#D94E28] dark:text-[#FF5A2A] font-bold uppercase">
                MERN STACK DEVELOPER
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] text-[#8C877D] dark:text-[#71717A] uppercase font-medium">
                FULL-STACK DEVELOPER &nbsp;·&nbsp; SOFTWARE ENGINEER
              </div>
            </motion.div>
          </div>

          {/* 3. PROGRESS INDICATOR & SYSTEM INITIALIZATION */}
          <motion.div
            className="w-full max-w-[280px] sm:max-w-[320px] space-y-3 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            {/* Minimalist Progress Track */}
            <div className="relative w-full h-[3px] bg-[#22211F] rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#D94E28]/80 dark:from-[#FF5A2A]/80 via-[#D94E28] dark:via-[#FF5A2A] to-[#FFA07A] dark:to-[#F97316] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Readout Status + Numeric Counter */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider">
              {/* Dynamic Status Text */}
              <div className="flex items-center gap-1.5 text-[#9C968B] dark:text-[#71717A] truncate mr-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    phase === 'ready'
                      ? 'bg-[#10B981] dark:bg-[#34D399] animate-ping'
                      : 'bg-[#D94E28] dark:bg-[#FF5A2A] animate-pulse'
                  }`}
                />
                <span className="truncate uppercase font-medium">
                  {systemStatuses[statusIndex]}
                </span>
              </div>

              {/* Monospace 2-3 Digit Progress Number */}
              <div className="text-[#FAF7F2] dark:text-[#121212] font-semibold tabular-nums shrink-0">
                {String(progress).padStart(2, '0')}%
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
