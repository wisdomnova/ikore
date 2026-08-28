'use client';

import { MapPin, Mail, Phone, Clock, ArrowRight, Leaf, Send, Globe, MessageSquare } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
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

  const contactOptions = [
    {
      id: 1,
      icon: <MapPin className="text-green-600" size={24} />,
      title: "Global Headquarters",
      detail: "11 Vanern St, Wuse, Abuja 904101, FCT, Nigeria",
      actionLabel: "View on Map",
      link: "https://maps.google.com/?q=11+Vanern+St,+Wuse,+Abuja"
    },
    {
      id: 2,
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email Correspondence",
      detail: "info@ikore.org",
      actionLabel: "Send Message",
      link: "mailto:info@ikore.org"
    },
    {
      id: 3,
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone & WhatsApp",
      detail: "+234 708 855 9767",
      actionLabel: "Call Now",
      link: "tel:+2347088559767"
    },
    {
      id: 4,
      icon: <Clock className="text-green-600" size={24} />,
      title: "Operating Hours",
      detail: "Mon - Fri | 8:00 AM – 5:00 PM (WAT)",
      actionLabel: "Book Appointment",
      link: "/contact"
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Asymmetrical & Premium */}
      <section className="relative bg-white overflow-hidden pt-32 md:pt-40">
        {/* Topography Detail */}
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mx-auto">
              <MessageSquare size={14} className="text-green-600" />
              Open Communication
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let&apos;s Catalyze <span className="text-green-600">Impact</span> Together
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking to partner on a project, inquire about our services, or simply learn more about our innovations, we&apos;re here to engage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="bg-gray-50 py-32 relative overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactOptions.map((opt) => (
              <motion.div 
                key={opt.id}
                className="group bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-700 relative overflow-hidden flex flex-col md:flex-row gap-10 items-start"
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 relative z-10">
                  {opt.icon}
                </div>
                
                <div className="relative z-10 flex flex-col h-full space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                    {opt.title}
                  </h3>
                  
                  <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                    {opt.detail}
                  </p>

                  <div className="pt-4">
                    <a 
                      href={opt.link} 
                      target={opt.link.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-gray-900 group-hover:text-green-600 transition-all"
                    >
                      {opt.actionLabel} <ArrowRight size={16} className="text-green-600 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Placeholder / Branding Block */}
            <motion.div 
              className="lg:col-span-4 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm">
                <Leaf className="text-green-600 mb-6" size={40} />
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Presence in the <span className="text-green-600 italic font-serif">Frontier</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Headquartered in Abuja, Ikore maintains a strategic network of field offices across Nigeria to ensure our interventions reach the last mile of every community we serve.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Globe className="text-white" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase tracking-widest text-gray-400">Regional Scope</span>
                    <span className="text-sm font-bold text-gray-900">Sub-Saharan Africa</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Map Block */}
            <motion.div 
              className="lg:col-span-8 bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-premium h-[600px] relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.995207793677!2d7.472397!3d9.081999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5e0ca4a8a3%3A0x5e3c7c3c8f0c6c0c!2s11%20Vanern%20St%2C%20Wuse%2C%20Abuja!5e0!3m2!1sen!2sng!4v1643000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ikore Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Section - Contact CTA */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-topography opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-10"
          >
            <div className="w-20 h-20 bg-green-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-green-600/20">
               <Send size={32} className="text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to <span className="text-green-500 italic font-serif">Initialize</span> Partnership?
            </h2>
            
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
              Join leading organizations and community leaders partnering with Ikore to drive real, sustainable change in the market.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
               <a
                href="mailto:info@ikore.org"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-green-600/20"
              >
                Inquire via Email
              </a>
              <a
                href="tel:+2347088559767"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-sm"
              >
                Direct Line
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
