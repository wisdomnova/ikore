'use client';

import { X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
    description: "Ogheneovo Ugbebor is the Managing Partner at Ikore, bringing years of strategic leadership and development expertise to drive the organization's vision and mission."
  },
  {
    id: 2,
    name: "Gbenga Ariyo",
    title: "Livestock Team Lead",
    description: "Gbenga Ariyo leads the livestock team with extensive experience in value chain development and livestock systems strengthening across Nigeria and Africa."
  },
  {
    id: 3,
    name: "Nabil Yakubu",
    title: "Livestock Intervention Manager",
    description: "Nabil is a practicing Veterinarian with 7 years experience in the livestock space, from managing clinical cases, supporting Community Animal Health Workers in the Northeast, undertaking complex surgeries on livestock and pets, and providing standard health advisory services to clients."
  },
  {
    id: 4,
    name: "NSE DENNIS (ACA)",
    title: "Compliance Manager",
    description: "Skilled Compliance Manager with years of experience in expertly implementing regulations for best business practice. Confidently evaluating and communicating relevant trend analysis to keep companies at the forefront of compliance. Business-minded Finance expert promoting more than 12 years of expertise."
  },
  {
    id: 5,
    name: "Evangeline Dan-Yusuf",
    title: "Change and Performance Management Coordinator",
    description: "Evangeline Dan-Yusuf is a qualified Business and Organizational Psychologist and Program Manager with a strong focus on organizational competence. She holds a Bachelor's degree in General and Applied Psychology and a Master's degree in Business and Organizational Psychology."
  },
  {
    id: 6,
    name: "Nkechinyere Ibekwe (ACA)",
    title: "Finance and Operations",
    description: "Nkechinyere Ibekwe is a skilled finance professional with ACA designation, bringing robust financial management and operational efficiency expertise to Ikore."
  },
  {
    id: 7,
    name: "Constance Jumbo",
    title: "HR/Business Development",
    description: "Jumbo Constance is the Human Resources and Business Development Executive at Ikore, overseeing talent acquisition, development, and strategic business growth initiatives."
  },
  {
    id: 8,
    name: "Mercy Etuwa (Esq)",
    title: "Logistics and Procurement",
    description: "Mercy Etuwa (Esq) manages logistics and procurement operations, ensuring efficient resource management and vendor relationships across Ikore's projects."
  },
  {
    id: 9,
    name: "Chioma Okeke",
    title: "Software Developer",
    description: "Chioma is a software developer with experience in both front-end and back-end technologies in providing solutions in the Mechanization and agribusiness space."
  },
  {
    id: 10,
    name: "Mercy Edoyugbo",
    title: "Lead Designer",
    description: "Mercy is a UI/Graphics designer with over 5 years of experience in providing solutions to design problems, creating compelling visual communications for Ikore's initiatives."
  },
  {
    id: 11,
    name: "Duke Ekpo",
    title: "IT Professional",
    description: "Duke is an astute professional with experience garnered in varied fields of ICT applied in ecommerce development and digital transformation."
  },
  {
    id: 12,
    name: "Olatunde Israel",
    title: "Web Developer",
    description: "Israel is an experienced Web Developer with a demonstrated history of working in the internet industry, building scalable and user-centric digital solutions."
  },
  {
    id: 13,
    name: "Jesutomi Lawal",
    title: "Communications",
    description: "Jesutomi is a communications enthusiast managing the internal and external communications in Ikore, ensuring consistent and impactful messaging."
  },
  {
    id: 14,
    name: "Sanyine Jidauna",
    title: "Communications",
    description: "Sanyine is an enthusiastic and extremely driven member of the communications team, contributing to Ikore's narrative and stakeholder engagement."
  },
  {
    id: 15,
    name: "Maureen Ogungbe",
    title: "Research Fellow",
    description: "Ogungbe Maureen Boritshefe is a graduate research fellow in the development sector with a First Class Bachelor's degree in Agricultural Economics. She has dedicated her career to improving the international development space by addressing agricultural challenges through nature based solutions."
  },
  {
    id: 16,
    name: "Adegbuyi Michael",
    title: "Project Associate (Crop) & Business Innovator",
    description: "Adegbuyi Michael brings innovative thinking and crop development expertise to Ikore's project implementation across Nigeria."
  },
  {
    id: 17,
    name: "Samson Ugbebor",
    title: "Programs",
    description: "Ugbebor Samson is a business advisor with Ikore international development limited, leveraging his expertise to drive program success."
  },
  {
    id: 18,
    name: "Chinonso John",
    title: "Programs",
    description: "Chinonso John contributes to program design and implementation, bringing strategic insights to Ikore's development initiatives."
  },
  {
    id: 19,
    name: "Alero Otis",
    title: "Programs",
    description: "Alero is a development and research specialist with years of experience in project implementation and community engagement."
  },
  {
    id: 20,
    name: "Adeolu Joseph",
    title: "Programs",
    description: "Adeolu Joseph supports program execution and coordination across Ikore's diverse portfolio of development initiatives."
  },
  {
    id: 21,
    name: "Ike Chinazam Ivy",
    title: "Graduate Trainee",
    description: "Ike Chinazam Ivy is a graduate trainee at Ikore, leveraging her Bachelor's degree in Agricultural Economics to gain hands-on experience in the field of agriculture and economics. With her passion for sustainability and profitability in agricultural enterprises, she brings fresh perspectives to the team."
  },
  {
    id: 22,
    name: "Frieda Direala Chukwu",
    title: "Graduate Trainee",
    description: "Frieda Direala Chukwu is a talented graduate fellow with a Bachelor's degree in Agricultural Economics and extension services. She has exceptional skills in research, presentation, and communication, making her an asset to any organization. Frieda is passionate about problem-solving."
  },
  {
    id: 23,
    name: "Ezeogu Ernest",
    title: "Graduate Trainee",
    description: "Ezeogu Ernest is a graduate trainee at Ikore. His interests lie in research, data analytics, monitoring and evaluation, and international development. At Ikore, Ernest is leveraging his experience to gain practical skills in the market system and value chain analysis."
  },
  {
    id: 24,
    name: "Onuoha Nkemjika",
    title: "Graduate Trainee",
    description: "Onuoha Nkemjika is a Graduate Trainee here at Ikore looking to challenge himself and continue learning. Nkemjika is passionate about research, data-for-policy, and making markets work. His business interests here at Ikore are Strategy, data, and business development."
  },
  {
    id: 25,
    name: "Abedo Theresa Onyinoyi",
    title: "Finance Associate",
    description: "Abedo Theresa Onyinoyi works as a finance associate at Ikore where she is utilizing her financial accounting bachelor's degree to obtain practical experience in the international development industry. Theresa is dedicated to learning and developing as a professional."
  },
  {
    id: 26,
    name: "Gabriel Alao",
    title: "Graduate Trainee",
    description: "Gabriel Alao is currently on the graduate fellowship programme at IKORE, his passion for agricultural value chain towards achieving global zero hunger drives him to seek experience and knowledge in the international development space, especially of agricultural sciences specialty."
  },
  {
    id: 27,
    name: "Adeyemi Solomon Oloruntobiloba",
    title: "Graduate Trainee",
    description: "Adeyemi Solomon Oloruntobiloba is a graduate fellow at Ikore and he is passionate about Sustainable agriculture. Graduated with a first class in Agricultural science and is looking to gain first-hand practical understanding and experience within the development space."
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-black mb-6" 
              style={{ fontFamily: 'var(--font-heading)' }}
              variants={fadeInUp}
            >
              Our Talented Team
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-2 leading-relaxed max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Dedicated professionals committed to driving sustainable development across Africa
            </motion.p>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Click on any team member to learn more about their background and expertise
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-green-600 transition-all cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedMember(member)}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                {/* Member Image */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center text-gray-500 overflow-hidden">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <span className="text-sm">[Team Member Photo]</span>
                    </div>
                  )}
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Member Info */}
                <div className="p-6 relative">
                  {/* Small green accent line */}
                  <div className="absolute top-0 left-6 w-12 h-1 bg-green-600 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                  
                  <h3 className="text-xl font-bold text-black mb-2 mt-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold text-sm mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* View More with arrow */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      View Profile
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    {/* Small dot indicator */}
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="bg-white rounded-lg max-w-sm sm:max-w-md md:max-w-2xl w-full max-h-[85vh] overflow-y-auto p-4 sm:p-0"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="sticky top-0 right-4 sm:absolute sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10 bg-white sm:bg-transparent p-2 sm:p-0 rounded sm:rounded-none"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              {/* Image */}
              <div>
                <div className="bg-gray-300 h-60 sm:h-80 md:h-96 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
                  {selectedMember.image ? (
                    <Image 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-6xl mb-4">👤</div>
                      <span className="text-sm">[Team Member Photo]</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {selectedMember.name}
                </h2>
                <p className="text-green-600 font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                  {selectedMember.title}
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedMember.description}
                </p>

                {/* Connect CTA */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Want to connect or collaborate?
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold transition-colors"
                  >
                    Get In Touch
                    <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Newsletter />

      <Footer />
    </div>
  );
}
