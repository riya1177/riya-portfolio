import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/config';
import { PortraitPlaceholder } from '../components/PortraitPlaceholder';
import { Button } from '../components/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070B14]">
      
      {/* Subtle Background Radial Neon Blue Glow */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#4DB8FF]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: PROMINENT RECTANGULAR PORTRAIT
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <PortraitPlaceholder />
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: PERSONAL, HUMAN, CONFIDENT INTRODUCTION
             ======================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            
            {/* Small introductory role label + availability badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#4DB8FF] uppercase px-3.5 py-1 rounded-full bg-[#168BFF]/10 border border-[#168BFF]/30">
                {siteConfig.profile.role}
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1424] border border-[#1B2A47] text-xs text-[#A5B4CC]">
                <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" />
                <span>{siteConfig.profile.availability}</span>
              </div>
            </div>

            {/* Main Greeting / Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F8FF] leading-[1.12]">
              Hey, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#4DB8FF] to-[#168BFF] drop-shadow-[0_0_20px_rgba(22,139,255,0.4)]">
                Riya Kumari
              </span>
            </h1>

            {/* Natural First-Person Bio Paragraphs */}
            <div className="space-y-3.5 text-base sm:text-lg text-[#A5B4CC] leading-relaxed">
              <p>
                {siteConfig.profile.introP1}
              </p>
              <p className="text-sm sm:text-base text-[#8FA2BF]">
                {siteConfig.profile.introP2}
              </p>
              <p className="text-sm sm:text-base text-[#8FA2BF]">
                {siteConfig.profile.introP3}
              </p>
            </div>

            {/* Small Skill Line */}
            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm font-mono text-[#4DB8FF] font-medium">
              <Sparkles className="w-4 h-4 text-[#168BFF] shrink-0" />
              <span>{siteConfig.profile.skillsLine}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                iconRight={<ArrowDown className="w-4 h-4" />}
              >
                Explore My Projects
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="md"
                icon={<Mail className="w-4 h-4 text-[#4DB8FF]" />}
              >
                Let's Connect
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
