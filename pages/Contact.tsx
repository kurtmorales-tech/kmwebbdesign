import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value) return 'Full name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'subject':
        if (!value) return 'Subject is required';
        return '';
      case 'message':
        if (!value) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (touched[name]) {
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    Object.keys(formState).forEach((key) => {
      const error = validate(key, formState[key as keyof typeof formState]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setStatus('submitting');
    
    // Simulate API call with a realistic delay
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
    }, 1800);
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Kmwebdesign. Request a quote or ask us about our web design and SEO services."
      />

      <div className="bg-white dark:bg-slate-950 min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-brand-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="max-w-3xl mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-6 border border-brand-100 dark:border-brand-900/30">
              <Mail size={14} />
              <span>Connect With Us</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-8">
              Let's build something <br/>
              <span className="text-gradient">extraordinary.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Ready to start your next project? Our team is standing by to help you navigate your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6 animate-fade-in-up stagger-1">
              <div className="glass rounded-[2.5rem] p-10 border-white/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 blur-3xl rounded-full"></div>
                
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tight uppercase">Office Hub</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div className="ml-5">
                      <p className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Our Location</p>
                      <p className="text-lg font-bold text-slate-600 dark:text-slate-400 leading-tight">8035 Torremolinos ave, <br/>Las Vegas NV 89178</p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div className="ml-5">
                      <p className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Direct Line</p>
                      <a href={`tel:+17027585543`} className="text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">
                        +1 702-758-5543
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div className="ml-5">
                      <p className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Email us</p>
                      <a href="mailto:support@kmwebdesign.xyz" className="text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">
                        support@kmwebdesign.xyz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                      <Clock size={24} />
                    </div>
                    <div className="ml-5">
                      <p className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Availability</p>
                      <p className="text-lg font-bold text-slate-600 dark:text-slate-400 leading-tight">Mon-Fri: 9:00 AM - 6:00 PM <br/>PST Timezone</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Placeholder */}
                <div className="mt-12 group/map relative h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
                   <img 
                     src="https://picsum.photos/id/122/800/600?grayscale" 
                     className="w-full h-full object-cover opacity-50 contrast-125 group-hover/map:scale-105 transition-transform duration-1000"
                     alt="Map location"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass px-6 py-4 rounded-2xl border-white/20 text-slate-900 dark:text-white text-xs font-black tracking-widest flex items-center uppercase shadow-2xl">
                        <MapPin className="w-4 h-4 mr-3 text-brand-600" />
                        Las Vegas HQ
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 animate-fade-in-up stagger-2">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-scale-in">
                  <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-8 text-emerald-600">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase">Transmission Received!</h3>
                  <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-sm font-medium">
                    Thank you for reaching out. A specialist will review your inquiry and respond within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-brand-500 transition-colors shadow-xl shadow-brand-500/20"
                  >
                    Send New Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-400 block px-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all font-medium ${
                          touched.name && errors.name 
                          ? 'border-red-500 ring-red-500/20 ring-2' 
                          : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'
                        }`}
                        placeholder="John Doe"
                      />
                      {touched.name && errors.name && (
                        <p className="text-red-500 text-xs font-bold mt-1 px-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 block px-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all font-medium ${
                          touched.email && errors.email 
                          ? 'border-red-500 ring-red-500/20 ring-2' 
                          : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'
                        }`}
                        placeholder="john@example.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs font-bold mt-1 px-1 flex items-center">
                          <AlertCircle size={12} className="mr-1" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-slate-400 block px-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all font-medium ${
                        touched.subject && errors.subject 
                        ? 'border-red-500 ring-red-500/20 ring-2' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'
                      }`}
                      placeholder="Project Partnership"
                    />
                    {touched.subject && errors.subject && (
                      <p className="text-red-500 text-xs font-bold mt-1 px-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400 block px-1">
                      Brief Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all font-medium resize-none ${
                        touched.message && errors.message 
                        ? 'border-red-500 ring-red-500/20 ring-2' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'
                      }`}
                      placeholder="Describe your goals and vision..."
                    />
                    {touched.message && errors.message && (
                      <p className="text-red-500 text-xs font-bold mt-1 px-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full h-16 text-xs font-black tracking-widest uppercase shadow-2xl shadow-brand-500/20 group rounded-2xl"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-3" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Launch Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Contact;