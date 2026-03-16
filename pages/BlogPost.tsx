import React from 'react';
import { useParams, Navigate, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS, COMPANY_INFO } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Construct Canonical URL
  const origin = (typeof window !== 'undefined' && window.location && window.location.origin !== 'null') 
    ? window.location.origin 
    : 'https://kmwebdesign.com';
  const canonicalUrl = `${origin}/blog/${post.id}`;

  // Structured Data (Schema.org) for BlogPosting
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${origin}/logo.png`
      }
    },
    "datePublished": "2024-10-28", // Needs actual ISO date
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt}
        canonical={canonicalUrl}
        schema={schema}
      />

      <article className="bg-white min-h-screen pb-20">
        
        {/* Navigation Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate('/blog')}
            className="group flex items-center text-slate-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Blog</span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 bg-slate-100 overflow-hidden mb-12">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <header className="mb-10 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 uppercase tracking-wide mb-6">
              <Tag className="w-3 h-3 mr-1.5" />
              {post.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 border-b border-slate-100 pb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-brand-500" />
                <span className="font-medium text-slate-900">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-brand-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-brand-500" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-500 prose-img:rounded-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer / Share */}
          <div className="mt-16 pt-8 border-t border-slate-200">
             <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
               <p className="text-slate-500 italic">
                 Have questions about this article? <Link to="/contact" className="text-brand-600 underline hover:text-brand-700">Get in touch</Link>.
               </p>
               <div className="flex gap-2">
                 <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors" aria-label="Share on Twitter">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                 </button>
                 <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors" aria-label="Share on LinkedIn">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </button>
               </div>
             </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;