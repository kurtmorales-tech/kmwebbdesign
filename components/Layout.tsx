import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Globe, Mail, MapPin, Phone, Sun, Moon, Twitter, Linkedin, Facebook } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import CookieConsent from './CookieConsent';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/50 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" aria-label="Kmwebdesign Home">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Kmwebdesign
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 items-center" role="navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-all duration-300 relative group px-4 py-2 rounded-xl ${
                    location.pathname === item.path
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-500 to-purple-500 transform origin-left transition-transform duration-300 rounded-full ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              
              <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-3"></div>
              
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-300 transform active:scale-90 hover:scale-110"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-amber-400" />}
              </button>

              <Button to="/contact" variant="primary" className="ml-2 !py-2.5 !px-5 text-sm font-bold shadow-lg hover:shadow-brand-500/30 hover:scale-105 transition-all">
                Get a Quote
              </Button>
            </nav>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all active:scale-90"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 dark:hover:text-white focus:outline-none p-2 transition-all active:scale-90 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden fixed top-20 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 shadow-2xl z-50 animate-in slide-in-from-top-4 fade-in duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 animate-in slide-in-from-left fade-in ${
                    location.pathname === item.path
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {location.pathname === item.path && (
                      <div className="w-2 h-2 bg-brand-600 dark:bg-brand-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </Link>
              ))}
              <div className="pt-4 px-2 animate-in slide-in-from-bottom fade-in duration-300" style={{ animationDelay: '300ms' }}>
                <Button to="/contact" variant="primary" className="w-full justify-center !py-3.5 font-bold shadow-lg">
                  Get a Quote
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4 group inline-flex">
                 <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Kmwebdesign
                </span>
              </Link>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Crafting digital experiences that drive growth and innovation. Founded in 2024.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Web Design</Link></li>
                <li><Link to="/services" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Web Development</Link></li>
                <li><Link to="/services" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">SEO Optimization</Link></li>
                <li><Link to="/services" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Branding</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
                <li><Link to="/portfolio" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Portfolio</Link></li>
                <li><Link to="/careers" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Careers</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
                <li><Link to="/privacy" className="text-sm hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start group">
                  <MapPin className="w-5 h-5 mr-2 text-brand-500 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span>8035 Torremolinos ave, Las Vegas NV 89178</span>
                </li>
                <li className="flex items-center group">
                  <Mail className="w-5 h-5 mr-2 text-brand-500 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <a href="mailto:support@kmwebdesign.xyz" className="hover:text-brand-400 transition-colors">support@kmwebdesign.xyz</a>
                </li>
                <li className="flex items-center group">
                  <Phone className="w-5 h-5 mr-2 text-brand-500 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <a href="tel:+17027585543" className="hover:text-brand-400 transition-colors">+1 702-758-5543</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
               <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};

export default Layout;