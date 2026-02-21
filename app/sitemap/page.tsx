'use client';

import { motion, Variants } from 'framer-motion';
import { Network, ArrowRight, ArrowUpRight, Globe, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function SitemapPage() {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const siteStructure = [
    {
      section: "Corporate Explorer",
      icon: <Globe className="text-green-600" size={20} />,
      links: [
        { href: "/", label: "Home Base" },
        { href: "/about", label: "Our Story" },
        { href: "/team", label: "Executive Team" },
        { href: "/contact", label: "Connect with Us" }
      ]
    },
    {
      section: "Solutions & Impact",
      icon: <Layers className="text-green-600" size={20} />,
      links: [
        { href: "/services", label: "Strategic Services" },
        { href: "/innovations", label: "Market Innovations" },
        { href: "/projects", label: "Impact Portfolio" }
      ]
    },
    {
      section: "Knowledge Center",
      icon: <Network className="text-green-600" size={20} />,
      links: [
        { href: "/blogs", label: "Insights & Press" },
        { href: "/sitemap", label: "Platform Index" }
      ]
    },
    {
      section: "Compliance & Safety",
      icon: <ArrowUpRight className="text-green-600" size={20} />,
      links: [
        { href: "/privacy-policy", label: "Data Privacy" },
        { href: "/terms-of-service", label: "Legal Terms" }
      ]
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Consistent Premium Style */}
      <section className="relative bg-white overflow-hidden pt-32 md:pt-40">
        {/* Topography Detail */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#61af50" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mx-auto">
              <Network size={14} className="text-green-600" />
              Platform Architecture
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Navigate Our <span className="text-green-600">Ecosystem</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of the Ikore digital infrastructure and project touchpoints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Structured Index Grid */}
      <section className="bg-gray-50 py-32 relative overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group bg-white rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-700 flex flex-col md:flex-row gap-8 md:gap-10 items-start"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-2xl sm:rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  {section.icon}
                </div>

                <div className="flex-grow">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    {section.section}
                  </h2>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="flex items-center justify-between group/link text-gray-500 hover:text-green-600 transition-colors py-2 border-b border-gray-50"
                        >
                          <span className="text-base font-medium tracking-tight group-hover/link:translate-x-1 transition-transform">
                            {link.label}
                          </span>
                          <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-all text-green-600" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Intelligence Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 sm:mt-24 bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-premium flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
          >
            <div className="lg:w-1/3">
               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-2xl sm:rounded-[2rem] flex items-center justify-center shadow-xl shadow-green-600/20 mb-8 mx-auto lg:mx-0">
                  <Network size={32} className="text-white" />
               </div>
               <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left" style={{ fontFamily: 'var(--font-heading)' }}>
                 Navigational Resources
               </h3>
               <p className="text-gray-500 leading-relaxed text-center lg:text-left">
                 Expert guidance on utilizing our platform for maximum impact and information retrieval.
               </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Use the global navigation for quick contextual switching.",
                "The footer architecture provides access to essential legal and contact items.",
                "Search functionality in the Insights section helps find specific regional reports.",
                "Return to the primary ecosystem base by clicking the Ikore catalyst logo."
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[10px] font-black text-green-600">{i + 1}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
