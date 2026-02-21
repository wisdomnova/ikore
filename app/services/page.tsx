'use client';

import { ChevronRight, Leaf, Sprout, Wind, Wheat, BarChart3, Users, Rocket, Globe, ArrowRight, ShieldCheck, Target, Zap, Heart } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

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
      title: "Business Model Design and Advisory",
      description: "We provide short-term technical assistance for small business enterprises and help them achieve their organizational goals through the development of market strategies, business model testing, proof of business concept and organizational capacity assessment exercises."
    },
    {
      id: 2,
      title: "Research, Learning and Capacity Building",
      description: "Ikore has vast experience implementing different research methodologies with an array of technology for data collection, analysis and reports. In terms of capacity building, we offer bespoke training driven by insights into the needs of the participants."
    },
    {
      id: 3,
      title: "Project Design and Execution",
      description: "We leverage our expertise to drive transformation through innovative projects tailored towards the economically disadvantaged and reaching the last mile. We partner with institutional stakeholders to execute impact-driven projects."
    },
    {
      id: 4,
      title: "Value Chain & Policy Development",
      description: "Our experts conduct value chain analysis for clients, mapping out the transactions and relationships and opportunities for upgrade. We provide policy recommendations to state and federal governments."
    }
  ];

  const coreExpertise = [
    {
      id: 1,
      title: "Value Chain Development",
      description: "Our approach looks at market dynamics and relationships between the different actors in the chain with the objective of strengthening the whole market system."
    },
    {
      id: 2,
      title: "Private Sector Development",
      description: "Promoting economic growth and reducing poverty by partnering and supporting private enterprises and developing projects."
    },
    {
      id: 3,
      title: "Capacity Building",
      description: "Empowering individuals and organizations through structured workshops to set and achieve their own development goals."
    },
    {
      id: 4,
      title: "Gender and Youth Development",
      description: "Ensuring inclusive participation and empowerment are at the core of every project to mitigate systemic barriers."
    },
    {
      id: 5,
      title: "Rural Entrepreneurship",
      description: "Creating an enabling environment for rural development by facilitating access to financial assistance and networks."
    },
    {
      id: 6,
      title: "Climate Smart Agriculture",
      description: "Developing interventions that guide actions needed to transform and reorient agricultural systems for sustainability."
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
              Strategic <span className="text-green-600">Services</span> for Market Transformation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions designed to strengthen market systems and drive sustainable development across Africa&apos;s most critical sectors.
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
              Tailored <span className="text-green-600">Development</span> Solutions
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We leverage analytical rigor and deep market insights to design interventions that create lasting economic value.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
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
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600/40">Phase 0{service.id}</span>
                    <div className="h-px flex-grow bg-gray-100"></div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
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

      {/* Core Expertise Section - Refined Grid */}
      <section className="bg-white py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16 sm:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600 mb-4 text-center">Vertical Excellence</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Specialized <span className="italic font-serif">Capacities</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {coreExpertise.map((expertise) => (
              <motion.div
                key={expertise.id}
                className="group bg-white rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 relative flex flex-col"
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {expertise.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {expertise.description}
                  </p>
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

      <Newsletter />
      <Footer />
    </div>
  );
}
