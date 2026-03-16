import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { TEAM, COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { Sparkles, Users, Target, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description={`Learn more about ${COMPANY_INFO.name}, our mission, and the team driving digital innovation.`}
      />

      <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-brand-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 blur-[120px] rounded-full"></div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-6 border border-brand-100 dark:border-brand-900/30">
                <Users size={14} />
                <span>Our Identity</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
                Designed for <br/>
                <span className="text-gradient">Impact.</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-6">
                Founded in September 2024 by Kurt Morales, Kmwebdesign emerged from a desire to bridge the gap between aesthetic beauty and technical performance. We are a team of passionate creators, developers, and strategists dedicated to helping businesses navigate the digital landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <Target className="text-brand-600 mb-4" size={24} />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Our Mission</h4>
                  <p className="text-sm text-slate-500">Enable businesses to thrive with enterprise-grade solutions.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <Rocket className="text-purple-600 mb-4" size={24} />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-500">Set the global standard for digital landmarks.</p>
                </div>
              </div>
              <Button to="/contact" variant="primary">Work With Us</Button>
            </div>
            <div className="mt-16 lg:mt-0 relative animate-fade-in-up stagger-1">
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
                 <img 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                   src="https://picsum.photos/800/800?random=50" 
                   alt="Office collaboration" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
               </div>
               <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl border border-white/20 shadow-2xl animate-float max-w-[240px]">
                 <span className="text-4xl font-black text-brand-600 mb-2 block">100%</span>
                 <p className="text-sm font-bold text-slate-900 dark:text-white">Commitment to technical excellence and client success.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-slate-50 dark:bg-slate-900/50 py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-6 border border-purple-100 dark:border-purple-900/30">
                <Sparkles size={14} />
                <span>The A-Team</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Meet the <span className="text-gradient">Innovators</span>
              </h2>
            </div>
            
            <ul className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10 max-w-7xl mx-auto">
              {TEAM.map((member, idx) => (
                <li key={member.id} className={`animate-fade-in-up stagger-${idx + 1}`}>
                  <Link 
                    to={`/team/${member.id}`}
                    className="group block text-center glass rounded-[2.5rem] p-10 border-white/20 shadow-xl hover:shadow-brand-500/10 hover:-translate-y-4 transition-all duration-500"
                  >
                    <div className="relative mx-auto h-48 w-48 mb-8">
                       <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                       <img className="relative h-48 w-48 rounded-full object-cover border-4 border-white/50 dark:border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-700" src={member.imageUrl} alt={member.name} />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors uppercase tracking-tight">{member.name}</h3>
                        <p className="text-brand-600 dark:text-brand-400 font-bold text-sm tracking-widest uppercase mt-1">{member.role}</p>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium line-clamp-2">
                        {member.bio}
                      </p>
                      <div className="pt-4 flex justify-center">
                         <span className="text-xs font-black text-slate-400 group-hover:text-brand-500 transition-colors flex items-center">
                            VIEW PROFILE 
                            <Sparkles size={12} className="ml-2" />
                         </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;