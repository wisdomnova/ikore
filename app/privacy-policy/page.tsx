'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              How we protect and handle your information
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
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ikore International Development Limited ("we", "us", "our", or "Company") operates the ikore.org website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Information Collection and Use
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Browser and device information</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Use of Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ikore uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer care and support</li>
                  <li>To gather analysis or valuable information to improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Security of Data
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
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
