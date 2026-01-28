'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-7 flex justify-between items-center">
        <a href="/">
          <motion.div 
            className="relative w-50 h-12 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src="/ikore-logo-black.png" 
              alt="Ikore Logo" 
              fill
              className="object-contain"
            />
          </motion.div>
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          <a 
            href="/" 
            className={`transition-colors flex items-center gap-1 ${isActive('/') && pathname === '/' ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
          >
            Home
          </a>
          
          {/* Who We Are Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('about')}
              className={`transition-colors flex items-center gap-1 ${isDropdownActive(['/about', '/team']) ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
            >
              Who We Are
              <ChevronDown size={16} className={`transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'about' && (
              <motion.div 
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                <a 
                  href="/about" 
                  className={`block px-4 py-3 transition-colors first:rounded-t-lg ${isActive('/about') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                >
                  About
                </a>
                <a 
                  href="/team" 
                  className={`block px-4 py-3 transition-colors last:rounded-b-lg ${isActive('/team') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                >
                  Team
                </a>
              </motion.div>
            )}
          </div>

          {/* What We Do Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('services')}
              className={`transition-colors flex items-center gap-1 ${isDropdownActive(['/services', '/innovations']) ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
            >
              What We Do
              <ChevronDown size={16} className={`transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'services' && (
              <motion.div 
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                <a 
                  href="/services" 
                  className={`block px-4 py-3 transition-colors first:rounded-t-lg ${isActive('/services') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                >
                  Services
                </a>
                <a 
                  href="/innovations" 
                  className={`block px-4 py-3 transition-colors last:rounded-b-lg ${isActive('/innovations') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                >
                  Innovations
                </a>
              </motion.div>
            )}
          </div>

          <a 
            href="/projects" 
            className={`transition-colors ${isActive('/projects') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
          >
            Projects
          </a>

          <a 
            href="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
          >
            Contact Us
          </a>
          <a 
            href="/blogs" 
            className={`transition-colors ${isActive('/blogs') ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
          >
            Blogs
          </a>
        </nav>
        <button 
          className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              <a 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded transition-colors ${isActive('/') && pathname === '/' ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
              >
                Home
              </a>
              
              {/* Mobile Who We Are Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')}
                  className={`w-full text-left px-4 py-3 rounded flex items-center justify-between transition-colors ${isDropdownActive(['/about', '/team']) ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                >
                  Who We Are
                  <ChevronDown size={16} className={`transition-transform ${mobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'about' && (
                  <div className="bg-gray-50 rounded">
                    <a 
                      href="/about" 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className={`block px-8 py-3 transition-colors ${isActive('/about') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
                    >
                      About
                    </a>
                    <a 
                      href="/team" 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className={`block px-8 py-3 transition-colors ${isActive('/team') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
                    >
                      Team
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile What We Do Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                  className={`w-full text-left px-4 py-3 rounded flex items-center justify-between transition-colors ${isDropdownActive(['/services', '/innovations']) ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                >
                  What We Do
                  <ChevronDown size={16} className={`transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'services' && (
                  <div className="bg-gray-50 rounded">
                    <a 
                      href="/services" 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className={`block px-8 py-3 transition-colors ${isActive('/services') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
                    >
                      Services
                    </a>
                    <a 
                      href="/innovations" 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className={`block px-8 py-3 transition-colors ${isActive('/innovations') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
                    >
                      Innovations
                    </a>
                  </div>
                )}
              </div>

              <a 
                href="/projects" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded transition-colors ${isActive('/projects') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
              >
                Projects
              </a>

              <a 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded transition-colors ${isActive('/contact') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
              >
                Contact Us
              </a>

              <a 
                href="/blogs" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded transition-colors ${isActive('/blogs') ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
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
