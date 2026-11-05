import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-[#070B14] border-t border-[#1B2A47]/50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 text-center sm:text-left">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>CONTACT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F8FF]">
            Let's Connect.
          </h2>

          <p className="text-base text-[#A5B4CC] max-w-xl">
            I'm always open to discussing software projects, cloud systems, or exchanging ideas. Feel free to drop a note.
          </p>
        </div>

        {/* Friendly, Minimal Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          {/* Email */}
          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/80 hover:border-[#168BFF]/40 transition-colors flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6E82A1] uppercase tracking-wider mb-2">
                <span>Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[#4DB8FF] hover:underline flex items-center gap-1 text-[11px]"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#4DB8FF]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#A5B4CC]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="text-sm font-mono text-[#F5F8FF] hover:text-[#4DB8FF] transition-colors break-all"
              >
                {siteConfig.socials.email}
              </a>
            </div>
            <div className="pt-4 mt-2">
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#4DB8FF] hover:underline"
              >
                <span>Send email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/80 hover:border-[#168BFF]/40 transition-colors flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-mono text-[#6E82A1] uppercase tracking-wider mb-2">
                GitHub
              </div>
              <span className="text-sm font-mono text-[#F5F8FF]">
                @riya1177
              </span>
            </div>
            <div className="pt-4 mt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#4DB8FF] hover:underline"
              >
                <span>View repositories</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/80 hover:border-[#168BFF]/40 transition-colors flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-mono text-[#6E82A1] uppercase tracking-wider mb-2">
                LinkedIn
              </div>
              <span className="text-sm font-mono text-[#F5F8FF]">
                Riya Kumari
              </span>
            </div>
            <div className="pt-4 mt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#4DB8FF] hover:underline"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
