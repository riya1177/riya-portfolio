import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage && href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B14]/90 backdrop-blur-md border-b border-[#1B2A47] py-3.5 shadow-card'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <Link to="/" className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-[#0D1424] border border-[#168BFF]/40 text-[#4DB8FF] flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_12px_rgba(22,139,255,0.25)] group-hover:border-[#168BFF] group-hover:shadow-[0_0_16px_rgba(22,139,255,0.4)] transition-all">
              R
            </div>
            <span className="font-bold text-base text-[#F5F8FF] group-hover:text-[#4DB8FF] transition-colors tracking-tight">
              Riya
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-[#A5B4CC] hover:text-[#4DB8FF] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1424] border border-[#1B2A47] text-xs text-[#A5B4CC]">
              <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" />
              <span>Available for roles</span>
            </div>

            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#101B30] hover:bg-[#13223D] border border-[#1B2A47] hover:border-[#168BFF]/50 text-[#F5F8FF] text-xs font-semibold shadow-card transition-all active:scale-[0.98]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4DB8FF]" />
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
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0D1424] border-b border-[#1B2A47] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101B30] border border-[#1B2A47] text-xs text-[#A5B4CC] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" />
                <span>Open to frontend opportunities</span>
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-[#1B2A47]">
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={isHomePage ? item.href : `/${item.href}`}
                    onClick={() => handleNavClick(item.href)}
                    className="text-base font-medium text-[#F5F8FF] hover:text-[#4DB8FF] py-2 border-b border-[#1B2A47]/40"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full text-center py-2.5 rounded-xl bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] text-sm font-semibold shadow-[0_0_15px_rgba(22,139,255,0.3)]"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
