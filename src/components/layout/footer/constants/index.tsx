import { LinkItem } from '@/components/layout/footer/LinksSection';
import { Github, Instagram, Send } from 'lucide-react';

export const mainLinks: LinkItem[] = [
  {text: 'Новини', href: '/news'},
  {text: 'Пошук виконавців', href: '/search?userType=performer'},
  {text: 'Пошук продюсерів', href: '/search?userType=producer'},
]

export const supportLinks: LinkItem[] = [
  {text: 'Q&A', href: '/qa'},
  {text: 'Про нас', href: '/about'},
]

export const socials = [
  { href: "https://github.com/orgs/bridge-to-bits/repositories", icon: Github },
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://telegram.org", icon: Send },
];