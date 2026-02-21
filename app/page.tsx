'use client';

import { ChevronRight, Leaf, Sprout, Wind } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Loader from '@/components/Loader';
import { getProjects } from '@/lib/wordpress/queries';
import { Project } from '@/lib/wordpress/types';

export default function LandingPage() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [fetchedProjects, setFetchedProjects] = useState<Project[]>([]);
  const [cardWidth, setCardWidth] = useState(320);

  // Responsive slider logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(320);
      } else if (window.innerWidth < 1024) {
        setCardWidth(380);
      } else {
        setCardWidth(420);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch projects from WordPress
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await getProjects(1, 7); // Limit to 7 for preview
        if (response.projects && response.projects.length > 0) {
          setFetchedProjects(response.projects);
        }
      } catch (error) {
        console.error('Error fetching projects for landing page:', error);
      }
    }
    fetchProjects();
  }, []);

  // Loader effect - closes after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Sample hero images
  const heroImages = [
    { id: 1, label: "Farmers in Action" },
    { id: 2, label: "Community Engagement" },
    { id: 3, label: "Market Development" },
    { id: 4, label: "Agricultural Innovation" }
  ];

  const staticProjects = [
    {
      id: 1,
      name: "GAIN Project",
      category: "Maize Value Chain",
      image: "[GAIN Project Image]",
      link: "/projects",
      slug: "gain-project"
    },
    {
      id: 2,
      name: "GIZ Project",
      category: "Agricultural Value Chains",
      image: "[GIZ Project Image]",
      link: "/projects",
      slug: "giz-project"
    },
    {
      id: 3,
      name: "Take and Give (TAG)",
      category: "Women Empowerment",
      image: "[TAG Project Image]",
      link: "/projects",
      slug: "tag-initiative"
    },
    {
      id: 4,
      name: "LIDISKI Project",
      category: "Livestock Disease Surveillance",
      image: "[LIDISKI Project Image]",
      link: "/projects",
      slug: "lidiski-project"
    }
  ];

  const displayProjects = fetchedProjects.length > 0 ? fetchedProjects : staticProjects;

  const nextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
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

  const sentence = "Ikore Collaborates with Businesses, Corporations, NGOs to Unlock Africa's Sustainable Growth";
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 1.2,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Loader isVisible={isLoading} />
      
      {/* Hide page content while loading */}
      {!isLoading && (
        <>
          <Header />

          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
            {/* Intricate Agriculture Detail: Subtle Topography/Soil Lines (Easter Egg) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 800 Q 250 750 500 800 T 1000 800" fill="none" stroke="#61af50" strokeWidth="1" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-48 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 relative z-10">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="space-y-8"
                >
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.2em]">
                    <Sprout size={14} className="text-green-600" />
                    Sustainable Growth
                  </div>

                  <motion.h1 
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight min-h-[5em] sm:min-h-[4em] md:min-h-[4em]" 
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {sentence.split("").map((char, index) => {
                      // Character range for "Unlock Africa's"
                      // "Ikore Collaborates with Businesses, Corporations, NGOs to " is 58 chars (0-57)
                      const isGreen = index >= 58 && index < 73;
                      return (
                        <motion.span key={index} variants={letter} className={isGreen ? "text-green-600" : ""}>
                          {char}
                        </motion.span>
                      );
                    })}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-[3px] md:w-[6px] h-[0.9em] bg-green-600 ml-1 translate-y-[0.1em]"
                    />
                  </motion.h1>

                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                    We deliver evidence-based solutions that drive impact and scale across Africa's development landscape through project management, capacity building, value chain development, research, and advisory services.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button 
                      onClick={() => router.push('/about')}
                      className="group relative bg-green-600 text-white px-10 py-5 rounded-2xl font-bold transition-all overflow-hidden flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <span className="relative">Discover More</span>
                      <ChevronRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Subtle Agriculture Easter Egg: Growing Line */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-green-200 to-transparent hidden md:block">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-600 blur-[2px]"></div>
                </div>
              </div>

              {/* Right Column: Professional Image Frame */}
              <div className="lg:col-span-5 relative">
                <motion.div 
                  className="relative group flex justify-center lg:justify-end"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Modern Asymmetrical Frames (No Labels) - Fixed Dimensions */}
                  <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] sm:h-[500px] lg:h-[650px] lg:w-[500px] overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl">
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300">
                      {/* Image will be placed here by user */}
                      <Image 
                        src="/hero-main.jpg" 
                        alt="Ikore Sustainable Development"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        priority
                      />
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>

            {/* Bottom Section Detail: "Soil" Transition */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
          </section>

      {/* Impact Numbers Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle detail: Vertical irrigation/row lines (Easter Egg) */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#61af50" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-dots)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-green-600"></div>
                <p className="text-green-600 font-bold text-xs tracking-[0.2em] uppercase">
                  What We've Done In The Livestock Sector
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Impact in Numbers
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-gray-500 text-lg leading-relaxed border-l-2 border-green-100 pl-6">
                Our work empowers people, strengthens enterprises, and delivers solutions that scale
              </p>
            </div>
          </motion.div>

          {/* Bento-style Impact Grid - Professional Re-layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Primary Stat Card */}
            <motion.div 
              className="md:col-span-8 lg:col-span-5 bg-[#0a0a0a] p-8 sm:p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl"
              variants={staggerItem}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-[80px] -translate-y-24 translate-x-24"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-green-500 font-bold text-xs uppercase tracking-widest mb-6">
                  <Sprout size={14} />
                  Vaccination Programs
                </div>
                <div className="text-5xl sm:text-7xl font-bold mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  1.85M
                </div>
                <p className="text-gray-400 text-lg max-w-[200px] leading-snug">
                  Birds & Small Ruminants Vaccinated
                </p>
              </div>
            </motion.div>

            <div className="md:col-span-4 lg:col-span-3 grid grid-cols-1 gap-6">
              <motion.div 
                className="bg-gray-50 p-6 sm:p-8 rounded-[2rem] border border-gray-100 group hover:border-green-200 transition-all shadow-sm"
                variants={staggerItem}
              >
                <div className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>270K</div>
                <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">Households Trained</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-6 sm:p-8 rounded-[2rem] border border-gray-100 group hover:border-green-200 transition-all shadow-sm"
                variants={staggerItem}
              >
                <div className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>560K+</div>
                <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">Farmers Reached</p>
              </motion.div>
            </div>

            <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
               <motion.div 
                className="bg-green-50/50 p-6 sm:p-8 rounded-[2rem] border border-green-100 flex flex-col justify-between"
                variants={staggerItem}
              >
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">Empowering MSMEs through strategic capacity building initiatives.</p>
                <div className="text-4xl sm:text-5xl font-bold text-green-700" style={{ fontFamily: 'var(--font-heading)' }}>279</div>
              </motion.div>
              <motion.div 
                className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-xl flex flex-col justify-between group hover:border-green-100 transition-all"
                variants={staggerItem}
              >
                <p className="text-gray-600 text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-4">Jobs Created</p>
                <div className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>151K+</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-32 border-t border-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden w-full max-w-[450px] aspect-[4/5] sm:h-[500px] lg:h-[650px] lg:w-[500px] shadow-2xl border-[12px] border-white mx-auto lg:mx-0">
                <Image 
                  src="/about-scene.jpg" 
                  alt="Project Scene"
                  className="object-cover"
                  fill
                />
              </div>
              {/* Subtle Agriculture Easter Egg: Stylized Field Lines Overlay */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-green-50 rounded-full -z-10 flex items-center justify-center">
                <Leaf size={48} className="text-green-100" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="w-12 h-1.5 bg-green-600 mb-8 rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Creating Resilience For Vulnerable Communities
                </h2>
                <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                  <p>
                    Ikore, meaning <span className="text-green-600 font-bold italic">"harvest"</span> in Yoruba language, is an international development and consulting firm that designs and delivers innovative, market-led solutions to drive sustainable social and enterprise development.
                  </p>
                  <p>
                    We see the world as a complex system of interdependencies. We work with the private, public sector and other non-state actors to address barriers to access, achieving scale, efficiency, and innovation in agribusiness and other sectors.
                  </p>
                </div>
                <div className="mt-12">
                  <motion.button 
                    onClick={() => router.push('/about')}
                    className="inline-flex items-center gap-3 text-green-600 font-bold group"
                    whileHover={{ x: 5 }}
                  >
                    Learn More 
                    <div className="p-2 rounded-full border border-green-100 group-hover:bg-green-50 transition-colors">
                      <ChevronRight size={18} />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring - Core Services Section */}
      <section id="services" className="bg-gray-50/50 py-32 border-y border-gray-100 relative">
        {/* Subtle grid pattern background (Easter Egg) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L60 0 M0 0 L0 60" fill="none" stroke="#61af50" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Sprout size={12} />
              Our Core Offerings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-2xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Bring To You
            </h2>
            <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
              Ikore combines deep sector knowledge with innovative approaches to deliver solutions that create impact, scale, and sustainability.
            </p>
          </motion.div>

          {/* New Bento Grid for Services */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { 
                title: "Project Management", 
                desc: "Expertly handling complex development projects from inception to completion with focus on efficiency.",
                icon: "01",
                span: "md:col-span-6 lg:col-span-4",
                bg: "bg-white"
              },
              { 
                title: "Capacity Building", 
                desc: "Strengthening human and organizational capabilities to ensure long-term sustainability.",
                icon: "02",
                span: "md:col-span-6 lg:col-span-4",
                bg: "bg-[#0a0a0a] text-white"
              },
              { 
                title: "Value Chain Development", 
                desc: "Optimizing agricultural and industrial value chains to unlock market opportunities.",
                icon: "03",
                span: "md:col-span-6 lg:col-span-4",
                bg: "bg-white"
              },
              { 
                title: "Advisory Services", 
                desc: "Providing strategic guidance and expert recommendations for development initiatives.",
                icon: "04",
                span: "md:col-span-6 lg:col-span-6",
                bg: "bg-green-600 text-white"
              },
              { 
                title: "Research & Analysis", 
                desc: "Driving evidence-based decision making through deep market research and data analysis.",
                icon: "05",
                span: "md:col-span-6 lg:col-span-6",
                bg: "bg-white"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                className={`${service.span} ${service.bg} p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
                variants={staggerItem}
              >
                <div>
                  <div className={`text-4xl font-bold mb-8 opacity-20 group-hover:opacity-100 transition-opacity ${service.bg.includes('0a0a') || service.bg.includes('green') ? 'text-white' : 'text-green-600'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                  <p className={`text-base sm:text-lg leading-relaxed ${service.bg === 'bg-white' ? 'text-gray-500' : 'text-white/90'}`}>
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                   <div className={`p-3 rounded-full border transition-colors ${service.bg === 'bg-white' ? 'border-gray-100 group-hover:bg-green-600 group-hover:text-white' : 'border-white/20 group-hover:bg-white group-hover:text-black'}`}>
                    <ChevronRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <div className="w-12 h-1.5 bg-green-600 mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Initiatives <span className="text-green-600">&</span> Projects
              </h2>
            </div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight size={20} className="rotate-180" />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12"
              style={{ scrollBehavior: 'smooth' }}
            >
              {displayProjects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 group cursor-pointer snap-start"
                  whileHover={{ y: -10 }}
                  onClick={() => router.push(project.slug ? `/projects/${project.slug}` : '/projects')}
                >
                  <div className="relative h-[480px] sm:h-[550px] rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                      <Image 
                        src={project.image || "/project-placeholder.jpg"} 
                        alt={project.name || "Project"} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    {/* Floating Info Badge */}
                    <div className="absolute top-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Wind size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="px-4">
                    <p className="text-green-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">{project.category}</p>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{project.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Impact Areas - WHAT Section */}
      <section className="bg-[#0a0a0a] py-32 relative overflow-hidden">
        {/* Subtle topography lines for dark background (Easter Egg) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 300 Q 250 250 500 300 T 1000 300" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 500 Q 250 450 500 500 T 1000 500" fill="none" stroke="#61af50" strokeWidth="1" />
            <path d="M0 700 Q 250 650 500 700 T 1000 700" fill="none" stroke="#61af50" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-500 text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Leaf size={12} />
              Our Specializations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-2xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Impact Areas
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We apply our expertise to priority areas where our interventions empower farmers, strengthen markets, and improve livelihoods across Africa.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { 
                title: "Livestock", 
                desc: "Strengthening rural livestock systems, improving animal health, and expanding dairy.",
                artwork: (
                  <div className="relative w-24 h-24 mb-10 group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                    <div className="absolute inset-0 bg-green-50 rounded-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full text-green-600 drop-shadow-sm">
                      <defs>
                        <linearGradient id="livestockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path d="M25 45c0-10 10-18 25-18s25 8 25 18v15c0 12-10 18-25 18s-25-6-25-18V45z" fill="url(#livestockGrad)" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M35 72c-8 0-15-5-15-12 0-3 3-6 8-6h44c5 0 8 3 8 6 0 7-7 12-15 12" fill="currentColor" fillOpacity="0.2" />
                      <circle cx="42" cy="48" r="1.5" fill="currentColor" />
                      <circle cx="58" cy="48" r="1.5" fill="currentColor" />
                      <path d="M32 32c-4-4-12-2-12 8M68 32c4-4 12-2 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M50 20v7M40 22l3 5M60 22l-3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
                    </svg>
                  </div>
                )
              },
              { 
                title: "Crop", 
                desc: "Promoting regenerative agriculture and climate-smart solutions for improved productivity.",
                artwork: (
                  <div className="relative w-24 h-24 mb-10 group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                    <div className="absolute inset-0 bg-green-50 rounded-2xl -rotate-3 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full text-green-600 drop-shadow-sm">
                      <defs>
                        <linearGradient id="cropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      <path d="M50 85V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 4" strokeOpacity="0.3" />
                      <path d="M50 40C68 22 88 22 88 50S68 78 50 55" fill="url(#cropGrad)" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M50 40C32 22 12 22 12 50s20 28 38 15" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M50 65c18-6 28-18 28-30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
                      <circle cx="50" cy="85" r="3" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                )
              },
              { 
                title: "Nutrition", 
                desc: "Driving food innovation and inclusive models that improve diets and incomes.",
                artwork: (
                  <div className="relative w-24 h-24 mb-10 group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                    <div className="absolute inset-0 bg-green-50 rounded-2xl rotate-6 group-hover:rotate-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full text-green-600 drop-shadow-sm">
                      <circle cx="50" cy="50" r="38" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="30" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                      <path d="M30 45a25 25 0 0 1 40 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M35 55c5 8 15 12 25 8s12-15 8-25" fill="currentColor" fillOpacity="0.3" />
                      <circle cx="68" cy="35" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
                      <path d="M40 70q10 8 20 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )
              }
            ].map((area, idx) => (
              <motion.div 
                key={idx}
                className="group relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-white p-8 sm:p-12 hover:shadow-[0_20px_50px_rgba(97,175,80,0.15)] transition-all duration-500 border border-transparent hover:border-green-600/30"
                variants={staggerItem}
              >
                {area.artwork}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{area.title}</h3>
                <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 sm:mb-12">{area.desc}</p>
                <div className="flex items-center gap-3 text-green-600 font-bold group/btn cursor-pointer">
                  <span className="text-xs sm:text-sm uppercase tracking-widest">Explore Interventions</span>
                  <div className="w-10 h-10 rounded-full border border-green-100 flex items-center justify-center group-hover/btn:bg-green-600 group-hover/btn:text-white transition-all">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Subtle Wind pattern (Agricultural easter egg) */}
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] text-green-600 rotate-12">
          <Wind size={400} />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-12 h-1.5 bg-green-600 mb-8 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Drive <span className="text-green-600">Innovation</span> Through <br />Proven Models
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
              We deploy contextually relevant technology and innovative business models to solve persistent development challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                id: "01", 
                title: "Investing In Impact (Triple-I)", 
                desc: "Training rural women in profitable poultry and livestock production while promoting gender equality through sustainable business structures.",
                link: "/innovations" 
              },
              { 
                id: "02", 
                title: "Take And Give Initiative (TAG)", 
                desc: "Evidence-based market solutions reaching the bottom of the pyramid, lessening economic burden at the last mile and building resilient households.",
                link: "https://tag.ikore.org" 
              },
              { 
                id: "03", 
                title: "Direct-to-Retail Model", 
                desc: "Developing direct links between input suppliers and rural retailers to minimize inefficiencies and ensure quality production inputs at the source.",
                link: "/innovations" 
              },
              { 
                id: "04", 
                title: "Inclusive Business Design", 
                desc: "Creating scalable models that integrate smallholder farmers into formal markets, ensuring fair value distribution and long-term growth.",
                link: "/innovations" 
              }
            ].map((innovation, idx) => (
              <motion.div 
                key={idx}
                className="group p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItem}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-3xl sm:text-4xl font-bold text-green-600/20 group-hover:text-green-600 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                    {innovation.id}
                  </span>
                  <div className="p-3 rounded-2xl bg-white border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {innovation.title}
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                  {innovation.desc}
                </p>
                <a 
                  href={innovation.link} 
                  target={innovation.link.startsWith('http') ? "_blank" : "_self"}
                  className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-green-600 transition-colors"
                >
                  View Solution Details
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <button 
              onClick={() => router.push('/innovations')}
              className="px-12 py-5 bg-[#0a0a0a] text-white rounded-2xl font-bold hover:bg-green-600 transition-colors shadow-xl"
            >
              Explore All Innovations
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#0a0a0a] py-32 relative overflow-hidden">
        {/* Subtle pattern background for dark section */}
        <div className="absolute inset-0 opacity-[0.02]">
           <svg width="100%" height="100%">
            <pattern id="plow-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L40 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#plow-light)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="text-green-500 font-bold text-xs uppercase tracking-[0.3em] mb-6">Testimonials</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Global Partnerships, <br />Local Results
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Our collaborative approach has earned the trust of international organizations and private sector leaders.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    quote: "Ikore emerged the best from a highly competitive process. They have met expectations and delivered quality outputs in research methodology.",
                    author: "SCL Limited",
                    role: "Consultaire Limited"
                  },
                  {
                    quote: "One of Ikore's remarkable achievements was establishing 10 rural outlets and training 50 CAHWs, enhancing last-mile delivery.",
                    author: "CIRAD",
                    role: "Agricultural Research"
                  }
                ].map((t, i) => (
                  <motion.div 
                    key={i}
                    className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="text-green-500 mb-6 font-serif text-5xl">"</div>
                    <p className="text-white text-lg leading-relaxed mb-8 italic">{t.quote}</p>
                    <div>
                      <div className="text-white font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{t.author}</div>
                      <div className="text-gray-500 text-sm uppercase tracking-widest">{t.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">Our Strategic Partners & Sponsors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              { src: "/partner-01.png", alt: "GAIN" },
              { src: "/partner-02.png", alt: "GIZ" },
              { src: "/partner-03.png", alt: "USAID" },
              { src: "/partner-04.png", alt: "CIRAD" }, // Assuming names based on previous text
              { src: "/partner-05.png", alt: "NIRSAL" }
            ].map((logo, i) => (
              <div key={i} className="flex justify-center p-4 filter hover:brightness-110 transition-all">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-gray-400">${logo.alt}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      <Newsletter />

      <Footer />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Modal Card */}
              <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
                
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Image Container */}
                <div className="relative w-full aspect-video mb-4 sm:mb-6 rounded-2xl overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <svg className="w-24 h-24 mx-auto mb-4 opacity-60 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-2xl font-bold text-gray-700">{heroImages[selectedImage].label}</p>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="text-gray-800 mb-4 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'var(--font-heading)' }}>
                    {heroImages[selectedImage].label}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    This image showcases our work in driving sustainable development and creating positive impact across Africa's communities and markets.
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-between flex-wrap">
                  <motion.button
                    onClick={() => setSelectedImage(selectedImage === 0 ? heroImages.length - 1 : selectedImage - 1)}
                    className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Previous
                  </motion.button>
                  
                  <div className="flex gap-2 items-center">
                    {heroImages.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === selectedImage ? 'bg-gray-800 w-8' : 'bg-gray-300'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedImage(selectedImage === heroImages.length - 1 ? 0 : selectedImage + 1)}
                    className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </>
      )}
    </div>
  );
}
