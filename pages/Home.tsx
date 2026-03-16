import React from 'react';
import { ArrowRight, CheckCircle, Star, ArrowUpRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { SERVICES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import AIAuditTool from '../components/AIAuditTool';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Kmwebdesign is a premier digital agency helping businesses grow through high-performance web design and SEO."
      />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-500 mesh-gradient">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-12 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="flex-[1.2] text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-700 dark:text-brand-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-xl">
                <Sparkles size={14} className="text-brand-500" />
                <span>Modern Digital Excellence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">Digital Empires</span> That Scale.
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Transforming ambitious vision into high-performance realities. From custom design systems to enterprise-grade web applications.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Button to="/contact" variant="primary" className="!py-5 !px-10 text-lg shadow-[0_20px_50px_rgba(59,_130,_246,_0.3)] hover:-translate-y-1 transition-all duration-300 rounded-2xl group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button to="/portfolio" variant="secondary" className="!py-5 !px-10 text-lg font-bold border-2 border-slate-200/50 dark:border-white/10 hover:border-brand-500 dark:hover:border-brand-400 backdrop-blur-md shadow-2xl hover:shadow-brand-500/20 transition-all duration-300 group">
                  View Case Studies
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="flex items-center space-x-2"><CheckCircle size={18} className="text-emerald-500" /> <span className="text-sm font-bold uppercase tracking-wider">Fast Delivery</span></div>
                <div className="flex items-center space-x-2"><CheckCircle size={18} className="text-emerald-500" /> <span className="text-sm font-bold uppercase tracking-wider">SEO Optimized</span></div>
                <div className="flex items-center space-x-2"><CheckCircle size={18} className="text-emerald-500" /> <span className="text-sm font-bold uppercase tracking-wider">24/7 Support</span></div>
              </div>
            </div>

            {/* AI Audit Box In Hero (Floating) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-float">
              <AIAuditTool />
            </div>
            
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Core Expertise</h2>
            <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              One Agency. Total Performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
            {/* Design - Big Card */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-10 hover:border-brand-500 transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Custom Web Design</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                  We create immersive user experiences that don't just look beautiful—they're engineered to convert visitors into loyal customers.
                </p>
                <div className="mt-auto flex gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">UI/UX Strategy</span>
                  <span className="px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Design Systems</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Zap className="w-full h-full text-brand-600 translate-x-10 translate-y-10" />
              </div>
            </div>

            {/* SEO - Tall Card */}
            <div className="md:col-span-4 md:row-span-3 group relative overflow-hidden rounded-[2.5rem] bg-brand-700 p-10 text-white shadow-2xl shadow-brand-700/20">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <Rocket size={28} />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">Hyper SEO Optimization</h3>
                <p className="text-brand-100 leading-relaxed mb-8">
                  Rank #1. Dominate your local market. We use data-driven strategies to explode your organic reach.
                </p>
                <ul className="space-y-4 flex-1">
                  {['Keyword Dominance', 'Technical Audits', 'Content Blueprints', 'Competitor Analysis'].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-sm font-semibold">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"><CheckCircle size={12} /></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/services" className="inline-flex items-center font-bold hover:translate-x-2 transition-transform">
                    Learn How We Rank <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Development - Small Card */}
            <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 hover:bg-slate-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Secure Dev</h3>
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Enterprise-grade security and blazing-fast performance architectures.</p>
            </div>

            {/* Branding - Small Card */}
            <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 hover:bg-slate-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Iconic Branding</h3>
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Identity design that commands attention and premium brand positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Parallax Feel */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-4">
             <div>
               <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Recent Masterpieces</h2>
               <p className="mt-3 text-slate-500 dark:text-slate-400 text-lg">Where high art meets high conversion.</p>
             </div>
             <Button to="/portfolio" variant="outline" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold glass border-brand-200 dark:border-brand-800 hover:bg-brand-600 hover:text-white transition-all shadow-md hover:shadow-lg group">
               Explore Full Portfolio
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <Link 
                to={`/portfolio/${project.id}`} 
                key={project.id} 
                className="group relative h-[600px] overflow-hidden rounded-[3rem] bg-black shadow-2xl"
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-80" 
                  src={project.imageUrl} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="max-w-xs">
                    <p className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-2">{project.category}</p>
                    <h3 className="text-3xl font-extrabold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6 text-brand-900" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA with Social Proof */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto glass rounded-[4rem] border-brand-500/20 py-20 px-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-500/10 blur-[100px]"></div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 relative z-10">
            Let's Scale Your Business.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-12 relative z-10 font-medium">
            Join the elite circle of businesses leveraging modern tech and AI to dominate their niche.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
             <Button to="/contact" className="!py-5 !px-12 bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-500/30 hover:scale-105 transition-all rounded-2xl text-lg font-bold">
                Book a Strategy Call
              </Button>
          </div>

          <div className="mt-20 flex justify-center items-center space-x-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Partner Logos */}
             <div className="font-black text-2xl tracking-tighter">VOLT</div>
             <div className="font-black text-2xl tracking-tighter">ZENITH</div>
             <div className="font-black text-2xl tracking-tighter">NOVA</div>
             <div className="font-black text-2xl tracking-tighter">APEX</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;