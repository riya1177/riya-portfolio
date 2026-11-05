import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  return (
    <section 
      id="certificates" 
      className="py-20 md:py-28 bg-[#070B14] border-t border-[#1B2A47]/50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
            <span>CERTIFICATIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F8FF]">
            Certifications.
          </h2>

          <p className="text-base text-[#A5B4CC] max-w-xl">
            Verified credentials in cloud infrastructure and application development.
          </p>
        </div>

        {/* Compact, Visually Polished 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {certificatesData.map((cert, index) => {
            const hasLink = Boolean(cert.link);

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#0D1424] border border-[#1B2A47]/80 hover:border-[#168BFF]/40 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#4DB8FF] uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8FA2BF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#168BFF]" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#F5F8FF] group-hover:text-[#4DB8FF] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {cert.description && (
                    <p className="text-xs text-[#8FA2BF] leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-5 border-t border-[#1B2A47]/60">
                  {hasLink ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4DB8FF] hover:underline"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#6E82A1]">
                      Credential on Record
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
