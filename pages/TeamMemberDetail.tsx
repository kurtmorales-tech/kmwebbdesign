
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TEAM } from '../constants';
import SEO from '../components/SEO';
import { ArrowLeft, Mail, Linkedin, Twitter, Sparkles, ShieldCheck } from 'lucide-react';

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = TEAM.find(m => m.id === id);

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <>
      <SEO 
        title={`${member.name} - ${member.role}`} 
        description={`Meet ${member.name}, ${member.role} at Kmwebdesign. ${member.bio}`}
      />

      <div className="bg-white dark:bg-slate-950 min-h-screen py-24 transition-colors duration-500 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/about" 
            className="inline-flex items-center text-slate-500 hover:text-brand-600 transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="md:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-800 animate-float">
                <ShieldCheck size={40} className="text-brand-600" />
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 space-y-8 animate-fade-in-up">
              <div>
                <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-[10px] font-black tracking-widest uppercase mb-4 border border-brand-100 dark:border-brand-900/30">
                  <Sparkles size={12} />
                  <span>Verified Team Member</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter leading-none">
                  {member.name}
                </h1>
                <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                  {member.role}
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {member.bio}
                </p>
                <div className="h-px w-20 bg-brand-500/30 my-8"></div>
                <p className="text-slate-500 dark:text-slate-500">
                  With years of experience in the digital space, {member.name.split(' ')[0]} is dedicated to pushing the boundaries of what's possible on the web. At Kmwebdesign, we pride ourselves on delivering standard-shattering results for every client.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <a href="#" className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all">
                  <Twitter size={20} />
                </a>
                <a href={`mailto:support@kmwebdesign.xyz`} className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberDetail;
