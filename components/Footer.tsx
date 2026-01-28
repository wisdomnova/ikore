'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden">
      {/* Decorative curved bead background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="beadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#61af50', stopOpacity: 0.15 }} />
              <stop offset="50%" style={{ stopColor: '#61af50', stopOpacity: 0.05 }} />
              <stop offset="100%" style={{ stopColor: '#61af50', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          {/* Stretched curved bead shape */}
          <ellipse cx="600" cy="350" rx="700" ry="180" fill="url(#beadGradient)" />
          {/* Top accent curve */}
          <path d="M 0 80 Q 300 20, 600 40 T 1200 80" stroke="#61af50" strokeWidth="2" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Top Section - Logo & Main Content */}
          <div className="mb-16">
            <motion.div 
              className="relative w-40 h-12 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/ikore-white.png" 
                alt="Ikore Logo" 
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              International development organization, proffering innovative solutions to drive sustainable social and enterprise development across Africa.
            </p>
          </div>

          {/* Main Grid - Contact, Links, Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-green-600/40"></div>
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <MapPin size={20} className="text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    11 Vanern St, Wuse, Abuja 904101, Federal Capital Territory, Nigeria
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <Mail size={20} className="text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@ikore.org" className="text-sm text-gray-300 hover:text-green-600 transition-colors">
                    info@ikore.org
                  </a>
                </div>
                <div className="flex items-start gap-4 group">
                  <Phone size={20} className="text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href="tel:+2347088559767" className="text-sm text-gray-300 hover:text-green-600 transition-colors">
                    +234 708 855 9767
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-8 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-green-600"></span>
                Office Hours: 8:00 AM – 5:00 PM
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-green-600/40"></div>
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
                    <a href={link.href} className="text-sm text-gray-300 hover:text-green-600 hover:translate-x-1 transition-all flex items-center gap-2 group">
                      <span className="w-0 h-0.5 bg-green-600 group-hover:w-1.5 transition-all"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-green-600/40"></div>
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { href: 'https://www.linkedin.com/company/ikoreintldev/', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://twitter.com/ikoreintl', icon: Twitter, label: 'Twitter' },
                  { href: 'https://www.facebook.com/IkoreIntl/', icon: Facebook, label: 'Facebook' },
                  { href: 'https://www.instagram.com/ikoreintl/', icon: Instagram, label: 'Instagram' }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-green-600 hover:to-green-700 rounded-lg flex items-center justify-center transition-all"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 mt-8">
                Connect with us on social media for latest updates and insights
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 my-8"></div>

          {/* Footer Bottom */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xs text-gray-500">
              Copyright © 2026 Ikore International Development Limited. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 mt-6 text-xs text-gray-600">
              <a href="/privacy-policy" className="hover:text-green-600 transition-colors">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="/terms-of-service" className="hover:text-green-600 transition-colors">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="/sitemap" className="hover:text-green-600 transition-colors">Sitemap</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
