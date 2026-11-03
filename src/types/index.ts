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

  // Clear 7-part readable structure:
  // 1. Overview
  overview: string;
  
  // 2. The problem I wanted to solve
  problemIWantedToSolve: {
    coreProblem: string;
    context: string;
    keyFrustrations: string[];
  };

  // 3. My approach
  myApproach: {
    summary: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  // 4. Design decisions
  designDecisions: {
    title: string;
    situation: string;
    decision: string;
    outcome: string;
  }[];

  // 5. Technical implementation
  technicalImplementation: {
    overview: string;
    architecturePoints: string[];
    codeHighlights?: {
      title: string;
      explanation: string;
      snippet: string;
    }[];
  };

  // 6. What I learned
  whatILearned: string[];

  // 7. Next steps
  nextSteps: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
