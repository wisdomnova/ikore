'use client';

import { motion, Variants } from 'framer-motion';
import { FileText, Gavel, Scale, AlertCircle, ExternalLink, ScrollText, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Clean & Governing */}
      <section className="relative pt-40 pb-20 md:pt-48 bg-white overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <Gavel size={14} className="text-green-600" />
              Governing Terms
            </div>
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Terms of <span className="text-green-600 italic font-serif">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Please read these terms and conditions carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Structured & Professional */}
      <section className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-grain"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-16 shadow-premium border border-gray-100"
          >
            <div className="prose prose-sm sm:prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
              <div className="space-y-12 sm:space-y-16">
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600">
                      <ScrollText size={24} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      1. Agreement to Terms
                    </h2>
                  </div>
                  <p>
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <FileText size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      2. Use License
                    </h2>
                  </div>
                  <p className="mb-6">
                    Permission is granted to temporarily download one copy of the materials (information or software) on Ikore&apos;s website for personal, non-commercial transitory viewing only. Under this license you may not:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Modify or copy the materials",
                      "Use materials for any commercial purpose",
                      "Attempt to decompile or reverse engineer software",
                      "Remove any copyright or proprietary notations",
                      "Transfer materials to another person or 'mirror' them"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50/50 border border-gray-100 text-sm font-medium">
                        <AlertCircle size={16} className="text-green-600 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <Scale size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      3. Disclaimer
                    </h2>
                  </div>
                  <p>
                    The materials on Ikore&apos;s website are provided on an &apos;as is&apos; basis. Ikore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <AlertCircle size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      4. Limitations
                    </h2>
                  </div>
                  <p>
                    In no event shall Ikore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ikore&apos;s website.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <CheckCircle size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      5. Accuracy of Materials
                    </h2>
                  </div>
                  <p>
                    The materials appearing on Ikore&apos;s website could include technical, typographical, or photographic errors. Ikore does not warrant that any of the materials on our website are accurate, complete, or current. Ikore may make changes to the materials contained on our website at any time without notice.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <ExternalLink size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      6. Links
                    </h2>
                  </div>
                  <p>
                    Ikore has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ikore of the site. Use of any such linked website is at the user&apos;s own risk.
                  </p>
                </section>

                <div className="pt-10 mt-10 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white">
                      <Scale size={20} />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-gray-400">Effective Jan 2026</span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium italic">
                    By using our service, you agree to these legal terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
