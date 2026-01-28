'use client';

import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function ContactPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-black mb-6" 
              style={{ fontFamily: 'var(--font-heading)' }}
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-2 leading-relaxed max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              We'd love to hear from you. Reach out to discuss how we can work together to create sustainable impact.
            </motion.p>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our team is ready to answer your questions and explore partnership opportunities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Address Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Address
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  11 Vanern St, Wuse, Abuja 904101, Federal Capital Territory, Nigeria
                </p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Email
                </h3>
                <a href="mailto:info@ikore.org" className="text-gray-700 text-sm hover:text-green-600 transition-colors block">
                  info@ikore.org
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Phone
                </h3>
                <a href="tel:+2347088559767" className="text-gray-700 text-sm hover:text-green-600 transition-colors block">
                  +234 708 855 9767
                </a>
              </div>
            </motion.div>

            {/* Office Hours Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Office Hours
                </h3>
                <p className="text-gray-700 text-sm">
                  8:00 AM – 5:00 PM
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Google Map */}
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.995207793677!2d7.472397!3d9.081999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5e0ca4a8a3%3A0x5e3c7c3c8f0c6c0c!2s11%20Vanern%20St%2C%20Wuse%2C%20Abuja!5e0!3m2!1sen!2sng!4v1643000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ikore Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
