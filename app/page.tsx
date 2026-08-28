'use client';

import { ChevronRight, Leaf, Sprout, Wind, ArrowRight, TrendingUp, Users, Lightbulb, BarChart3, BookOpen, Wheat } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import { getProjects } from '@/lib/wordpress/queries';
import { getBlogs } from '@/lib/wordpress/queries';
import { Project, BlogPost } from '@/lib/wordpress/types';
import { stripHtml, truncateText, formatDate } from '@/lib/wordpress/utils';

export default function LandingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedProjects, setFetchedProjects] = useState<Project[]>([]);
  const [fetchedBlogs, setFetchedBlogs] = useState<BlogPost[]>([]);

  // Fetch projects from WordPress
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await getProjects(1, 7);
        if (response.projects && response.projects.length > 0) {
          setFetchedProjects(response.projects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    fetchProjects();
  }, []);

  // Fetch latest blogs
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlogs(1, 3);
        if (response.blogs && response.blogs.length > 0) {
          setFetchedBlogs(response.blogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fetchBlogs();
  }, []);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Hero image slider (max 3, rectangle format)
  const heroSlides = [
    { id: 1, src: "/hero-slide-1.jpg", label: "Empowering Communities" },
    { id: 2, src: "/hero-slide-2.jpg", label: "Sustainable Agriculture" },
    { id: 3, src: "/hero-slide-3.jpg", label: "Market Development" },
  ];

  // Auto-advance hero slider
  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading, heroSlides.length]);

  // Impact numbers (placeholder - update with 2025 annual report data)
  const impactNumbers = [
    { value: "1.85M", label: "Birds & Small Ruminants Vaccinated", icon: <TrendingUp size={24} /> },
    { value: "270K", label: "Households Trained", icon: <Users size={24} /> },
    { value: "560K+", label: "Farmers Reached", icon: <Wheat size={24} /> },
    { value: "151K+", label: "Jobs Created", icon: <BarChart3 size={24} /> },
    { value: "279", label: "MSMEs Supported", icon: <Lightbulb size={24} /> },
  ];

  // What We Bring services
  const services = [
    {
      title: "Project Design & Management",
      desc: "We lead the full project cycle—from scoping and planning to implementation, monitoring, and adaptive learning—ensuring high-quality delivery for corporates, and development partners.",
      icon: "01",
    },
    {
      title: "Market Systems & Value Chain Development",
      desc: "We strengthen agrifood systems by addressing barriers in livestock, crop, and nutrition value chains, linking farmers to markets, and creating scalable, inclusive business models.",
      icon: "02",
    },
    {
      title: "Research & Policy Advisory",
      desc: "We provide evidence through market and social research, baseline/endline studies, and policy analysis—helping partners make data-driven decisions and influence systemic change.",
      icon: "03",
    },
    {
      title: "Capacity Building & Enterprise Support",
      desc: "We enhance the capabilities of MSMEs, cooperatives, BMOs, NGOs, and youth/women-led enterprises through tailored training, organizational development, and incubation support.",
      icon: "04",
    },
    {
      title: "Innovation & Climate-Smart Solutions",
      desc: "We design and deploy digital tools, regenerative agriculture models, and nature-based solutions that increase resilience, reduce emissions, and improve productivity at scale.",
      icon: "05",
    },
  ];

  // Impact Areas
  const impactAreas = [
    {
      title: "Livestock",
      desc: "Strengthening rural livestock systems, improving animal health, expanding dairy, and enabling sustainable practices.",
      image: "/impact-livestock.jpg",
      link: "/projects?category=livestock",
    },
    {
      title: "Crop",
      desc: "Promoting regenerative agriculture, biofortified crops, and climate-smart solutions for improved productivity and resilience.",
      image: "/impact-crop.jpg",
      link: "/projects?category=crop",
    },
    {
      title: "Nutrition",
      desc: "Driving food innovation, supporting MSMEs, and advancing inclusive models that improve diets and income for vulnerable households.",
      image: "/impact-nutrition.jpg",
      link: "/projects?category=nutrition",
    },
  ];

  // Client testimonials (placeholder - update with data from @Calista Iheoma Geoffrey)
  const testimonials = [
    {
      quote: "Ikore emerged the best from a highly competitive process. They have met expectations and delivered quality outputs in research methodology.",
      name: "Partner Representative",
      designation: "Development Partner",
      image: "/testimonial-1.jpg",
    },
    {
      quote: "One of Ikore's remarkable achievements was establishing 10 rural outlets and training 50 CAHWs, enhancing last-mile delivery.",
      name: "Partner Representative",
      designation: "Agricultural Research Partner",
      image: "/testimonial-2.jpg",
    },
    {
      quote: "Working with Ikore has transformed our community's approach to sustainable farming and market access.",
      name: "Project Beneficiary",
      designation: "Community Leader",
      image: "/testimonial-3.jpg",
    },
  ];

  // Fallback blog posts
  const fallbackBlogs: { id: number; title: string; excerpt: string; date: string; image: string; slug: string }[] = [
    {
      id: 1,
      title: "Strengthening Livestock Systems in Northern Nigeria",
      excerpt: "Our latest initiatives in strengthening rural livestock systems and improving animal health across northern Nigeria.",
      date: "2025-01-15",
      image: "/blog-1.jpg",
      slug: "strengthening-livestock-systems",
    },
    {
      id: 2,
      title: "Climate-Smart Agriculture: Building Resilience",
      excerpt: "How regenerative agriculture and biofortified crops are transforming productivity for smallholder farmers.",
      date: "2025-02-10",
      image: "/blog-2.jpg",
      slug: "climate-smart-agriculture",
    },
    {
      id: 3,
      title: "Empowering Women Through Enterprise Support",
      excerpt: "Our capacity building programs are creating new opportunities for women-led enterprises across Africa.",
      date: "2025-03-05",
      image: "/blog-3.jpg",
      slug: "empowering-women-enterprise",
    },
  ];

  const displayBlogs = fetchedBlogs.length > 0 ? fetchedBlogs : fallbackBlogs;

  // Partner logos (placeholder - update with logos from @Acha Emmanuel)
  const partners = [
    { src: "/partner-01.png", alt: "GAIN" },
    { src: "/partner-02.png", alt: "GIZ" },
    { src: "/partner-03.png", alt: "USAID" },
    { src: "/partner-04.png", alt: "CIRAD" },
    { src: "/partner-05.png", alt: "NIRSAL" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sentence = "Ikore Collaborates with Businesses, Corporations, NGOs to Unlock Africa's Sustainable Growth";

  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.8 },
    },
  };

  const letter = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <div className="w-full overflow-x-hidden">
      <Loader isVisible={isLoading} />

      {!isLoading && (
        <>
          <Header />

          {/* ===== HERO SECTION (dark themed with background image slider) ===== */}
          <section className="relative min-h-[95vh] flex items-center overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={heroSlides[currentSlide].src}
                    alt={heroSlides[currentSlide].label}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-48 md:pb-32 w-full">
              <div className="max-w-3xl">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="space-y-8"
                >
                  <motion.h1
                    variants={letterContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {sentence.split("").map((char, index) => {
                      const isGreen = index >= 58 && index < 73;
                      return (
                        <motion.span key={index} variants={letter} className={isGreen ? "text-green-400" : ""}>
                          {char}
                        </motion.span>
                      );
                    })}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
                  >
                    We deliver evidence-based solutions that drive impact and scale across
                    Africa&apos;s development landscape through project management, capacity building,
                    market system development, enterprise support, research, and advisory services.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <button
                      onClick={() => router.push('/about')}
                      className="group relative bg-green-600 text-white px-10 py-5 rounded-2xl font-bold transition-all overflow-hidden flex items-center justify-center gap-2 hover:bg-green-700"
                    >
                      <span>Discover More</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => router.push('/contact')}
                      className="group bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-2xl font-bold transition-all hover:bg-white/20 flex items-center justify-center gap-2"
                    >
                      <span>Get In Touch</span>
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide ? 'w-10 h-3 bg-green-500' : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===== OUR IMPACT IN NUMBERS (horizontal circles) ===== */}
          <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <TrendingUp size={12} />
                  Proven Results
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Impact in Numbers
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our work empowers people, strengthens enterprises, and delivers solutions that scale
                </p>
              </motion.div>

              {/* Horizontal Circle Counters L-R */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 md:gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {impactNumbers.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center group"
                    variants={staggerItem}
                  >
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-green-100 bg-white flex flex-col items-center justify-center shadow-lg group-hover:border-green-500 group-hover:shadow-green-100 transition-all duration-500">
                      <div className="text-green-600 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        {stat.icon}
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        {stat.value}
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 font-medium text-center max-w-[140px] leading-snug">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===== OUR IMPACT AREAS (Crop, Livestock, Nutrition – clickable) ===== */}
          <section className="bg-[#0a0a0a] py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1000 1000">
                <path d="M0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 300 Q 250 250 500 300 T 1000 300" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 500 Q 250 450 500 500 T 1000 500" fill="none" stroke="#61af50" strokeWidth="1" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
              <motion.div
                className="text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-500 text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  <Leaf size={12} />
                  Our Focus
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Impact Areas
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  We apply our expertise to three priority areas—Livestock, Crop, and Nutrition—where our interventions empower farmers, strengthen markets, and improve livelihoods across Africa.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {impactAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white cursor-pointer hover:shadow-[0_20px_50px_rgba(97,175,80,0.15)] transition-all duration-500 border border-transparent hover:border-green-600/30"
                    variants={staggerItem}
                    onClick={() => router.push(area.link)}
                  >
                    <div className="relative h-[240px] overflow-hidden">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                        {area.title}
                      </h3>
                      <p className="text-base text-gray-500 leading-relaxed mb-8">
                        {area.desc}
                      </p>
                      <div className="flex items-center gap-3 text-green-600 font-bold">
                        <span className="text-xs uppercase tracking-widest">View Projects</span>
                        <div className="w-10 h-10 rounded-full border border-green-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===== WHAT WE BRING TO YOU ===== */}
          <section className="bg-gray-50/50 py-32 border-y border-gray-100 relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M0 0 L60 0 M0 0 L0 60" fill="none" stroke="#61af50" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
              <motion.div
                className="text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                  <Sprout size={12} />
                  The HOW
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-2xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  What We Bring To You
                </h2>
                <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                  Ikore combines deep sector knowledge with innovative approaches to deliver solutions that create impact, scale, and sustainability for our partners and the communities we serve.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {services.map((service, idx) => {
                  const spans = [
                    "md:col-span-6 lg:col-span-4",
                    "md:col-span-6 lg:col-span-4",
                    "md:col-span-6 lg:col-span-4",
                    "md:col-span-6 lg:col-span-6",
                    "md:col-span-6 lg:col-span-6",
                  ];
                  const bgs = [
                    "bg-white",
                    "bg-[#0a0a0a] text-white",
                    "bg-white",
                    "bg-green-600 text-white",
                    "bg-white",
                  ];
                  return (
                    <motion.div
                      key={idx}
                      className={`${spans[idx]} ${bgs[idx]} p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
                      variants={staggerItem}
                    >
                      <div>
                        <div className={`text-4xl font-bold mb-8 opacity-20 group-hover:opacity-100 transition-opacity ${bgs[idx].includes('0a0a') || bgs[idx].includes('green') ? 'text-white' : 'text-green-600'}`}>
                          {service.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                          {service.title}
                        </h3>
                        <p className={`text-base sm:text-lg leading-relaxed ${bgs[idx] === 'bg-white' ? 'text-gray-500' : 'text-white/90'}`}>
                          {service.desc}
                        </p>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <div className={`p-3 rounded-full border transition-colors ${bgs[idx] === 'bg-white' ? 'border-gray-100 group-hover:bg-green-600 group-hover:text-white' : 'border-white/20 group-hover:bg-white group-hover:text-black'}`}>
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* ===== WHY CHOOSE US ===== */}
          <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {/* Picture Box (left side) */}
                <div className="relative">
                  <div className="relative z-10 w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-gray-100">
                    <Image
                      src="/why-choose-us.jpg"
                      alt="Why Choose Ikore"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-green-50 rounded-full -z-10"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-600/10 rounded-full -z-10"></div>
                </div>

                {/* Text Content (right side) */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold uppercase tracking-widest">
                    <Wind size={12} />
                    Our Difference
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    Why Choose <span className="text-green-600">Us</span>
                  </h2>
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                    Ikore combines deep technical expertise with a strong local footprint to deliver high-quality, evidence-driven and co-created solutions, staying responsive to client needs and consistently delivering on our promises through the strength of our people.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => router.push('/about')}
                      className="inline-flex items-center gap-3 text-green-600 font-bold group"
                    >
                      Learn More About Us
                      <div className="p-2 rounded-full border border-green-100 group-hover:bg-green-50 transition-colors">
                        <ChevronRight size={18} />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ===== WHAT OUR CLIENTS ARE SAYING ===== */}
          <section className="bg-[#0a0a0a] py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
              <svg width="100%" height="100%">
                <pattern id="plow-testimonials" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 L40 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#plow-testimonials)" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
              <motion.div
                className="text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="text-green-500 font-bold text-xs uppercase tracking-[0.3em] mb-6">Testimonials</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  What Our Clients Are Saying
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our collaborative approach has earned the trust of international organizations, development partners, and the communities we serve.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    className="p-8 sm:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm"
                    variants={staggerItem}
                  >
                    <div className="text-green-500 mb-6 font-serif text-5xl">&ldquo;</div>
                    <p className="text-white text-lg leading-relaxed mb-8 italic">{t.quote}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.designation}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===== LATEST NEWS AND ARTICLES (horizontal L-R) ===== */}
          <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <motion.div
                className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <BookOpen size={12} />
                    From Our Blog
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    Latest News &amp; Articles
                  </h2>
                </div>
                <button
                  onClick={() => router.push('/blogs')}
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
                >
                  View All Articles <ArrowRight size={16} />
                </button>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {displayBlogs.map((blog, idx) => {
                  const isFetched = fetchedBlogs.length > 0;
                  const blogTitle = isFetched ? (blog as BlogPost).title : (blog as any).title;
                  const blogExcerpt = isFetched ? stripHtml((blog as BlogPost).excerpt) : (blog as any).excerpt;
                  const blogDate = blog.date || '';
                  const blogImage = isFetched ? (blog as BlogPost).image : (blog as any).image;
                  const blogSlug = blog.slug;

                  return (
                    <motion.div
                      key={blog.id}
                      className="group cursor-pointer"
                      variants={staggerItem}
                      onClick={() => router.push(`/blogs/${blogSlug}`)}
                    >
                      <div className="relative h-[240px] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                        <Image
                          src={blogImage || "/blog-placeholder.jpg"}
                          alt={typeof blogTitle === 'string' ? blogTitle : ''}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="px-2">
                        <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
                          {blogDate ? formatDate(blogDate, 'short') : ''}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                          {typeof blogTitle === 'string' ? blogTitle : ''}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {typeof blogExcerpt === 'string' ? truncateText(blogExcerpt, 120) : ''}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* ===== OUR CLIENTS AND PARTNERS ===== */}
          <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">Our Clients &amp; Partners</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                {partners.map((logo, i) => (
                  <div key={i} className="flex justify-center p-4 filter hover:brightness-110 transition-all">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 md:h-16 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-gray-400">${logo.alt}</span>`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
