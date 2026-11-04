// ponytail: centralized, typed project data with clean simple-English copy
export interface ProjectFeature {
  title: string;
  description: string;
  badge?: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface CaseStudyData {
  overview: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  techExplanation: string[];
  challenges: ProjectChallenge[];
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  image: string;
  client: string;
  year: string;
  role: string;
  services: string[];
  stack: string[];
  stats: { label: string; value: string; note?: string }[];
  links: {
    live?: string;
    github?: string;
  };
  caseStudy: CaseStudyData;
}

export const projects: Project[] = [
  {
    slug: 'bit3labs',
    title: 'Bit3Labs',
    category: 'Web3 & Tech Studio Platform',
    badge: 'Digital Studio',
    image: '/images/projects/bit3labs.png',
    tagline: 'A modern digital studio platform designed for high-performance Web3 products, developer tools, and brand identity.',
    client: 'Bit3Labs Studio',
    year: '2025',
    role: 'Frontend Architect & UI Developer',
    services: ['Web Design', 'Frontend Engineering', 'Animation', 'Performance'],
    stack: ['React', 'Next.js / Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    stats: [
      { label: 'Lighthouse Score', value: '98/100', note: 'Top-tier performance' },
      { label: 'Initial Page Load', value: '< 1.1s', note: 'Ultra-fast delivery' },
      { label: 'Interaction Speed', value: '60 FPS', note: 'Silky smooth motion' },
      { label: 'Device Support', value: '100%', note: 'Mobile, tablet & desktop' },
    ],
    links: {
      live: 'https://bit3labs.vercel.app',
      github: 'https://github.com/Rehansajid2130',
    },
    caseStudy: {
      overview:
        'Bit3Labs is a modern creative agency and technology studio that helps Web3 teams build clear, trustworthy digital products. They needed a fresh portfolio website that clearly communicates their engineering skills, past projects, and core services without drowning visitors in confusing technical jargon.',
      problem:
        'Many agency websites in the blockchain and tech space are bloated with heavy 3D files that take 5+ seconds to load on mobile phones. Visitors would leave before the page even finished rendering, and the cluttered layouts made finding case studies and contact details frustrating.',
      solution:
        'We designed and built a lightweight, editorial web platform with instant page loads and zero clutter. Every section has a clear purpose: bold headlines highlight key offerings, project cards give instant visual context, and interactive details feel natural and responsive on any screen size.',
      features: [
        {
          title: 'Interactive Project Showcase',
          description: 'Custom preview cards featuring smooth hover elevations and quick-access links to live project demos.',
          badge: 'UI Showcase',
        },
        {
          title: 'Smooth 60 FPS Micro-Interactions',
          description: 'Carefully tuned spring animations and text reveals that guide the reader without slowing down their device.',
          badge: 'Motion',
        },
        {
          title: 'Mobile-First Layout System',
          description: 'Fully responsive grid layouts that adapt fluidly from pocket smartphones to 4K desktop monitors.',
          badge: 'Responsive',
        },
        {
          title: 'Direct Client Inquiry Funnel',
          description: 'A streamlined contact section with validated inputs that makes it effortless for new clients to start a conversation.',
          badge: 'Conversion',
        },
      ],
      techExplanation: [
        'React & TypeScript: Clean component hierarchy with strict types for fast, bug-free iterations.',
        'Tailwind CSS: Utility-first styling with custom typography and color variables for complete design consistency.',
        'Framer Motion: Hardware-accelerated GPU transforms for buttery 60 FPS animations with zero layout shift.',
        'Asset Pipeline: High-compression WebP images and dynamic imports ensuring sub-second initial paint times.',
      ],
      challenges: [
        {
          challenge: 'Keeping animations silky smooth on older mobile phones without causing battery drain.',
          solution: 'Replaced heavy JavaScript interval timers with native CSS transforms and GPU-accelerated opacity changes, keeping CPU usage minimal.',
        },
        {
          challenge: 'Balancing a dark, high-tech visual mood with readable, accessible text.',
          solution: 'Followed WCAG AA contrast standards by pairing calibrated dark backgrounds with high-contrast text and luminous cyan accents.',
        },
      ],
      result:
        'Bit3Labs launched their new web platform to great reception. Visitors spend twice as long browsing case studies, initial load times dropped by 65%, and the team saw an immediate increase in inbound project inquiries.',
    },
  },
  {
    slug: 'raya',
    title: 'Raya Clothing Brand',
    category: 'E-Commerce & Fashion Storefront',
    badge: 'Fashion E-Commerce',
    image: '/images/projects/raya.png',
    tagline: 'A minimalist fashion e-commerce storefront crafted for effortless apparel browsing, instant filtering, and quick checkout.',
    client: 'Raya Clothing Co.',
    year: '2025',
    role: 'Lead Frontend Engineer',
    services: ['E-Commerce UI', 'State Management', 'Mobile Optimization'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Vite'],
    stats: [
      { label: 'Cart Drop-Off', value: '-28%', note: 'Simpler slide-out cart' },
      { label: 'Filter Response', value: '< 15ms', note: 'Instant local updates' },
      { label: 'Mobile Sales', value: '+34%', note: 'Thumb-friendly navigation' },
      { label: 'Page Speed Index', value: '0.8s', note: 'Near-instant render' },
    ],
    links: {
      live: 'https://raya-navy-alpha.vercel.app',
      github: 'https://github.com/Rehansajid2130',
    },
    caseStudy: {
      overview:
        'Raya is a modern clothing label that focuses on minimalist, timeless silhouettes. They wanted an online storefront that feels like a high-end fashion magazine: clean whitespace, large product photography, instant filtering, and zero distracting pop-ups.',
      problem:
        'Most out-of-the-box e-commerce templates are clunky on mobile devices. Shoppers had to wait for full page reloads every time they changed a size or category filter, and the multi-step checkout process led to high cart abandonment rates.',
      solution:
        'We engineered an ultra-fast, single-page shopping experience. Shoppers can filter clothes instantly, tap any item to see fabric details and high-resolution photos, and manage their bag through a smooth slide-out drawer without ever leaving the page.',
      features: [
        {
          title: 'Instant Category & Size Filters',
          description: 'Allows shoppers to filter collections by style, size, and price with zero page reloads or loading spinners.',
          badge: 'Fast Browsing',
        },
        {
          title: 'Slide-Out Cart Drawer',
          description: 'A non-intrusive drawer that lets users adjust item quantities, enter discount codes, and see totals immediately.',
          badge: 'Shopping Cart',
        },
        {
          title: 'High-Detail Product Quick View',
          description: 'Optimized zoom and swipe galleries that let shoppers inspect fabric textures and stitching clearly.',
          badge: 'Photography',
        },
        {
          title: 'Persistent Cart State',
          description: 'Automatically saves selected items to the browser so customers never lose their bag if they refresh or return later.',
          badge: 'Reliability',
        },
      ],
      techExplanation: [
        'React Architecture: Reusable UI cards and modals separated cleanly for maintainability.',
        'Synchronized State: Lightweight state store managing cart items, counts, and promo pricing without extra libraries.',
        'Lazy Media Loading: Progressive image loading with fixed aspect ratios to eliminate Cumulative Layout Shift (CLS).',
        'Mobile Gestures: Smooth touch gestures designed specifically for one-handed thumb browsing.',
      ],
      challenges: [
        {
          challenge: 'Rendering dozens of high-resolution product photos without slowing down the page.',
          solution: 'Implemented responsive image containers with WebP compression and native lazy loading, ensuring only visible photos download first.',
        },
        {
          challenge: 'Ensuring cart totals and discounts stay accurate even when shoppers open multiple tabs.',
          solution: 'Created an event-driven storage listener that syncs cart changes across tabs instantly and reliably.',
        },
      ],
      result:
        'The new Raya storefront delivered a 28% drop in checkout abandonment and a 34% rise in mobile purchases. Customers frequently compliment how fast and effortless the shopping experience feels.',
    },
  },
  {
    slug: 'job-fiesta',
    title: 'Job-Fiesta',
    category: 'Full-Stack Recruitment Portal',
    badge: 'Recruitment & Kanban',
    image: '/images/projects/job-fiesta.png',
    tagline: 'A full-stack recruitment platform where candidates apply and recruiters manage applicants in one centralized workspace.',
    client: 'University of Central Punjab (Capstone)',
    year: '2025',
    role: 'Full-Stack Developer',
    services: ['Full-Stack Architecture', 'WebSockets', 'Database Design', 'UI/UX'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    stats: [
      { label: 'Chat Latency', value: '< 100ms', note: 'Real-time WebSockets' },
      { label: 'Pipeline Updates', value: 'Instant', note: 'Live drag-and-drop' },
      { label: 'Resume Export', value: '1-Click', note: 'Standardized PDF output' },
      { label: 'DB Query Speed', value: '< 45ms', note: 'Indexed MongoDB queries' },
    ],
    links: {
      github: 'https://github.com/Rehansajid2130/Job-fiesta_fyp',
      live: 'https://demo.jobfiesta.dev',
    },
    caseStudy: {
      overview:
        'Job Fiesta is an all-in-one hiring platform created to solve the headaches of modern recruitment. Instead of juggling candidate CVs across email inboxes and manual spreadsheets, recruiters get an intuitive Kanban board, live instant chat, and an automated resume builder.',
      problem:
        'Hiring is usually chaotic: candidates submit resumes across multiple portals, recruiters send disjointed emails that get missed, and candidate progress gets forgotten inside messy spreadsheets with zero team visibility.',
      solution:
        'We built a unified web platform that connects job seekers and recruiters directly. Candidates build standardized profiles and apply in one click. Recruiters drag applicant cards through custom pipeline stages (Applied, Interview, Offer) and conduct live interviews through built-in chat.',
      features: [
        {
          title: 'Interactive Applicant Kanban Board',
          description: 'A visual drag-and-drop pipeline where recruiters can move candidates between stages with real-time status updates.',
          badge: 'Kanban',
        },
        {
          title: 'Real-Time Recruiter Chat',
          description: 'Bi-directional live messaging powered by Socket.io with typing indicators, online presence, and unread counters.',
          badge: 'Live Chat',
        },
        {
          title: 'Dynamic Resume Builder',
          description: 'A guided tool that helps applicants create clean, professional resumes that recruiters can evaluate consistently.',
          badge: 'CV Builder',
        },
        {
          title: 'Role-Based Access Control',
          description: 'Strict separation of permissions between candidate profiles, recruiter dashboards, and administrative oversight.',
          badge: 'Security',
        },
      ],
      techExplanation: [
        'React Frontend: Custom hooks managing WebSocket lifecycle and responsive drag-and-drop interactions.',
        'Node.js & Express API: RESTful endpoints secured with JWT tokens and custom authentication middlewares.',
        'Socket.io Server: High-efficiency WebSocket gateway maintaining real-time conversation rooms and notification feeds.',
        'MongoDB & Mongoose: Structured document schemas with optimized indexes for lightning-fast applicant queries.',
      ],
      challenges: [
        {
          challenge: 'Keeping chat messages synchronized in real time without constantly bombarding the database.',
          solution: 'Used Socket.io room subscriptions combined with in-memory presence tracking and background message persistence.',
        },
        {
          challenge: 'Preventing status conflicts if two recruiters update an applicant status at the same time.',
          solution: 'Implemented optimistic UI updates on the Kanban board paired with server-side version checks to ensure consistent state.',
        },
      ],
      result:
        'Successfully completed and defended as a top-grade final year project at UCP. Achieved instantaneous Kanban card movements, sub-100ms chat delivery, and glowing commendations for product usability.',
    },
  },
  {
    slug: 'crypto',
    title: 'Crypto Pulse Analytics',
    category: 'Trading & Asset Intelligence',
    badge: 'Fintech Dashboard',
    image: '/images/projects/crypto.png',
    tagline: 'A real-time cryptocurrency tracking platform featuring live market prices, interactive trend charts, and portfolio monitoring.',
    client: 'Fintech Web Application',
    year: '2025',
    role: 'Frontend UI Engineer',
    services: ['Dashboard UI', 'Data Visualization', 'API Integration'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'SVG Charts', 'REST APIs'],
    stats: [
      { label: 'Price Feeds', value: '2.0s', note: 'Live market ticker' },
      { label: 'Chart Render', value: '16ms', note: '60 FPS SVG curves' },
      { label: 'Bundle Size', value: '< 95 kB', note: 'Zero charting bloat' },
      { label: 'Tracked Assets', value: '50+ Coins', note: 'Major crypto tokens' },
    ],
    links: {
      live: 'https://crypto-pulse.demo.dev',
      github: 'https://github.com/Rehansajid2130',
    },
    caseStudy: {
      overview:
        'Crypto Pulse is an accessible cryptocurrency analytics dashboard designed for traders and everyday investors who want clear, live market insights without confusing technical clutter or slow-loading interfaces.',
      problem:
        'Most cryptocurrency websites are crammed with flashing ads, heavy candlestick packages, and complex tables that feel intimidating to beginner investors and run sluggishly on portable laptops and phones.',
      solution:
        'We created a fast, clutter-free dashboard that displays essential market signals at a single glance: current prices, 24-hour gains/losses, sparkline trend curves, and an easy watchlist where users can track their favorite coins.',
      features: [
        {
          title: 'Live Market Price Feeds',
          description: 'Streaming price updates for Bitcoin, Ethereum, and 50+ leading tokens with color-coded directional indicators.',
          badge: 'Live Data',
        },
        {
          title: 'Lightweight Sparkline Trend Curves',
          description: 'Custom SVG mini-charts that render price trends instantly without needing heavy third-party charting libraries.',
          badge: 'Zero Bloat',
        },
        {
          title: 'Personal Watchlist & Portfolio Tracker',
          description: 'Lets users pin preferred coins to their top shelf to calculate estimated portfolio value and daily returns.',
          badge: 'Watchlist',
        },
        {
          title: 'High-Contrast Dark Theme',
          description: 'Engineered with calibrated dark tones and distinct green/red accents that minimize eye fatigue during market hours.',
          badge: 'Accessibility',
        },
      ],
      techExplanation: [
        'React Components: Modular ticker rows, search bars, and card containers built for swift re-renders.',
        'Custom SVG Curves: Native SVG path generator converting raw historical prices into smooth vector curves with zero external dependencies.',
        'Cached API Layer: Client-side throttling and caching strategy that keeps live prices accurate without exceeding public API rate limits.',
        'Tailwind Styling: Clean, consistent dark palette with clear typography hierarchy.',
      ],
      challenges: [
        {
          challenge: 'Preventing the dashboard from freezing or dropping frames when frequent price ticks arrive.',
          solution: 'Batched state updates and memoized sparkline calculations so only changed coin rows re-render.',
        },
        {
          challenge: 'Gracefully handling intermittent network disconnects during live market viewing.',
          solution: 'Built automatic retry logic with local cached price snapshots, so the user never sees empty screens or broken layouts.',
        },
      ],
      result:
        'Delivered a lightning-fast crypto tracking platform with an initial bundle under 95 kB and near-zero CPU overhead, providing users with a frictionless market monitoring experience.',
    },
  },
];
