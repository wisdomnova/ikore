'use client';

import { ChevronRight, Leaf, Sprout, Wind, Wheat, Users, Target, ShieldCheck, Zap, Heart, Rocket, Globe, ArrowRight, BrainCircuit, Lightbulb, Microscope } from 'lucide-react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

import { BlogGridSkeleton } from '@/components/BlogSkeleton';

interface Innovation {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
}

const innovations: Innovation[] = [
  {
    id: 1,
    title: "Investing In Impact (Triple-I)",
    category: "Women Empowerment",
    description: "Training rural women in profitable poultry and livestock production with entrepreneurial skills.",
    fullDescription: "This initiative involves the training of rural women in profitable poultry and livestock production as well as entrepreneurial skills. We promote gender equality with improved capacity for running sustainable businesses through strong structures and access to productive resources."
  },
  {
    id: 2,
    title: "Take And Give Initiative (TAG)",
    category: "Market Solutions",
    description: "Evidence-based market solutions aimed at reaching the bottom of the pyramid.",
    fullDescription: "We design evidence-based market solutions aimed at reaching the bottom of the pyramid. This approach lessens economic burden at the last mile, providing improved livelihood and building resilient households."
  },
  {
    id: 3,
    title: "Direct-to-Retail Model for Inputs",
    category: "Value Chain",
    description: "Connecting input suppliers directly with rural communities through retail points.",
    fullDescription: "We work directly with input suppliers to get desired production inputs to rural communities by developing new retail points or expanding existing agro-vet retailers. This minimizes inefficiency from multiple intermediaries."
  },
  {
    id: 4,
    title: "Bottom of the Pyramid Model (BOP)",
    category: "Inclusive Growth",
    description: "Scalable market solutions for economically disadvantaged populations.",
    fullDescription: "Our market solutions address the needs of economically disadvantaged populations with scalable, inclusive models that reduce costs at the last mile while improving livelihoods and building household resilience."
  },
  {
    id: 5,
    title: "Community-Led Extension Model",
    category: "Knowledge Transfer",
    description: "Training community facilitators to deliver agricultural advisory services.",
    fullDescription: "We empower community members as extension agents to deliver evidence-based agricultural advisory services. This localizes knowledge transfer, improves adoption rates, and ensures solutions are culturally appropriate."
  },
  {
    id: 6,
    title: "Value Addition & Processing",
    category: "Enterprise Development",
    description: "Supporting farmers to add value through product processing and diversification.",
    fullDescription: "We assist smallholder farmers and women groups in processing and value-adding activities such as milling, packaging, and branding. This increases profit margins and develops resilient rural enterprises."
  },
  {
    id: 7,
    title: "Nutrition-Sensitive Agriculture",
    category: "Food Security",
    description: "Integrating nutrition considerations into all agricultural interventions.",
    fullDescription: "Our approach ensures that agricultural projects simultaneously improve productivity and household dietary diversity. We promote nutrient-dense crops to address malnutrition at the source."
  },
  {
    id: 8,
    title: "Climate-Smart Agricultural Practices",
    category: "Climate Resilience",
    description: "Helping farmers adapt to climate change through sustainable practices.",
    fullDescription: "We introduce climate-smart farming techniques including conservation agriculture, improved water management, and drought-tolerant crop varieties to help build resilience to climate shocks."
  },
  {
    id: 9,
    title: "Youth Employment in Agriculture",
    category: "Youth Engagement",
    description: "Creating meaningful employment opportunities for young people in agribusiness.",
    fullDescription: "Through agribusiness incubation, mentorship, and market linkages, we make agriculture attractive to youth, supporting the establishment of youth-led enterprises in input supply and production."
  },
  {
    id: 10,
    title: "Public-Private Partnerships",
    category: "Market Systems",
    description: "Leveraging partnerships to strengthen agricultural markets and services.",
    fullDescription: "We facilitate strategic partnerships between government agencies, private sector actors, and community organizations to develop sustainable market systems that are accessible to smallholder farmers."
  }
];

export default function InnovationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 6;

  // Handle pagination scroll
  const handlePageChange = (newPage: number) => {
    setLoading(true);
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate a brief "fetch" for UI feedback consistency
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

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

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentInnovations = innovations.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(innovations.length / postsPerPage);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - High Fidelity */}
      <section className="relative bg-white overflow-hidden pt-32 md:pt-40">
        {/* Topography Detail */}
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mx-auto">
              <BrainCircuit size={14} className="text-green-600" />
              Future-Proofing Agriculture
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Models for <span className="text-green-600">Sustainable</span> Innovation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Proven methodologies and market-led approaches designed to deliver measurable, long-term impact across Africa&apos;s agricultural landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovations Grid - Premium Cards */}
      <section className="bg-gray-50 py-32 relative overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {loading ? (
            <BlogGridSkeleton count={postsPerPage} />
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentInnovations.map((innovation, index) => (
                <motion.article
                  key={innovation.id}
                  variants={staggerItem}
                  className="group bg-white rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-700 relative overflow-hidden flex flex-col"
                  whileHover={{ y: -12 }}
                >
                  {/* Decorative Pattern Layer */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="p-8 sm:p-10 flex flex-col h-full relative z-10">
                    {/* ID counter */}
                    <div className="flex items-center justify-between mb-8 sm:mb-10">
                      <span className="text-3xl sm:text-[40px] font-black text-gray-100 group-hover:text-green-600/10 transition-colors duration-700 leading-none">
                        {String(innovation.id).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600">
                        {innovation.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-500" 
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {innovation.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed text-sm mb-8 flex-grow">
                      {innovation.fullDescription}
                    </p>

                    {/* Footer Action */}
                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 group-hover:text-green-600 transition-all group-hover:gap-4"
                      >
                        Impact Scope <ArrowRight size={14} className="text-green-600" />
                      </a>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-green-600 transition-colors"></div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Premium Pagination */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 flex justify-center items-center gap-4"
          >
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-green-600 hover:text-green-600 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 transition-all"
            >
              <ChevronRight size={20} className="rotate-180" />
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-2xl font-black text-xs transition-all ${
                    currentPage === page
                      ? 'bg-black text-white shadow-xl shadow-black/10'
                      : 'bg-white border border-gray-100 text-gray-400 hover:border-green-600 hover:text-green-600'
                  }`}
                >
                  {String(page).padStart(2, '0')}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-green-600 hover:text-green-600 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Discovery Section - Authoritative */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
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
               <Lightbulb size={32} className="text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Partner with Ikore for <br /><span className="text-green-500 italic font-serif">Transformative</span> Growth.
            </h2>
            
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
              We design, test, and scale innovative models that empower communities and strengthen value chains.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
               <a
                href="/contact"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-green-600/20"
              >
                Collaborate with Us
              </a>
              <a
                href="/services"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-sm"
              >
                Explore Services
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
