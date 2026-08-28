'use client';

import { ChevronRight, Leaf, Sprout, Wind, Wheat, CheckCircle, Users, Target, BarChart3, Search, Database, Globe } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
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

  return (
    <div className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Section - Asymmetrical & Premium */}
      <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden pt-32 md:pt-40">
        {/* Intricate Agriculture Detail: Subtle Topography/Soil Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 800 Q 250 750 500 800 T 1000 800" fill="none" stroke="#61af50" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">
                <Wheat size={14} className="text-green-600" />
                Rooted in Excellence
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight" 
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Creating Resilience For <span className="text-green-600">Vulnerable</span> Communities
              </h1>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                Ikore (&quot;harvest&quot; in Yoruba) is an international development and consulting firm that designs and delivers innovative, market-led solutions to drive sustainable social and enterprise development. We see the world as a complex system of interdependencies, which is why we apply a systems thinking approach—working with governments, the private sector, and other non-state actors to unlock barriers to access, scale, and innovation.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Decorative Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              className="relative w-full max-w-[450px] aspect-[4/5] sm:h-[500px] lg:h-[650px] lg:w-[500px] overflow-hidden rounded-[3.5rem] border-[12px] border-white shadow-premium bg-gray-100 mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image 
                src="/hero-main.jpg" 
                alt="Ikore Community Impact"
                className="object-cover"
                fill
                priority
              />
            </motion.div>
            
            {/* Catalyst Element */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-600 rounded-3xl shadow-xl flex items-center justify-center text-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wind size={40} strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worldview Section - High Contrast & Spacious */}
      <section className="bg-gray-50 pt-32 pb-48 relative overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-[4rem] overflow-hidden shadow-premium border-[12px] border-white bg-gray-100 mx-auto lg:mx-0">
                <Image 
                  src="/services-2.jpg"  
                  alt="Our Approach"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  fill
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-600/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div className="w-16 h-1.5 bg-green-600 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Worldview & <br/><span className="text-green-600 italic font-serif">Approach</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-lg sm:text-xl text-gray-500 leading-relaxed font-medium">
                <p>
                  Our view of the world is one of a complex system with inter-dependencies. We work with the private, public sector and other non-state actors to address barriers to access, achieving scale, efficiency, and innovation in agribusiness and other sectors.
                </p>
                <p>
                  We operate in hard-to-reach and economically deprived communities across Nigeria and Africa, supporting fragile markets and vulnerable populations with inclusive, context-driven solutions. In the agrifood sector, we facilitate market competitiveness, strengthen value chains, and build resilient communities—ensuring that smallholder farmers, women, and youth are not left behind.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  "Inclusive Market Growth",
                  "Value Chain Competitiveness"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-green-600 transition-colors">
                    <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-all">
                      <CheckCircle size={20} className="text-inherit" />
                    </div>
                    <span className="font-bold text-gray-900 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capability Statement - Dark Premium Pivot */}
      <section className="bg-[#0a0a0a] py-40 relative overflow-hidden">
        {/* Topography Detail */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 C 150 150 350 50 500 100 S 850 150 1000 100" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 300 C 150 350 350 250 500 300 S 850 350 1000 300" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Capability Statement
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
              <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">
                Guiding our mission and vision for sustainable impact across the African continent.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Our Vision",
                icon: <Target size={32} />,
                text: "To contribute to a prosperous world that creates an opportunity for a better life for all."
              },
              {
                title: "Our Mission",
                icon: <Sprout size={32} />,
                text: "To facilitate market inclusion for improved productivity and a bumper harvest through capacity building, business model/strategy advisory, market linkages, social enterprises and research."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 sm:p-12 md:p-16 rounded-[4rem] hover:bg-white/[0.06] transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600/20 rounded-3xl flex items-center justify-center text-green-500 mb-8 sm:mb-10 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p className="text-white/70 text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section - Spacious & Icon-Driven */}
      <section className="bg-white py-40 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="sticky top-40 space-y-10"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-green-600 font-black uppercase tracking-[0.2em] text-xs">
                    <div className="w-10 h-px bg-green-600"></div>
                    Philosophy
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    Our Core <span className="text-green-600">Values</span>
                  </h2>
                </div>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                  The principles that guide our interactions, decision-making, and project delivery across every community we serve.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  { title: "Innovation", desc: "At Ikore, innovation drives everything we do. We constantly seek new, creative, and scalable approaches that solve complex development challenges and improve lives. By leveraging technology, local insights, and bold ideas, we design solutions that are both effective and sustainable.", icon: <Wind /> },
                  { title: "Collaboration", desc: "We believe lasting change happens when we work together. By collaborating with state and non-state actors, communities, and partners, we co-create inclusive solutions that are practical, context-driven, and impactful.", icon: <Users /> },
                  { title: "Accountability", desc: "Accountability is central to our work. We uphold the highest standards of transparency, integrity, and responsibility in all our operations and partnerships, ensuring trust and long-term impact.", icon: <Target /> },
                  { title: "Excellence", desc: "Excellence guides Ikore's work, shaping a culture of professionalism, quality, and continuous improvement. We deliver evidence-based solutions that not only meet expectations but also create measurable impact.", icon: <BarChart3 /> },
                  { title: "Adaptability", desc: "We understand that development landscapes are complex and ever-changing. By remaining flexible and responsive to emerging realities, we continuously refine our approaches to ensure relevance and long-term sustainability.", icon: <Globe /> },
                  { title: "Insight Driven", desc: "Rooted in data, research, and local knowledge, we combine evidence with on-the-ground realities to design solutions that are context-specific and responsive. This ensures every intervention is not only effective but also aligned with the real needs of the communities we serve.", icon: <Search /> },
                  { title: "Learning", desc: "We embrace a learning culture, continuously evolving through feedback, experience, and reflection. By cultivating curiosity and adaptability, we refine our strategies, scale what works, and remain responsive to emerging challenges and opportunities.", icon: <Database /> }
                ].map((val, i) => (
                  <motion.div 
                    key={i}
                    variants={staggerItem}
                    className="p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] bg-gray-50 border border-gray-100 hover:border-green-600 transition-all hover:shadow-premium group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 mb-8 sm:mb-10">
                      {val.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{val.title}</h3>
                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed">{val.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Capability Section - High Fidelity */}
      <section className="bg-gray-50 py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1 space-y-10"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">
                  <Search size={14} className="text-green-600" />
                  Evidence Driven
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Research <span className="text-green-600">Capability</span>
                </h2>
              </div>
              <div className="space-y-8 text-lg sm:text-xl text-gray-500 leading-relaxed font-medium">
                <p>
                  We leverage our expertise to generate valuable insights through extensive social and economic research, enabling us to design and implement evidence-based solutions.
                </p>
                <p>
                  Our research addresses systemic challenges in agriculture, health, and livelihoods across Nigeria and Africa. We combine rigorous methodology with community insights to create sustainable solutions.
                </p>
              </div>
              <div className="flex gap-8 pt-6">
                 <div className="flex flex-col gap-2">
                    <Database className="text-green-600" size={32} />
                    <span className="text-sm font-black uppercase tracking-widest text-gray-400">Data Integrity</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <Globe className="text-green-600" size={32} />
                    <span className="text-sm font-black uppercase tracking-widest text-gray-400">Regional Scope</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 relative" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/3] shadow-premium border-[12px] border-white bg-gray-100">
                <Image 
                  src="/blog-2.jpg" 
                  alt="Research and Analysis"
                  className="object-cover"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Large Format Cards */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-20 sm:mb-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Why Choose <span className="text-green-600 font-serif italic">Ikore</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto font-medium">
              What sets us apart in delivering sustainable impact
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Proven Strategies",
                desc: "We develop winning strategies for your interventions. Our work ethic is exceptional, and our tangible results speak for themselves. Communities are transformed, and poor families are empowered in sustainable ways."
              },
              {
                title: "Success Rate",
                desc: "Our success rate speaks for itself. We achieve results because we are grounded in our core values of innovation, collaboration, commitment, and excellence. Every project is a testament to our dedication."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                className="group bg-white rounded-[4rem] p-8 sm:p-12 md:p-16 border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-700 relative overflow-hidden"
                variants={staggerItem}
                whileHover={{ y: -12 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="w-2 md:w-3 h-16 md:h-20 bg-green-600 rounded-full mb-8 md:mb-10 group-hover:h-24 transition-all duration-500"></div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {card.title}
                </h3>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
