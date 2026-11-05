import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code2, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-[#070B14] border-t border-[#1B2A47]/50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>ABOUT ME</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F8FF]">
            A bit about my work.
          </h2>
          </div>
          {/* Narrative */}
          <div className="space-y-5 text-base sm:text-lg text-[#A5B4CC] leading-relaxed">
            <p>
              I enjoy working on software that solves <span className="text-[#F5F8FF] font-medium">real problems</span> and makes things easier for people. I like building clean, user-friendly interfaces with{" "}
              <span className="text-[#8BB8FF] font-medium">React and TypeScript</span>, and I’m equally interested in what happens behind the scenes—especially{" "}
              <span className="text-[#8BB8FF] font-medium">backend development and cloud systems</span>.
            </p>
            <p>
              I’m especially interested in what happens behind the interface—how{" "}
              <span className="text-[#F5F8FF] font-medium">APIs handle requests</span>, how{" "}
              <span className="text-[#F5F8FF] font-medium">authentication protects data</span>, how{" "}
              <span className="text-[#8BB8FF] font-medium">Redis</span> supports efficient processing, and how storage systems can be designed for{" "}
              <span className="text-[#F5F8FF] font-medium">privacy, reliability, and resilience</span>.
            </p>
            <p>
              My approach to learning is simple:{" "}
              <span className="text-[#8BB8FF] font-medium">build, understand, and improve</span>. I learn by working through the details—designing{" "}
              <span className="text-[#F5F8FF] font-medium">database schemas</span>, implementing{" "}
              <span className="text-[#F5F8FF] font-medium">encryption at rest</span>, building APIs with{" "}
              <span className="text-[#8BB8FF] font-medium">FastAPI</span>, and orchestrating services with{" "}
              <span className="text-[#8BB8FF] font-medium">Docker</span>. For me, understanding the technology beneath the surface is just as important as making it work.
            </p>
            </div>

        {/* 3 Minimal Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/70 hover:border-[#168BFF]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#101B30] text-[#4DB8FF] flex items-center justify-center mb-3">
              <Cloud className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#F5F8FF] mb-1.5">Cloud &amp; Systems</h3>
            <p className="text-xs text-[#8FA2BF] leading-relaxed">
              Designing containerized backend microservices, caching layers, and encrypted storage pools.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/70 hover:border-[#168BFF]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#101B30] text-[#4DB8FF] flex items-center justify-center mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#F5F8FF] mb-1.5">Clean Web Apps</h3>
            <p className="text-xs text-[#8FA2BF] leading-relaxed">
              Crafting intuitive, responsive web interfaces with strict types and predictable state.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/70 hover:border-[#168BFF]/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#101B30] text-[#4DB8FF] flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#F5F8FF] mb-1.5">Pragmatic Engineering</h3>
            <p className="text-xs text-[#8FA2BF] leading-relaxed">
              Focusing on security, reliability, clean API contracts, and tools that solve real problems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
