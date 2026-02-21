'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Sprout, Wheat } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white overflow-hidden border-t border-gray-900">
      {/* Intricate Agriculture Detail: Subtle "Plowed Rows" Background Pattern (Easter Egg) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rows" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="#61af50" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rows)" />
        </svg>
      </div>

      {/* Modern Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative w-44 h-14 mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/ikore-white.png" 
                  alt="Ikore Logo" 
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
                International development organization, proffering innovative solutions to drive sustainable social and enterprise development across Africa.
              </p>
              
              {/* Agricultural Motif (Easter Egg) */}
              <div className="flex items-center gap-2 text-green-600/40 text-xs font-medium uppercase tracking-widest">
                <Wheat size={14} />
                <span>Cultivating Growth</span>
              </div>
            </div>

            {/* Links & Contact Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Quick Links with "Seed" Bullets */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: '/about', label: 'About Us' },
                    { href: '/services', label: 'Our Services' },
                    { href: '/projects', label: 'Projects' },
                    { href: '/team', label: 'Our Team' },
                    { href: '/blogs', label: 'Blogs' }
                  ].map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-gray-400 hover:text-green-500 transition-all flex items-center gap-3 group">
                        {/* Seed motif bullet */}
                        <div className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-green-500 group-hover:scale-150 transition-all"></div>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-lg bg-gray-900 group-hover:bg-green-900/30 transition-colors">
                      <MapPin size={16} className="text-green-600" />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      11 Vanern St, Wuse, Abuja 904101, Nigeria
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-lg bg-gray-900 group-hover:bg-green-900/30 transition-colors">
                      <Mail size={16} className="text-green-600" />
                    </div>
                    <a href="mailto:info@ikore.org" className="text-sm text-gray-400 hover:text-green-500 transition-colors pt-1">
                      info@ikore.org
                    </a>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-lg bg-gray-900 group-hover:bg-green-900/30 transition-colors">
                      <Phone size={16} className="text-green-600" />
                    </div>
                    <a href="tel:+2347088559767" className="text-sm text-gray-400 hover:text-green-500 transition-colors pt-1">
                      +234 708 855 9767
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Social & Bottom Bar */}
          <div className="pt-12 border-t border-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { href: 'https://linkedin.com/...', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://twitter.com/...', icon: Twitter, label: 'Twitter' },
                  { href: 'https://facebook.com/...', icon: Facebook, label: 'Facebook' },
                  { href: 'https://instagram.com/...', icon: Instagram, label: 'Instagram' }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-600">
                <a href="/privacy-policy" className="hover:text-green-500 transition-colors">Privacy</a>
                <a href="/terms-of-service" className="hover:text-green-500 transition-colors">Terms</a>
                <a href="/sitemap" className="hover:text-green-500 transition-colors">Sitemap</a>
              </div>
            </div>

            {/* Minimal Copyright */}
            <div className="mt-12 text-center">
              <p className="text-[11px] text-gray-700 font-medium tracking-tight">
                © 2026 IKORE INTERNATIONAL DEVELOPMENT LIMITED. SUSTAINABLE SOCIAL AND ENTERPRISE DEVELOPMENT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

