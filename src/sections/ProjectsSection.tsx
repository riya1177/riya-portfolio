import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import { StorageInteractiveDemo } from '../components/StorageInteractiveDemo';
import { InterviewCoachInteractiveDemo } from '../components/InterviewCoachInteractiveDemo';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

export const ProjectsSection: React.FC = () => {
  const project1 = caseStudies.find(p => p.id === 'cloud-storage')!;
  const project2 = caseStudies.find(p => p.id === 'ai-interview-coach')!;

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#070B14] border-t border-[#1B2A47]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        
        {/* Section Header as requested */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>MY WORK</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F8FF]">
            Things I've built.
          </h2>

          <p className="text-base sm:text-lg text-[#A5B4CC] leading-relaxed">
            A couple of projects I've spent time building, learning from, and improving.
          </p>
        </div>

        {/* ========================================================
            PROJECT 1: PRIVATE CLOUD STORAGE
           ======================================================== */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0D1424] border border-[#1B2A47] hover:border-[#168BFF]/40 transition-all duration-300 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Project Details Left */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="blue" size="sm">
                    {project1.role}
                  </Badge>
                  <span className="text-xs font-mono text-[#6E82A1]">
                    {project1.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
                  {project1.title}
                </h3>
                
                <p className="text-xs font-mono text-[#4DB8FF]">
                  {project1.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#A5B4CC] leading-relaxed">
                {project1.description}
              </p>

              {/* Technologies Used */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E82A1] block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project1.technologies.map(tech => (
                    <Badge key={tech} variant="neutral" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* View Case Study Action */}
              <div className="pt-2">
                <Button
                  to={`/projects/${project1.slug}`}
                  variant="primary"
                  size="md"
                  iconRight={<ArrowUpRight className="w-4 h-4" />}
                >
                  View Case Study
                </Button>
              </div>
            </div>

            {/* Interactive Preview Right */}
            <div className="lg:col-span-7">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#6E82A1] font-mono">
                  <span className="flex items-center gap-1.5 text-[#4DB8FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse" />
                    Interactive File Explorer
                  </span>
                  <span>Try clicking files or upload</span>
                </div>
                <StorageInteractiveDemo />
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            PROJECT 2: AI INTERVIEW COACH
           ======================================================== */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0D1424] border border-[#1B2A47] hover:border-[#168BFF]/40 transition-all duration-300 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Project Details Left */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="blue" size="sm">
                    {project2.role}
                  </Badge>
                  <span className="text-xs font-mono text-[#6E82A1]">
                    {project2.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
                  {project2.title}
                </h3>
                
                <p className="text-xs font-mono text-[#4DB8FF]">
                  {project2.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#A5B4CC] leading-relaxed">
                {project2.description}
              </p>

              {/* Technologies Used */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E82A1] block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project2.technologies.map(tech => (
                    <Badge key={tech} variant="neutral" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* View Case Study Action */}
              <div className="pt-2">
                <Button
                  to={`/projects/${project2.slug}`}
                  variant="primary"
                  size="md"
                  iconRight={<ArrowUpRight className="w-4 h-4" />}
                >
                  View Case Study
                </Button>
              </div>
            </div>

            {/* Interactive Preview Right */}
            <div className="lg:col-span-7">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#6E82A1] font-mono">
                  <span className="flex items-center gap-1.5 text-[#4DB8FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse" />
                    Interactive Rehearsal Sandbox
                  </span>
                  <span>Try toggling modes &amp; recording</span>
                </div>
                <InterviewCoachInteractiveDemo />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
