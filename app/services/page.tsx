'use client';

import { Leaf, Rocket, Globe, ArrowRight, Target, Heart, BarChart3, Users, Wheat } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {

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

  const mainServices = [
    {
      id: 1,
      title: "Project Design & Implementation",
      description: "We leverage our expertise to drive transformation through innovative projects tailored towards the economically disadvantaged and reaching the last mile. From concept development to execution, we partner with institutional stakeholders to design and deliver impact-driven development projects.",
      icon: <Target size={28} />
    },
    {
      id: 2,
      title: "Market Systems & Value Chain Development",
      description: "Our approach examines market dynamics and the relationships between different actors in the chain, with the objective of strengthening entire market systems. We map transactions, identify upgrade opportunities, and develop strategies that drive sustainable economic growth.",
      icon: <BarChart3 size={28} />
    },
    {
      id: 3,
      title: "Business Model Design & Advisory",
      description: "We provide technical assistance for enterprises to achieve their organizational goals through the development of market strategies, business model testing, proof of business concept, and organizational capacity assessment exercises.",
      icon: <Rocket size={28} />
    },
    {
      id: 4,
      title: "Research, Evidence & Policy Support",
      description: "Ikore has vast experience implementing different research methodologies with an array of technology for data collection, analysis, and reporting. We generate actionable evidence and provide policy recommendations to state and federal governments to inform development decisions.",
      icon: <Globe size={28} />
    },
    {
      id: 5,
      title: "Enterprise & MSME Support",
      description: "We promote economic growth and reduce poverty by partnering with and supporting private enterprises — particularly micro, small, and medium enterprises. We facilitate access to finance, markets, and networks that enable rural and urban entrepreneurship to thrive.",
      icon: <Users size={28} />
    },
    {
      id: 6,
      title: "Organizational & Human Capital Development",
      description: "We empower individuals and organizations through bespoke training and capacity-building programmes driven by insights into participant needs. Our structured interventions help organizations set and achieve their own development goals with lasting results.",
      icon: <Heart size={28} />
    },
    {
      id: 7,
      title: "Climate Resilience & Sustainability Solutions",
      description: "We develop interventions that guide actions needed to transform and reorient agricultural systems for sustainability. Our climate-smart solutions help communities adapt to changing environments while maintaining productive and resilient livelihoods.",
      icon: <Leaf size={28} />
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Asymmetrical & Premium */}
      <section className="relative bg-white overflow-hidden pt-32 md:pt-40">
        {/* Intricate Agriculture Detail: Subtle Topography/Soil Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="#61af50" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.2em] mx-auto">
              <Leaf size={14} className="text-green-600" />
              Cultivating Excellence
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What We <span className="text-green-600">Do</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ikore combines deep sector knowledge with innovative methodologies to deliver tailored solutions across the agriculture, food systems, and economic development landscape.
            </p>

            <div className="pt-8">
               <button className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-900/10 group">
                  Discuss a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section - High Fidelity */}
      <section className="bg-gray-50 py-32 relative overflow-hidden">
        {/* Subtle background detail: Plowed Rows */}
        <div className="absolute top-0 right-0 w-64 h-full opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="plow-services" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#61af50" strokeWidth="1.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#plow-services)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20 sm:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We leverage analytical rigor and deep market insights to design interventions that create lasting economic value.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-700 relative overflow-hidden flex flex-col"
                variants={staggerItem}
                whileHover={{ y: -12 }}
              >
                {/* Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <filter id={`noise-service-${index}`}>
                      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#noise-service-${index})`} />
                  </svg>
                </div>

                <div className="absolute top-0 right-0 w-48 h-48 bg-green-50 rounded-bl-full opacity-5 hover:opacity-10 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-base sm:text-lg mb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <a href="/contact" className="inline-flex items-center gap-2 group-hover:gap-4 transition-all text-xs font-black uppercase tracking-widest text-gray-900 hover:text-green-600">
                      Learn Service Scope <ArrowRight size={14} className="text-green-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Authoritative */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
        {/* Topography Detail for Dark Section */}
        <div className="absolute inset-0 bg-topography opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-10"
          >
            <div className="w-20 h-20 bg-green-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-green-600/20">
               <Wheat size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Empowering Markets. <br />Creating Lasting <span className="text-green-500">Impact</span>.
            </h2>
            
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              Join leading organizations partnering with Ikore to design interventions that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
               <a
                href="/contact"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-green-600/20"
              >
                Initiate Consultation
              </a>
              <a
                href="/projects"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-sm"
              >
                View Project History
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
