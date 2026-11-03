import { ProjectCaseStudy, SkillGroup } from '../types';

export const caseStudies: ProjectCaseStudy[] = [
  {
    id: 'cloud-storage',
    slug: 'private-cloud-storage',
    title: 'Private Cloud Storage',
    subtitle: 'A self-hosted personal file vault with client-side simplicity and server-side encryption',
    role: 'Full-Stack Developer (Final-Year Project)',
    timeline: 'Final-Year Project · 2026',
    category: 'Full-Stack & UX Architecture',
    description: 'A privacy-focused personal cloud storage platform designed to give users greater control over their files while providing a simple and intuitive file management experience.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'SQLite',
      'SQLAlchemy',
      'Redis',
      'Docker',
      'Fernet Encryption'
    ],
    githubUrl: 'https://github.com/your-username/private-cloud-storage',
    liveUrl: '#demo',

    // 1. Overview
    overview: `This was my final-year academic project. I wanted to build something I would personally use every single day: a personal cloud storage drive that keeps my files private without forcing me to deal with clumsy command-line tools or terminal commands.

Commercial cloud services are convenient, but they store files unencrypted or hold the master keys on their own servers. Traditional encrypted backup tools, on the other hand, are often frustratingly slow and difficult to use. My goal was to combine the clean, modern feel of a web drive (drag-and-drop uploads, instant folder navigation, search, and storage usage breakdowns) with real symmetric encryption using Python's Fernet cryptography.`,

    // 2. The problem I wanted to solve
    problemIWantedToSolve: {
      coreProblem: 'Most personal cloud storage options make you choose between user-friendly convenience and real privacy.',
      context: 'When looking at self-hosted or privacy-focused storage solutions, I noticed two extremes: mainstream commercial drives where you do not control encryption keys, or open-source cryptographic command-line tools that lack modern web interactions.',
      keyFrustrations: [
        'Security tools often feel intimidating for everyday file management.',
        'Upload progress and encryption status are usually invisible to the user, creating uncertainty.',
        'Navigating files in browser interfaces often feels sluggish without clean state management and caching.',
        'Handling multi-file selections and bulk downloads is frequently buggy on mobile or tablet screens.'
      ]
    },

    // 3. My approach
    myApproach: {
      summary: 'I approached the project by prioritizing the everyday file browsing experience first, then integrating encryption as a seamless layer underneath.',
      steps: [
        {
          number: '01',
          title: 'Mapping the file lifecycle',
          description: 'I outlined every state a file passes through: selection, local hashing, chunked upload, server-side Fernet encryption, metadata indexing in SQLite, and secure on-demand decryption.'
        },
        {
          number: '02',
          title: 'Building a responsive React dashboard',
          description: 'I designed a dual-view interface (switchable between a compact table and visual grid cards) with clear visual pills for file formats and encryption status.'
        },
        {
          number: '03',
          title: 'FastAPI backend with background workers',
          description: 'I connected the frontend to an asynchronous FastAPI backend running inside Docker, using Redis to cache directory trees so page transitions feel instantaneous.'
        }
      ]
    },

    // 4. Design decisions
    designDecisions: [
      {
        title: 'Clear security indicators over cryptographic jargon',
        situation: 'Showing raw cryptographic hashes or encryption cipher names makes interfaces feel cluttered and stressful.',
        decision: 'I created an ambient "Vault Status" bar with a subtle green-and-blue badge showing that Fernet encryption is active and verified.',
        outcome: 'Users get immediate reassurance that their files are protected without having to decipher technical logs.'
      },
      {
        title: 'Persistent dual view modes (Table vs. Cards)',
        situation: 'Different tasks require different visual density. Browsing through dozens of documents needs high density, while looking for photos benefits from cards.',
        decision: 'I built an accessible view switcher between an editorial table and a visual card grid, saved to local storage.',
        outcome: 'Users can quickly toggle depending on the folder contents without losing their selection state.'
      },
      {
        title: 'Contextual floating action dock for selections',
        situation: 'Standard dropdown menus require clicking tiny three-dot menus on every single row.',
        decision: 'I designed a floating action dock that slides up as soon as one or more items are selected, giving quick one-click actions (Download Decrypted, Move, Delete).',
        outcome: 'Batch operations take fewer clicks and are much easier to hit on touchscreens.'
      }
    ],

    // 5. Technical implementation
    technicalImplementation: {
      overview: 'A React 18 single-page application built with TypeScript and Tailwind CSS, communicating with an asynchronous FastAPI backend over REST endpoints, containerized with Docker and Redis.',
      architecturePoints: [
        'Custom React hook (useFileUploadQueue) managing chunked uploads and tracking precise byte progress without freezing the main thread.',
        'Python cryptography library utilizing Fernet symmetric key tokens to encrypt file data at rest on disk.',
        'SQLAlchemy ORM with SQLite for fast metadata queries (file size, MIME type, upload timestamps, folder hierarchy).',
        'Redis in-memory caching to store recent directory hierarchies and avoid redundant database reads.',
        'Docker compose setup for reproducible local deployment across development and testing environments.'
      ],
      codeHighlights: [
        {
          title: 'Upload Task Queue Interface',
          explanation: 'Using strict TypeScript interfaces to keep file states predictable across the upload lifecycle.',
          snippet: `interface FileUploadTask {
  id: string;
  file: File;
  progress: number;
  status: 'queued' | 'encrypting' | 'uploading' | 'completed' | 'error';
  errorMessage?: string;
}`
        }
      ]
    },

    // 6. What I learned
    whatILearned: [
      'Managing binary streams in JavaScript: How to handle file blobs and chunked multipart uploads without consuming excessive browser memory.',
      'State management trade-offs: Keeping multi-file selection state synchronized across folder navigations and view mode toggles.',
      'Practical security: How Fernet symmetric keys work in practice, and why client-side feedback during key derivation matters for perceived performance.',
      'Responsive design details: Designing touch targets that work as well on mobile screens as they do with a mouse on desktop.'
    ],

    // 7. Next steps
    nextSteps: [
      'Client-side WebAssembly encryption so the backend never sees plaintext bytes even in memory.',
      'Searchable encrypted metadata indexing so users can filter files by tags without decrypting entire archives.',
      'Time-expiring shareable download links protected with temporary passphrases.'
    ]
  },

  {
    id: 'ai-interview-coach',
    slug: 'ai-interview-coach',
    title: 'AI Interview Coach',
    subtitle: 'An interactive preparation tool designed to help candidates practice answers out loud and build speaking confidence',
    role: 'Frontend Engineer & UI Designer',
    timeline: 'Independent Prototype · 2026',
    category: 'Product Design & Frontend Prototype',
    description: 'An AI-powered interview preparation experience designed to help candidates practice interviews, receive actionable feedback, and improve their confidence.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Web Speech API',
      'Framer Motion',
      'Lucide React',
      'Context API'
    ],
    githubUrl: 'https://github.com/your-username/ai-interview-coach',
    liveUrl: '#demo',

    // 1. Overview
    overview: `Preparing for technical and behavioral interviews is often intimidating. Most people prepare by reading lists of questions in their head, but speaking your thoughts out loud under timed conditions is a completely different skill.

I built the AI Interview Coach as an interactive frontend prototype to help candidates practice speaking out loud in a low-pressure environment. It combines speech recognition with structured answer analysis based on the STAR framework (Situation, Task, Action, Result), highlighting concrete ways to rephrase answers for greater clarity and impact.`,

    // 2. The problem I wanted to solve
    problemIWantedToSolve: {
      coreProblem: 'Candidates often practice passively in their heads and struggle when speaking out loud during real interviews.',
      context: 'Mock interviews with friends are hard to schedule regularly, and generic AI chat interfaces provide walls of text that do not help you understand pacing or answer structure.',
      keyFrustrations: [
        'Speaking out loud feels awkward without a structured prompt and visual pacing feedback.',
        'Long AI feedback paragraphs overwhelm candidates instead of giving bite-sized, actionable takeaways.',
        'Candidates rarely know if their answers followed a clear structural framework or rambled on.',
        'High-anxiety interfaces (like flashing red recording dots) can make speaking practice more stressful rather than supportive.'
      ]
    },

    // 3. My approach
    myApproach: {
      summary: 'I focused on creating a calming, focused practice space with clear visual cues and a diagnostic feedback scorecard.',
      steps: [
        {
          number: '01',
          title: 'Configurable practice tracks',
          description: 'Allowed candidates to choose their focus (Frontend & UX, React Architecture, or General Behavioral) so questions match real role expectations.'
        },
        {
          number: '02',
          title: 'Calm rehearsal environment',
          description: 'Built a timed session screen with a gentle audio waveform visualizer and speech-to-text transcription via the browser Web Speech API.'
        },
        {
          number: '03',
          title: 'STAR framework evaluation layout',
          description: 'Deconstructed candidate answers into Situation, Task, Action, and Result cards, accompanied by a side-by-side phrasing comparison.'
        }
      ]
    },

    // 4. Design decisions
    designDecisions: [
      {
        title: 'Structured STAR breakdown over generic scores',
        situation: 'Giving a single arbitrary score (like 7/10) doesn’t tell a candidate what to improve.',
        decision: 'I created an editorial scorecard breaking the answer into Situation, Task, Action, and Result indicators with specific tips for each.',
        outcome: 'Candidates can immediately see whether they missed describing the tangible outcome or spent too long setting up the backstory.'
      },
      {
        title: 'Side-by-side phrasing comparison',
        situation: 'Candidates often understand what is wrong in theory, but struggle to think of better wording in the moment.',
        decision: 'I designed a diff component that places the candidate’s spoken phrasing next to an impact-focused rewrite.',
        outcome: 'Makes the critique concrete and instantly actionable.'
      },
      {
        title: 'Calming audio feedback instead of aggressive red indicators',
        situation: 'Red recording lights and harsh timers trigger speaking anxiety.',
        decision: 'I used a smooth electric-blue waveform pulse and clear pause controls so candidates can collect their thoughts.',
        outcome: 'The session feels like a supportive workspace rather than an interrogation.'
      }
    ],

    // 5. Technical implementation
    technicalImplementation: {
      overview: 'A responsive React and TypeScript single-page application utilizing the browser Web Speech API for real-time speech transcription, Framer Motion for restrained interface animations, and a modular state machine.',
      architecturePoints: [
        'Web Speech API integration with custom error boundaries to handle microphone permissions and browser fallback states gracefully.',
        'Rehearsal state machine managing transitions across configuring, listening, transcribing, and reviewing.',
        'Interactive STAR visualization component designed with responsive Tailwind utility patterns.',
        'Local state persistence allowing users to review their previous practice attempts during the same session.'
      ],
      codeHighlights: [
        {
          title: 'Interview Session State Structure',
          explanation: 'Clear state contracts for managing the rehearsal timeline.',
          snippet: `interface RehearsalSessionState {
  stage: 'idle' | 'recording' | 'paused' | 'analyzing' | 'completed';
  elapsedSeconds: number;
  transcript: string;
  activeRole: string;
}`
        }
      ]
    },

    // 6. What I learned
    whatILearned: [
      'Web Speech API realities: Handling browser compatibility differences and silence timeouts during live speech recognition.',
      'Information architecture for feedback: Learning that breaking critique into bite-sized visual chunks prevents user fatigue.',
      'Micro-interactions: How subtle animations (like waveform pulses) provide essential reassurance that the application is listening without distracting from the prompt.'
    ],

    // 7. Next steps
    nextSteps: [
      'Connecting to an offline-capable open-weights LLM using WebLLM for private, local feedback generation.',
      'Custom question banks specifically tailored for frontend and design systems interviews at companies like Demandbase.',
      'Audio recording playback with synchronized transcript highlighting.'
    ]
  }
];

export const skillsList: SkillGroup[] = [
  {
    category: 'Frontend Engineering (Primary Focus)',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 & Semantic Markup',
      'CSS3 & Modern Layouts',
      'Tailwind CSS',
      'Component Architecture',
      'Responsive Web Design',
      'State Management'
    ]
  },
  {
    category: 'Backend APIs & Databases',
    skills: [
      'Python',
      'FastAPI',
      'SQL (SQLite / PostgreSQL)',
      'SQLAlchemy ORM',
      'RESTful API Design',
      'Database Modeling',
      'Redis Caching',
      'Backend Integration'
    ]
  },
  {
    category: 'UI/UX & Developer Tools',
    skills: [
      'UI/UX Principles',
      'Product Thinking',
      'Design Systems & Tokens',
      'Wireframing & Prototyping',
      'Figma',
      'Accessibility (WCAG 2.1)',
      'Git & GitHub',
      'Docker Basics',
      'Vite Tooling'
    ]
  }
];
