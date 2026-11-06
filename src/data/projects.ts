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
  gallery?: string[];
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
    slug: 'portfolio-go',
    title: 'Portfolio Go™',
    category: 'Enterprise ERP & Cloud Studio',
    badge: 'Enterprise Architecture',
    image: '/images/projects/portfolio-go-hero.jpg',
    gallery: [
      '/images/projects/portfolio-go-kinetic.jpg',
      '/images/projects/portfolio-go-works.jpg',
      '/images/projects/portfolio-go-reviews.jpg',
    ],
    tagline: 'An ultra-dark, high-performance agency platform engineered for bespoke ERP architecture, mobile applications, and enterprise cloud solutions.',
    client: 'Portfolio–Go Agency',
    year: '2026',
    role: 'Lead Full-Stack & Systems Architect',
    services: ['ERP Systems', 'Cloud Architecture', 'Mobile Apps', 'Interactive 3D UI'],
    stack: ['Next.js 14', 'Go Engine', 'PostgreSQL', 'Redis Stream', 'Tailwind CSS'],
    stats: [
      { label: 'Inventory Sync', value: '< 15ms', note: 'Redis Streams pipeline' },
      { label: 'Asset Throughput', value: '50k+ SKUs', note: 'Automated pallet tracking' },
      { label: 'Rendering Engine', value: '60 FPS', note: 'Living canvas gradients' },
      { label: 'Uptime Architecture', value: '99.99%', note: 'High-concurrency Go worker' },
    ],
    links: {
      github: 'https://github.com/Rehansajid2130/Web_Agency_Portfolio_Go',
    },
    caseStudy: {
      overview:
        'Portfolio–Go is a high-end agency platform engineered for enterprise clients who require bespoke software, robust warehouse management systems (WMS), and high-throughput cloud infrastructure. The platform pairs a dark, editorial visual identity with heavy-duty backend engineering.',
      problem:
        'Traditional enterprise software often suffers from two major flaws: clumsy, dated user interfaces that frustrate staff, and slow monolithic backends that lag when processing thousands of concurrent inventory updates, pallet moves, and carrier dispatches.',
      solution:
        'We designed a modern enterprise suite led by Kinetic WMS — an automated multi-warehouse inventory engine with live pallet tracking and predictive replenishment. We paired it with a sleek, immersive agency storefront featuring living canvas gradients and a physics-driven 3D review orbit.',
      features: [
        {
          title: 'Kinetic WMS Inventory Engine',
          description: 'Automated multi-warehouse inventory management with real-time stock allocation, barcode scanning pipelines, and predictive supplier reordering.',
          badge: 'Kinetic WMS',
        },
        {
          title: 'High-Concurrency Go Backend',
          description: 'A dedicated Go worker service using Redis Streams to ingest high-frequency warehouse scans and dispatch events with sub-15ms latency.',
          badge: 'Go Engine',
        },
        {
          title: 'Interactive 3D Client Reviews Orbit',
          description: 'A physics-inspired orbiting review interface that lets potential enterprise clients explore verified testimonials and project milestones.',
          badge: 'Living UI',
        },
        {
          title: 'Multi-Tenant Enterprise Security',
          description: 'Enterprise-grade role-based access control (RBAC), immutable audit logging, and automated carrier API dispatch connectors.',
          badge: 'Security',
        },
      ],
      techExplanation: [
        'Next.js 14 & TypeScript: Server-rendered frontend delivering instant initial loads and fluid page transitions.',
        'Go Engine & Redis Streams: Lightweight microservices that process high-volume pallet tracking and barcode scanning events reliably.',
        'PostgreSQL & Prisma: Clean relational database architecture maintaining strict integrity across warehouses, purchase orders, and SKUs.',
        'Living Canvas Gradients: Hardware-accelerated GPU shaders creating smooth ambient background depth without taxing the CPU.',
      ],
      challenges: [
        {
          challenge: 'Handling sudden spikes in barcode scans from multiple distribution centers without race conditions or database deadlocks.',
          solution: 'Implemented an event-driven Redis streaming pipeline with Go worker pools that serialize pallet state mutations idempotently.',
        },
        {
          challenge: 'Rendering rich ambient canvas visuals and interactive orbits smoothly on corporate laptops with integrated graphics.',
          solution: 'Utilized lightweight WebGL shaders with automated frame throttling and reduced canvas resolution on lower-tier GPUs.',
        },
      ],
      result:
        'Portfolio–Go successfully proved that enterprise ERP systems can look breathtaking while delivering sub-15ms inventory reconciliation and 99.99% uptime for multi-facility operations.',
    },
  },
  {
    slug: 'future-logic',
    title: 'Future Logic',
    category: 'Full-Stack Engineering & App Sprints',
    badge: '14-Day App Sprints',
    image: '/images/projects/future-logic-hero.jpg',
    gallery: [
      '/images/projects/future-logic-results.jpg',
      '/images/projects/future-logic-capabilities.png',
      '/images/projects/future-logic-sprint.png',
      '/images/projects/future-logic-process.png',
    ],
    tagline: 'A high-velocity software engineering agency platform built for launching custom web applications and SaaS platforms in 14 to 21 days.',
    client: 'Future Logic Studio',
    year: '2026',
    role: 'Lead Full-Stack Developer & UI Architect',
    services: ['Web Apps & SaaS', 'Mobile Development', 'Custom APIs & Cloud', 'Sprint Framework'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL / Supabase', 'Vercel'],
    stats: [
      { label: 'Sprint Delivery', value: '14–21 Days', note: 'Fast production launch' },
      { label: 'Client Satisfaction', value: '98%', note: 'Verified agency rating' },
      { label: 'Apps & Platforms', value: '50+ Built', note: 'Global client delivery' },
      { label: 'Average Client ROI', value: '+280%', note: 'Measurable business impact' },
    ],
    links: {
      live: 'https://future-logic-eight.vercel.app/',
      github: 'https://github.com/Rehansajid2130',
    },
    caseStudy: {
      overview:
        'Future Logic is a high-velocity software engineering agency that helps founders and growing businesses launch custom web apps, mobile products, and SaaS platforms in just 14 to 21 days. They replace slow, 6-month agency cycles with transparent sprint roadmaps and direct senior engineering.',
      problem:
        'Traditional software agencies often drag projects out for 6 months or more with endless meeting layers, inflated bills, and complex technical debt that founders cannot maintain after launch.',
      solution:
        'We engineered a clean, conversion-focused agency web platform that clearly communicates Future Logic’s 14-day sprint framework, 8-step delivery process, and proven client ROI with live project case studies and instant call scheduling.',
      features: [
        {
          title: '14-Day High-Velocity Sprint Roadmap',
          description: 'A transparent 4-stage sprint framework (Scoping, Rapid Build, Security Audit, Production Launch) that guarantees live production deployment.',
          badge: 'Sprint Model',
        },
        {
          title: 'Full-Stack Engineering Capabilities',
          description: 'Structured breakdowns of Web Apps & SaaS (Next.js, Supabase), Mobile Development (React Native), and Custom Cloud APIs.',
          badge: 'Capabilities',
        },
        {
          title: 'Interactive Case Studies & ROI Hub',
          description: 'A dedicated results section showing real client impact, verified +280% average ROI metrics, and 50+ delivered platforms.',
          badge: 'Case Studies',
        },
        {
          title: 'Proven 8-Step Delivery Process',
          description: 'A systematic framework spanning Discovery through Strategy, Design, Build, QA, Launch, Optimization, and Scaling.',
          badge: 'Delivery Process',
        },
      ],
      techExplanation: [
        'Next.js & TypeScript: Server-rendered pages with fluid client-side navigation for lightning-fast browsing.',
        'Tailwind CSS: Modern grid systems, soft gradients, and custom utility classes that ensure crisp legibility on all devices.',
        'Conversion-First UX: Strategic call-to-action buttons, sprint package calculators, and integrated consultation booking.',
        'Optimized Asset Pipeline: Responsive images with native lazy loading for instant sub-second page rendering.',
      ],
      challenges: [
        {
          challenge: 'Translating a complex engineering sprint methodology into simple, confidence-building steps that non-technical founders understand.',
          solution: 'Organized information into clear visual cards (14-day roadmap and 8-step framework) with distinct timeframes and deliverables.',
        },
        {
          challenge: 'Showcasing broad multi-platform capabilities (Web, Mobile, Backend) without creating a text-heavy, overwhelming page.',
          solution: 'Created three focused capability pillars with scannable feature checklists and instant "Start Project" action triggers.',
        },
      ],
      result:
        'Future Logic launched their platform to outstanding client feedback. Inbound discovery calls increased significantly, and prospective clients cited the transparent 14-day roadmap as the decisive factor in their hiring choice.',
    },
  },
  {
    slug: 'bit3labs',
    title: 'Bit3Labs',
    category: 'Web3 & Tech Studio Platform',
    badge: 'Digital Studio',
    image: '/images/projects/bit3labs-hero.png',
    gallery: [
      '/images/projects/bit3labs-services.png',
      '/images/projects/bit3labs-contact.png',
    ],
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
    title: 'Rayé',
    category: 'E-Commerce Storefront & Admin Portal',
    badge: 'Storefront & Admin CRM',
    image: '/images/projects/raya-hero.png',
    gallery: [
      '/images/projects/raya-admin.png',
      '/images/projects/raya-shop.jpg',
      '/images/projects/raya-product.png',
      '/images/projects/raya-cart.jpg',
    ],
    tagline: 'A modern fashion e-commerce storefront paired with an operational admin dashboard for real-time sales tracking, order dispatch queues, and inventory control.',
    client: 'Rayé Clothing Co.',
    year: '2025',
    role: 'Lead Full-Stack & UI Engineer',
    services: ['E-Commerce UI', 'Admin Dashboard', 'State Management', 'Order Operations'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Vite', 'SVG Charts'],
    stats: [
      { label: 'Cart Drop-Off', value: '-28%', note: 'Simpler slide-out cart' },
      { label: 'Filter Response', value: '< 15ms', note: 'Instant local updates' },
      { label: 'Order Dispatch', value: 'Live Queue', note: 'Orders to pack stream' },
      { label: 'Page Speed Index', value: '0.8s', note: 'Near-instant render' },
    ],
    links: {
      live: 'https://raya-navy-alpha.vercel.app',
      github: 'https://github.com/Rehansajid2130',
    },
    caseStudy: {
      overview:
        'Rayé is a contemporary clothing brand designed for relaxed, coastal linen apparel. The project includes two interconnected systems: a fast, editorial customer storefront where shoppers browse and checkout effortlessly, and an intuitive Admin Operations Dashboard where store owners track gross sales, monitor monthly revenue targets, and process orders waiting to pack.',
      problem:
        'Most fashion retailers either use disconnected tools — spreadsheets for inventory, clunky third-party order apps, and bloated storefronts — or endure confusing admin interfaces that make daily fulfillment slow and error-prone.',
      solution:
        'We engineered a unified commerce experience. Customers enjoy a high-conversion storefront with instant category filters, real-time size checkers, and zero-distraction checkout. Meanwhile, store managers get a dedicated admin panel with live revenue curves, average order value (AOV) metrics, and active fulfillment queues.',
      features: [
        {
          title: 'Operations Admin Dashboard',
          description: 'A centralized back-office panel displaying monthly sales curves, target progress, average order values, and live queues of orders waiting to be packed.',
          badge: 'Admin Panel',
        },
        {
          title: 'Instant Filter & Search Catalog',
          description: 'Allows shoppers to filter collections by sleeve length, color swatches, and size availability with instantaneous zero-reload results.',
          badge: 'Fast Browsing',
        },
        {
          title: 'Product Detail & Size Selection',
          description: 'Rich apparel views with multi-angle thumbnails, fabric specifications, price breakdowns, and integrated size selection guides.',
          badge: 'Product UI',
        },
        {
          title: 'Streamlined Slide-Out Cart & Bag',
          description: 'Persistent shopping bag with free shipping progress bars, coupon code discounts, and unified one-click checkout.',
          badge: 'Frictionless Cart',
        },
      ],
      techExplanation: [
        'React & Component Architecture: Clean separation between public shopping components and private admin management views.',
        'SVG & Chart Visualization: Smooth sales trend curves and target performance metrics rendered with lightweight vector math.',
        'Synchronized State Management: Centralized store managing cart items, quantities, promo rules, and live order queues reliably.',
        'Responsive Layouts: Mobile-first storefront combined with a responsive, high-density desktop admin dashboard.',
      ],
      challenges: [
        {
          challenge: 'Designing an admin dashboard that presents extensive sales data without overwhelming store managers.',
          solution: 'Structured the overview with high-level KPI cards at the top (Sales, Orders to Pack, Average Order) above a clean interactive sales curve.',
        },
        {
          challenge: 'Maintaining instant filtering speed across hundreds of product variants and sizes on mobile devices.',
          solution: 'Implemented client-side memoized filter predicates that compute matching SKUs in under 15 milliseconds without network latency.',
        },
      ],
      result:
        'Rayé delivered a 28% drop in checkout drop-offs and provided store managers with an effortless admin panel to fulfill orders faster and track monthly sales targets accurately.',
    },
  },
  {
    slug: 'lumiere',
    title: 'Lumière Paris',
    category: 'Luxury Skincare & Commerce Suite',
    badge: 'DTC Skincare & Admin',
    image: '/images/projects/lumiere-hero.png',
    gallery: [
      '/images/projects/lumiere-admin-analytics.jpg',
      '/images/projects/lumiere-admin-billing.jpg',
      '/images/projects/lumiere-catalog.jpg',
      '/images/projects/lumiere-product.png',
    ],
    tagline: 'A clinical anti-aging skincare e-commerce platform paired with an advanced commerce admin for revenue analytics, auto-refill subscriptions, and Stripe ledger reconciliation.',
    client: 'Laboratoires Lumière Paris',
    year: '2025',
    role: 'Lead Full-Stack & E-Commerce Engineer',
    services: ['DTC Storefront', 'Subscription Commerce', 'Admin Analytics', 'Stripe Billing Architecture'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Node.js', 'Vite'],
    stats: [
      { label: 'Monthly Revenue', value: '$148.9k', note: '+18.4% growth MTD' },
      { label: 'Operating Profit', value: '$98.2k', note: '66% avg gross margin' },
      { label: 'Completed Orders', value: '2,418', note: '142 orders this week' },
      { label: 'Average Order Value', value: '$61.58', note: '+$4.20 with add-ons' },
    ],
    links: {
      github: 'https://github.com/Rehansajid2130/Skincare_Website_lumi-re',
    },
    caseStudy: {
      overview:
        'Laboratoires Lumière Paris is a luxury clinical skincare brand offering prescription-strength anti-aging formulations. The platform consists of a refined, medical-grade customer storefront with automated subscription refilling and a dedicated Commerce Admin managing revenue velocity, product margins, and PCI-DSS compliant Stripe billing.',
      problem:
        'High-end skincare brands require deep trust: customers need clear ingredient breakdowns and effortless subscription refilling, while operators need accurate financial ledgers, auto-refill retention metrics, and secure payment processing without reconciliation drift.',
      solution:
        'We built an end-to-end commerce ecosystem. Shoppers can filter treatments by skin concern (wrinkles, dermal firmness, dark spots) and configure auto-refill subscriptions (30, 60, or 90 days) with instant discounts. Store operators receive a comprehensive admin dashboard with 30-day revenue velocity charts, product margin leaderboards, and isolated Stripe API key architecture.',
      features: [
        {
          title: 'Commerce Revenue & Margin Analytics',
          description: 'Real-time financial dashboard tracking gross MTD revenue ($148k+), net operating profit, 30-day direct vs. auto-refill velocity, and product-level margin percentages.',
          badge: 'Admin Analytics',
        },
        {
          title: 'Secure SAQ A Stripe Billing Diagnostics',
          description: 'Enterprise payment architecture featuring segregated client-safe publishable keys, isolated backend secret keys, and HMAC-SHA256 webhook signatures with zero ledger drift.',
          badge: 'Billing & Security',
        },
        {
          title: 'Clinical Bio-Active Filter Catalog',
          description: 'Instant client-side catalog filtering by skin concern, active bio-compounds (phyto-peptides, niacinamide, squalane), and availability.',
          badge: 'Storefront Catalog',
        },
        {
          title: 'Subscribe & Save Auto-Refill Cadence',
          description: 'Flexible subscription engine allowing shoppers to save 15% with automated 30, 60, or 90-day delivery schedules and one-click pause or cancel.',
          badge: 'Subscriptions',
        },
      ],
      techExplanation: [
        'React & Strict TypeScript: Type-safe e-commerce components handling complex subscription cadences and pricing variants.',
        'Stripe API & Webhooks: Server-isolated payment handling using cryptographic HMAC-SHA256 verification to prevent replay attacks.',
        'Analytics Engine: Custom bar charts and velocity visualizers tracking recurring subscribers vs. one-time buyers.',
        'Responsive Luxury UI: Warm editorial aesthetic with high-resolution dermatological photography and accessible typography.',
      ],
      challenges: [
        {
          challenge: 'Isolating sensitive Stripe credentials and preventing ledger drift between captured funds and bank deposits.',
          solution: 'Architected a strict SAQ A compliant flow: public keys remain client-safe while secret keys and webhook secrets run strictly on an isolated Node backend.',
        },
        {
          challenge: 'Ensuring recurring subscription pricing and cadences update instantly without cart recalculation delays.',
          solution: 'Built reactive state reducers that recalculate bundle savings, companion add-ons, and refill discounts in real time.',
        },
      ],
      result:
        'Lumière Paris scaled to over $148,000 in monthly gross revenue with a 66% gross margin and 2,400+ completed orders, supported by zero-drift Stripe ledger reconciliation.',
    },
  },
  {
    slug: 'job-fiesta',
    title: 'Job Fiesta',
    category: 'Full-Stack Recruitment Portal',
    badge: 'Recruitment & Kanban',
    image: '/images/projects/job-fiesta-home.jpg',
    gallery: [
      '/images/projects/job-fiesta-dashboard.jpg',
      '/images/projects/job-fiesta-chat.png',
    ],
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
    slug: 'brickcraft-3d',
    title: 'BrickCraft 3D Studio',
    category: 'Interactive 3D WebGL & Creative Tool',
    badge: '3D WebGL & Spatial Math',
    image: '/images/projects/brickcraft-hero.jpg',
    gallery: [
      '/images/projects/brickcraft-showcase.png',
    ],
    tagline: 'An interactive in-browser 3D block builder featuring real-time voxel raycasting, grid snapping, custom color palettes, and model export.',
    client: 'Creative WebGL Studio',
    year: '2025',
    role: 'Lead 3D & Frontend Engineer',
    services: ['3D WebGL Development', 'Spatial Math & Raycasting', 'Interactive UI Design', 'State Serialization'],
    stack: ['Three.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Canvas API'],
    stats: [
      { label: 'Render Performance', value: '60 FPS', note: 'Hardware-accelerated WebGL' },
      { label: 'Snap Precision', value: '100% Grid', note: 'Calculated voxel bounding' },
      { label: 'Palette Shapes', value: '10+ Bricks', note: 'Beams, plates & slopes' },
      { label: 'Model Export', value: 'Instant', note: 'Lightweight JSON format' },
    ],
    links: {
      github: 'https://github.com/Rehansajid2130/Lego_blocks',
    },
    caseStudy: {
      overview:
        'BrickCraft 3D is a lightweight, in-browser digital construction studio inspired by classic modular brick building. It allows users to place, rotate, recolor, and stack 3D blocks in real time with intuitive mouse controls, multi-angle camera views, and instant JSON model saving.',
      problem:
        'Many online 3D design tools are intimidating, slow to load, and require heavy desktop software. Building simple voxel or brick models in a standard browser often suffers from jittery raycasting, imprecise block placement, and sluggish framerates on lower-spec machines.',
      solution:
        'We developed a responsive Three.js canvas paired with strict voxel grid-snapping algorithms. Users can switch between Build, Recolor, and Erase modes, choose from 10+ brick shapes (classic bricks, long beams, roof slopes, round studs), customize colors from a 12-swatch palette, and inspect their creations through isometric and orthographic camera views.',
      features: [
        {
          title: 'Real-Time Voxel Snapping & Raycasting',
          description: 'Custom raycast collision detection calculating face normals so new bricks snap flush onto top or side studs without intersecting existing geometry.',
          badge: 'Spatial Math',
        },
        {
          title: 'Multi-Tool Palette & Color Swatches',
          description: 'Instant tool switching between Build, Recolor, and Erase modes with 12 vivid color swatches, 90° block rotation, and real-time stud counters.',
          badge: 'Tool Palette',
        },
        {
          title: 'Multi-Angle Camera Navigation',
          description: 'Smooth 360° orbit controls with quick preset buttons for Isometric 3D, Top, Front, and Side orthographic perspectives.',
          badge: 'Camera Controls',
        },
        {
          title: 'Model Serialization & Presets',
          description: 'Lightweight JSON save and load capabilities with pre-built showcase models including Classic Yellow Duck, Turbo Racer, and Medieval Keep.',
          badge: 'Persistence',
        },
      ],
      techExplanation: [
        'Three.js & WebGL: Low-overhead scene graph managing instanced meshes, directional lighting, and soft ground shadows.',
        'Grid Snapping Mathematics: Custom normal vector math ensuring studs and brick sockets align seamlessly regardless of orientation angle.',
        'Undo / Redo History Stack: Immutable action history recording placement, removal, and recolor steps for effortless design experimentation.',
        'Particle System Effects: Celebratory confetti particle explosion upon completing preset showcase models.',
      ],
      challenges: [
        {
          challenge: 'Preventing bricks from misaligning or clipping through each other when building complex multi-layer structures.',
          solution: 'Calculated face normals on the hit mesh to accurately compute bounding offsets and round coordinates to the nearest modular grid unit.',
        },
        {
          challenge: 'Maintaining buttery 60 FPS performance when building large structures with dozens of individual blocks.',
          solution: 'Merged static brick geometries and batched material assignments to minimize draw calls and GPU memory consumption.',
        },
      ],
      result:
        'BrickCraft 3D achieved a silky smooth 60 FPS in standard browsers, enabling users to effortlessly build, share, and save modular 3D brick models with zero plugins or installation required.',
    },
  },
];
