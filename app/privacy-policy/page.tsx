'use client';

import { motion, Variants } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Scale, Database, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
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

      {/* Hero Section - Clean & Trust-focused */}
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
              <Shield size={14} className="text-green-600" />
              Your Security Matters
            </div>
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Privacy <span className="text-green-600 italic font-serif">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              We are committed to protecting your personal information and your right to privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Spacious & Readable */}
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
                      <Eye size={24} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      Introduction
                    </h2>
                  </div>
                  <p>
                    Ikore International Development Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the ikore.org website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <Lock size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      Information Collection and Use
                    </h2>
                  </div>
                  <p className="mb-6">
                    We collect several different types of information for various purposes to provide and improve our Service to you.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium text-sm flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      Personal identification info
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium text-sm flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      Browser & device data
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium text-sm flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      Usage data and analytics
                    </li>
                    <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium text-sm flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      Cookies and tracking
                    </li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <Database size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      Use of Data
                    </h2>
                  </div>
                  <p className="mb-6">
                    Ikore uses the collected data for various purposes:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "To provide and maintain our Service",
                      "To notify you about changes to our Service",
                      "To allow participation in interactive features",
                      "To provide customer care and support",
                      "To gather analysis to improve our Service",
                      "To monitor the usage of our Service"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50/50 border border-gray-100 text-sm font-medium">
                        <CheckCircle size={16} className="text-green-600 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <Shield size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      Security of Data
                    </h2>
                  </div>
                  <p>
                    The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <FileText size={24} />
                    </div>
                    <h2 className="text-3xl m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      Changes to This Policy
                    </h2>
                  </div>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;effective date&quot; at the top of this Privacy Policy.
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
                    For any questions regarding this policy, contact us at privacy@ikore.org
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
