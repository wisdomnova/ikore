'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function ServicesPage() {

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: 'none' as const },
    visible: { 
      opacity: 1, 
      y: 0,
      pointerEvents: 'auto' as const,
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      y: -10,
      pointerEvents: 'none' as const,
      transition: { duration: 0.2 } 
    }
  };

  const mainServices = [
    {
      id: 1,
      title: "Business Model Design and Advisory",
      description: "We provide short-term technical assistance for small business enterprises and help them achieve their organizational goals through the development of market strategies, business model testing, proof of business concept and organizational capacity assessment exercises."
    },
    {
      id: 2,
      title: "Research, Learning and Capacity Building",
      description: "Ikore has vast experience implementing different research methodologies with an array of technology for data collection, analysis and reports. In terms of capacity building, we offer bespoke training driven by insights into the needs of the participants, using various adult learning techniques and participatory approaches."
    },
    {
      id: 3,
      title: "Project Design and Execution",
      description: "We leverage our expertise to drive transformation through innovative projects tailored towards the economically disadvantaged and reaching the last mile. We also partner with institutional stakeholders and other private actors to execute impact-driven projects within and beyond Nigeria."
    },
    {
      id: 4,
      title: "Value Chain & Policy Development",
      description: "Through our team of value chain experts, Ikore conducts value chain analysis for clients, both crops and livestock, mapping out the transactions and relationships and opportunities for upgrade, targeted at intervention nodes/levers. Through in-depth social and economic research, we provide policy recommendations to state and federal governments, fostering public-private partnerships."
    }
  ];

  const coreExpertise = [
    {
      id: 1,
      title: "Value Chain Development",
      description: "Our approach to value chain development looks at market dynamics and relationships between the different actors in the chain with the objective of strengthening the whole market system."
    },
    {
      id: 2,
      title: "Private Sector Development",
      description: "We are working on a range of strategies for promoting economic growth and reducing poverty in developing countries by partnering and supporting private enterprises and developing projects."
    },
    {
      id: 3,
      title: "Capacity Building",
      description: "We build the capacities of individuals, organizations and societies through training and workshops to obtain, strengthen and maintain the capabilities to set and achieve their own development."
    },
    {
      id: 4,
      title: "Gender and Youth Development",
      description: "Women and youth participation and empowerment are at the core of every of our project to ensure that we can contribute towards mitigating the many issues that hinder women and youth."
    },
    {
      id: 5,
      title: "Rural Entrepreneurship",
      description: "We are working to create an enabling environment for rural entrepreneurs and rural development by working with the government and the private sector to create access to financial assistance."
    },
    {
      id: 6,
      title: "Climate Smart Agriculture",
      description: "Part of our vision is to ensure climate-smart agriculture by developing and implementing projects with an approach that helps to guide actions needed to transform and reorient agricultural."
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
            variants={fadeInUp}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-black mb-6" 
              style={{ fontFamily: 'var(--font-heading)' }}
              variants={fadeInUp}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive solutions tailored to drive sustainable development and market transformation across Africa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
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
              What We Bring To You
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Core services designed to transform organizations and strengthen market systems
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Service 1 - Large card */}
            <motion.div
              className="lg:col-span-6 group bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-600 mb-6">01</div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {mainServices[0].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {mainServices[0].description}
                </p>
              </div>
            </motion.div>

            {/* Service 2 - Large card */}
            <motion.div
              className="lg:col-span-6 group bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-600 mb-6">02</div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {mainServices[1].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {mainServices[1].description}
                </p>
              </div>
            </motion.div>

            {/* Service 3 - Large card */}
            <motion.div
              className="lg:col-span-6 group bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-600 mb-6">03</div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {mainServices[2].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {mainServices[2].description}
                </p>
              </div>
            </motion.div>

            {/* Service 4 - Large card */}
            <motion.div
              className="lg:col-span-6 group bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-600 mb-6">04</div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {mainServices[3].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {mainServices[3].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise Section */}
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
              Our Core Expertise
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Specialized capabilities across critical development sectors
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {coreExpertise.map((expertise) => (
              <motion.div
                key={expertise.id}
                className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative overflow-hidden"
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white text-xl font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {expertise.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Transform Your Organization?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Let's collaborate to design and implement solutions that drive sustainable development and impact in your communities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Get In Touch
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
