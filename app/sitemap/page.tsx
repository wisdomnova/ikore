'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function SitemapPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const siteStructure = [
    {
      section: "Main Pages",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" }
      ]
    },
    {
      section: "Who We Are",
      links: [
        { href: "/about", label: "About" },
        { href: "/team", label: "Team" }
      ]
    },
    {
      section: "What We Do",
      links: [
        { href: "/services", label: "Services" },
        { href: "/innovations", label: "Innovations" }
      ]
    },
    {
      section: "Resources",
      links: [
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blogs" }
      ]
    },
    {
      section: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/sitemap", label: "Sitemap" }
      ]
    }
  ];

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
            className="text-center"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold text-black mb-6" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Sitemap
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Navigate all pages and sections of our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-green-600 transition-all"
              >
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  <div className="w-1 h-6 bg-green-600"></div>
                  {section.section}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 h-0.5 bg-green-600 group-hover:w-2 transition-all"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-white rounded-lg p-8 border-2 border-green-600/20"
          >
            <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Site Navigation Tips
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></span>
                <span>Use the main navigation menu at the top of every page to access different sections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></span>
                <span>Dropdown menus provide quick access to related pages under main categories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></span>
                <span>The footer contains links to important resources and contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></span>
                <span>Click the Ikore logo to return to the homepage from any page</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
