import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Insights, tutorials, and news about web design, development, and digital strategy from the Kmwebdesign team."
      />

      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-6">
              Latest <span className="text-brand-600 dark:text-brand-400">Insights</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
              Expert advice, industry trends, and technical deep dives to help you stay ahead in the digital world.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, idx) => (
              <article key={post.id} className={`bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 group flex flex-col transform hover:-translate-y-2 animate-fade-in-up stagger-${idx % 4 + 1}`}>
                <Link to={`/blog/${post.id}`} className="block overflow-hidden h-48 relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wide shadow-sm">
                    {post.category}
                  </div>
                </Link>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-brand-500" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-brand-500" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link to={`/blog/${post.id}`} className="block transition-colors duration-300">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-slate-400" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-brand-600 dark:text-brand-400 font-semibold text-sm flex items-center group/btn"
                    >
                      <span className="relative group-hover:mr-2 transition-all duration-300">Read Article</span> 
                      <ArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {BLOG_POSTS.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-slate-500 text-lg">No articles found. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;