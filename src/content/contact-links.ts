import type { ContactLink } from '../types/content.ts';

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:vedikas3012@gmail.com', platform: 'email' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vedika-srivastava/',
    platform: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/vedikaSrivastava', platform: 'github' },
  {
    label: 'Google Scholar',
    shortLabel: 'Scholar',
    href: 'https://scholar.google.com/citations?user=cPLpZOYAAAAJ&hl=en',
    platform: 'scholar',
  },
  { label: 'Medium', href: 'https://medium.com/@vedikas3012', platform: 'medium' },
];
