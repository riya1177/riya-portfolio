export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  keyFeatures?: string[];
  githubUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  category: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  link?: string;
  badgeText?: string;
  description?: string;
  skills?: string[];
  isVerified?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;

  overview: string;
  
  problemIWantedToSolve: {
    coreProblem: string;
    context: string;
    keyFrustrations: string[];
  };

  myApproach: {
    summary: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  designDecisions: {
    title: string;
    situation: string;
    decision: string;
    outcome: string;
  }[];

  technicalImplementation: {
    overview: string;
    architecturePoints: string[];
    codeHighlights?: {
      title: string;
      explanation: string;
      snippet: string;
    }[];
  };

  whatILearned: string[];
  nextSteps: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
