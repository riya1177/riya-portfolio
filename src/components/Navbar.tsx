import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = siteConfig.navigation.map(nav => nav.href.replace('#', ''));
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (!isHomePage && href.startsWith('#')) {
      e.preventDefault();
      window.location.href = `${import.meta.env.BASE_URL}${href}`;
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-[#1B2A47]/70 py-3 shadow-[0_4px_24px_rgba(7,11,20,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D1424] border border-[#168BFF]/40 text-[#4DB8FF] flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_12px_rgba(22,139,255,0.25)] group-hover:border-[#168BFF] group-hover:shadow-[0_0_18px_rgba(22,139,255,0.4)] transition-all">
              R
            </div>
            <span className="font-semibold text-base text-[#F5F8FF] group-hover:text-[#4DB8FF] transition-colors tracking-tight">
              Riya
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D1424]/70 border border-[#1B2A47]/80 rounded-full px-2.5 py-1 backdrop-blur-sm">
            {siteConfig.navigation.map((item) => {
              const target = item.href.replace('#', '');
              const isActive = isHomePage && activeSection === target;

              return (
                <a
                  key={item.label}
                  href={isHomePage ? item.href : `${import.meta.env.BASE_URL}${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] ${
                    isActive
                      ? 'text-[#F5F8FF] bg-[#168BFF]/20 border border-[#168BFF]/40 shadow-[0_0_12px_rgba(22,139,255,0.2)]'
                      : 'text-[#A5B4CC] hover:text-[#4DB8FF] hover:bg-[#101B30]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#101B30] hover:bg-[#168BFF] border border-[#1B2A47] hover:border-[#168BFF] text-[#F5F8FF] text-xs font-medium shadow-card hover:shadow-[0_0_16px_rgba(22,139,255,0.3)] transition-all active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4DB8FF] group-hover:text-white" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#A5B4CC] hover:text-[#F5F8FF] hover:bg-[#101B30] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-[#4DB8FF]" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-[#0D1424]/95 backdrop-blur-xl border-b border-[#1B2A47] overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              <div className="flex flex-col divide-y divide-[#1B2A47]/40">
                {siteConfig.navigation.map((item) => {
                  const target = item.href.replace('#', '');
                  const isActive = isHomePage && activeSection === target;

                  return (
                    <a
                      key={item.label}
                      href={isHomePage ? item.href : `${import.meta.env.BASE_URL}${item.href}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-sm font-medium py-2.5 transition-colors flex items-center justify-between ${
                        isActive ? 'text-[#4DB8FF] font-semibold' : 'text-[#F5F8FF] hover:text-[#4DB8FF]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] text-xs font-semibold text-center transition-all shadow-[0_0_15px_rgba(22,139,255,0.3)]"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
