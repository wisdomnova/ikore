'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "From Modest Beginnings to a Growing Food Enterprise",
    date: "December 17, 2025",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "When Mary started Alingo Edibles in 2022 in Makurdi, Benue State, her dream was simple: to turn Vitamin A biofortified cassava into affordable, nutritious garri, bread, and chin-chin that could help fight malnutrition in her community. In the beginning, however, the business barely survived. With only two staff and basic tools, production was slow, packaging […]",
    image: "/blog-1.jpg"
  },
  {
    id: 2,
    title: "How Collaboration, Learning, and Adaptation are Strengthening Agrifood Systems across Africa through the IGNITE+ Project",
    date: "November 6, 2025",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "The Impacting Gender and Nutrition through Innovative Technical Exchange in Agriculture Plus (IGNITE+) project is a five-year investment mechanism, designed and implemented by Tanager to accelerate women's economic empowerment and household nutrition by providing technical assistance to African Agricultural Institutions (AAIs). This technical assistance prioritizes strengthening AAIs to integrate gender and nutrition into their agricultural […]",
    image: "/blog-2.jpg"
  },
  {
    id: 3,
    title: "Ikore takes nutrition education to the grassroots on World Food Day",
    date: "October 31, 2025",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "World Food Day is more than a date on the calendar for Ikore International Development Limited. In 2025, the organisation marked the occasion in a special way—by taking nutrition education directly to families in Nasarawa State and transforming global advocacy into local action. Every year on October 16, countries and organisations across the world […]",
    image: "/blog-3.jpg"
  },
  {
    id: 4,
    title: "Transforming Sustainable Development in Nigeria",
    date: "September 9, 2025",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "By 2030, over 400 million Africans will depend on agriculture for their livelihoods, yet millions already face hunger, poverty, and climate-related shocks. Nigeria, Africa's largest economy and most populous country, sits at the center of this challenge and holds the potential to drive change for the entire continent. In Nigeria, the urgency to achieve these […]",
    image: "/blog-4.jpg"
  },
  {
    id: 5,
    title: "IGNITE+: Integrating Gender and Nutrition-Sensitive Approaches in Agriculture",
    date: "July 28, 2025",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "Poor nutrition and gender inequality are critical issues exacerbating food insecurity in Sub-Saharan Africa, with women facing restricted access to resources like land and technology despite being central to agricultural production. According to a 2023 report by the World Health Organization (WHO), over 35% of women of reproductive age in Sub-Saharan Africa suffer from anemia. […]",
    image: "/blog-5.jpg"
  },
  {
    id: 6,
    title: "Urban Diets in Crisis: How Unhealthy Eating Patterns Are Jeopardizing Nigeria's Health",
    date: "June 24, 2025",
    author: "Acha Emmanuel",
    category: "Agency",
    excerpt: "The Alarming Shift in Dietary Habits Recent data reveals a troubling trend: men and urban residents in Nigeria are consuming more unhealthy processed foods—like soft drinks, fried snacks, and processed meats—while neglecting protective foods like fruits, vegetables, and whole grains (GAIN, 2024). This dietary shift is fueling a double burden of malnutrition, where undernutrition coexists with obesity […]",
    image: "/blog-6.jpg"
  },
  {
    id: 7,
    title: "Shaping the Future: The Ikore Graduate Trainee Program",
    date: "March 12, 2025",
    author: "Mercy",
    category: "Agency",
    excerpt: "At Ikore, we are committed to driving human capital development by equipping young professionals with the competencies needed to address complex social and economic challenges. Our Graduate Trainee Program is a structured initiative designed to cultivate problem-solving abilities, leadership capacity, and sector-specific expertise, ultimately enhancing participants' employability in the development space. Program Objectives: Developing Problem-Solvers […]",
    image: "/blog-7.jpg"
  },
  {
    id: 8,
    title: "DRIVING RESILIENCE AND INCLUSION: HOW IKORE IS TRANSFORMING VULNERABLE COMMUNITIES THROUGH MARKET SYSTEMS DEVELOPMENT IN NIGERIA",
    date: "January 31, 2025",
    author: "Mercy",
    category: "Agency",
    excerpt: "The demand for humanitarian aid continues to rise each year, driven by conflict, violence, human rights abuses, and climate change. However, with shrinking aid budgets, funders are increasingly seeking cost-effective solutions that strengthen vulnerable communities' resilience and reduce their reliance on aid. This calls for a shift from direct subsidies to strategies that integrate these […]",
    image: "/blog-8.jpg"
  },
  {
    id: 9,
    title: "Using transformative public-private partnership (ppp) initiative to develop poultry and livestock vaccine market and improve rural smallholder farmers access to veterinary services.",
    date: "January 28, 2025",
    author: "Mercy",
    category: "Agency",
    excerpt: "The State of Jharkhand in India presents a great example of how Transformative PPP can be operationalized, with resultant development of veterinary service as well as poultry and livestock vaccine market in the state. Established in 2006, and still ongoing, GALVmed (Global Alliance for Livestock Veterinary Medicines) initiated the partnership with Hester Biosciences Limited, a […]",
    image: "/blog-9.jpg"
  },
  {
    id: 10,
    title: "LIDISKI Project to Host Closeout Event in Abuja, Celebrating Five Years of Success in Strengthening Livestock Disease Surveillance and Control in Nigeria",
    date: "November 14, 2024",
    author: "Bridget Augustine",
    category: "Agency",
    excerpt: "The European Union Support to Livestock Disease Surveillance Knowledge Integration (LIDISKI) project will hold its closeout event on November 14, 2024, in Abuja. This event will mark the conclusion of a five-year initiative aimed at enhancing the surveillance and control of two critical livestock diseases, Peste des petits ruminants (PPR) and Newcastle Disease (ND), across […]",
    image: "/blog-10.jpg"
  }
];

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Animation variants
  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

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
              Blogs
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Insights, stories, and updates from our work driving sustainable development across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={staggerItem}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-green-600 transition-all relative"
                whileHover={{ y: -8 }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity z-10"></div>

                {/* Blog Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {post.image ? (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm group-hover:scale-105 transition-transform duration-500">
                      [Blog Image Placeholder]
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm group-hover:scale-105 transition-transform duration-500">
                      [Blog Image Placeholder]
                    </div>
                  )}
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6 relative">
                  {/* Small green accent line */}
                  <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 mt-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors" 
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link with dot indicator */}
                  <div className="flex items-center justify-between">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-all group-hover:gap-3"
                    >
                      Read More
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
