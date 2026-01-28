'use client';

import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Loader from '@/components/Loader';

export default function LandingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  const projects = [
    {
      id: 1,
      name: "GAIN Project",
      category: "Maize Value Chain",
      image: "[GAIN Project Image]"
    },
    {
      id: 2,
      name: "GIZ Project",
      category: "Agricultural Value Chains",
      image: "[GIZ Project Image]"
    },
    {
      id: 3,
      name: "Take and Give (TAG)",
      category: "Women Empowerment",
      image: "[TAG Project Image]"
    },
    {
      id: 4,
      name: "LIDISKI Project",
      category: "Livestock Disease Surveillance",
      image: "[LIDISKI Project Image]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
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

  return (
    <div className="w-full">
      <Loader isVisible={isLoading} />
      
      {/* Hide page content while loading */}
      {!isLoading && (
        <>
          <Header />

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-white via-green-50/30 to-white overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            {/* Curved accent line */}
            <svg className="absolute top-0 right-0 w-full h-64 opacity-10 pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" fill="#61af50" />
            </svg>

            <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="relative z-20"
              >
                {/* Accent line above text */}
                <motion.div className="w-12 h-1 bg-green-600 mb-6 rounded" variants={fadeInUp}></motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold text-black mb-6" 
                  style={{ fontFamily: 'var(--font-heading)' }}
                  variants={fadeInUp}
                >
                  Ikore Collaborates with Businesses, Corporations, NGOs to Unlock Africa's Sustainable Growth
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                  variants={fadeInUp}
                >
                  We deliver evidence-based solutions that drive impact and scale across Africa's development landscape through project management, capacity building, value chain development, research, and advisory services.
                </motion.p>
                <motion.button 
                  onClick={() => router.push('/about')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded transition-colors font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer relative z-20"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover More
                  <ChevronRight size={20} />
                </motion.button>
              </motion.div>

              {/* Hero Image Placeholder - Offset Stacked Boxes */}
              <motion.div 
                className="relative h-96 md:h-full min-h-96"
                variants={slideInRight}
                initial="hidden"
                animate="visible"
              >
                {/* Layer 4 - Back */}
                <motion.div 
                  className="absolute inset-0 bg-white rounded-2xl border-2 border-gray-200 translate-x-4 translate-y-4 sm:translate-x-12 sm:translate-y-12 md:translate-x-20 md:translate-y-20 cursor-pointer"
                  onClick={() => setSelectedImage(3)}
                  whileHover={{ borderColor: "#61af50" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-gray-700 font-semibold">
                    {heroImages[3].label}
                  </div>
                </motion.div>
                
                {/* Layer 3 */}
                <motion.div 
                  className="absolute inset-0 bg-white rounded-2xl border-2 border-gray-200 translate-x-3 translate-y-3 sm:translate-x-8 sm:translate-y-8 md:translate-x-14 md:translate-y-14 cursor-pointer"
                  onClick={() => setSelectedImage(2)}
                  whileHover={{ borderColor: "#61af50" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-gray-700 font-semibold">
                    {heroImages[2].label}
                  </div>
                </motion.div>
                
                {/* Layer 2 */}
                <motion.div 
                  className="absolute inset-0 bg-white rounded-2xl border-2 border-gray-200 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 md:translate-x-8 md:translate-y-8 cursor-pointer"
                  onClick={() => setSelectedImage(1)}
                  whileHover={{ borderColor: "#61af50" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-gray-700 font-semibold">
                    {heroImages[1].label}
                  </div>
                </motion.div>
                
                {/* Layer 1 - Front */}
                <motion.div 
                  className="relative inset-0 bg-white rounded-2xl border-2 border-gray-200 h-full cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(0)}
                  whileHover={{ borderColor: "#61af50" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-gray-700 font-semibold">
                    {heroImages[0].label}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

      {/* Impact Numbers Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-3">
              What We've Done In The Livestock Sector
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Impact in Numbers
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl">
              Our work empowers people, strengthens enterprises, and delivers solutions that scale
            </p>
          </motion.div>

          {/* Bento-style Impact Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Large Feature Stat - Top Left */}
            <motion.div 
              className="md:col-span-3 lg:col-span-4 bg-green-600 p-8 rounded-2xl text-white relative overflow-hidden group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  1.85M
                </div>
                <p className="text-green-50 text-lg">
                  Birds & Small Ruminants Vaccinated
                </p>
              </div>
            </motion.div>

            {/* Medium Stat - Top Center */}
            <motion.div 
              className="md:col-span-3 lg:col-span-4 bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                270K
              </div>
              <p className="text-gray-700 text-base">
                Households Reached with Training
              </p>
            </motion.div>

            {/* Medium Stat - Top Right */}
            <motion.div 
              className="md:col-span-3 lg:col-span-4 bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                560K+
              </div>
              <p className="text-gray-700 text-base">
                Farmers Reached
              </p>
            </motion.div>

            {/* Small Stat - Bottom Left */}
            <motion.div 
              className="md:col-span-2 lg:col-span-3 bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                288
              </div>
              <p className="text-gray-700 text-sm">
                Animal Health Actors Trained
              </p>
            </motion.div>

            {/* Small Stat - Bottom Center */}
            <motion.div 
              className="md:col-span-2 lg:col-span-3 bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                279
              </div>
              <p className="text-gray-700 text-sm">
                MSMEs Reached with Capacity Building
              </p>
            </motion.div>

            {/* Wide Feature Stat - Bottom Right */}
            <motion.div 
              className="md:col-span-3 lg:col-span-6 bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                151K+
              </div>
              <p className="text-gray-700 text-base">
                Jobs Created
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-500">
              [About Image: Project Scene]
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Creating Resilience For Vulnerable Communities
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ikore, meaning "harvest" in Yoruba language, is an international development and consulting firm that designs and delivers innovative, market-led solutions to drive sustainable social and enterprise development.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We see the world as a complex system of interdependencies. We work with the private, public sector and other non-state actors to address barriers to access, achieving scale, efficiency, and innovation in agribusiness and other sectors.
              </p>
              <a href="#" className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring - HOW Section */}
      <section id="services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Bring To You
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Ikore combines deep sector knowledge with innovative approaches to deliver solutions that create impact, scale, and sustainability for our partners and the communities we serve.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Large Feature Card - Top Left */}
            <motion.div 
              className="md:col-span-6 lg:col-span-8 bg-green-600 p-8 md:p-10 rounded-2xl text-white relative overflow-hidden group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Project Design & Management
                </h3>
                <p className="text-green-50 text-lg leading-relaxed">
                  We lead the full project cycle—from scoping and planning to implementation, monitoring, and adaptive learning—ensuring high-quality delivery for corporates and development partners.
                </p>
              </div>
            </motion.div>

            {/* Tall Card - Top Right */}
            <motion.div 
              className="md:col-span-3 lg:col-span-4 md:row-span-2 bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Market Systems & Value Chain Development
                </h3>
                <p className="text-gray-700 flex-grow">
                  We strengthen agrifood systems by addressing barriers in livestock, crop, and nutrition value chains, linking farmers to markets, and creating scalable, inclusive business models.
                </p>
              </div>
            </motion.div>

            {/* Wide Card - Middle Left */}
            <motion.div 
              className="md:col-span-3 lg:col-span-5 bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Research & Policy Advisory
              </h3>
              <p className="text-gray-700">
                We provide evidence through market and social research, baseline/endline studies, and policy analysis—helping partners make data-driven decisions and influence systemic change.
              </p>
            </motion.div>

            {/* Square Card - Middle Center */}
            <motion.div 
              className="md:col-span-3 lg:col-span-3 bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Capacity Building & Enterprise Support
              </h3>
              <p className="text-gray-700 text-sm">
                Enhancing MSMEs, cooperatives, BMOs, NGOs, and youth/women-led enterprises.
              </p>
            </motion.div>

            {/* Wide Card - Bottom Left */}
            <motion.div 
              className="md:col-span-4 lg:col-span-5 bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Innovation & Climate-Smart Solutions
              </h3>
              <p className="text-gray-700">
                We design and deploy digital tools, regenerative agriculture models, and nature-based solutions that increase resilience, reduce emissions, and improve productivity at scale.
              </p>
            </motion.div>

            {/* Medium Card - Bottom Right */}
            <motion.div 
              className="md:col-span-4 lg:col-span-3 bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-green-600 transition-all group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Business Model Design & Advisory
              </h3>
              <p className="text-gray-700 text-sm">
                Strategy advisory for enterprises, organizations, and governments focused on sustainable impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas - WHAT Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Impact Areas
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We apply our expertise to three priority areas where our interventions empower farmers, strengthen markets, and improve livelihoods across Africa.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Livestock */}
            <motion.a 
              href="#" 
              className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-green-600 transition-colors cursor-pointer"
              variants={staggerItem}
              whileHover={{ scale: 1.03, borderColor: '#61af50' }}
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                [Livestock Image]
              </div>
              <div className="p-8">
                <div className="text-3xl mb-3">🐄</div>
                <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Livestock
                </h3>
                <p className="text-gray-700 mb-4">
                  Strengthening rural livestock systems, improving animal health, expanding dairy, and enabling sustainable practices.
                </p>
                <span className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight size={18} />
                </span>
              </div>
            </motion.a>

            {/* Crop */}
            <motion.a 
              href="#" 
              className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-green-600 transition-colors cursor-pointer"
              variants={staggerItem}
              whileHover={{ scale: 1.03, borderColor: '#61af50' }}
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                [Crop Image]
              </div>
              <div className="p-8">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Crop
                </h3>
                <p className="text-gray-700 mb-4">
                  Promoting regenerative agriculture, biofortified crops, and climate-smart solutions for improved productivity and resilience.
                </p>
                <span className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight size={18} />
                </span>
              </div>
            </motion.a>

            {/* Nutrition */}
            <motion.a 
              href="#" 
              className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-green-600 transition-colors cursor-pointer"
              variants={staggerItem}
              whileHover={{ scale: 1.03, borderColor: '#61af50' }}
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                [Nutrition Image]
              </div>
              <div className="p-8">
                <div className="text-3xl mb-3">🍲</div>
                <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Nutrition
                </h3>
                <p className="text-gray-700 mb-4">
                  Driving food innovation, supporting MSMEs, and advancing inclusive models that improve diets and income for vulnerable households.
                </p>
                <span className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight size={18} />
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-700 px-4 sm:px-0">
              A showcase of our latest initiatives driving impact across Africa
            </p>
          </motion.div>

          {/* Horizontal Slider */}
          <div className="relative mb-8 sm:mb-10 md:mb-12 py-4 sm:py-8 md:py-12">
            {/* Fade gradient on right edge - indicates more content */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10 hidden sm:block"></div>
            
            {/* Scroll hint for mobile */}
            <div className="flex items-center justify-end gap-2 mb-4 sm:hidden text-gray-500 text-sm">
              <span>Swipe to see more</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            {/* Slider Container - CSS Scroll Snap for smooth scrolling */}
            <div className="overflow-x-auto scrollbar-hide py-6 sm:py-8 -mx-4 px-4 md:mx-0 md:px-0">
              <motion.div 
                className="flex gap-4 md:gap-6 pb-4 pr-4 sm:pr-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group flex-shrink-0 w-[90%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-green-600 transition-all relative"
                    variants={staggerItem}
                    whileHover={{ y: -8 }}
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity z-10"></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 sm:h-56 md:h-64 flex items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-500">
                      {project.image}
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 relative">
                      {/* Small green accent line */}
                      <div className="absolute top-0 left-4 sm:left-5 md:left-6 w-10 sm:w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                      
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 mt-2 sm:mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Removed navigation arrows - using native horizontal scroll */}

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <a href="/projects" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded font-semibold transition-colors text-sm sm:text-base">
              View All Projects
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Innovations
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Proven models and approaches that deliver measurable impact across communities and markets
            </p>
          </motion.div>

          {/* Staggered Zigzag Layout */}
          <div className="space-y-12">
            {/* Innovation 01 - Left aligned */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>01</span>
                </div>
              </div>
              <div className="flex-grow bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all">
                <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Investing In Impact (Triple-I)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This initiative involves the training of rural women in profitable poultry and livestock production as well as entrepreneurial skills. We promote gender equality with improved capacity for running sustainable businesses through strong structures and access to productive resources.
                </p>
                <a href="/innovations" className="text-green-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Innovation 02 - Right aligned */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse gap-8 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>02</span>
                </div>
              </div>
              <div className="flex-grow bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all">
                <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Take And Give Initiative (TAG)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We design evidence-based market solutions aimed at reaching the bottom of the pyramid. This approach lessens economic burden at the last mile, providing improved livelihood and building resilient households.
                </p>
                <a href="/innovations" className="text-green-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Innovation 03 - Left aligned */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>03</span>
                </div>
              </div>
              <div className="flex-grow bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all">
                <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Direct-to-Retail Model for Inputs
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We work directly with input suppliers to get desired production inputs to rural communities by developing new retail points or expanding existing agro-vet retailers. This minimizes inefficiency from multiple intermediaries.
                </p>
                <a href="/innovations" className="text-green-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Innovation 04 - Right aligned */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse gap-8 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>04</span>
                </div>
              </div>
              <div className="flex-grow bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all">
                <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Bottom of the Pyramid Model (BOP)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our market solutions address the needs of economically disadvantaged populations with scalable, inclusive models that reduce costs at the last mile while improving livelihoods and building household resilience.
                </p>
                <a href="/innovations" className="text-green-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <a href="/innovations" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold transition-colors">
              View All Innovations
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Testimonials
            </h2>
            <p className="text-gray-700 text-lg">
              What our satisfied clients say about working with Ikore
            </p>
          </motion.div>

          {/* Masonry-style stacked cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 - Tall */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 left-6 text-green-600 opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "Ikore emerged the best from a highly competitive process. For all the completed tasks, Ikore has met expectations and delivered quality outputs in research methodology, secondary data collection, and tool design."
              </p>
              <div className="border-t-2 border-green-600 pt-4">
                <p className="font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  Sa'I'Anwara'I'Jumai Consultaire Limited
                </p>
                <p className="text-sm text-gray-600">SCL</p>
              </div>
            </motion.div>

            {/* Testimonial 2 - Short */}
            <motion.div 
              className="bg-green-600 rounded-2xl p-8 text-white relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute top-6 left-6 text-white opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-green-50 leading-relaxed mb-6 text-lg relative z-10">
                "Ikore proved to be very efficient and creative in advocacy work and communications. Their high-quality materials and diverse dissemination channels ensured effective stakeholder engagement and community education."
              </p>
              <div className="border-t-2 border-white/30 pt-4">
                <p className="font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Global Alliance for Improved Nutrition
                </p>
                <p className="text-sm text-green-100">GAIN</p>
              </div>
            </motion.div>

            {/* Testimonial 3 - Medium */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative md:col-span-2 lg:col-span-1"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 left-6 text-green-600 opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "One of Ikore's remarkable achievements was establishing 10 rural-based retail outlets and training 50 Community Animal Health Workers. This significantly enhanced last-mile delivery of veterinary inputs while curbing counterfeit products."
              </p>
              <div className="border-t-2 border-green-600 pt-4">
                <p className="font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  CIRAD
                </p>
                <p className="text-sm text-gray-600">French Agricultural Research Centre</p>
              </div>
            </motion.div>

            {/* Testimonial 4 - Medium */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-600 transition-all relative"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 left-6 text-green-600 opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "Ikore conducted comprehensive surveys on women-led businesses with excellence in research design, execution, and analysis. We highly recommend them for research, impact assessment, and analysis activities."
              </p>
              <div className="border-t-2 border-green-600 pt-4">
                <p className="font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  ChananHill Enterprise
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Trusted Partners
            </h2>
            <p className="text-gray-700 text-lg">
              Working together with leading organizations to drive sustainable development
            </p>
          </motion.div>

          {/* 3 Partners - Centered with larger display */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white rounded-2xl p-12 border-2 border-gray-200 hover:border-green-600 transition-all w-full md:w-64 h-48 flex items-center justify-center"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <img 
                src="/partner-01.png" 
                alt="Partner 1" 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-12 border-2 border-gray-200 hover:border-green-600 transition-all w-full md:w-64 h-48 flex items-center justify-center"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <img 
                src="/partner-02.png" 
                alt="Partner 2" 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-12 border-2 border-gray-200 hover:border-green-600 transition-all w-full md:w-64 h-48 flex items-center justify-center"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <img 
                src="/partner-03.png" 
                alt="Partner 3" 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </motion.div>
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
