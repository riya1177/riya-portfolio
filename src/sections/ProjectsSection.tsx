import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ArrowUpRight, 
  ExternalLink, 
  HardDrive, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const featuredProject = projectsData.find(p => p.id === 'private-cloud-storage')!;
  const otherProjects = projectsData.filter(p => p.id !== 'private-cloud-storage');

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 bg-[#070B14] border-t border-[#1B2A47]/50 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 -right-48 w-96 h-96 bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>FEATURED WORK</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F8FF]">
            Projects I've Built.
          </h2>

          <p className="text-base text-[#A5B4CC] max-w-2xl">
            A selection of practical applications spanning self-hosted cloud storage, AI tools, and full-stack systems.
          </p>
        </div>

        {/* ========================================================
            FEATURED PROJECT SPOTLIGHT: PRIVATE CLOUD STORAGE
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#0D1424] border border-[#168BFF]/40 hover:border-[#168BFF]/70 transition-all duration-300 shadow-[0_4px_30px_rgba(7,11,20,0.8)] hover:shadow-[0_0_30px_rgba(22,139,255,0.18)] overflow-hidden"
        >
          <div className="p-7 sm:p-10 lg:p-12 space-y-8">
            
            {/* Header: Badge & Category */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168BFF]/15 border border-[#168BFF]/35 text-xs font-mono text-[#4DB8FF] font-semibold">
                <HardDrive className="w-3.5 h-3.5 text-[#168BFF]" />
                <span>Featured Project · Cloud Storage &amp; Systems</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A5B4CC]">
                <ShieldCheck className="w-4 h-4 text-[#4DB8FF]" />
                <span>Fernet Symmetric Encryption + RAID-1 Mirror</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-3 max-w-3xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F8FF] tracking-tight">
                {featuredProject.title}
              </h3>
              
              <p className="text-base sm:text-lg text-[#A5B4CC] leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            {/* Key Features Breakdown */}
            <div className="space-y-3 pt-2 border-t border-[#1B2A47]/60">
              <div className="text-xs font-mono uppercase tracking-wider text-[#4DB8FF] font-semibold">
                Key Architectural Features
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {featuredProject.keyFeatures?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5B4CC] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#168BFF] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2 border-t border-[#1B2A47]/60">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">
                Technologies &amp; Architecture
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-[#101B30] border border-[#1B2A47] text-[#F5F8FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101B30] hover:bg-[#13223D] border border-[#1B2A47] hover:border-[#168BFF]/50 text-[#F5F8FF] text-xs font-semibold shadow-card transition-all"
              >
                <Github className="w-4 h-4 text-[#4DB8FF]" />
                <span>GitHub Repository</span>
              </a>

              {featuredProject.caseStudyUrl && (
                <Link
                  to={featuredProject.caseStudyUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] text-xs font-semibold shadow-[0_0_15px_rgba(22,139,255,0.3)] transition-all"
                >
                  <span>View Case Study &amp; Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

          </div>
        </motion.div>

        {/* ========================================================
            OTHER NOTABLE PROJECTS GRID
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0D1424] border border-[#1B2A47] hover:border-[#168BFF]/50 transition-all duration-300 shadow-card flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category & Title */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#4DB8FF] block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F8FF] group-hover:text-[#4DB8FF] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A5B4CC] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.keyFeatures && (
                  <div className="space-y-1.5 pt-1">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#8FA2BF] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#101B30] border border-[#1B2A47] text-[#A5B4CC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Links */}
              <div className="pt-5 mt-6 border-t border-[#1B2A47]/60 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A5B4CC] hover:text-[#4DB8FF] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>

                {project.caseStudyUrl && (
                  <Link
                    to={project.caseStudyUrl}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#4DB8FF] hover:underline"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                {project.liveUrl && !project.caseStudyUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#4DB8FF] hover:underline"
                  >
                    <span>Current Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
