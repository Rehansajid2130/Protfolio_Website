export interface CaseStudySection {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  context: string;
  year: string;
  role: string;
  stack: string[];
  badge: string;
  stats: { label: string; value: string }[];
  caseStudy: CaseStudySection;
  links: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'job-fiesta',
    title: 'Job Fiesta',
    tagline: 'A full-stack recruitment platform where candidates apply and recruiters manage applicants in one place.',
    context: 'Final Year Project — University of Central Punjab (2025)',
    year: '2025',
    role: 'Full-stack developer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    badge: 'Recruitment & Kanban',
    stats: [
      { label: 'Realtime Protocol', value: 'WebSockets' },
      { label: 'Pipeline View', value: 'Kanban Board' },
    ],
    caseStudy: {
      overview:
        'Job Fiesta simplifies the hiring process by giving recruiters a centralized dashboard to post jobs, track applicants through custom Kanban stages, conduct real-time interviews via chat, and evaluate applicants using a structured resume builder.',
      problem:
        'Traditional job boards fragment the hiring lifecycle: candidates apply in one portal, recruiters exchange emails elsewhere, and applicant statuses are manually tracked in disconnected spreadsheets.',
      solution:
        'Architected a unified MERN platform featuring live bi-directional messaging with Socket.io, drag-and-drop applicant pipeline management, and an interactive resume builder that outputs clean, standardized candidate profiles.',
      features: [
        'Real-time recruiter-candidate messaging with typing indicators and unread counters',
        'Interactive applicant tracking Kanban board with drag-and-drop stage updates',
        'Dynamic resume builder creating standardized CVs directly within the platform',
        'Role-based access control (RBAC) separating candidate and recruiter workspaces',
      ],
      architecture: [
        'Frontend: React SPA with custom hooks for WebSocket event synchronization',
        'Backend: Express.js REST API with JWT authentication and middleware guards',
        'Real-time: Socket.io server handling persistent rooms for conversations',
        'Database: MongoDB with Mongoose schema modeling for fast applicant queries',
      ],
      challenges: [
        'Maintaining synchronized chat state and unread notifications without redundant database polling',
        'Preventing race conditions when multiple recruiters update an applicant status concurrently on the Kanban board',
      ],
      result:
        'Successfully completed and defended as final year capstone project at UCP. Achieved sub-100ms message delivery and instantaneous Kanban state reflections.',
    },
    links: {
      github: 'https://github.com/rehan-dev/job-fiesta',
      live: 'https://demo.jobfiesta.dev',
    },
  },
  {
    slug: 'wedding-invitation',
    title: 'Mughal Wedding Invitation',
    tagline: 'A Mughal-style digital wedding invitation web app with traditional aesthetics, interactive schedule, and RSVP.',
    context: 'Custom Commission (2025 — 2026)',
    year: '2026',
    role: 'Frontend designer & developer',
    stack: ['React', 'Tailwind CSS', 'Web Audio API', 'Hardware CSS Motion'],
    badge: 'Editorial & Motion',
    stats: [
      { label: 'Asset Weight', value: '< 250kB' },
      { label: 'Frame Rate', value: '60fps' },
    ],
    caseStudy: {
      overview:
        'A bespoke digital invitation web application tailored for a traditional Pakistani wedding. Blends classical Mughal geometric motifs and typography with modern, responsive web interactions.',
      problem:
        'Physical wedding cards often get lost, do not provide live map routing for guests arriving from other cities, and offer no easy way to confirm attendee headcounts.',
      solution:
        'Created an immersive, lightweight web experience featuring multi-event timelines (Mehndi, Barat, Walima), interactive venue navigation with Google Maps, ambient traditional sitar audio controls, and an RSVP submission system.',
      features: [
        'Detailed event schedule with calendar download (.ics) integration',
        'Integrated interactive venue maps with one-tap navigation for guests',
        'Ambient background music with user-controlled Web Audio play/pause state',
        'Responsive photo gallery with zero-shift image loading',
      ],
      architecture: [
        'Architecture: Static-first React application with fluid clamp typography',
        'Design System: Custom Mughal arch SVGs, royal gold and sky accents',
        'Audio: Low-latency Web Audio API wrapper with memory-leak cleanup',
      ],
      challenges: [
        'Respecting modern browser autoplay restrictions while delivering an elegant sound experience upon user intent',
        'Ensuring rich decorative borders and ornamental arches remained crisp on high-DPI retina displays without ballooning asset sizes',
      ],
      result:
        'Served over 800 wedding guests with 92% mobile engagement and 100% on-time RSVP confirmations.',
    },
    links: {
      github: 'https://github.com/rehan-dev/mughal-wedding',
      live: 'https://wedding.rehan.dev',
    },
  },
];

