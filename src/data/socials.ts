export interface SocialLink {
  name: string;
  url: string;
  username: string;
  platformBadge?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Rehansajid2130',
    username: 'Rehansajid2130',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rehan-sajid-499b94317',
    username: 'rehan-sajid-499b94317',
  },
];

export const contactDetails = {
  email: 'rehansajid.prof@gmail.com',
  whatsapp: '+92 300 1234567',
  whatsappUrl: 'https://wa.me/923001234567',
  location: 'Lahore, Pakistan',
  timezone: 'PKT (UTC+5)',
  availability: 'Available for freelance & direct client projects',
};

