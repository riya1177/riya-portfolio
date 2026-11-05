import { 
  ProjectItem, 
  SkillCategory, 
  CertificateItem, 
  ProjectCaseStudy, 
  SkillGroup 
} from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'private-cloud-storage',
    title: 'Private Cloud Storage Platform',
    category: 'Cloud Storage & Systems',
    description:
      'A self-hosted personal cloud vault engineered for secure file management. Features client-side clarity, server-side symmetric encryption (Fernet), and a simulated RAID-1 redundant storage pool across mirrored disk volumes.',
    technologies: [
      'React',
      'FastAPI',
      'Python',
      'SQLite',
      'SQLAlchemy',
      'Redis',
      'Docker',
      'Fernet Encryption'
    ],
    keyFeatures: [
      'Zero-knowledge symmetric file encryption at rest using Python Fernet',
      'Simulated RAID-1 real-time mirrored disk volumes for data redundancy',
      'Chunked asynchronous upload pipeline with precise byte-level progress',
      'Redis in-memory caching for sub-millisecond folder tree queries',
      'Dockerized architecture for seamless local and cloud deployment'
    ],
    githubUrl: 'https://github.com/riya1177',
    caseStudyUrl: '/projects/private-cloud-storage',
    featured: true,
  },
  {
    id: 'ai-interview-coach',
    title: 'AI Interview Coach',
    category: 'AI Application & Full-Stack',
    description:
      'An interactive preparation application designed to help candidates practice technical and behavioral questions out loud. Uses speech recognition to transcribe answers in real time and evaluates structure using the STAR framework.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'Google Gemini API',
      'Web Speech API'
    ],
    keyFeatures: [
      'Live in-browser speech recognition and transcription',
      'Automated STAR framework analysis (Situation, Task, Action, Result)',
      'Side-by-side phrasing critique for impactful communication',
      'Visual audio waveform feedback for confidence and pacing'
    ],
    githubUrl: 'https://github.com/riya1177',
    caseStudyUrl: '/projects/ai-interview-coach',
    featured: false,
  },
  {
    id: 'crypto-portfolio-tracker',
    title: 'Crypto Portfolio Tracker',
    category: 'Backend & Data Analytics',
    description:
      'A full-stack portfolio management application for tracking cryptocurrency assets, recording buy/sell transactions, computing cost-basis valuations, and visualizing profit and loss performance.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'Chart.js'
    ],
    keyFeatures: [
      'Transaction logging and automated weighted cost-basis calculations',
      'Real-time asset valuation with responsive interactive charts',
      'Detailed breakdown of realized vs. unrealized profit & loss',
      'REST API architecture with MongoDB schema validation'
    ],
    githubUrl: 'https://github.com/riya1177',
    featured: false,
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    category: 'Frontend Engineering',
    description:
      'My personal corner of the web. Designed to be clean, fast, and content-focused with dark navy aesthetics, subtle blue glows, interactive case studies, and responsive typography.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    keyFeatures: [
      'Custom minimalist dark aesthetic with refined blue accents',
      'Smooth scroll-spy navigation with URL hash synchronisation',
      'Interactive project sandboxes and full architectural case studies',
      'Lightweight bundle with zero extraneous dependencies'
    ],
    githubUrl: 'https://github.com/riya1177/riya-portfolio',
    liveUrl: '#hero',
    featured: false,
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'C', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['SQLite', 'PostgreSQL', 'MongoDB', 'SQLAlchemy'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Redis'],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    badgeText: 'Systems Administration',
    description:
      'Demonstrates practical proficiency in configuring, customizing, and administering ServiceNow instances, managing workflows, users, and core data architecture.',
    skills: ['ServiceNow', 'System Administration', 'Workflows', 'ITSM'],
    isVerified: true,
  },
  {
    title: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    badgeText: 'Application Development',
    description:
      'Validates advanced ability to design and build cloud applications on the Now Platform, write custom client/server scripts, implement business rules, and secure data models.',
    link: 'https://drive.google.com/drive/folders/1RdV5Bb8-3uaBWCVTC9Tc-dVFmEBcnRGN',
    skills: ['ServiceNow', 'Scripting', 'Business Rules', 'Application Design'],
    isVerified: true,
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    badgeText: 'Cloud Computing',
    description:
      'Validates foundational understanding of AWS Cloud infrastructure, security standards, cloud architectural patterns, computing, storage, and billing models.',
    link: 'https://drive.google.com/drive/u/1/folders/1WGxFcex98KWf9b776JbrLb1YaU517HWS',
    skills: ['AWS Cloud', 'Cloud Architecture', 'Security & Compliance', 'EC2 & S3'],
    isVerified: true,
  },
];

// Preserved detailed case studies for dedicated project pages
export const caseStudies: ProjectCaseStudy[] = [
  {
    id: 'cloud-storage',
    slug: 'private-cloud-storage',
    title: 'Private Cloud Storage',
    subtitle: 'A self-hosted personal file vault with client-side simplicity and server-side encryption',
    role: 'Full-Stack Developer',
    timeline: 'Personal Project · 2026',
    category: 'Cloud Storage & Systems',
    description: 'A privacy-focused personal cloud storage platform designed to give users control over their files while providing a simple, intuitive file management experience.',
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
    githubUrl: 'https://github.com/riya1177',
    liveUrl: '#demo',

    overview: `This project was developed to provide a private, reliable personal cloud storage platform. Commercial cloud services often hold the master keys to user files on their own infrastructure. My goal was to combine the clean, modern feel of a web drive (drag-and-drop uploads, instant folder navigation, search, and storage usage breakdowns) with real symmetric encryption using Python's Fernet cryptography and a simulated RAID-1 redundancy pool.`,

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

    myApproach: {
      summary: 'I approached the project by prioritizing the everyday file browsing experience first, then integrating encryption and RAID-1 replication as a seamless layer underneath.',
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

    technicalImplementation: {
      overview: 'A React single-page application built with TypeScript and Tailwind CSS, communicating with an asynchronous FastAPI backend over REST endpoints, containerized with Docker and Redis.',
      architecturePoints: [
        'Custom React hook (useFileUploadQueue) managing chunked uploads and tracking precise byte progress without freezing the main thread.',
        'Python cryptography library utilizing Fernet symmetric key tokens to encrypt file data at rest on disk.',
        'Simulated RAID-1 mirror storage pool ensuring real-time multi-disk file redundancy.',
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

    whatILearned: [
      'Managing binary streams in JavaScript: How to handle file blobs and chunked multipart uploads without consuming excessive browser memory.',
      'State management trade-offs: Keeping multi-file selection state synchronized across folder navigations and view mode toggles.',
      'Practical security: How Fernet symmetric keys work in practice, and why client-side feedback during key derivation matters for perceived performance.',
      'Responsive design details: Designing touch targets that work as well on mobile screens as they do with a mouse on desktop.'
    ],

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
    role: 'Frontend & Full-Stack Developer',
    timeline: 'Personal Project · 2026',
    category: 'AI Application & Full-Stack',
    description: 'An AI-powered interview preparation experience designed to help candidates practice interviews, receive actionable feedback, and improve their confidence.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'Google Gemini API',
      'Web Speech API',
      'Framer Motion',
      'Lucide React'
    ],
    githubUrl: 'https://github.com/riya1177',
    liveUrl: '#demo',

    overview: `Preparing for technical and behavioral interviews is often intimidating. Speaking your thoughts out loud under timed conditions requires deliberate practice. I built the AI Interview Coach as an interactive application to help candidates practice speaking out loud in a low-pressure environment, combining speech recognition with structured answer analysis based on the STAR framework (Situation, Task, Action, Result) powered by the Google Gemini API.`,

    problemIWantedToSolve: {
      coreProblem: 'Candidates often practice passively in their heads and struggle when speaking out loud during real interviews.',
      context: 'Mock interviews with peers are hard to schedule regularly, and generic AI chat interfaces provide walls of text that do not help you understand pacing or answer structure.',
      keyFrustrations: [
        'Speaking out loud feels awkward without a structured prompt and visual pacing feedback.',
        'Long AI feedback paragraphs overwhelm candidates instead of giving bite-sized, actionable takeaways.',
        'Candidates rarely know if their answers followed a clear structural framework or rambled on.',
        'High-anxiety interfaces can make speaking practice more stressful rather than supportive.'
      ]
    },

    myApproach: {
      summary: 'I focused on creating a calming, focused practice space with clear visual cues and a diagnostic feedback scorecard.',
      steps: [
        {
          number: '01',
          title: 'Configurable practice tracks',
          description: 'Allowed candidates to choose their focus (Cloud Computing, Frontend & React, System Design, Behavioral) so questions match real role expectations.'
        },
        {
          number: '02',
          title: 'Calm rehearsal environment',
          description: 'Built a timed session screen with a gentle audio waveform visualizer and speech-to-text transcription via the browser Web Speech API.'
        },
        {
          number: '03',
          title: 'STAR framework evaluation layout',
          description: 'Deconstructed candidate answers into Situation, Task, Action, and Result cards, accompanied by concrete phrasing improvements.'
        }
      ]
    },

    designDecisions: [
      {
        title: 'Structured STAR breakdown over generic scores',
        situation: 'Giving a single arbitrary score (like 7/10) does not tell a candidate what to improve.',
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

    technicalImplementation: {
      overview: 'A responsive React and TypeScript single-page application utilizing the browser Web Speech API for real-time speech transcription, FastAPI backend integration with Google Gemini API, and Framer Motion for restrained interface animations.',
      architecturePoints: [
        'Web Speech API integration with custom error boundaries to handle microphone permissions and browser fallback states gracefully.',
        'FastAPI endpoints for prompt orchestration and structured JSON schema responses from the Gemini API.',
        'Rehearsal state machine managing transitions across configuring, listening, transcribing, and reviewing.',
        'Interactive STAR visualization component designed with responsive Tailwind utility patterns.'
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

    whatILearned: [
      'Web Speech API realities: Handling browser compatibility differences and silence timeouts during live speech recognition.',
      'Information architecture for feedback: Learning that breaking critique into bite-sized visual chunks prevents user fatigue.',
      'Micro-interactions: How subtle animations (like waveform pulses) provide essential reassurance that the application is listening without distracting from the prompt.'
    ],

    nextSteps: [
      'Connecting to an offline-capable open-weights LLM using WebLLM for private, local feedback generation.',
      'Custom question banks specifically tailored for Cloud Engineering and Full-Stack interviews.',
      'Audio recording playback with synchronized transcript highlighting.'
    ]
  }
];

export const skillsList: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'C', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frontend Development',
    skills: ['React', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend Development',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    category: 'Databases',
    skills: ['SQLite', 'PostgreSQL', 'MongoDB', 'SQLAlchemy']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Redis']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Linux / Bash']
  }
];
