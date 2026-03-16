import React from 'react';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services" 
        description="Explore our wide range of digital services including Web Design, Web Development, SEO, and Branding tailored for your business success."
      />
      
      <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
        {/* Header */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-base font-semibold text-brand-600 tracking-wide uppercase">Services</h1>
            <p className="mt-1 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Everything you need to grow online.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-slate-500 dark:text-slate-400">
              We offer end-to-end digital solutions designed to elevate your brand and drive measurable results.
            </p>
          </div>
        </div>

        {/* Detailed Service List */}
        <div className="relative bg-slate-50 dark:bg-slate-900/50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white dark:bg-slate-950 h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="space-y-12">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 lg:p-12 border border-slate-100 dark:border-slate-800">
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center justify-center p-4 bg-brand-100 rounded-xl mb-6 text-brand-600">
                      {/* Properly clone icon to merge classes rather than overwrite */}
                      {React.isValidElement(service.icon) ? React.cloneElement(service.icon as React.ReactElement<any>, { 
                        className: `w-10 h-10 ${(service.icon as React.ReactElement<any>).props.className?.replace(/w-\d+ h-\d+/, '') || ''}`
                      }) : service.icon}
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
                      {service.description}
                    </p>
                    
                    <ul className="mt-8 space-y-4">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-base text-slate-700 dark:text-slate-300">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Button to="/contact" variant="primary">
                        Request {service.title} Quote
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img 
                      className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 lg:h-full" 
                      src={`https://picsum.photos/800/600?random=${20 + index}`} 
                      alt={service.title} 
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;