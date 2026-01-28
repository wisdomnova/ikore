'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image?: string;
  location?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "GAIN Project",
    category: "Maize Value Chain",
    location: "Nigeria",
    description: "Supporting smallholder farmers to improve maize productivity and market access through capacity building and market linkages."
  },
  {
    id: 2,
    name: "GIZ Project",
    category: "Agricultural Value Chains",
    location: "Nigeria & Ghana",
    description: "Collaborating with GIZ to strengthen agricultural value chains and promote sustainable farming practices across West Africa."
  },
  {
    id: 3,
    name: "Take and Give (TAG)",
    category: "Women Empowerment",
    location: "Nigeria",
    description: "Empowering women farmers through skill development, financial inclusion, and market access to boost household resilience."
  },
  {
    id: 4,
    name: "LIDISKI Project",
    category: "Livestock Disease Surveillance",
    location: "Nigeria",
    description: "Implementing livestock disease surveillance systems to protect farmer livelihoods and improve food security in pastoral communities."
  },
  {
    id: 5,
    name: "Agricultural Extension Program",
    category: "Capacity Building",
    location: "Multiple African Countries",
    description: "Training extension agents and community facilitators to deliver evidence-based agricultural advisory services to rural communities."
  },
  {
    id: 6,
    name: "Nutrition & Livelihoods Initiative",
    category: "Food Security",
    location: "West Africa",
    description: "Integrating nutrition-sensitive approaches into agricultural projects to improve household dietary diversity and child nutrition outcomes."
  },
  {
    id: 7,
    name: "Climate Adaptation Project",
    category: "Climate Resilience",
    location: "Sub-Saharan Africa",
    description: "Helping farming communities adapt to climate change through sustainable water management and crop diversification strategies."
  },
  {
    id: 8,
    name: "Youth in Agribusiness",
    category: "Youth Employment",
    location: "Nigeria",
    description: "Creating employment opportunities for youth through agribusiness incubation and mentorship to build resilient rural economies."
  },
  {
    id: 9,
    name: "Market Systems Development",
    category: "Market Access",
    location: "East & West Africa",
    description: "Strengthening agricultural market systems by connecting farmers with buyers and improving product value addition capabilities."
  },
  {
    id: 10,
    name: "Research & Policy Initiative",
    category: "Evidence-Based Policy",
    location: "Africa",
    description: "Conducting research on agricultural development challenges to inform policy recommendations for sustainable development."
  }
];

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
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

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProjects = projects.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(projects.length / postsPerPage);

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
              Our Projects
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              A showcase of our latest initiatives driving impact across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-green-600 transition-all relative"
                whileHover={{ y: -8 }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity z-10"></div>

                {/* Project Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm group-hover:scale-105 transition-transform duration-500">
                    [Project Image Placeholder]
                  </div>
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  {/* Small green accent line */}
                  <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 mt-2">
                    {project.location && <span>{project.location}</span>}
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors" 
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Learn More Link with dot indicator */}
                  <div className="flex items-center justify-between">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-all group-hover:gap-3"
                    >
                      Learn More
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    {/* Small dot indicator */}
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 flex justify-center items-center gap-2"
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded transition-colors ${
                  currentPage === page
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
}
