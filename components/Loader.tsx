'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  const [counter, setCounter] = useState(0);
  const [showRoot, setShowRoot] = useState(false);

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
    }, 25);

    // Show root animation after text appears
    const rootTimer = setTimeout(() => {
      setShowRoot(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(rootTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        }}
        className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grain"></div>

        {/* Topography Detail */}
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
          {/* IKORE Text - appears first */}
          <div className="relative mb-4">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-5xl md:text-8xl font-bold tracking-tighter relative"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>IK</span>
                <span className="relative inline-block">
                  O
                  {/* Root/vine that passes through the "O" */}
                  {showRoot && (
                    <motion.svg
                      viewBox="0 0 60 80"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.2em] h-[1.6em] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Root stem growing upward through the O */}
                      <motion.path
                        d="M30 75 C30 60 25 50 30 40 C35 30 28 20 30 5"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* Left leaf */}
                      <motion.path
                        d="M30 25 C22 20 18 12 24 8 C28 5 30 15 30 25"
                        fill="#22c55e"
                        fillOpacity="0.6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                      />
                      {/* Right leaf */}
                      <motion.path
                        d="M30 18 C38 14 42 6 36 3 C32 1 30 10 30 18"
                        fill="#22c55e"
                        fillOpacity="0.6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                      />
                      {/* Small root branches at bottom */}
                      <motion.path
                        d="M30 70 C25 72 20 75 18 78"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeOpacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      />
                      <motion.path
                        d="M30 72 C35 74 40 76 42 80"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeOpacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      />
                    </motion.svg>
                  )}
                </span>
                <span>RE</span>
              </motion.h1>
            </div>
          </div>

          {/* Tagline */}
          <div className="h-4 flex items-center justify-center mb-16 w-full px-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-white/40 text-[10px] uppercase font-black text-center tracking-[0.25em] sm:tracking-[0.4em] whitespace-nowrap"
            >
              Cultivating Sustainable Impact
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

