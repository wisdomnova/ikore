'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
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

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-black mb-6" 
              style={{ fontFamily: 'var(--font-heading)' }}
              variants={fadeInUp}
            >
              Creating Resilience For Vulnerable Communities
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Ikore, meaning "harvest" in Yoruba language, is an international development organization proffering innovative solutions to drive sustainable social and enterprise development.
            </motion.p>
            <motion.button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded transition-colors font-semibold flex items-center gap-2"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div 
            className="bg-gray-200 rounded-lg h-96 md:h-full min-h-96 flex items-center justify-center text-gray-500"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            [About Hero Image]
          </motion.div>
        </div>
      </section>

      {/* About Introduction Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              className="bg-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              [Team/Community Image]
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Worldview & Approach
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ikore's view of the world is one of a complex system with inter-dependencies. We work with the private, public sector and other non-state actors to address barriers to access, achieving scale, efficiency, and innovation in agribusiness and other sectors.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whatever we do, we always aim to create a win-win situation for all actors, extending the access frontiers at every opportunity. We work in hard-to-reach, economically deprived places and vulnerable communities across Nigeria and Africa, providing solutions that support inefficient markets and communities.
              </p>
            </motion.div>
          </div>

          {/* Additional Details */}
          <motion.div 
            className="group bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute top-0 left-8 w-16 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
            <h3 className="text-2xl font-bold text-black mb-6 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
              Building Resilient Communities
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
              In the Agricultural Sector, we facilitate inclusive market growth by deploying strategies that promote value chain competitiveness and build resilient communities, ensuring bumper harvest for rural poor farmers in those communities.
            </p>
            <p className="text-gray-700 leading-relaxed relative z-10">
              Our very dynamic and innovative workforce have experience working in different value chains across Nigeria and Africa. Our people work collectively with host communities to design home-grown solutions that improve the livelihood and resilience of the communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Capability Statement
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Guiding our mission and vision for sustainable impact
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="group bg-white rounded-2xl p-10 border-2 border-green-600 relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                To contribute to a prosperous world that creates an opportunity for a better life for all.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white rounded-2xl p-10 border-2 border-green-600 relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                To facilitate market inclusion for improved productivity and a bumper harvest through capacity building, business model/strategy advisory, market linkages, social enterprises and research.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Core Values
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-4 w-10 h-0.5 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-xl font-bold text-green-600 mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Innovation
              </h3>
              <p className="text-gray-700 text-sm relative z-10 leading-relaxed">
                We continue to apply new processes, introduce new techniques, and establish successful ideas to create new value.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-4 w-10 h-0.5 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-xl font-bold text-green-600 mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Collaboration
              </h3>
              <p className="text-gray-700 text-sm relative z-10 leading-relaxed">
                We constantly update our systems, tools and knowledge with our partners to create an effective environment.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-4 w-10 h-0.5 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-xl font-bold text-green-600 mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Commitment
              </h3>
              <p className="text-gray-700 text-sm relative z-10 leading-relaxed">
                We strive to create and support an environment where people are committed to serving our beneficiaries and clients.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-4 w-10 h-0.5 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-xl font-bold text-green-600 mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Excellence
              </h3>
              <p className="text-gray-700 text-sm relative z-10 leading-relaxed">
                All our projects are executed with the highest level of care within the scope of the requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Capability Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Ikore's Research Capability
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We leverage our expertise to generate valuable insights through extensive social and economic research, enabling us to design and implement evidence-based solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our research addresses systemic challenges in agriculture, health, and livelihoods across Nigeria and Africa. We combine rigorous methodology with community insights to create sustainable solutions.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              [Research/Data Image]
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Why Choose Ikore
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              What sets us apart in delivering sustainable impact
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="group bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Proven Strategies
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                We develop winning strategies for your interventions. Our work ethic is exceptional, and our tangible results speak for themselves. Communities are transformed, and poor families are empowered in sustainable ways.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Success Rate
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Our success rate speaks for itself. We achieve results because we are grounded in our core values of innovation, collaboration, commitment, and excellence. Every project is a testament to our dedication.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
