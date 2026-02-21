'use client';

import { X, ChevronRight, Wheat, Sprout, Wind, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ogheneovo Ugbebor",
    title: "Managing Partner",
    description: "Ogheneovo Ugbebor is the Managing Partner at Ikore, bringing years of strategic leadership and development expertise to drive the organization's vision and mission.",
    image: "/team/1-ovo.jpg"
  },
  {
    id: 2,
    name: "Gbenga Ariyo",
    title: "Livestock Team Lead",
    description: "Gbenga Ariyo leads the livestock team with extensive experience in value chain development and livestock systems strengthening across Nigeria and Africa.",
    image: "/team/2-gbenga.jpg"
  },
  {
    id: 3,
    name: "Nabil Yakubu",
    title: "Livestock Intervention Manager",
    description: "Nabil is a practicing Veterinarian with 7 years experience in the livestock space, from managing clinical cases, supporting Community Animal Health Workers in the Northeast, undertaking complex surgeries on livestock and pets, and providing standard health advisory services to clients.",
    image: "/team/3-nabil.jpg"
  },
  {
    id: 4,
    name: "NSE DENNIS (ACA)",
    title: "Compliance Manager",
    description: "Skilled Compliance Manager with years of experience in expertly implementing regulations for best business practice. Confidently evaluating and communicating relevant trend analysis to keep companies at the forefront of compliance. Business-minded Finance expert promoting more than 12 years of expertise.",
    image: "/team/4-nse.jpg"
  },
  {
    id: 5,
    name: "Evangeline Dan-Yusuf",
    title: "Change and Performance Management Coordinator",
    description: "Evangeline Dan-Yusuf is a qualified Business and Organizational Psychologist and Program Manager with a strong focus on organizational competence. She holds a Bachelor's degree in General and Applied Psychology and a Master's degree in Business and Organizational Psychology.",
    image: "/team/5-eva.jpg"
  },
  {
    id: 6,
    name: "Nkechinyere Ibekwe (ACA)",
    title: "Finance and Operations",
    description: "Nkechinyere Ibekwe is a skilled finance professional with ACA designation, bringing robust financial management and operational efficiency expertise to Ikore.",
    image: "/team/6-nkechi.jpg"
  },
  {
    id: 7,
    name: "Constance Jumbo",
    title: "HR/Business Development",
    description: "Jumbo Constance is the Human Resources and Business Development Executive at Ikore, overseeing talent acquisition, development, and strategic business growth initiatives.",
    image: "/team/7-constance.jpg"
  },
  {
    id: 8,
    name: "Mercy Etuwa (Esq)",
    title: "Logistics and Procurement",
    description: "Mercy Etuwa (Esq) manages logistics and procurement operations, ensuring efficient resource management and vendor relationships across Ikore's projects.",
    image: "/team/8-mercy-et.jpg"
  },
  {
    id: 9,
    name: "Chioma Okeke",
    title: "Software Developer",
    description: "Chioma is a software developer with experience in both front-end and back-end technologies in providing solutions in the Mechanization and agribusiness space.",
    image: "/team/9-chioma.jpg"
  },
  {
    id: 10,
    name: "Mercy Edoyugbo",
    title: "Lead Designer",
    description: "Mercy is a UI/Graphics designer with over 5 years of experience in providing solutions to design problems, creating compelling visual communications for Ikore's initiatives.",
    image: "/team/10-mercy.jpg"
  },
  {
    id: 11,
    name: "Duke Ekpo",
    title: "IT Professional",
    description: "Duke is an astute professional with experience garnered in varied fields of ICT applied in ecommerce development and digital transformation.",
    image: "/team/11-duke.jpg"
  },
  {
    id: 12,
    name: "Olatunde Israel",
    title: "Web Developer",
    description: "Israel is an experienced Web Developer with a demonstrated history of working in the internet industry, building scalable and user-centric digital solutions.",
    image: "/team/12-isreal.jpg"
  },
  {
    id: 13,
    name: "Jesutomi Lawal",
    title: "Communications",
    description: "Jesutomi is a communications enthusiast managing the internal and external communications in Ikore, ensuring consistent and impactful messaging.",
    image: "/team/14-jesutomi.jpg"
  },
  {
    id: 14,
    name: "Sanyine Jidauna",
    title: "Communications",
    description: "Sanyine is an enthusiastic and extremely driven member of the communications team, contributing to Ikore's narrative and stakeholder engagement.",
    image: "/team/15-sanyine.jpg"
  },
  {
    id: 15,
    name: "Maureen Ogungbe",
    title: "Research Fellow",
    description: "Ogungbe Maureen Boritshefe is a graduate research fellow in the development sector with a First Class Bachelor's degree in Agricultural Economics. She has dedicated her career to improving the international development space by addressing agricultural challenges through nature based solutions.",
    image: "/team/16-maureen.jpg"
  },
  {
    id: 16,
    name: "Adegbuyi Michael",
    title: "Project Associate (Crop) & Business Innovator",
    description: "Adegbuyi Michael brings innovative thinking and crop development expertise to Ikore's project implementation across Nigeria.",
    image: "/team/17-micheal.jpg"
  },
  {
    id: 17,
    name: "Samson Ugbebor",
    title: "Programs",
    description: "Ugbebor Samson is a business advisor with Ikore international development limited, leveraging his expertise to drive program success.",
    image: "/team/18-samson.jpg"
  },
  {
    id: 18,
    name: "Chinonso John",
    title: "Programs",
    description: "Chinonso John contributes to program design and implementation, bringing strategic insights to Ikore's development initiatives.",
    image: "/team/19-nonso.jpg"
  },
  {
    id: 19,
    name: "Alero Otis",
    title: "Programs",
    description: "Alero is a development and research specialist with years of experience in project implementation and community engagement.",
    image: "/team/20-alero.jpg"
  },
  {
    id: 20,
    name: "Adeolu Joseph",
    title: "Programs",
    description: "Adeolu Joseph supports program execution and coordination across Ikore's diverse portfolio of development initiatives.",
    image: "/team/21-deolu.jpg"
  },
  {
    id: 21,
    name: "Ike Chinazam Ivy",
    title: "Graduate Trainee",
    description: "Ike Chinazam Ivy is a graduate trainee at Ikore, leveraging her Bachelor's degree in Agricultural Economics to gain hands-on experience in the field of agriculture and economics. With her passion for sustainability and profitability in agricultural enterprises, she brings fresh perspectives to the team.",
    image: "/team/22-chinazam.jpg"
  },
  {
    id: 22,
    name: "Frieda Direala Chukwu",
    title: "Graduate Trainee",
    description: "Frieda Direala Chukwu is a talented graduate fellow with a Bachelor's degree in Agricultural Economics and extension services. She has exceptional skills in research, presentation, and communication, making her an asset to any organization. Frieda is passionate about problem-solving.",
    image: "/team/23-freda.jpg"
  },
  {
    id: 23,
    name: "Ezeogu Ernest",
    title: "Graduate Trainee",
    description: "Ezeogu Ernest is a graduate trainee at Ikore. His interests lie in research, data analytics, monitoring and evaluation, and international development. At Ikore, Ernest is leveraging his experience to gain practical skills in the market system and value chain analysis.",
    image: "/team/24-ezeogu.jpg"
  },
  {
    id: 24,
    name: "Onuoha Nkemjika",
    title: "Graduate Trainee",
    description: "Onuoha Nkemjika is a Graduate Trainee here at Ikore looking to challenge himself and continue learning. Nkemjika is passionate about research, data-for-policy, and making markets work. His business interests here at Ikore are Strategy, data, and business development.",
    image: "/team/25-onuouha.jpg"
  },
  {
    id: 25,
    name: "Abedo Theresa Onyinoyi",
    title: "Finance Associate",
    description: "Abedo Theresa Onyinoyi works as a finance associate at Ikore where she is utilizing her financial accounting bachelor's degree to obtain practical experience in the international development industry. Theresa is dedicated to learning and developing as a professional.",
    image: "/team/26-theresa.jpg"
  },
  {
    id: 26,
    name: "Gabriel Alao",
    title: "Graduate Trainee",
    description: "Gabriel Alao is currently on the graduate fellowship programme at IKORE, his passion for agricultural value chain towards achieving global zero hunger drives him to seek experience and knowledge in the international development space, especially of agricultural sciences specialty.",
    image: "/team/27-alao.jpg"
  },
  {
    id: 27,
    name: "Adeyemi Solomon Oloruntobiloba",
    title: "Graduate Trainee",
    description: "Adeyemi Solomon Oloruntobiloba is a graduate fellow at Ikore and he is passionate about Sustainable agriculture. Graduated with a first class in Agricultural science and is looking to gain first-hand practical understanding and experience within the development space.",
    image: "/team/28-oluwatobi.jpg"
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Standardized with About/Home */}
      <section className="relative bg-white overflow-hidden pt-32 md:pt-40">
        {/* Topography Easter Egg */}
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
              <Users size={14} className="text-green-600" />
              Our People
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto" 
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Driving <span className="text-green-600">Impact</span> Through Collective Expertise
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Meet the dedicated professionals committed to facilitating market inclusion and sustainable prosperity across the African continent.
            </p>
          </motion.div>
        </div>

        {/* Subtle Bottom Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Team Members Grid - Premium Cards */}
      <section className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
        {/* Plowed Rows Pattern (Left Side) */}
        <div className="absolute top-0 left-0 w-64 h-full opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="plow-team" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#61af50" strokeWidth="1.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#plow-team)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedMember(member)}
              >
                {/* Member Image Area */}
                <div className="relative aspect-[5/4] bg-gray-100 overflow-hidden">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gray-300 mx-auto group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
                          <Users size={32} />
                        </div>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Team Member</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#noise)" />
                    </svg>
                  </div>
                </div>

                {/* Member Info Area */}
                <div className="p-6 md:p-8 relative">
                  {/* Decorative agricultural detail: Sprout icon in card footer */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <Sprout size={48} className="text-green-600" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-px bg-green-600"></div>
                    <p className="text-green-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.1em]">
                      {member.title}
                    </p>
                  </div>
                  
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6 md:mb-8">
                    {member.description}
                  </p>
                  
                  {/* View Details CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm group-hover:text-green-600 transition-colors">
                      View Profile
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    {/* Wind Easter Egg on hover */}
                    <Wind size={16} className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Modal Refactor */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Container */}
            <motion.div
              className="relative bg-white rounded-[2rem] md:rounded-[3.5rem] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-green-600 hover:text-white transition-all z-20 group"
              >
                <X size={20} className="md:w-6 md:h-6 group-hover:rotate-90 transition-transform" />
              </button>

              {/* Left: Image (40%) */}
              <div className="w-full md:w-[40%] bg-gray-100 relative h-64 md:h-auto overflow-hidden">
                {selectedMember.image ? (
                  <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Users size={60} className="md:w-20 md:h-20 text-gray-200" />
                  </div>
                )}
                {/* Decoration: Bottom corner sprout */}
                <div className="absolute bottom-6 left-6 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                  <Wheat size={20} className="md:w-6 md:h-6" />
                </div>
              </div>

              {/* Right: Info (60%) */}
              <div className="w-full md:w-[60%] p-8 md:p-16 overflow-y-auto">
                <div className="space-y-6 md:space-y-8">
                  <header>
                    <div className="inline-flex items-center gap-2 text-green-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4">
                      <CheckCircle size={14} />
                      Team Leadership
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                      {selectedMember.name}
                    </h2>
                    <p className="text-green-600 text-lg md:text-xl font-bold mt-2">
                      {selectedMember.title}
                    </p>
                  </header>

                  <div className="w-12 md:w-16 h-1.5 bg-green-600 rounded-full"></div>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                    "{selectedMember.description}"
                  </p>

                  <div className="pt-6 md:pt-8 space-y-6">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] md:text-sm flex items-center gap-2">
                       Connect With Ikore
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/contact"
                        className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
                      >
                        Contact via Ikore
                        <ChevronRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Newsletter />
      <Footer />
    </div>
  );
}
