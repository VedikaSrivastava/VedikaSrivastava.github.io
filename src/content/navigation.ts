import type { NavigationItem } from '../types/content.ts';

export const siteNavigation: NavigationItem[] = [
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const observedSectionIds = ['top', ...siteNavigation.map((item) => item.id)];
