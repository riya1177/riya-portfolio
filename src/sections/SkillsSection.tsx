import React from 'react';
import { motion } from 'framer-motion';
import { skillCategoriesData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 bg-[#070B14] border-t border-[#1B2A47]/50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F8FF]">
            Skills &amp; Technologies.
          </h2>

          <p className="text-base text-[#A5B4CC] max-w-xl">
            A breakdown of languages, backend frameworks, databases, and DevOps tools I use regularly.
          </p>
        </div>

        {/* Clean, Minimalist Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="p-6 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/80 hover:border-[#168BFF]/40 transition-colors"
            >
              <h3 className="text-sm font-semibold font-mono text-[#F5F8FF] mb-4 pb-2 border-b border-[#1B2A47]/60 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[11px] text-[#6E82A1] font-normal">{category.skills.length}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-[#101B30] border border-[#1B2A47] text-xs font-mono text-[#A5B4CC] hover:text-[#4DB8FF] hover:border-[#168BFF]/40 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
