import React from 'react';
import { Sparkles, Code2, Database, Layout } from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import { Badge } from '../components/Badge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#070B14] border-t border-[#1B2A47]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>ABOUT ME</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F8FF]">
            A bit about me.
          </h2>
        </div>

        {/* Personal & Concise Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#A5B4CC] leading-relaxed">
            <p>
              I'm a computer science student and <strong className="text-[#F5F8FF] font-semibold">frontend-focused full-stack developer</strong>. My primary focus is on frontend engineering — building clean, intuitive, and responsive user experiences using <strong className="text-[#4DB8FF] font-semibold">React</strong> and <strong className="text-[#4DB8FF] font-semibold">TypeScript</strong>.
            </p>

            <p>
              While the frontend is where I spend most of my energy, I also develop backend services and work with APIs, databases, and <strong className="text-[#F5F8FF] font-semibold">Python (FastAPI, SQL)</strong>. Understanding how data is stored, queried, and delivered across the stack allows me to design cleaner API contracts, avoid frontend-backend integration bottlenecks, and build features that work reliably from end to end.
            </p>

            <p>
              When building interfaces, I focus on the details that make software pleasant to use: predictable component state, clean information hierarchy, keyboard accessibility, and responsive layouts that look natural on any screen size.
            </p>

            <p className="text-sm text-[#8FA2BF] pt-1">
              I enjoy bringing ideas to life, tackling technical challenges, and learning something new with every project I take on.
            </p>
          </div>

          {/* Right Column: Key Principles / Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0D1424] border border-[#1B2A47] space-y-4 shadow-card">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#4DB8FF] flex items-center gap-2 font-semibold">
                <Sparkles className="w-4 h-4 text-[#168BFF]" />
                <span>What I focus on</span>
              </h3>

              <div className="space-y-3.5 text-sm text-[#A5B4CC]">
                {/* Frontend (Primary Focus) */}
                <div className="p-3 rounded-xl bg-[#101B30] border border-[#168BFF]/30">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-[#F5F8FF] font-semibold flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#4DB8FF]" />
                      Frontend Engineering
                    </strong>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#4DB8FF] bg-[#168BFF]/15 px-2 py-0.5 rounded">
                      Primary Focus
                    </span>
                  </div>
                  <p className="text-xs text-[#A5B4CC] leading-relaxed mt-1">
                    Building accessible, responsive, and maintainable interfaces with React, TypeScript, and modern component architectures.
                  </p>
                </div>

                {/* Backend (Additional Strength) */}
                <div className="p-3 rounded-xl bg-[#070B14] border border-[#1B2A47]">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-[#F5F8FF] font-semibold flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#168BFF]" />
                      Backend APIs &amp; Databases
                    </strong>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8FA2BF] bg-[#1B2A47]/50 px-2 py-0.5 rounded">
                      Full-Stack Strength
                    </span>
                  </div>
                  <p className="text-xs text-[#A5B4CC] leading-relaxed mt-1">
                    Developing RESTful APIs with Python and FastAPI, managing relational databases with SQL, and connecting UI to backend data.
                  </p>
                </div>

                {/* Product & UX */}
                <div className="p-3 rounded-xl bg-[#070B14] border border-[#1B2A47]">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-[#F5F8FF] font-semibold flex items-center gap-2">
                      <Layout className="w-4 h-4 text-[#6E82A1]" />
                      Product &amp; UX Thinking
                    </strong>
                  </div>
                  <p className="text-xs text-[#A5B4CC] leading-relaxed mt-1">
                    Designing intuitive user journeys, eliminating unnecessary friction, and prioritizing clear user feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Skills Section */}
        <div className="pt-8 border-t border-[#1B2A47]/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-[#F5F8FF]">
              Tools &amp; Technologies
            </h3>
            <span className="text-xs font-mono text-[#6E82A1]">Frontend-focused with full-stack capabilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skillsList.map((group, idx) => {
              const isPrimary = idx === 0;
              return (
                <div 
                  key={group.category}
                  className={`p-5 rounded-xl transition-all ${
                    isPrimary 
                      ? 'bg-[#0D1424] border border-[#168BFF]/40 shadow-[0_0_15px_rgba(22,139,255,0.1)]' 
                      : 'bg-[#0D1424] border border-[#1B2A47]'
                  } space-y-3.5`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#4DB8FF] font-semibold">
                      {group.category}
                    </h4>
                    {isPrimary && (
                      <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" title="Primary Focus" />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map(skill => (
                      <Badge 
                        key={skill} 
                        variant={isPrimary ? 'blue' : 'neutral'} 
                        size="sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
