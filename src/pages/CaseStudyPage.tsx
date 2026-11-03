import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Code2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Layers,
  Cpu,
  BookOpen
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import { StorageInteractiveDemo } from '../components/StorageInteractiveDemo';
import { InterviewCoachInteractiveDemo } from '../components/InterviewCoachInteractiveDemo';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = caseStudies.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const isCloudStorage = project.id === 'cloud-storage';
  const otherProject = caseStudies.find(p => p.id !== project.id)!;

  return (
    <div className="pt-28 pb-24 bg-[#070B14] min-h-screen text-[#F5F8FF]">
      
      {/* Top Breadcrumb & Return Action */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A5B4CC] hover:text-[#4DB8FF] transition-colors py-1.5 px-3.5 rounded-xl bg-[#0D1424] border border-[#1B2A47] hover:border-[#168BFF]/40 shadow-card"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Case Study Header Article */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="blue" size="md">
            {project.role}
          </Badge>
          <span className="text-xs font-mono text-[#6E82A1]">
            {project.timeline}
          </span>
          <span className="text-xs font-mono text-[#1B2A47]">/</span>
          <span className="text-xs font-mono text-[#A5B4CC]">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F8FF] leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#4DB8FF] font-medium leading-snug">
          {project.subtitle}
        </p>

        <p className="text-base sm:text-lg text-[#A5B4CC] leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Technology Tag Badges */}
        <div className="pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#6E82A1] mb-2.5">
            Technologies &amp; Libraries
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="neutral" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      {/* Main Interactive Sandbox Showcase */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#6E82A1]">
            <span className="flex items-center gap-1.5 text-[#4DB8FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#168BFF] animate-pulse" />
              Interactive Component Sandbox
            </span>
            <span>Live React Environment</span>
          </div>

          {isCloudStorage ? (
            <StorageInteractiveDemo />
          ) : (
            <InterviewCoachInteractiveDemo />
          )}

          <p className="text-[11px] text-[#6E82A1] text-center font-mono">
            Interactive preview built in React &amp; TypeScript — test the controls above directly.
          </p>
        </div>
      </section>

      {/* 7-Part Clear Readable Case Study Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-[#F5F8FF]">
        
        {/* ========================================================
            1. OVERVIEW
           ======================================================== */}
        <section className="space-y-4 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            01 / Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            Project Background
          </h2>
          <div className="text-base text-[#A5B4CC] leading-relaxed space-y-4">
            {project.overview.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ========================================================
            2. THE PROBLEM I WANTED TO SOLVE
           ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            02 / The Problem
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            The problem I wanted to solve
          </h2>
          
          <div className="p-6 rounded-2xl bg-[#0D1424] border border-[#1B2A47] space-y-3">
            <p className="text-lg text-[#F5F8FF] font-medium">
              "{project.problemIWantedToSolve.coreProblem}"
            </p>
            <p className="text-sm text-[#A5B4CC]">
              {project.problemIWantedToSolve.context}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">
              Key frictions I noticed:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.problemIWantedToSolve.keyFrustrations.map((pain, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0D1424] border border-[#1B2A47] text-xs text-[#A5B4CC] flex items-start gap-3">
                  <span className="font-mono text-[#4DB8FF] font-bold text-sm shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{pain}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. MY APPROACH
           ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            03 / Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            My approach
          </h2>
          <p className="text-base text-[#A5B4CC] leading-relaxed">
            {project.myApproach.summary}
          </p>

          <div className="space-y-3.5">
            {project.myApproach.steps.map((step) => (
              <div 
                key={step.number}
                className="p-5 rounded-xl bg-[#0D1424] border border-[#1B2A47] space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#4DB8FF] px-2 py-0.5 rounded bg-[#168BFF]/15 border border-[#168BFF]/30">
                    Step {step.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#F5F8FF]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A5B4CC] pl-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. DESIGN DECISIONS
           ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            04 / UI &amp; UX Decisions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            Design decisions
          </h2>

          <div className="space-y-4">
            {project.designDecisions.map((decision) => (
              <div 
                key={decision.title}
                className="p-6 rounded-2xl bg-[#0D1424] border border-[#1B2A47] space-y-3 shadow-card"
              >
                <h3 className="text-lg font-bold text-[#F5F8FF]">
                  {decision.title}
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-[#6E82A1] uppercase text-[10px] block">Situation:</span>
                    <p className="text-[#A5B4CC]">{decision.situation}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#101B30] border border-[#1B2A47]">
                    <span className="font-mono text-[#4DB8FF] font-semibold uppercase text-[10px] block">What I decided:</span>
                    <p className="text-[#F5F8FF] font-medium">{decision.decision}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[#6E82A1] uppercase text-[10px] block">Result:</span>
                    <p className="text-[#A5B4CC]">{decision.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. TECHNICAL IMPLEMENTATION
           ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            05 / Architecture &amp; Code
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            Technical implementation
          </h2>

          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1B2A47] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#4DB8FF] font-semibold">
              <Cpu className="w-4 h-4" />
              <span>Stack Overview</span>
            </div>
            <p className="text-sm text-[#A5B4CC] leading-relaxed">
              {project.technicalImplementation.overview}
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6E82A1]">
              Key architectural details:
            </h4>
            <div className="space-y-2">
              {project.technicalImplementation.architecturePoints.map((point, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0D1424] border border-[#1B2A47] text-xs text-[#A5B4CC] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4DB8FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {project.technicalImplementation.codeHighlights && (
            <div className="space-y-4 pt-2">
              {project.technicalImplementation.codeHighlights.map((code, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#0D1424] border border-[#1B2A47] space-y-2.5">
                  <h4 className="font-bold text-sm text-[#F5F8FF]">
                    {code.title}
                  </h4>
                  <p className="text-xs text-[#A5B4CC]">
                    {code.explanation}
                  </p>
                  <pre className="p-3.5 rounded-lg bg-[#070B14] border border-[#1B2A47] text-[#4DB8FF] font-mono text-xs overflow-x-auto">
                    <code>{code.snippet}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            6. WHAT I LEARNED
           ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            06 / Retrospective
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            What I learned
          </h2>

          <div className="space-y-3">
            {project.whatILearned.map((lesson, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0D1424] border border-[#1B2A47] text-xs sm:text-sm text-[#A5B4CC] flex items-start gap-3">
                <span className="w-5 h-5 rounded-lg bg-[#168BFF]/20 text-[#4DB8FF] font-mono text-xs flex items-center justify-center shrink-0 border border-[#168BFF]/30">
                  {idx + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{lesson}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            7. NEXT STEPS
           ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-[#1B2A47]/60">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4DB8FF] font-semibold">
            07 / Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F8FF]">
            Next steps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.nextSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0D1424] border border-[#1B2A47] text-xs text-[#A5B4CC] space-y-2">
                <div className="font-mono text-[#4DB8FF] font-bold text-sm">0{idx + 1}</div>
                <p className="leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

      </article>

      {/* Bottom Footer Project Switcher */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t border-[#1B2A47]/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-[#0D1424] border border-[#1B2A47] shadow-card">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#6E82A1] block mb-1">
              Next Case Study
            </span>
            <h4 className="text-xl font-bold text-[#F5F8FF]">
              {otherProject.title}
            </h4>
            <p className="text-xs text-[#A5B4CC] mt-0.5">
              {otherProject.subtitle}
            </p>
          </div>

          <Button
            to={`/projects/${otherProject.slug}`}
            variant="primary"
            size="md"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Read next project
          </Button>
        </div>
      </div>

    </div>
  );
};
