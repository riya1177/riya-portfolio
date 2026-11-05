import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { siteConfig } from '../data/config';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#070B14]"
    >
      {/* Subtle Background Glows */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-12 right-0 w-80 h-80 bg-[#4DB8FF]/8 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Profile Photo: Clean, refined presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
              
              {/* Subtle Ambient Border Glow */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#168BFF]/25 to-[#4DB8FF]/15 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl border border-[#168BFF]/35 bg-[#0D1424] overflow-hidden shadow-[0_0_30px_rgba(22,139,255,0.18)] group-hover:border-[#4DB8FF]/60 transition-all duration-300">
                {!imgError ? (
                  <img
                    src="/riya.jpeg"
                    alt="Riya Kumari"
                    className="w-full h-full object-cover object-center filter saturate-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0D1424]">
                    <div className="w-14 h-14 rounded-2xl bg-[#101B30] border border-[#168BFF]/40 flex items-center justify-center text-[#4DB8FF] mb-3">
                      <Terminal className="w-7 h-7" />
                    </div>
                    <span className="text-lg font-bold text-[#F5F8FF]">Riya Kumari</span>
                    <span className="text-xs font-mono text-[#4DB8FF] mt-1">Developer</span>
                  </div>
                )}
              </div>

            </div>
          </motion.div>

          {/* Hero Content: Personal, developer-focused, natural language */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            
            {/* Minimal Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1424] border border-[#168BFF]/30 text-xs font-mono text-[#4DB8FF] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" />
              <span>Software Developer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F8FF] leading-[1.12]">
              Hey, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#4DB8FF] to-[#38BDF8]">
                Riya Kumari
              </span>
            </h1>

            {/* Confident, Natural Introduction */}
            <div className="space-y-3.5 text-base sm:text-lg text-[#A5B4CC] leading-relaxed max-w-xl">
              <p>
                Software Developer | Cloud & Backend Engineering
              </p>
              <p className="text-sm sm:text-base text-[#8FA2BF]">
                I’m passionate about building reliable, scalable, and well-engineered software. With a focus on backend systems, cloud technologies, and full-stack development, I enjoy turning complex problems into practical solutions through clean architecture, thoughtful design, and efficient code.
              </p>
            </div>

            {/* Action Buttons: View Projects & Contact Me */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] text-sm font-semibold transition-all shadow-[0_0_20px_rgba(22,139,255,0.3)] hover:shadow-[0_0_25px_rgba(22,139,255,0.45)] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1424] hover:bg-[#101B30] border border-[#1B2A47] hover:border-[#168BFF]/50 text-[#F5F8FF] text-sm font-medium transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#4DB8FF]" />
                <span>Contact Me</span>
              </a>

              {/* GitHub & LinkedIn Social Buttons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0D1424] hover:bg-[#101B30] border border-[#1B2A47] hover:border-[#168BFF]/40 text-[#A5B4CC] hover:text-[#4DB8FF] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0D1424] hover:bg-[#101B30] border border-[#1B2A47] hover:border-[#168BFF]/40 text-[#A5B4CC] hover:text-[#4DB8FF] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
