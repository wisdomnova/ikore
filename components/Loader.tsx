'use client';

import { motion } from 'framer-motion';

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const eyeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Eye left animation
  const eyeLeftAnimation = {
    hidden: { opacity: 0 },
    lookCenter: { 
      x: 0, 
      transition: { delay: 0.5, duration: 0.3 }
    },
    lookLeft: { 
      x: -8, 
      transition: { delay: 1.2, duration: 0.4 }
    },
    lookRight: { 
      x: 8, 
      transition: { delay: 1.8, duration: 0.4 }
    },
    lookCenter2: { 
      x: 0, 
      transition: { delay: 2.4, duration: 0.3 }
    },
    blink: {
      scaleY: 0.1,
      transition: { delay: 2.9, duration: 0.2 }
    },
    closed: {
      scaleY: 0.05,
      transition: { delay: 3.1, duration: 0.3 }
    }
  };

  // Eye right animation (mirrored)
  const eyeRightAnimation = {
    hidden: { opacity: 0 },
    lookCenter: { 
      x: 0, 
      transition: { delay: 0.5, duration: 0.3 }
    },
    lookLeft: { 
      x: -8, 
      transition: { delay: 1.2, duration: 0.4 }
    },
    lookRight: { 
      x: 8, 
      transition: { delay: 1.8, duration: 0.4 }
    },
    lookCenter2: { 
      x: 0, 
      transition: { delay: 2.4, duration: 0.3 }
    },
    blink: {
      scaleY: 0.1,
      transition: { delay: 2.9, duration: 0.2 }
    },
    closed: {
      scaleY: 0.05,
      transition: { delay: 3.1, duration: 0.3 }
    }
  };

  // Only render loader when visible to avoid blocking interactions
  if (!isVisible) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 px-4">
        {/* Flowerpot with eyes */}
        <div className="relative w-48 sm:w-60 md:w-80 h-56 sm:h-72 md:h-96">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 300 400" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Flower Stem - Green curved line */}
            <motion.path
              d="M 150 80 Q 140 120 145 160 Q 150 200 150 250"
              stroke="#61af50"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2 }}
            />

            {/* Flower Head - Pink circle with petals */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Petals */}
              <circle cx="150" cy="40" r="12" fill="#f472b6" />
              <circle cx="180" cy="55" r="12" fill="#ec4899" />
              <circle cx="185" cy="85" r="12" fill="#f472b6" />
              <circle cx="150" cy="20" r="12" fill="#ec4899" />
              <circle cx="115" cy="55" r="12" fill="#ec4899" />
              <circle cx="115" cy="85" r="12" fill="#f472b6" />
              
              {/* Center */}
              <circle cx="150" cy="65" r="15" fill="#fbbf24" />
            </motion.g>

            {/* Flowerpot - Clay brown pot shape */}
            <motion.g
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Pot rim */}
              <ellipse cx="150" cy="250" rx="80" ry="15" fill="#b8860b" />
              
              {/* Pot body - Trapezoid shape */}
              <path
                d="M 70 250 L 50 340 Q 50 360 70 365 L 230 365 Q 250 360 250 340 L 230 250 Z"
                fill="#a0522d"
                stroke="#8b4513"
                strokeWidth="2"
              />

              {/* Pot shine/highlight */}
              <ellipse cx="110" cy="300" rx="25" ry="40" fill="#cd853f" opacity="0.4" />
            </motion.g>

            {/* Left Eye - White base */}
            <motion.g
              initial="hidden"
              animate={isVisible ? ['hidden', 'lookCenter', 'lookLeft', 'lookRight', 'lookCenter2', 'blink', 'closed'] : 'hidden'}
              variants={eyeVariants}
            >
              {/* White circle background */}
              <circle cx="90" cy="310" r="22" fill="white" stroke="#333" strokeWidth="2" />
              
              {/* Black pupil */}
              <motion.circle
                cx="90"
                cy="310"
                r="10"
                fill="black"
                variants={eyeLeftAnimation}
              />
            </motion.g>

            {/* Right Eye - White base */}
            <motion.g
              initial="hidden"
              animate={isVisible ? ['hidden', 'lookCenter', 'lookLeft', 'lookRight', 'lookCenter2', 'blink', 'closed'] : 'hidden'}
              variants={eyeVariants}
            >
              {/* White circle background */}
              <circle cx="210" cy="310" r="22" fill="white" stroke="#333" strokeWidth="2" />
              
              {/* Black pupil */}
              <motion.circle
                cx="210"
                cy="310"
                r="10"
                fill="black"
                variants={eyeRightAnimation}
              />
            </motion.g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
