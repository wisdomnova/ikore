'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { ChevronLeft, Calendar, Tag as TagIcon, Layout, ArrowRight, Wheat, Sprout, Wind } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { getProjectBySlug } from '@/lib/wordpress/queries';
import { Project, Tag } from '@/lib/wordpress/types';

interface ProjectDetailType extends Project {
  tags?: Tag[];
  relatedProjects?: Project[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [project, setProject] = useState<ProjectDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProject = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjectBySlug(slug);
      setProject(data);
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('Failed to fetch project');
      setError(error);
      console.error('Project fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [slug]);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
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

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Header />

      {/* Loading State */}
      {loading && (
        <section className="min-h-screen pt-48 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="h-4 w-32 bg-gray-100 rounded-full animate-pulse mb-8"></div>
            <div className="h-16 w-3/4 bg-gray-100 rounded-2xl animate-pulse mb-6"></div>
            <div className="aspect-video w-full bg-gray-100 rounded-[3.5rem] animate-pulse"></div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && !loading && (
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-gray-100 p-12 text-center shadow-xl">
             <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <ChevronLeft className="text-red-500 rotate-180" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">The project you're looking for might have been moved or is no longer available.</p>
              <button 
                onClick={fetchProject}
                className="w-full py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
              >
                Retry Loading
              </button>
          </div>
        </section>
      )}

      {/* Project Content */}
      {!loading && !error && project && (
        <>
          {/* Hero Section with Back Button */}
          <section className="relative pt-48 pb-20 overflow-hidden bg-white">
            {/* Agriculture "Easter Egg": Subtle Topography Patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#61af50" strokeWidth="1" />
                <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="#61af50" strokeWidth="1" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <motion.button
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                onClick={() => router.back()}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-green-600 hover:bg-green-50 transition-all mb-12"
              >
                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Explore Projects
              </motion.button>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest">
                    {project.category}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Layout size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Market System</span>
                  </div>
                </div>

                <h1
                  className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.name}
                </h1>
              </motion.div>
            </div>
          </section>

          {/* Featured Image - Premium Container */}
          {project.image && (
            <section className="bg-white pb-24">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="relative aspect-[21/9] w-full bg-gray-100 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-green-900/10 group"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Subtle Detail: Grain Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-grain"></div>
                  
                  {/* Agricultural Motif Overlay */}
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30">
                    <Wheat size={24} />
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Project Content - Strategic Layout */}
          <section className="bg-gray-50 pt-32 pb-48 rounded-t-[4rem] -mt-10 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Meta Sidebar */}
                <aside className="lg:col-span-4 order-2 lg:order-1">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-12 sticky top-32"
                  >
                    {/* Capability Snapshot */}
                    <motion.div variants={fadeInUp} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-topography opacity-[0.03] pointer-events-none"></div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-6">Execution Context</h3>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                            <Sprout size={18} />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-gray-400">Intervention Area</div>
                            <div className="text-sm font-bold text-gray-900">{project.category}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                            <Wind size={18} />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-gray-400">Implementation Scope</div>
                            <div className="text-sm font-bold text-gray-900">Regional Impact Hub</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Tags Section */}
                    {project.tags && project.tags.length > 0 && (
                      <motion.div variants={fadeInUp}>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-3">
                          <span className="w-8 h-px bg-gray-200"></span>
                          Categorization
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <div
                              key={tag.id}
                              className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:border-green-600 hover:text-green-600 transition-all transition-colors cursor-default"
                            >
                              #{tag.name}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </aside>

                {/* Main Narrative */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="lg:col-span-8 order-1 lg:order-2"
                >
                  <div className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-gray-100 shadow-premium">
                    <article className="prose prose-xl prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900">
                      <style jsx global>{`
                        .project-body h2 { font-family: var(--font-heading); font-size: 2.25rem; font-weight: 800; color: #111; letter-spacing: -0.02em; margin-top: 3rem; margin-bottom: 1.5rem; }
                        .project-body p { line-height: 1.8; color: #444; margin-bottom: 2rem; font-size: 1.125rem; }
                        .project-body strong { color: #111; font-weight: 700; }
                        .project-body ul { list-style-type: none; padding-left: 0; }
                        .project-body li { position: relative; padding-left: 2rem; margin-bottom: 1rem; color: #444; }
                        .project-body li::before { content: ""; position: absolute; left: 0; top: 0.75rem; width: 0.75rem; height: 1.5px; background: #16a34a; }
                      `}</style>

                      <div className="project-body relative">
                        {/* Decorative Quote Mark for agricultural start */}
                        <div className="absolute -left-12 -top-4 text-7xl font-serif text-green-50 select-none hidden md:block">“</div>
                        
                        {project.fullDescription ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                            className="space-y-6"
                          />
                        ) : (
                          <p className="text-gray-500 italic text-xl leading-relaxed">{project.description}</p>
                        )}
                      </div>
                    </article>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Related Projects - High Fidelity Editorial Grid */}
          <section className="bg-white py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
                    <Layout size={12} />
                    Strategic Continuity
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                    Related <span className="text-green-600">Impact</span> Areas
                  </h2>
                </div>
                <button
                  onClick={() => router.push('/projects')}
                  className="group flex items-center gap-3 px-8 py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-green-600 transition-all duration-500"
                >
                  View All Initiatives
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {project.relatedProjects && project.relatedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.relatedProjects.map((relatedProject) => (
                    <motion.a
                      key={relatedProject.id}
                      href={`/projects/${relatedProject.slug}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="group bg-gray-50 rounded-[2.5rem] p-4 flex flex-col h-full border border-transparent hover:border-green-100 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl"
                    >
                      <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden mb-8 bg-gray-200">
                        {relatedProject.image ? (
                           <Image
                            src={relatedProject.image}
                            alt={relatedProject.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <Layout size={40} />
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[8px] font-black uppercase tracking-widest text-green-700 shadow-sm">
                            {relatedProject.category}
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-4 pb-4 flex-grow">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors leading-snug">
                          {relatedProject.name}
                        </h4>
                        <div className="flex items-center gap-2 text-green-600 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                          View details <ArrowRight size={12} />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border border-dashed border-gray-200">
                  <p className="text-gray-400 font-medium">No additional related projects in this category.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <Newsletter />
      <Footer />
    </div>
  );
}

