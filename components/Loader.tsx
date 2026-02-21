'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sprout } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // ~2.5s to reach 100

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }}
        className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grain"></div>
        
        {/* Topography Detail (Subtle background) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000">
            <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 800 Q 250 750 500 800 T 1000 800" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Central Element */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="w-24 h-24 bg-green-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-[0_0_50px_rgba(22,163,74,0.3)]">
              <Sprout size={48} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Text Reveal */}
          <div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-5xl md:text-7xl font-bold tracking-tighter"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              IKORE
            </motion.h1>
          </div>

          {/* Tagline - Typewriter Effect */}
          <div className="h-4 flex items-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/40 text-[10px] uppercase font-black tracking-[0.4em]"
            >
              {"Cultivating Sustainable Impact".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + (i * 0.04), duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-1 h-3 bg-green-600/40 ml-1"
              />
            </motion.p>
          </div>

          {/* Progress Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-green-600"
                initial={{ width: 0 }}
                animate={{ width: `${counter}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.div 
              className="text-white/60 text-sm font-mono tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {counter.toString().padStart(3, '0')}%
            </motion.div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-white/5 rounded-tl-3xl"></div>
        <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-white/5 rounded-tr-3xl"></div>
        <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-white/5 rounded-bl-3xl"></div>
        <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-white/5 rounded-br-3xl"></div>
      </motion.div>
    </AnimatePresence>
  );
}

