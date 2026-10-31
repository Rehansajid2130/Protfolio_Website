export interface StackCategory {
  category: string;
  description: string;
  skills: string[];
}

export const stackCategories: StackCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Core tools I use every day to craft robust client interfaces.',
    skills: ['React 18 / 19', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 & Semantic CSS', 'Vite'],
  },
  {
    category: 'Backend & Data',
    description: 'Server integration and real-time connectivity for full-flow applications.',
    skills: ['RESTful APIs', 'Node.js', 'Express.js', 'MongoDB & Mongoose', 'Socket.io (WebSockets)', 'JWT Auth'],
  },
  {
    category: 'Engineering Standards',
    description: 'Methodologies to ensure software stays fast and maintainable.',
    skills: ['WCAG 2.1 AA Accessibility', 'Hardware CSS Transitions', 'Core Web Vitals Optimization', 'Component Tokens'],
  },
  {
    category: 'Tools & Workflow',
    description: 'Development environment and deployment workflows.',
    skills: ['Git & GitHub', 'Postman API Testing', 'VS Code', 'Figma to Code', 'Chrome DevTools Profiler', 'pnpm / npm'],
  },
];

