'use client';

import { ChevronRight, Leaf, Sprout, Wind, Wheat, Calendar, User, Search } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBlogs } from '@/hooks/useBlogs';
import {
  BlogGridSkeleton,
  BlogsErrorState,
  BlogsEmptyState,
} from '@/components/BlogSkeleton';
import { BlogPost } from '@/lib/wordpress/types';
import Image from 'next/image';

/**
 * Fallback data in case WordPress is not available
 * This ensures the app stays functional during migration or API issues
 */
const fallbackBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "From Modest Beginnings to a Growing Food Enterprise",
    slug: "from-modest-beginnings-to-a-growing-food-enterprise",
    formattedDate: "December 17, 2025",
    date: "2025-12-17",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "When Mary started Alingo Edibles in 2022 in Makurdi, Benue State, her dream was simple: to turn Vitamin A biofortified cassava into affordable, nutritious garri, bread, and chin-chin that could help fight malnutrition in her community. In the beginning, however, the business barely survived. With only two staff and basic tools, production was slow, packaging […]",
    image: "/blog-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "How Collaboration, Learning, and Adaptation are Strengthening Agrifood Systems across Africa through the IGNITE+ Project",
    slug: "how-collaboration-learning-adaptation-strengthening-agrifood-systems-ignite-project",
    formattedDate: "November 6, 2025",
    date: "2025-11-06",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "The Impacting Gender and Nutrition through Innovative Technical Exchange in Agriculture Plus (IGNITE+) project is a five-year investment mechanism, designed and implemented by Tanager to accelerate women's economic empowerment and household nutrition by providing technical assistance to African Agricultural Institutions (AAIs). This technical assistance prioritizes strengthening AAIs to integrate gender and nutrition into their agricultural […]",
    image: "/blog-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Ikore takes nutrition education to the grassroots on World Food Day",
    slug: "ikore-nutrition-education-grassroots-world-food-day",
    formattedDate: "October 31, 2025",
    date: "2025-10-31",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "World Food Day is more than a date on the calendar for Ikore International Development Limited. In 2025, the organisation marked the occasion in a special way—by taking nutrition education directly to families in Nasarawa State and transforming global advocacy into local action. Every year on October 16, countries and organisations across the world […]",
    image: "/blog-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Transforming Sustainable Development in Nigeria",
    slug: "transforming-sustainable-development-nigeria",
    formattedDate: "September 9, 2025",
    date: "2025-09-09",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "By 2030, over 400 million Africans will depend on agriculture for their livelihoods, yet millions already face hunger, poverty, and climate-related shocks. Nigeria, Africa's largest economy and most populous country, sits at the center of this challenge and holds the potential to drive change for the entire continent. In Nigeria, the urgency to achieve these […]",
    image: "/blog-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "IGNITE+: Integrating Gender and Nutrition-Sensitive Approaches in Agriculture",
    slug: "ignite-integrating-gender-nutrition-sensitive-agriculture",
    formattedDate: "July 28, 2025",
    date: "2025-07-28",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "Poor nutrition and gender inequality are critical issues exacerbating food insecurity in Sub-Saharan Africa, with women facing restricted access to resources like land and technology despite being central to agricultural production. According to a 2023 report by the World Health Organization (WHO), over 35% of women of reproductive age in Sub-Saharan Africa suffer from anemia. […]",
    image: "/blog-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Urban Diets in Crisis: How Unhealthy Eating Patterns Are Jeopardizing Nigeria's Health",
    slug: "urban-diets-crisis-unhealthy-eating-patterns-nigeria",
    formattedDate: "June 24, 2025",
    date: "2025-06-24",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "The Alarming Shift in Dietary Habits Recent data reveals a troubling trend: men and urban residents in Nigeria are consuming more unhealthy processed foods—like soft drinks, fried snacks, and processed meats—while neglecting protective foods like fruits, vegetables, and whole grains (GAIN, 2024). This dietary shift is fueling a double burden of malnutrition, where undernutrition coexists with obesity […]",
    image: "/blog-6.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Shaping the Future: The Ikore Graduate Trainee Program",
    slug: "shaping-future-ikore-graduate-trainee-program",
    formattedDate: "March 12, 2025",
    date: "2025-03-12",
    author: "Mercy",
    category: "Agency",
    excerpt: "At Ikore, we are committed to driving human capital development by equipping young professionals with the competencies needed to address complex social and economic challenges. Our Graduate Trainee Program is a structured initiative designed to cultivate problem-solving abilities, leadership capacity, and sector-specific expertise, ultimately enhancing participants' employability in the development space. Program Objectives: Developing Problem-Solvers […]",
    image: "/blog-7.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "DRIVING RESILIENCE AND INCLUSION: HOW IKORE IS TRANSFORMING VULNERABLE COMMUNITIES THROUGH MARKET SYSTEMS DEVELOPMENT IN NIGERIA",
    slug: "driving-resilience-inclusion-ikore-vulnerable-communities-market-systems",
    formattedDate: "January 31, 2025",
    date: "2025-01-31",
    author: "Mercy",
    category: "Agency",
    excerpt: "The demand for humanitarian aid continues to rise each year, driven by conflict, violence, human rights abuses, and climate change. However, with shrinking aid budgets, funders are increasingly seeking cost-effective solutions that strengthen vulnerable communities' resilience and reduce their reliance on aid. This calls for a shift from direct subsidies to strategies that integrate these […]",
    image: "/blog-8.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Using transformative public-private partnership (ppp) initiative to develop poultry and livestock vaccine market and improve rural smallholder farmers access to veterinary services.",
    slug: "transformative-public-private-partnership-develop-poultry-livestock-vaccine",
    formattedDate: "January 28, 2025",
    date: "2025-01-28",
    author: "Mercy",
    category: "Agency",
    excerpt: "The State of Jharkhand in India presents a great example of how Transformative PPP can be operationalized, with resultant development of veterinary service as well as poultry and livestock vaccine market in the state. Established in 2006, and still ongoing, GALVmed (Global Alliance for Livestock Veterinary Medicines) initiated the partnership with Hester Biosciences Limited, a […]",
    image: "/blog-9.jpg",
    link: "#",
  },
];

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const { blogs, pagination, loading, error, refetch } = useBlogs({
    page: currentPage,
    perPage: postsPerPage,
  });

  // Handle pagination scroll
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Use fallback data if no blogs are loaded
  const displayBlogs = blogs.length > 0 ? blogs : fallbackBlogPosts;
  
  // Use pagination from WordPress API if available, otherwise calculate from local data
  const totalPages =
    pagination?.pages ||
    Math.ceil(displayBlogs.length / postsPerPage);
  
  // If we have real blogs from WordPress, use them directly
  // Otherwise, slice from fallback data
  const currentPosts =
    blogs.length > 0
      ? blogs // Already paginated from WordPress
      : displayBlogs.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage
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
              <Sprout size={14} className="text-green-600" />
              Rooted in Insights
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Latest <span className="text-green-600">Insights</span> & Sustainable Stories
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Explore our latest publications, research findings, and success stories from vulnerable communities across Nigeria and Africa.
            </p>

            {/* Subtle Search/Filter Placeholder UI */}
            <div className="max-w-md mx-auto relative group pt-8">
              <div className="absolute inset-y-[33px] left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-green-600 transition-colors">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section - High Fidelity */}
      <section className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background detail: Plowed Rows */}
        <div className="absolute top-0 right-0 w-64 h-full opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="plow-blogs" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#61af50" strokeWidth="1.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#plow-blogs)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          {/* Loading State */}
          {loading && <BlogGridSkeleton count={postsPerPage} />}

          {/* Error State */}
          {error && !loading && (
            <BlogsErrorState error={error} onRetry={refetch} />
          )}

          {/* Empty State */}
          {!loading && !error && currentPosts.length === 0 && (
            <BlogsEmptyState />
          )}

          {/* Blog Grid */}
          {!loading && !error && currentPosts.length > 0 && (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              >
                {currentPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={staggerItem}
                    className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 relative flex flex-col"
                    whileHover={{ y: -12 }}
                  >
                    {/* Featured Image - Fixed Dimension Bounds */}
                    <div className="relative h-[250px] sm:h-[280px] overflow-hidden bg-gray-100">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                          <Wheat size={40} className="text-gray-200" />
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Grain Overlay */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <filter id="noise-blog">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            <feColorMatrix type="saturate" values="0" />
                          </filter>
                          <rect width="100%" height="100%" filter="url(#noise-blog)" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-green-600" />
                          <span>{post.formattedDate}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                        <div className="flex items-center gap-1.5">
                          <User size={14} className="text-green-600" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 line-height-[1.3] group-hover:text-green-600 transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                        <a
                          href={`/blogs/${post.slug}`}
                          className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm tracking-tight group-hover:text-green-600 transition-colors"
                        >
                          Read Article
                          <ChevronRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                        
                        {/* Subtle icon detail */}
                        <motion.div 
                          className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Leaf size={18} />
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
