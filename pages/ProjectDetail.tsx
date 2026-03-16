import React, { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';
import { PROJECTS, COMPANY_INFO } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution' | 'results'>('challenge');
  
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Construct Canonical URL
  const origin = (typeof window !== 'undefined' && window.location && window.location.origin !== 'null') 
    ? window.location.origin 
    : 'https://kmwebdesign.com';
  const canonicalUrl = `${origin}/portfolio/${project.id}`;

  // Enhanced Structured Data (Schema.org) for Case Study
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": project.description,
    "image": project.gallery && project.gallery.length > 0 ? project.gallery : [project.imageUrl],
    "author": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": origin
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${origin}/logo.png`
      }
    },
    "genre": "Case Study",
    "keywords": project.tags ? project.tags.join(', ') : '',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "datePublished": project.date || "2024-09-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.imageUrl];

  return (
    <>
      <SEO 
        title={`${project.title} - Case Study`} 
        description={project.description}
        canonical={canonicalUrl}
        schema={schema}
      />

      <div className="bg-slate-50 min-h-screen pb-20">
        
        {/* Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate('/portfolio')}
            className="group flex items-center text-slate-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Text Content */}
            <div className="lg:w-2/5 pt-4 order-2 lg:order-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-700 uppercase tracking-wide">
                {project.category}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {project.description}
              </p>

              {/* Meta Grid */}
              <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-slate-200 py-8">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Client</p>
                  <p className="font-medium text-slate-900">{project.client || 'Confidential'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Duration</p>
                  <p className="font-medium text-slate-900">{project.duration || 'Ongoing'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Services & Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-md text-sm font-medium border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery / Image Carousel */}
            <div className="lg:w-3/5 w-full order-1 lg:order-2">
               <ImageGallery images={images} title={project.title} />
            </div>
          </div>
        </div>

        {/* Case Study Details - Tabs Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Tab Headers */}
            <div className="flex border-b border-slate-100 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('challenge')}
                className={`flex-1 py-6 px-8 text-center text-sm font-bold uppercase tracking-wider transition-all min-w-[140px] focus:outline-none ${
                  activeTab === 'challenge' 
                    ? 'text-brand-600 border-b-2 border-brand-600 bg-brand-50/30' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                The Challenge
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`flex-1 py-6 px-8 text-center text-sm font-bold uppercase tracking-wider transition-all min-w-[140px] focus:outline-none ${
                  activeTab === 'solution' 
                    ? 'text-brand-600 border-b-2 border-brand-600 bg-brand-50/30' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                Our Solution
              </button>
               {project.results && (
                <button
                  onClick={() => setActiveTab('results')}
                  className={`flex-1 py-6 px-8 text-center text-sm font-bold uppercase tracking-wider transition-all min-w-[140px] focus:outline-none ${
                    activeTab === 'results' 
                      ? 'text-brand-600 border-b-2 border-brand-600 bg-brand-50/30' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Results
                </button>
              )}
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:p-16 min-h-[300px]">
              {activeTab === 'challenge' && (
                <div className="animate-fadeIn max-w-4xl mx-auto">
                   <h3 className="text-2xl font-bold text-slate-900 mb-6">Identifying the Problem</h3>
                   <p className="text-lg text-slate-600 leading-relaxed">
                    {project.challenge || "To create a seamless digital experience that connects with the target audience and drives measurable business goals."}
                  </p>
                </div>
              )}

              {activeTab === 'solution' && (
                <div className="animate-fadeIn max-w-4xl mx-auto">
                   <h3 className="text-2xl font-bold text-slate-900 mb-6">Strategic Approach</h3>
                   <p className="text-lg text-slate-600 leading-relaxed">
                    {project.solution || "We implemented a custom strategy leveraging modern technologies and user-centric design principles to overcome the obstacles."}
                  </p>
                </div>
              )}

              {activeTab === 'results' && project.results && (
                 <div className="animate-fadeIn max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Measurable Impact</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex items-start bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-100 transition-colors">
                          <CheckCircle className="w-6 h-6 text-brand-600 mr-4 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-700 font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Inspired by this project?</h2>
          <Button to="/contact" variant="primary" className="shadow-xl shadow-brand-500/20 text-lg px-8 py-4">
            Start Your Own Project
          </Button>
        </div>

      </div>
    </>
  );
};

export default ProjectDetail;