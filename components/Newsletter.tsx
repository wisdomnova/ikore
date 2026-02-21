'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail, CheckCircle2, Sprout, Leaf, Wind } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter submission:', { name, email, phone });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
    }, 5000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Agriculture Detail - Subtle Soil Layers (Easter Egg) */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0 20 Q 300 0, 600 20 T 1200 20 T 1800 20 V 100 H 0 Z" fill="#61af50" />
          <path d="M0 40 Q 300 20, 600 40 T 1200 40 T 1800 40 V 100 H 0 Z" fill="#4d8a3f" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          
          {/* Enhanced Fruit Basket Visual */}
          <div className="lg:col-span-5 relative group">
            {/* Professional Card Container */}
            <div className="relative h-full min-h-[350px] md:min-h-[400px] bg-gradient-to-br from-orange-50/50 to-amber-50/30 rounded-[2rem] border border-orange-100 overflow-hidden shadow-[0_20px_50px_-20px_rgba(251,146,60,0.1)]">
              
              {/* Agricultural Motif: Woven Basket Texture (Subtle Overlay) */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20 L40 20 M20 0 L20 40" stroke="#f97316" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#weave)" />
                </svg>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute top-8 left-8 text-orange-200 group-hover:text-orange-300 transition-colors">
                <Leaf size={24} className="rotate-[-15deg]" />
              </div>
              <div className="absolute bottom-12 right-12 text-green-200 group-hover:text-green-300 transition-colors">
                <Sprout size={32} className="rotate-[10deg]" />
              </div>

              {/* The "Fruit Basket" - Enhanced SVG Illustration */}
              <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                <div className="relative w-full aspect-square max-w-[240px] md:max-w-[300px]">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-orange-200/20 blur-[80px] rounded-full"></div>
                  
                  {/* Fruit Basket Frame (Easter Egg: Stylized "K" for Ikore in the basket weave if looked closely) */}
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    {/* Watermelon (Back) */}
                    <circle cx="140" cy="70" r="35" fill="#166534" />
                    <circle cx="140" cy="70" r="30" fill="#15803d" />
                    <path d="M125 45 Q140 35 155 45" fill="none" stroke="#166534" strokeWidth="2" opacity="0.3" />
                    
                    {/* Coconut (Back) */}
                    <circle cx="65" cy="85" r="30" fill="#78350f" />
                    <path d="M50 70 Q65 60 80 70" fill="none" stroke="#451a03" strokeWidth="1" opacity="0.2" />

                    {/* Banana (Center) */}
                    <path d="M40 100 Q80 80 140 110" fill="none" stroke="#facc15" strokeWidth="18" strokeLinecap="round" />
                    <path d="M45 102 Q80 85 135 110" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                    {/* Orange (Central) */}
                    <circle cx="100" cy="115" r="35" fill="#f97316" />
                    <circle cx="115" cy="95" r="4" fill="white" opacity="0.2" />
                    
                    {/* Apple (Front Left) */}
                    <circle cx="65" cy="135" r="28" fill="#ef4444" />
                    <path d="M65 107 V115" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
                    <path d="M65 110 Q75 100 80 110" fill="#15803d" />

                    {/* Mango (Front Right) */}
                    <ellipse cx="130" cy="140" rx="30" ry="25" fill="#f59e0b" transform="rotate(-15 130 140)" />
                    
                    {/* Small Berries/Detail (Front) */}
                    <circle cx="100" cy="155" r="12" fill="#8b5cf6" opacity="0.8" />
                    <circle cx="115" cy="158" r="10" fill="#8b5cf6" />
                  </svg>
                </div>
              </div>

              {/* Tag (Easter Egg: "Fresh Impact") */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left ml-6 text-[10px] uppercase tracking-[0.3em] font-bold text-orange-300/40 select-none">
                Cultivating Sustainable Impact
              </div>
            </div>
          </div>

          {/* Newsletter Form Content */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4">
            <div className="mb-10 lg:pl-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                <Wind size={12} />
                Newsletter
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                Stay Updated with Our Work
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Subscribe to our newsletter to receive updates on our latest projects, insights, and impact stories.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:pl-4">
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-gray-900 placeholder:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-gray-900 placeholder:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="+234..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all text-gray-900 placeholder:text-gray-300"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative w-full bg-green-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all">
                    {submitted ? 'Subscription Active' : 'Subscribe to Newsletter'}
                    {!submitted && <Mail size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </div>
                </button>
              </div>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 flex items-center gap-3 text-green-600 font-bold justify-center lg:justify-start lg:pl-5"
                >
                  <CheckCircle2 size={20} />
                  <span>Success! You've joined the Ikore network.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
