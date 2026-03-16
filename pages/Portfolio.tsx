import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <>
      <SEO 
        title="Portfolio" 
        description="View our recent work and case studies. See how Kmwebdesign has helped businesses achieve their digital goals."
      />

      <div className="bg-white dark:bg-slate-950 min-h-screen py-24 transition-colors duration-500 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-6 border border-brand-100 dark:border-brand-900/30">
              <Briefcase size={14} />
              <span>Showcasing Excellence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
              Where <span className="text-gradient">Ambition</span> <br/> 
              Meets High Art.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We don't just build websites; we build digital landmarks. Explore our library of high-performance case studies and brand transformations.
            </p>
          </div>

          {/* Filters - Glass Style */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 animate-fade-in-up stagger-1">
            <div className="flex items-center space-x-2 text-slate-400 font-bold uppercase tracking-widest text-xs border-r border-slate-200 dark:border-slate-800 pr-6 mr-6 hidden md:flex">
              <Filter size={14} />
              <span>Project Type</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 transform active:scale-95 border ${
                    filter === category
                      ? 'bg-brand-600 text-white border-brand-500 shadow-xl shadow-brand-500/20'
                      : 'bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 glass'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <Link 
                to={`/portfolio/${project.id}`} 
                key={project.id} 
                className="group flex flex-col relative animate-fade-in-up"
              >
                {/* Image Container with Perspective Effect */}
                <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl transition-all duration-700 group-hover:shadow-brand-500/20 border border-transparent group-hover:border-brand-500/30">
                  <img 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100" 
                    src={project.imageUrl} 
                    alt={project.title} 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon Button Floating */}
                  <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-900 shadow-xl transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Content Under Image */}
                <div className="pt-8 px-2 transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-40 animate-fade-in group">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="text-slate-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xl font-medium tracking-tight">Innovation is on its way. Check back soon for new projects.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;