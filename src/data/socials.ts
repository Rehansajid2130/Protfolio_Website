export interface SocialLink {
  name: string;
  url: string;
  username: string;
  platformBadge?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/rehan-dev',
    username: 'rehan-dev',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rehan-frontend',
    username: 'rehan-frontend',
  },
  {
    name: 'Fiverr',
    url: 'https://fiverr.com/rehan_dev',
    username: 'rehan_dev',
    platformBadge: 'Level Seller',
  },
  {
    name: 'Freelancer',
    url: 'https://freelancer.com/u/rehandev',
    username: 'rehandev',
    platformBadge: 'Verified',
  },
];

export const contactDetails = {
  email: 'rehan.frontend@gmail.com',
  whatsapp: '+92 300 1234567',
  whatsappUrl: 'https://wa.me/923001234567',
  location: 'Lahore, Pakistan',
  timezone: 'PKT (UTC+5)',
  availability: 'Available for freelance & direct client projects',
};

