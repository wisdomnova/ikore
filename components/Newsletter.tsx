'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-24 lg:gap-12 items-start lg:items-center">
          
          {/* Decorative Agricultural Fruit Basket Box */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Outer Box - Fruit Basket Color */}
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl"></div>
            
            {/* Inner Box - Main Container */}
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-orange-200 h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
              
              {/* Dot Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-4 p-4 sm:p-8">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-orange-800"></div>
                  ))}
                </div>
              </div>

              {/* Static Fruit & Vegetable Shapes */}
              <div className="relative w-full h-full flex items-center justify-center" style={{transform: 'scale(0.35) sm:scale(0.55) lg:scale(1)'}}>
                
                {/* Banana - Curved yellow shape (top left) */}
                <div className="absolute top-16 left-16">
                  <svg width="80" height="60" viewBox="0 0 80 60" className="fill-yellow-400">
                    <path d="M10,30 Q20,10 40,15 Q60,20 70,30 Q60,40 40,35 Q20,30 10,30 Z" />
                  </svg>
                </div>

                {/* Watermelon - Green circle with dark green stripes (top right) */}
                <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-green-600 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-3 w-2 h-full bg-green-800 opacity-60"></div>
                    <div className="absolute top-0 left-9 w-3 h-full bg-green-800 opacity-60"></div>
                    <div className="absolute top-0 right-9 w-3 h-full bg-green-800 opacity-60"></div>
                    <div className="absolute top-0 right-3 w-2 h-full bg-green-800 opacity-60"></div>
                  </div>
                </div>

                {/* Orange - Orange circle with texture (center) */}
                <div className="absolute w-28 h-28 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-orange-600 opacity-50"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-orange-600 opacity-50"></div>
                    <div className="absolute top-1/2 left-2 w-2 h-2 rounded-full bg-orange-600 opacity-50"></div>
                  </div>
                </div>

                {/* Coconut - Brown circle (bottom left) */}
                <div className="absolute bottom-20 left-24 w-20 h-20 rounded-full bg-amber-800 shadow-md">
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute top-2 left-2 w-1 h-16 bg-amber-950 opacity-40 rotate-12"></div>
                    <div className="absolute top-2 left-5 w-1 h-16 bg-amber-950 opacity-40 rotate-12"></div>
                    <div className="absolute top-2 right-5 w-1 h-16 bg-amber-950 opacity-40 rotate-12"></div>
                  </div>
                </div>

                {/* Apple - Red rounded shape with leaf (bottom right) */}
                <div className="absolute bottom-16 right-16">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-red-500 shadow-md"></div>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-red-500"></div>
                    {/* Leaf */}
                    <div className="absolute -top-2 right-8 w-6 h-10 bg-green-600 rounded-full rotate-45"></div>
                    {/* Stem */}
                    <div className="absolute -top-3 right-10 w-1 h-4 bg-amber-900"></div>
                  </div>
                </div>

                {/* Papaya/Pawpaw - Orange oval (middle left) */}
                <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-24 rounded-full bg-orange-400 shadow-md">
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-500 opacity-60"></div>
                    </div>
                  </div>
                </div>

                {/* Lime - Small lime green circle (top center) */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-lime-500 shadow-md"></div>

                {/* Mango - Yellow-orange oval (middle right) */}
                <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                  <div className="w-20 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md rotate-12"></div>
                </div>

                {/* Tomato - Red circle with green top (bottom center) */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-red-600 shadow-md"></div>
                    {/* Tomato top */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-2 bg-green-700 rounded-t-lg"></div>
                      <div className="w-1 h-3 bg-green-800 mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Carrot - Orange triangle (bottom right corner) */}
                <div className="absolute bottom-8 right-8">
                  <div className="relative">
                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[40px] border-t-orange-600 rotate-180"></div>
                    {/* Carrot top leaves */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      <div className="w-1 h-4 bg-green-600 rotate-12"></div>
                      <div className="w-1 h-5 bg-green-600"></div>
                      <div className="w-1 h-4 bg-green-600 -rotate-12"></div>
                    </div>
                  </div>
                </div>

                {/* Corn - Yellow with kernels (left center) */}
                <div className="absolute left-8 top-1/3">
                  <div className="relative w-12 h-24 bg-yellow-300 rounded-full shadow-md">
                    {/* Kernel pattern */}
                    <div className="absolute inset-1 grid grid-cols-3 gap-1 p-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-sm bg-yellow-500 opacity-60"></div>
                      ))}
                    </div>
                    {/* Corn husk */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-green-200 rounded-t-full opacity-80"></div>
                  </div>
                </div>

                {/* Eggplant - Purple oval (right bottom) */}
                <div className="absolute right-32 bottom-28">
                  <div className="relative">
                    <div className="w-14 h-20 rounded-full bg-purple-700 shadow-md"></div>
                    {/* Eggplant top */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-green-700 rounded-t-md"></div>
                  </div>
                </div>

                {/* Bell Pepper - Green/Red pepper (top center right) */}
                <div className="absolute top-8 right-1/3">
                  <div className="relative">
                    <div className="w-16 h-20 bg-red-500 rounded-b-3xl shadow-md"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-red-500 rounded-t-3xl"></div>
                    {/* Pepper stem */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-green-700 rounded-t-md"></div>
                  </div>
                </div>

                {/* Pumpkin - Orange rounded with grooves (left bottom) */}
                <div className="absolute left-12 bottom-32">
                  <div className="relative w-20 h-16 bg-orange-600 rounded-full shadow-md">
                    {/* Pumpkin grooves */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-4 w-1 h-full bg-orange-800 opacity-40"></div>
                      <div className="absolute top-0 left-8 w-1 h-full bg-orange-800 opacity-40"></div>
                      <div className="absolute top-0 right-8 w-1 h-full bg-orange-800 opacity-40"></div>
                      <div className="absolute top-0 right-4 w-1 h-full bg-orange-800 opacity-40"></div>
                    </div>
                    {/* Pumpkin stem */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-green-800"></div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:mt-0"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Stay Updated with Our Work
              </h2>
              <p className="text-gray-700 text-lg">
                Subscribe to our newsletter to receive updates on our latest projects, insights, and impact stories.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-600 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-600 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-600 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors text-lg"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-center text-green-600 font-semibold">
                Thank you for subscribing!
              </p>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
