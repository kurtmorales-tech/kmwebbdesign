
import React, { useState, useEffect } from 'react';
import { X, Cookie, ShieldCheck } from 'lucide-react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-6 md:p-8 border-brand-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-brand-600/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400">
           <Cookie size={32} strokeWidth={1.5} />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 flex items-center justify-center md:justify-start">
             Cookie Transparency
             <ShieldCheck size={18} className="ml-2 text-emerald-500" />
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            We use cookies to enhance your experience and analyze our traffic. High-performance design requires some digital memory. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button 
            onClick={() => handleConsent('essential')}
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Essential Only
          </button>
          <Button 
            onClick={() => handleConsent('all')}
            variant="primary" 
            className="w-full sm:w-auto !py-4 !px-8 rounded-2xl shadow-xl shadow-brand-500/20"
          >
            Accept All
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
