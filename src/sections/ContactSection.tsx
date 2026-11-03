import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/config';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#070B14] border-t border-[#1B2A47]/60 relative overflow-hidden">
      
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4DB8FF] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F8FF]">
                Get in touch.
              </h2>

              <p className="text-base sm:text-lg text-[#A5B4CC] leading-relaxed">
                Whether you have an opportunity at <strong className="text-[#F5F8FF] font-semibold">{siteConfig.profile.targetCompany}</strong>, a question about my projects, or just want to connect, my inbox is always open.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47] space-y-3 max-w-md shadow-card">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">
                Email Address
              </div>
              
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-[#F5F8FF] hover:text-[#4DB8FF] transition-colors truncate"
                  title="Send email"
                >
                  {siteConfig.socials.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#101B30] hover:bg-[#13223D] border border-[#1B2A47] text-[#A5B4CC] hover:text-[#F5F8FF] transition-colors flex items-center gap-1.5 text-xs font-medium shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4DB8FF]" />
                      <span className="text-[#4DB8FF]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">
                Links &amp; Profiles
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D1424] hover:bg-[#101B30] text-[#F5F8FF] border border-[#1B2A47] hover:border-[#168BFF]/40 text-xs font-medium transition-all shadow-card"
                >
                  <Github className="w-4 h-4 text-[#4DB8FF]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6E82A1]" />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D1424] hover:bg-[#101B30] text-[#F5F8FF] border border-[#1B2A47] hover:border-[#168BFF]/40 text-xs font-medium transition-all shadow-card"
                >
                  <Linkedin className="w-4 h-4 text-[#4DB8FF]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6E82A1]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-[#1B2A47] shadow-card">
              
              <div className="flex items-center justify-between pb-5 border-b border-[#1B2A47]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#4DB8FF]" />
                  <h3 className="text-lg font-bold text-[#F5F8FF]">
                    Send a direct message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#6E82A1]">
                  Quick reply
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#168BFF]/20 border border-[#168BFF]/40 text-[#4DB8FF] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#F5F8FF]">
                    Thanks for reaching out!
                  </h4>
                  <p className="text-sm text-[#A5B4CC] max-w-sm mx-auto">
                    Your message has been received. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono text-[#4DB8FF] hover:underline pt-2 block mx-auto"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#A5B4CC] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe (Hiring Team / Engineering)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070B14] border border-[#1B2A47] text-sm text-[#F5F8FF] placeholder-[#6E82A1] focus:border-[#168BFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#A5B4CC] uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@demandbase.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070B14] border border-[#1B2A47] text-sm text-[#F5F8FF] placeholder-[#6E82A1] focus:border-[#168BFF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#A5B4CC] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Hi Riya, I saw your portfolio and would like to chat about an engineering role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070B14] border border-[#1B2A47] text-sm text-[#F5F8FF] placeholder-[#6E82A1] focus:border-[#168BFF] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] text-sm font-semibold transition-all shadow-[0_0_15px_rgba(22,139,255,0.35)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
