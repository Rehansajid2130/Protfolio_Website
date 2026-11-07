export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Rehan took our product from a rough design spec to a lightning-fast production release in less than three weeks. His attention to fluid micro-interactions and backend performance is rare to find in a single engineer. Our user engagement jumped significantly right after rollout.',
    name: 'Marcus Vance',
    role: 'Founder & CEO, Veloce Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80',
  },
  {
    quote:
      'Collaborating with Rehan was effortless from day one. He doesn’t just implement tickets blindly—he actively thinks through user flows, edge cases, and data scaling. The entire dashboard runs at sub-50ms response times with zero client lag.',
    name: 'Ayesha Tariq',
    role: 'Head of Product, PulseHQ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
  },
  {
    quote:
      'Rehan is the definition of a high-velocity full-stack developer. When we needed to overhaul our core platform before our seed round demos, he streamlined our architecture and delivered ahead of schedule. An absolute 10/10 craftsman.',
    name: 'Julian Becker',
    role: 'CTO & Co-founder, OmniStack',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80',
  },
  {
    quote:
      'As a designer, it’s usually terrifying handing off high-fidelity designs to developers. Rehan was the exception—he brought every animation and layout detail to life with 100% precision and made it performant across every device.',
    name: 'Elena Rostova',
    role: 'Design Director, Studio Forma',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&h=256&q=80',
  },
];

