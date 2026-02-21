'use client';

import { ChevronDown, Menu, X, Sprout } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isDropdownActive = (paths: string[]) => {
    return paths.some(path => isActive(path));
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: 'none' as const },
    visible: { 
      opacity: 1, 
      y: 0,
      pointerEvents: 'auto' as const,
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      y: -10,
      pointerEvents: 'none' as const,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-6 md:py-7'}`}>
      {/* Subtle agriculture-inspired row indicator (easter egg) at top corner */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden pointer-events-none opacity-20">
        <div className="flex gap-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="h-full w-2 border-r border-[#61af50]/40 transform skew-x-12"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative">
        <a href="/" className="z-10">
          <motion.div 
            className="relative w-40 h-10 md:w-50 md:h-12 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image 
              src="/ikore-logo-black.png" 
              alt="Ikore Logo" 
              fill
              className="object-contain"
            />
          </motion.div>
        </a>
        <nav className="hidden md:flex gap-1 items-center">
          <a 
            href="/" 
            className={`px-4 py-2 text-sm transition-all duration-200 rounded-full flex items-center gap-2 group ${isActive('/') && pathname === '/' ? 'text-green-600 font-black bg-green-50' : 'text-gray-700 font-bold hover:text-green-600 hover:bg-green-50/50'}`}
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-green-500 scale-0 transition-transform ${isActive('/') && pathname === '/' ? 'scale-100' : 'group-hover:scale-50'}`}></div>
            Home
          </a>
          
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('about')}
              onMouseEnter={() => setOpenDropdown('about')}
              className={`px-4 py-2 text-sm transition-all duration-200 rounded-full flex items-center gap-1 ${isDropdownActive(['/about', '/team']) ? 'text-green-600 font-black bg-green-50' : 'text-gray-700 font-bold hover:text-green-600 hover:bg-green-50/50'}`}
            >
              Who We Are
              <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openDropdown === 'about' && (
                <motion.div 
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] z-50 p-1"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a 
                    href="/about" 
                    className={`block px-4 py-3 text-sm transition-all rounded-lg ${isActive('/about') ? 'bg-green-50 text-green-600 font-black' : 'text-gray-600 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
                  >
                    About
                  </a>
                  <a 
                    href="/team" 
                    className={`block px-4 py-3 text-sm transition-all rounded-lg ${isActive('/team') ? 'bg-green-50 text-green-600 font-black' : 'text-gray-600 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
                  >
                    Team
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* What We Do Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('services')}
              onMouseEnter={() => setOpenDropdown('services')}
              className={`px-4 py-2 text-sm transition-all duration-200 rounded-full flex items-center gap-1 ${isDropdownActive(['/services', '/innovations']) ? 'text-green-600 font-black bg-green-50' : 'text-gray-700 font-bold hover:text-green-600 hover:bg-green-50/50'}`}
            >
              What We Do
              <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openDropdown === 'services' && (
                <motion.div 
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] z-50 p-1"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a 
                    href="/services" 
                    className={`block px-4 py-3 text-sm transition-all rounded-lg ${isActive('/services') ? 'bg-green-50 text-green-600 font-black' : 'text-gray-600 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
                  >
                    Services
                  </a>
                  <a 
                    href="/innovations" 
                    className={`block px-4 py-3 text-sm transition-all rounded-lg ${isActive('/innovations') ? 'bg-green-100 text-green-600 font-black' : 'text-gray-600 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
                  >
                    Innovations
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="/projects" 
            className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${isActive('/projects') ? 'text-green-600 font-black bg-green-50' : 'text-gray-700 font-bold hover:text-green-600 hover:bg-green-50/50'}`}
          >
            Projects
          </a>

          <a 
            href="/contact" 
            className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${isActive('/contact') ? 'text-green-600 font-black bg-green-50' : 'text-gray-700 font-bold hover:text-green-600 hover:bg-green-50/50'}`}
          >
            Contact Us
          </a>
          <a 
            href="/blogs" 
            className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${isActive('/blogs') ? 'text-green-600 font-black bg-green-50' : 'text-gray-700 font-bold hover:text-green-600 hover:bg-green-50/50'}`}
          >
            Blogs
          </a>

          {/* Subtly animated grain detail (easter egg) */}
          <div className="ml-4 opacity-10 hover:opacity-100 transition-opacity">
            <Sprout size={16} className="text-green-600" />
          </div>
        </nav>
        <button 
          className="md:hidden p-2 rounded-full border border-gray-100 bg-gray-50 text-gray-700 hover:text-green-600 hover:bg-green-50 hover:border-green-100 transition-all z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <nav className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-1 relative overflow-hidden">
              {/* Subtle background plant line (easter egg for mobile) */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none scale-150 rotate-12">
                <Sprout size={120} className="text-green-900" />
              </div>

              <a 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all ${isActive('/') && pathname === '/' ? 'bg-green-50 text-green-600 font-black' : 'text-gray-700 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
              >
                Home
              </a>
              
              {/* Mobile Who We Are Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all ${isDropdownActive(['/about', '/team']) ? 'bg-green-50 text-green-600 font-black' : 'text-gray-700 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
                >
                  Who We Are
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'about' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50/50 mx-2 rounded-xl"
                    >
                      <a 
                        href="/about" 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileDropdown(null);
                        }}
                        className={`block px-6 py-3 transition-colors text-sm ${isActive('/about') ? 'text-green-600 font-black' : 'text-gray-600 font-bold hover:text-green-600'}`}
                      >
                        About
                      </a>
                      <a 
                        href="/team" 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileDropdown(null);
                        }}
                        className={`block px-6 py-3 transition-colors text-sm ${isActive('/team') ? 'text-green-600 font-black' : 'text-gray-600 font-bold hover:text-green-600'}`}
                      >
                        Team
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile What We Do Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all ${isDropdownActive(['/services', '/innovations']) ? 'bg-green-50 text-green-600 font-black' : 'text-gray-700 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
                >
                  What We Do
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'services' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50/50 mx-2 rounded-xl"
                    >
                      <a 
                        href="/services" 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileDropdown(null);
                        }}
                        className={`block px-6 py-3 transition-colors text-sm ${isActive('/services') ? 'text-green-600 font-black' : 'text-gray-600 font-bold hover:text-green-600'}`}
                      >
                        Services
                      </a>
                      <a 
                        href="/innovations" 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileDropdown(null);
                        }}
                        className={`block px-6 py-3 transition-colors text-sm ${isActive('/innovations') ? 'text-green-600 font-black' : 'text-gray-600 font-bold hover:text-green-600'}`}
                      >
                        Innovations
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="/projects" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all ${isActive('/projects') ? 'bg-green-50 text-green-600 font-black' : 'text-gray-700 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
              >
                Projects
              </a>

              <a 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all ${isActive('/contact') ? 'bg-green-50 text-green-600 font-black' : 'text-gray-700 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
              >
                Contact Us
              </a>

              <a 
                href="/blogs" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all ${isActive('/blogs') ? 'bg-green-50 text-green-600 font-black' : 'text-gray-700 font-bold hover:bg-green-50/50 hover:text-green-600'}`}
              >
                Blogs
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
