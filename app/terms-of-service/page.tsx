'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function TermsOfServicePage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully
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
            variants={fadeInUp}
            className="prose prose-sm max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  2. Use License
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Ikore's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  3. Disclaimer
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on Ikore's website are provided on an 'as is' basis. Ikore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  4. Limitations
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Ikore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ikore's website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  5. Accuracy of Materials
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on Ikore's website could include technical, typographical, or photographic errors. Ikore does not warrant that any of the materials on our website are accurate, complete, or current. Ikore may make changes to the materials contained on our website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  6. Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ikore has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ikore of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">Last Updated:</span> January 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
