import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1B2A47] bg-[#070B14] pt-14 pb-12 text-[#A5B4CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1B2A47]/60">
          
          {/* Brand & Personal Summary */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0D1424] border border-[#168BFF]/40 text-[#4DB8FF] flex items-center justify-center font-mono font-bold text-xs shadow-[0_0_10px_rgba(22,139,255,0.2)]">
                R
              </div>
              <span className="font-bold text-lg text-[#F5F8FF]">
                Riya
              </span>
            </div>
            <p className="text-sm text-[#A5B4CC] max-w-md leading-relaxed">
              Frontend-focused full-stack developer and computer science student. Building clean, responsive web applications from the interface to the backend.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">Navigation</h4>
            <ul className="space-y-1.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#4DB8FF] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">Connect</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="inline-flex items-center gap-2 hover:text-[#4DB8FF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6E82A1]" />
                <span className="truncate">{siteConfig.socials.email}</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#4DB8FF] transition-colors"
              >
                <Github className="w-4 h-4 text-[#6E82A1]" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#4DB8FF] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#6E82A1]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E82A1]">
          <p>
            © {currentYear} Riya. Built with React, TypeScript &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1424] hover:bg-[#101B30] border border-[#1B2A47] text-[#A5B4CC] hover:text-[#F5F8FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF]"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
