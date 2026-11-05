import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1B2A47]/60 bg-[#070B14] py-10 text-[#8FA2BF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Personal Signature */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#0D1424] border border-[#168BFF]/40 text-[#4DB8FF] flex items-center justify-center font-mono font-bold text-xs">
              R
            </div>
            <p className="text-xs text-[#A5B4CC]">
              Designed and built by <span className="text-[#F5F8FF] font-medium">Riya Kumari</span> • © {currentYear}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5 text-xs font-mono">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4DB8FF] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4DB8FF] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="hover:text-[#4DB8FF] transition-colors flex items-center gap-1 pl-2 border-l border-[#1B2A47]"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
