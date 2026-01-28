'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

interface Innovation {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image?: string;
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
    fullDescription: "We empower community members as extension agents to deliver evidence-based agricultural advisory services. This localizes knowledge transfer, improves adoption rates, and ensures solutions are culturally appropriate for rural communities."
  },
  {
    id: 6,
    title: "Value Addition & Processing",
    category: "Enterprise Development",
    description: "Supporting farmers to add value through product processing and diversification.",
    fullDescription: "We assist smallholder farmers and women groups in processing and value-adding activities such as milling, packaging, and branding. This increases profit margins, creates employment, and develops resilient rural enterprises."
  },
  {
    id: 7,
    title: "Nutrition-Sensitive Agriculture",
    category: "Food Security",
    description: "Integrating nutrition considerations into all agricultural interventions.",
    fullDescription: "Our approach ensures that agricultural projects simultaneously improve productivity and household dietary diversity. We promote nutrient-dense crops and promote consumption behavior change to address malnutrition at the source."
  },
  {
    id: 8,
    title: "Climate-Smart Agricultural Practices",
    category: "Climate Resilience",
    description: "Helping farmers adapt to climate change through sustainable practices.",
    fullDescription: "We introduce climate-smart farming techniques including conservation agriculture, improved water management, drought-tolerant crop varieties, and agroforestry to help farming communities build resilience to climate shocks."
  },
  {
    id: 9,
    title: "Youth Employment in Agriculture",
    category: "Youth Engagement",
    description: "Creating meaningful employment opportunities for young people in agribusiness.",
    fullDescription: "Through agribusiness incubation, mentorship, and market linkages, we make agriculture attractive to youth. We support the establishment of youth-led enterprises in input supply, production, and marketing along agricultural value chains."
  },
  {
    id: 10,
    title: "Public-Private Partnerships",
    category: "Market Systems",
    description: "Leveraging partnerships to strengthen agricultural markets and services.",
    fullDescription: "We facilitate strategic partnerships between government agencies, private sector actors, and community organizations to develop sustainable market systems. These partnerships ensure market services are accessible and beneficial to smallholder farmers."
  }
];

export default function InnovationsPage() {
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
  const currentInnovations = innovations.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(innovations.length / postsPerPage);

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
              Our Innovations
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Proven models and approaches that deliver measurable impact across communities and markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovations Grid Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentInnovations.map((innovation) => (
              <motion.article
                key={innovation.id}
                variants={staggerItem}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-green-600 transition-all relative"
                whileHover={{ y: -8 }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity z-10"></div>

                {/* Innovation Image */}
                <div className="relative h-56 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden flex items-center justify-center">
                  <div className="text-center relative z-20">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                        {String(innovation.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Innovation Content */}
                <div className="p-6 relative">
                  {/* Small green accent line */}
                  <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                  
                  {/* Category Badge */}
                  <div className="mb-3 mt-2">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {innovation.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors" 
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {innovation.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {innovation.fullDescription}
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
