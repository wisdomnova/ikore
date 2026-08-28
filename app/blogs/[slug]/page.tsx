'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, Calendar, User, Clock, Share2, ArrowRight, Bookmark, Wheat, Sprout, Wind, Layout } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import { getBlogBySlug } from '@/lib/wordpress/queries';
import { BlogPost } from '@/lib/wordpress/types';
import { BlogsErrorState, BlogGridSkeleton } from '@/components/BlogSkeleton';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogBySlug(slug);
      setBlog(data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch blog');
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  if (!mounted) return null;

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900 overflow-x-hidden">
      <Loader isVisible={loading} />
      <Header />

      <AnimatePresence mode="wait">
        {loading ? (
          <section className="pt-48 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
              <div className="h-4 w-32 bg-gray-50 rounded-full animate-pulse mb-8"></div>
              <div className="h-16 w-3/4 bg-gray-100 rounded-2xl animate-pulse mb-6"></div>
              <div className="h-6 w-1/2 bg-gray-100 rounded-xl animate-pulse mb-12"></div>
              <div className="aspect-video w-full bg-gray-100 rounded-[3rem] animate-pulse"></div>
            </div>
          </section>
        ) : error ? (
          <section className="pt-48 pb-24 min-h-screen flex items-center justify-center">
            <div className="max-w-xl mx-auto px-6 text-center">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Layout className="text-red-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Insight Unavailable</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">We couldn't retrieve this specific article. It might have been archived or Moved.</p>
              <button 
                onClick={fetchBlog}
                className="px-10 py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl"
              >
                Retry Request
              </button>
            </div>
          </section>
        ) : blog && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            key="blog-content"
          >
            {/* Blog Hero - Editorial Focus */}
            <section className="relative pt-48 pb-20 overflow-hidden bg-white">
              {/* Agricultural Easter Eggs */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#61af50" strokeWidth="1" />
                  <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#61af50" strokeWidth="1" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-topography opacity-[0.05] pointer-events-none"></div>
              
              <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.button
                  variants={fadeInUp}
                  onClick={() => router.back()}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-green-600 hover:bg-green-50 transition-all mb-12"
                >
                  <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Insight Archive
                </motion.button>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest border border-green-100">
                      {blog.category}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Wind size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Thought Leadership</span>
                    </div>
                  </div>
                  
                  <h1 
                    className="text-4xl md:text-7xl font-bold text-gray-900 mb-12 leading-[1.05] tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {blog.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-10 py-8 border-y border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-black rounded-[1.25rem] flex items-center justify-center text-white font-bold overflow-hidden shadow-xl">
                        {blog.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Lead Analyst</div>
                        <div className="font-bold text-gray-900 text-lg">{blog.author}</div>
                      </div>
                    </div>
                    
                    <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                    
                    <div className="flex items-center gap-12">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                           <Calendar size={18} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Release Date</div>
                          <div className="text-sm font-bold text-gray-900">{blog.formattedDate}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                           <Clock size={18} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Read Duration</div>
                          <div className="text-sm font-bold text-gray-900">{blog.content ? Math.ceil(blog.content.split(' ').length / 200) : 3} min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Featured Image - Ultra Premium */}
            {blog.image && (
              <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                  <motion.div 
                    variants={fadeInUp}
                    className="aspect-[21/9] w-full relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 group"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
                    
                    <div className="absolute bottom-10 right-10">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30">
                          <Wheat size={24} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Content Body - Refined Editorial Layout */}
            <section className="pb-32 relative bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  {/* Strategic Sidebar */}
                  <div className="lg:col-span-1 hidden lg:block">
                    <div className="sticky top-32 flex flex-col items-center gap-6">
                      <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-green-600 hover:border-green-200 hover:bg-green-50 transition-all shadow-sm">
                        <Share2 size={20} />
                      </button>
                      <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-all shadow-sm">
                        <Bookmark size={20} />
                      </button>
                      <div className="w-px h-24 bg-gray-100 my-4"></div>
                      <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-widest text-gray-300">Share Insight</span>
                    </div>
                  </div>

                  {/* Narrative Container */}
                  <motion.div 
                    variants={fadeInUp}
                    className="lg:col-span-8 lg:col-start-3"
                  >
                    <article className="prose prose-xl prose-gray max-w-none">
                      <style jsx global>{`
                        .prose h2 { font-family: var(--font-heading); font-weight: 800; color: #111; letter-spacing: -0.02em; margin-top: 3.5em; margin-bottom: 1.5em; font-size: 2.25rem; }
                        .prose p { line-height: 1.85; color: #374151; margin-bottom: 2.5em; font-size: 1.25rem; }
                        .prose blockquote { border-left: 0; background: #0a0a0a; padding: 3.5rem; border-radius: 3rem; color: #fff; font-weight: 500; font-size: 1.75rem; line-height: 1.5; margin: 4rem 0; position: relative; overflow: hidden; }
                        .prose blockquote::before { content: ""; position: absolute; top: 0; right: 0; width: 300px; height: 300px; background: url('/patterns/topography.svg'); opacity: 0.1; pointer-events: none; }
                        .prose strong { color: #111; font-weight: 800; }
                        .prose a { color: #16a34a; text-decoration-thickness: 2px; font-weight: 700; transition: all 0.2s; }
                        .prose a:hover { color: #15803d; text-decoration-color: #15803d; }
                      `}</style>
                      
                      <div className="relative">
                        {/* Dramatic Dropcap or Initial Symbol */}
                        <div className="absolute -left-16 top-0 text-8xl font-serif text-green-50 select-none hidden md:block">“</div>
                        
                        {blog.content ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                            className="article-body-v2"
                          />
                        ) : (
                          <p className="article-body-v2 italic text-gray-400 text-2xl leading-relaxed">{blog.excerpt}</p>
                        )}
                      </div>
                    </article>

                    {/* Author Signature - High Fidelity Hub */}
                    <div className="mt-32 p-12 md:p-16 bg-gray-50 rounded-[3.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-topography opacity-[0.03] pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="w-28 h-28 bg-black rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-bold shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10">
                        {blog.author.charAt(0).toUpperCase()}
                      </div>
                      
                      <div className="text-center md:text-left relative z-10 flex-grow">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/50 text-green-700 text-[10px] font-black uppercase tracking-widest mb-4">
                           <Sprout size={10} /> Contribution Lead
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{blog.author}</h3>
                        <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
                          Expert in market systems development and social inclusion programs, driving research-backed initiatives at Ikore International Development Limited.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Tags Section - Visual Detail */}
            {blog.tags && blog.tags.length > 0 && (
              <section className="py-24 border-t border-gray-100 bg-gray-50/30">
                <div className="max-w-4xl mx-auto px-6">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-10 flex items-center gap-4">
                     Index & Tags
                    <span className="flex-grow h-px bg-gray-100"></span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-7 py-3 rounded-2xl bg-white border border-gray-100 text-sm font-bold text-gray-600 hover:border-green-600 hover:text-green-600 transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Premium Post Navigation */}
            <section className="py-32 border-t border-gray-100 bg-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-full opacity-[0.02] pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="plow-nav" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#61af50" strokeWidth="1.5" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#plow-nav)" />
                  </svg>
              </div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between mb-16">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-2">Next Steps</div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Continue Reading</h3>
                  </div>
                  <button onClick={() => router.push('/blogs')} className="hidden md:flex items-center gap-3 px-8 py-4 bg-gray-50 text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Show All Insights <ArrowRight size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {blog.previousPost && (
                    <a href={`/blogs/${blog.previousPost.slug}`} className="group relative p-12 bg-white rounded-[3.5rem] border border-gray-100 hover:border-green-100 transition-all duration-700 hover:shadow-premium overflow-hidden">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-3">
                        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Previous Analysis
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-[1.2] group-hover:text-green-700 transition-colors mb-8 line-clamp-3">{blog.previousPost.title}</h4>
                      <div className="flex items-center gap-3 opacity-10 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-700">Access Insight</span>
                        <div className="w-10 h-px bg-green-700"></div>
                      </div>
                    </a>
                  )}
                  {blog.nextPost && (
                    <a href={`/blogs/${blog.nextPost.slug}`} className="group relative p-12 bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 shadow-2xl transition-all duration-700 hover:-translate-y-4 overflow-hidden">
                      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
                      <div className="absolute top-0 right-0 w-full h-full bg-topography opacity-5 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-8 flex items-center justify-end gap-3">
                          Coming Up Next
                          <ChevronLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white text-right leading-[1.2] group-hover:text-green-500 transition-colors mb-8 line-clamp-3">{blog.nextPost.title}</h4>
                        <div className="flex items-center justify-end gap-3 opacity-10 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="w-10 h-px bg-green-500"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Read Insight</span>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
