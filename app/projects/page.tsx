'use client';

import { ChevronRight, Leaf, Sprout, Wind, Wheat, Calendar, Layout, Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useProjects } from '@/hooks/useProjects';
import Image from 'next/image';
import { Project } from '@/lib/wordpress/types';

/**
 * Fallback data in case WordPress is not available
 */
const fallbackProjects: Project[] = [
  {
    id: 1,
    name: "Enhancing the Poultry & Livestock Vaccine Market",
    slug: "enhancing-poultry-livestock-vaccine-market",
    category: "Market Development",
    description: "Improving rural smallholder farmers access to veterinary services through transformative public-private partnership (PPP) initiatives.",
    image: "/project-1.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "IGNITE+ Gender and Nutrition Integration",
    slug: "ignite-plus-gender-nutrition-integration",
    category: "Nutrition & Gender",
    description: "Accelerating women's economic empowerment and household nutrition by providing technical assistance to African Agricultural Institutions.",
    image: "/project-2.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Sustainable Rice Value Chain Development",
    slug: "sustainable-rice-value-chain-development",
    category: "Value Chain",
    description: "Strengthening the rice value chain through climate-smart agricultural practices and enhanced market linkages for smallholders.",
    image: "/project-3.jpg",
    link: "#",
  },
];

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const { projects, pagination, loading, error, refetch } = useProjects({
    page: currentPage,
    perPage: projectsPerPage,
  });

  // Handle pagination scroll
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Use fallback data if no projects are loaded
  const displayProjects = projects.length > 0 ? projects : fallbackProjects;
  
  const totalPages =
    pagination?.pages ||
    Math.ceil(displayProjects.length / projectsPerPage);
  
  const currentProjects =
    projects.length > 0
      ? projects
      : displayProjects.slice(
          (currentPage - 1) * projectsPerPage,
          currentPage * projectsPerPage
        );

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
              <Wind size={14} className="text-green-600" />
              Impact in Motion
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Transformative <span className="text-green-600">Projects</span> & Strategic Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Explore our global initiatives designed to drive sustainable social and enterprise development across Africa's most resilient communities.
            </p>

            <div className="pt-8">
               <button className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-900/10 group">
                  Contact Solutions Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section - High Fidelity */}
      <section className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background detail: Plowed Rows */}
        <div className="absolute top-0 left-0 w-64 h-full opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="plow-projects" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#61af50" strokeWidth="1.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#plow-projects)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Loading State Skeleton */}
          {loading && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-[2rem] md:rounded-[2.5rem] h-[450px] md:h-[500px] border border-gray-100 animate-pulse"></div>
                ))}
             </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-24 px-6 bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-sm">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Systems Interruption</h3>
              <p className="text-gray-500 mb-8">Failed to retrieve project data from our development server.</p>
              <button
                onClick={refetch}
                className="px-8 py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all"
              >
                Retry Request
              </button>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && currentProjects.length > 0 && (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              >
                {currentProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={staggerItem}
                    className="group bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 relative flex flex-col"
                    whileHover={{ y: -12 }}
                  >
                    {/* Featured Image - Fixed Dimension Bounds */}
                    <div className="relative h-[250px] sm:h-[280px] overflow-hidden bg-gray-100">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                          <Wheat size={40} className="text-gray-200" />
                        </div>
                      )}
                      
                      {/* Project Type Badge */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                        <span className="bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Grain Overlay */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <filter id="noise-projects">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            <feColorMatrix type="saturate" values="0" />
                          </filter>
                          <rect width="100%" height="100%" filter="url(#noise-projects)" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col">
                      {/* Meta Status */}
                      <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Active Implementation</span>
                      </div>

                      {/* Name */}
                      <h3
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 line-height-[1.3] group-hover:text-green-600 transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                        <a
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm tracking-tight group-hover:text-green-600 transition-colors"
                        >
                          Explore Initiative
                          <ChevronRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                        
                        {/* Subtle icon detail */}
                        <motion.div 
                          className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sprout size={18} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              {/* Premium Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="mt-24 flex justify-center items-center gap-3"
                >
                  <button
                    onClick={() =>
                      handlePageChange(Math.max(currentPage - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="p-4 rounded-2xl bg-white border border-gray-100 text-gray-900 hover:bg-green-600 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 transition-all font-bold shadow-sm"
                  >
                    <ChevronRight size={20} className="rotate-180" />
                  </button>

                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-xl transition-all font-bold text-sm ${
                            currentPage === page
                              ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                              : 'text-gray-400 hover:text-green-600'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      handlePageChange(Math.min(currentPage + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="p-4 rounded-2xl bg-white border border-gray-100 text-gray-900 hover:bg-green-600 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 transition-all font-bold shadow-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
