// Single source of truth for all site content. Components only render this data.
// Facts come from the portfolio brief. Anything unknown is marked TODO — never invented.

export interface Link {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: 'brain' | 'code' | 'server' | 'layout' | 'cloud' | 'database' | 'check';
  items: string[];
  span: 'wide' | 'tall' | 'normal';
}

export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface PipelineNode {
  id: string;
  label: string;
  detail: string;
}

export interface Pipeline {
  nodes: PipelineNode[];
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  stack: string[];
  bullets: string[];
  video?: string;
  poster?: string;
  href?: string;
  diagram?: Pipeline;
}

export interface MoreWork {
  id: string;
  title: string;
  description: string;
  media: string;
  poster?: string;
  kind: 'video' | 'image';
  href?: string;
  stack?: string[];
  todo?: boolean;
}

export const profile = {
  name: 'Shubham Pawar',
  firstName: 'Shubham',
  lastName: 'Pawar',
  monogram: 'SP',
  title: 'AI Engineer | Full Stack Engineer',
  rotatingRoles: ['AI Engineer', 'Full Stack Engineer', 'LLM & Agent Systems Builder'],
  location: 'Gurugram, Haryana, India',
  timeZone: 'Asia/Kolkata',
  timeZoneLabel: 'IST',
  email: 'shubhampawar848582@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shubham-pawar-001b9a22b',
  github: 'https://github.com/codershub8485',
  site: 'https://shubhampawar-dev.vercel.app/',
  resume: '/assets/Shubham_Pawar_Resume.pdf',
  status: 'Available to join immediately',
  heroBadges: ['Python', 'FastAPI', 'React', 'AWS Bedrock', 'Docker', 'LiteLLM'],
} as const;

// Content below mirrors public/assets/Shubham_Pawar_Resume.pdf (AI Full Stack Engineer, 3 years).
export const summary =
  'Full Stack Software Engineer with 3+ years delivering production web platforms and distributed backend services for enterprise, government, and AI product teams. Works end to end in Python (FastAPI), Java (Spring Boot), React.js / Next.js, SQL, Docker, and AWS — covering REST API design, database performance tuning, secure authentication and authorization, containerized execution, CI/CD, and cloud deployment. Additionally experienced in ML training infrastructure and reinforcement learning environments supporting SFT, RLHF, and RLVR workflows. Comfortable owning a system from ambiguous requirement to measured production outcome.';

export const stats: Stat[] = [
  { value: 3, suffix: '+', label: 'years' },
  { value: 80, suffix: '%+', label: 'agent pass rate' },
  { value: 40, prefix: '~', suffix: '%', label: 'faster queries' },
  { value: 5, suffix: '+', label: 'LLMs orchestrated' },
  { value: 4, suffix: '', label: 'production platforms' },
];

export const skills: SkillGroup[] = [
  {
    id: 'ai',
    title: 'ML & AI Engineering',
    icon: 'brain',
    span: 'wide',
    items: [
      'Reinforcement Learning Environments',
      'SFT (Supervised Fine-Tuning)',
      'RLHF',
      'RLVR (RL with Verifiable Rewards)',
      'Reward Function Design',
      'Training Data Pipelines',
      'Large Language Models (LLM)',
      'AI Agents',
      'Prompt Engineering',
      'LiteLLM',
      'Model Evaluation & Benchmarking',
    ],
  },
  {
    id: 'lang',
    title: 'Languages',
    icon: 'code',
    span: 'normal',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'PHP'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'server',
    span: 'tall',
    items: [
      'FastAPI',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'Laravel',
      'RESTful APIs',
      'Microservices',
      'Asynchronous Programming',
      'JWT',
      'OAuth 2.0',
      'RBAC',
      'Spring Security',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    span: 'normal',
    items: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'AJAX',
      'Responsive UI',
      'Real-Time Dashboards',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: 'cloud',
    span: 'wide',
    items: [
      'AWS (EC2, S3, Lambda, IAM, Bedrock)',
      'GCP',
      'Docker',
      'Docker Compose',
      'Docker Buildx',
      'CI/CD',
      'Linux',
      'Shell Scripting',
      'Git',
      'GitHub',
      'GitLab',
    ],
  },
  {
    id: 'db',
    title: 'Databases',
    icon: 'database',
    span: 'normal',
    items: [
      'PostgreSQL',
      'MySQL',
      'Query Optimization',
      'Indexing',
      'ACID Transactions',
      'Data Modeling',
    ],
  },
  {
    id: 'practice',
    title: 'Practices & Tools',
    icon: 'check',
    span: 'normal',
    items: [
      'System Design',
      'Agile',
      'Scrum',
      'TDD',
      'Unit & Integration Testing',
      'pytest',
      'Playwright',
      'Postman',
      'Code Review',
      'Application Security (XSS, CSRF, Secure Tokens)',
    ],
  },
];

export const marqueeRows: string[][] = [
  [
    'Python',
    'FastAPI',
    'AWS Bedrock',
    'LiteLLM',
    'Docker',
    'PostgreSQL',
    'RLHF',
    'RLVR',
    'pytest',
    'Playwright',
  ],
  [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Java',
    'Spring Boot',
    'Node.js',
    'MySQL',
    'GCP',
    'GitHub',
  ],
];

export const experience: Role[] = [
  {
    company: 'Ethara AI',
    title: 'Full Stack Engineer',
    location: 'Gurugram, India',
    period: 'Mar 2026 – Present',
    current: true,
    bullets: [
      'Own end-to-end delivery of a distributed AI training and evaluation platform — Python backend services, React.js / Next.js dashboards, containerized execution, and AWS deployment — used daily by engineering and research teams.',
      'Engineer reinforcement learning (RL) environments: deterministic, sandboxed task environments with programmatic reward functions, automated verification, and reproducible resets, enabling RLVR training runs at scale.',
      'Build data and orchestration pipelines producing curated trajectories and preference pairs for SFT and RLHF post-training workflows, with schema validation, deduplication, and quality filtering for auditable datasets.',
      'Raised autonomous task completion to 80%+ pass rates on benchmark repositories by designing a staged multi-model agent workflow with structured context injection.',
      'Reduced inference spend and surfaced previously silent pipeline failures by introducing response caching, token cost analytics, and live model API health probing across a multi-provider stack.',
      'Own Docker containerization, CI/CD, AWS deployment, and JWT/RBAC security for high-throughput workloads; partner with product and research stakeholders in Agile sprints to turn ambiguous requirements into shipped, measurable features.',
    ],
  },
  {
    company: 'Austere Systems Limited',
    title: 'Software Developer',
    location: 'Pune, India',
    period: 'Sep 2023 – Feb 2026',
    bullets: [
      'Delivered four production platforms end to end — ERP, Fund Disbursement Management System (Haryana Government), Audit Management SaaS, and Voice Broadcast — owning backend, frontend, and deployment on each.',
      'Digitized manual, paper-driven government fund disbursement and multi-department audit processes into workflow-driven systems with enforced approval hierarchies and auditable transaction trails.',
      'Cut key report and listing query response times by roughly 40% through indexing strategy, query rewrites, and transaction tuning on a live production database.',
      'Built secure, role-aware experiences across Java Spring Boot, Python FastAPI, and React.js / Next.js, serving multi-level user hierarchies for government and enterprise clients.',
      'Acted as tech lead for ERP product development — task breakdown, code reviews, and release readiness across a 12–15 person project team — and mentored junior developers.',
      'Deployed and maintained services on AWS and GCP with Git-based CI/CD workflows.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'rl-platform',
    title: 'RL Environment & Post-Training Data Platform',
    subtitle: 'Verifiable rewards for model training',
    period: 'Mar 2026 – Present',
    stack: ['Python', 'Docker', 'RLVR', 'SFT', 'RLHF', 'AWS'],
    diagram: {
      nodes: [
        { id: 'reset', label: 'Reset', detail: 'pinned image, seeded run' },
        { id: 'step', label: 'Step', detail: 'model action in a sandbox' },
        { id: 'score', label: 'Score', detail: 'tests + lint + runtime signals' },
      ],
      caption: 'Verifiable reward for RLVR · trajectories and preference pairs for SFT / RLHF',
    },
    bullets: [
      "Containerized RL training environments with a uniform reset/step/score interface over real software repositories, so a model's actions run in isolation and are scored automatically rather than by human review.",
      'Programmatic reward functions combining test-suite outcomes, lint diagnostics, and runtime signals into a single verifiable score — the reward backbone for RLVR runs.',
      'Rollout collection and dataset generation for SFT and RLHF: trajectory capture, schema validation, deduplication, quality filtering, and preference pairs from ranked candidate solutions.',
      'Reproducibility via pinned images, seeded execution, an inactivity watchdog, and arm64/amd64 auto-detection, so the same task yields the same reward across machines and runs.',
    ],
  },
  {
    id: 'kaiju',
    title: 'Kaiju',
    subtitle: 'Agentic Code Generation Pipeline & Orchestrator',
    period: 'Mar 2026 – Jul 2026',
    stack: ['Python', 'AWS Bedrock', 'LiteLLM', 'Docker', 'FastAPI', 'Next.js'],
    diagram: {
      nodes: [
        { id: 'draft', label: 'Draft', detail: 'AST-stubbed Python code' },
        { id: 'lint', label: 'Lint Refine', detail: 'lint diagnostics as context' },
        { id: 'test', label: 'Test Refine', detail: 'test results as context' },
      ],
      caption:
        '5+ models via LiteLLM · per-stage context slices · isolated Docker Buildx execution',
    },
    bullets: [
      "3-stage agent workflow (Draft → Lint Refine → Test Refine) over AST-stubbed Python code, where each stage receives a different slice of context and refines the previous stage's output.",
      '5+ models behind LiteLLM — Claude, Kimi K2, GLM, and Minimax on AWS Bedrock plus OpenAI GPT — for like-for-like quality, latency, and cost benchmarking from one interface.',
      'AST-based Python stubber preserving imports, decorators, and import-time calls, plus a CSV-driven batch orchestrator chaining fork, clone, stub, push, dataset creation, Docker build, and test-ID generation.',
      'Parallel isolated execution via Docker Buildx and ThreadPoolExecutor with secure AWS credential flows; FastAPI services with React.js / Next.js dashboards for per-stage pass rate, cost, and latency.',
    ],
  },
  {
    id: 'audit',
    title: 'Enterprise SaaS Audit Management Platform',
    subtitle: 'Role-based audit platform',
    period: 'Aug 2025 – Feb 2026',
    stack: ['React.js', 'REST APIs', 'Web Security'],
    bullets: [
      'Role-based UI rendering for 7 user roles with strict access control, secure authentication flows, and session-safe routing.',
      'Real-time dashboards with SLA timers, audit status tracking, and offline sync indicators for field auditors on unreliable connections.',
      'Hardened the client against XSS and CSRF with escaped rendering, safe request patterns, and secure token handling.',
    ],
  },
  {
    id: 'voice',
    title: 'Voice Broadcast Management System',
    subtitle: 'AI-powered voice campaign platform',
    period: 'Jul 2024 – Jul 2025',
    stack: ['FastAPI', 'Next.js', 'AI/TTS'],
    video: '/assets/bonvoice.webm',
    poster: '/assets/posters/bonvoice.webp',
    href: 'https://bonvoice.austere.biz',
    bullets: [
      'Async FastAPI backend for large concurrent voice campaigns, Next.js live monitoring, AI Text-to-Speech integration.',
    ],
  },
  {
    id: 'fdms',
    title: 'Fund Disbursement Management System',
    subtitle: 'Haryana Government',
    period: 'Jan 2024 – Jun 2024',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    bullets: [
      'Secure RESTful APIs in Java Spring Boot for fund allocation, approval workflows, and transaction processing across multiple administrative levels.',
      'Spring Security and JWT role-based authorization spanning Admin, Officer, and Employee hierarchies with distinct approval authority.',
      'ACID-compliant transactions and data integrity through layered validation, tuned queries, and structured exception handling.',
    ],
  },
];

// Items marked `todo` render in `npm run dev` only, so unconfirmed work never ships to production.
export const moreWork: MoreWork[] = [
  {
    id: 'mamco',
    title: 'MAMCO',
    description:
      'Website with portfolio management for CA professionals: service showcase, client management, and a seamless digital experience.',
    media: '/assets/mittal_website.webm',
    poster: '/assets/posters/mittal_website.webp',
    kind: 'video',
    href: 'https://www.mamco-ca.com/',
    stack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'infinitevps',
    title: 'TODO: InfiniteVPS title',
    description: 'TODO: add a one-line description for this project.',
    media: '/assets/infinitevps.webm',
    poster: '/assets/posters/infinitevps.webp',
    kind: 'video',
    todo: true,
  },
  {
    id: 'translate-bot',
    title: 'TODO: Translate Bot title',
    description: 'TODO: add a one-line description for this project.',
    media: '/assets/translate_bot.webm',
    poster: '/assets/posters/translate_bot.webp',
    kind: 'video',
    todo: true,
  },
  {
    id: 'unqueue',
    title: 'TODO: Unqueue title',
    description: 'TODO: add a one-line description for this project.',
    media: '/assets/unqueue.webm',
    poster: '/assets/posters/unqueue.webp',
    kind: 'video',
    todo: true,
  },
  {
    id: 'portfolio-v1',
    // TODO: this recording shows a portfolio for "WendoJ", not Shubham. Confirm or remove.
    title: 'TODO: Previous portfolio title',
    description: 'TODO: add a one-line description for this project.',
    media: '/assets/portfolio.webm',
    poster: '/assets/posters/portfolio.webp',
    kind: 'video',
    todo: true,
  },
  {
    id: 'evidence',
    title: 'TODO: Evidence project title',
    description: 'TODO: add a one-line description for this project.',
    media: '/images/evidence.png',
    kind: 'image',
    todo: true,
  },
  {
    id: 'sms',
    title: 'TODO: SMS project title',
    description: 'TODO: add a one-line description for this project.',
    media: '/images/sms.png',
    kind: 'image',
    todo: true,
  },
  {
    id: 'soil',
    title: 'TODO: Soil project title',
    description: 'TODO: add a one-line description for this project.',
    media: '/images/soil.png',
    kind: 'image',
    todo: true,
  },
];

export const education = {
  school: 'Savitribai Phule Pune University',
  degree: 'B.E. Computer Science',
  grade: 'CGPA 8.81/10',
  period: 'Aug 2019 – Aug 2023',
};

export const navLinks: Link[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/** Sections reachable from the command palette (nav plus the ones not in the bar). */
export const paletteLinks: Link[] = [
  ...navLinks.slice(0, 5),
  { label: 'How I work', href: '#process' },
  { label: 'Work with me', href: '#engage' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const socials: Link[] = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];

// ---------------------------------------------------------------------------
// Shubham is looking for BOTH full-time roles and freelance projects; the toggle only
// switches which of the two the page emphasises. Full-time + freelance positioning. Everything below is phrased from resume
// facts; review the wording before publishing (see README "Review before deploy").
// ---------------------------------------------------------------------------

export type Mode = 'hire' | 'project';

export const modes: Record<
  Mode,
  { toggle: string; pitch: string; cta: string; ctaHref: string; contactTitle: string }
> = {
  hire: {
    toggle: 'Full-time role',
    pitch:
      'AI and Full Stack Engineer with 3+ years in production. Available to join immediately, based in Gurugram.',
    cta: 'Download resume',
    ctaHref: profile.resume,
    contactTitle: 'Have a full-time AI or full stack role for me?',
  },
  project: {
    toggle: 'Freelance project',
    pitch:
      'Need an AI feature, a web app or a backend built? I scope it, build it, ship it, and hand it over cleanly.',
    cta: 'Start a project',
    ctaHref: '#contact',
    contactTitle: 'Have a freelance project for me?',
  },
};

export interface Service {
  id: string;
  title: string;
  blurb: string;
  stack: string[];
  proof: string;
}

export const services: Service[] = [
  {
    id: 'ai',
    title: 'AI Agents & LLM Features',
    blurb:
      'Multi-model LLM features and agent workflows, with cost, latency and quality tracked from day one.',
    stack: ['Python', 'LiteLLM', 'AWS Bedrock', 'OpenAI'],
    proof: 'Kaiju: 80%+ autonomous pass rate',
  },
  {
    id: 'web',
    title: 'Full Stack Web Apps',
    blurb:
      'Production web apps from database to UI, with role-based access and real-time dashboards.',
    stack: ['React', 'Next.js', 'FastAPI', 'Spring Boot'],
    proof: '4 production platforms delivered',
  },
  {
    id: 'api',
    title: 'Backend & APIs',
    blurb: 'Secure REST APIs and microservices with JWT / OAuth 2.0, RBAC and tuned SQL.',
    stack: ['FastAPI', 'Spring Boot', 'PostgreSQL', 'MySQL'],
    proof: '~40% faster queries on a live database',
  },
  {
    id: 'ml',
    title: 'ML Training & Evaluation Infra',
    blurb:
      'Sandboxed evaluation environments, programmatic reward functions and dataset pipelines for model training.',
    stack: ['Python', 'Docker', 'RLVR', 'SFT / RLHF'],
    proof: 'RL platform used daily by research teams',
  },
  {
    id: 'ops',
    title: 'Cloud Deployment & DevOps',
    blurb: 'Containerize the app, set up CI/CD, and deploy it to AWS or GCP.',
    stack: ['Docker', 'CI/CD', 'AWS', 'GCP'],
    proof: 'Shipped on AWS and GCP',
  },
];

export const processSteps = [
  {
    n: '01',
    title: 'Discover',
    text: 'Understand the problem, the users and the constraints. Agree on scope and what "done" means.',
  },
  {
    n: '02',
    title: 'Prototype',
    text: 'A working slice early, so decisions get made on something real rather than a document.',
  },
  {
    n: '03',
    title: 'Build & measure',
    text: 'Ship in small increments with tests, CI/CD and metrics that show it works.',
  },
  {
    n: '04',
    title: 'Launch & hand-off',
    text: 'Deploy, document and hand over cleanly, or keep iterating together.',
  },
];

export const engagements: Record<
  Mode,
  { title: string; kicker: string; points: string[]; cta: string }
> = {
  hire: {
    kicker: 'Full-time',
    title: 'Join your team',
    points: [
      'AI Engineer, Full Stack or Backend roles',
      'Gurugram / Delhi NCR, or remote',
      'Available to join immediately',
      'Comfortable owning a system end to end',
    ],
    cta: 'Download resume',
  },
  project: {
    kicker: 'Freelance',
    title: 'Build your project',
    points: [
      'AI features, web apps, APIs and dashboards',
      'Remote, working in IST with overlap for other time zones',
      'Scoped milestones with a working demo early',
      'Clean hand-off: code, docs and deployment',
    ],
    cta: 'Start a project',
  },
};

export const kineticWords = [
  'AI Engineer',
  'Full Stack',
  'LLM Agents',
  'Freelance',
  'RL Environments',
  'FastAPI',
  'React',
];
