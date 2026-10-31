export interface Service {
  id: string;
  title: string;
  description: string;
  goodFit: string;
}

export const services: Service[] = [
  {
    id: 'react-web-apps',
    title: 'React web applications',
    description:
      'Building dashboards, portals, and full web interfaces with React and clean, scalable component architecture.',
    goodFit: 'You need a production-ready application that works smoothly, not just a static Figma mockup.',
  },
  {
    id: 'landing-pages',
    title: 'Landing pages and websites',
    description:
      'Turning a design or a rough idea into a fast, responsive page with purposeful micro-interactions and strict typography.',
    goodFit: 'You want a digital presence that looks deliberate, loads instantly, and builds credibility.',
  },
  {
    id: 'api-integration',
    title: 'REST API integration',
    description:
      'Connecting your frontend to backend servers or third-party APIs, handling pending, error, and empty states gracefully.',
    goodFit: 'You have endpoints or a backend database ready, and need an intuitive interface to communicate with it.',
  },
  {
    id: 'code-cleanup',
    title: 'Fixing and cleaning up React code',
    description:
      'Debugging issues, refactoring outdated patterns, and eliminating performance bottlenecks in an existing codebase.',
    goodFit: 'Something is already built but it runs slowly, breaks on mobile, or has become hard to maintain.',
  },
];

