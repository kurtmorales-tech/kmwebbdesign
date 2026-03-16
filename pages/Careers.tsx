
import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Search, Send, CheckCircle2, Loader2, Sparkles, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / Las Vegas',
    type: 'Full-time',
    description: 'We are looking for a React expert to help us build high-performance agency websites and internal AI tools.',
    requirements: ['5+ years React experience', 'Expert knowledge of Tailwind CSS', 'Experience with AI integrations']
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us define the "Premium" aesthetic for our clients. Experience with glassmorphism and modern web design is a must.',
    requirements: ['Portfolio of high-end design', 'Expert in Figma', 'Understanding of technical implementation']
  },
  {
    id: 3,
    title: 'SEO Strategist',
    department: 'Marketing',
    location: 'Las Vegas',
    type: 'Contract',
    description: 'Drive organic growth for our diverse portfolio of local and national clients.',
    requirements: ['Proven track record in SEO', 'Content strategy experience', 'Technical SEO auditing skills']
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null);
  const [applyStatus, setApplyStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStatus('submitting');
    setTimeout(() => {
      setApplyStatus('success');
    }, 2000);
  };

  return (
    <>
      <SEO 
        title="Careers" 
        description="Join the team at Kmwebdesign. We're looking for passionate designers, developers, and strategists."
      />

      <div className="bg-white dark:bg-slate-950 min-h-screen py-24 transition-colors duration-500 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-6 border border-brand-100 dark:border-brand-900/30">
              <Sparkles size={14} />
              <span>We're Growing</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Build the <span className="text-gradient">Future</span> <br/>
              of Digital Design.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              At Kmwebdesign, we don't just fill roles; we find collaborators. Join a team obsessed with high performance and premium aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-6">
              {JOBS.map((job) => (
                <div 
                  key={job.id} 
                  className={`group p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                    selectedJob?.id === job.id 
                    ? 'bg-brand-50/50 dark:bg-brand-900/10 border-brand-500/30 shadow-xl shadow-brand-500/10' 
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-brand-500/20 hover:shadow-lg'
                  }`}
                  onClick={() => {
                    setSelectedJob(job);
                    setApplyStatus('idle');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <span className="flex items-center"><Building2 size={16} className="mr-1.5 text-brand-500" /> {job.department}</span>
                        <span className="flex items-center"><MapPin size={16} className="mr-1.5 text-brand-500" /> {job.location}</span>
                        <span className="flex items-center"><Clock size={16} className="mr-1.5 text-brand-500" /> {job.type}</span>
                      </div>
                    </div>
                    <Button variant={selectedJob?.id === job.id ? 'primary' : 'outline'} className="group-hover:scale-105 transition-transform">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Card */}
            <div className="lg:sticky lg:top-32">
              <div className="glass rounded-[2.5rem] p-8 border-white/20 shadow-2xl">
                {!selectedJob ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Search className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ready to apply?</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Select a position from the list to view requirements and start your application.</p>
                  </div>
                ) : applyStatus === 'success' ? (
                  <div className="text-center py-10 animate-scale-in">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Application Received!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Thank you for your interest in the {selectedJob.title} position. Our team will review your profile soon.</p>
                    <button onClick={() => setApplyStatus('idle')} className="text-brand-600 font-bold hover:underline">Apply for another role</button>
                  </div>
                ) : (
                  <div className="animate-in fade-in duration-500">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Apply: {selectedJob.title}</h3>
                    <form onSubmit={handleApply} className="space-y-4">
                      <div>
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Full Name</label>
                        <input required type="text" className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="Jane Cooper" />
                      </div>
                      <div>
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Email Address</label>
                        <input required type="email" className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Resume (Link)</label>
                        <input required type="url" className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="https://linkedin.com/in/jane-cooper" />
                      </div>
                      <Button type="submit" variant="primary" className="w-full h-14 mt-4" disabled={applyStatus === 'submitting'}>
                        {applyStatus === 'submitting' ? <Loader2 className="animate-spin" /> : 'Submit Application'}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
