import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';
import AOS from 'aos';

export const socialLinks = [
  {
    icon: IconBrandGithub,
    name: 'GitHub',
    to: 'https://github.com/pdt1806',
  },
  {
    icon: IconBrandInstagram,
    name: 'Instagram',
    to: 'https://instagram.com/benny_ng08/',
  },
  {
    icon: IconBrandFacebook,
    name: 'Facebook',
    to: 'https://facebook.com/pdteggman/',
  },
  {
    icon: IconBrandX,
    name: 'X',
    to: 'https://x.com/pdteggman/',
  },
];

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export const postLoading = () => {
  document.getElementById('initLoading')?.style.setProperty('opacity', '0');
  setTimeout(() => {
    document.getElementById('initLoading')?.remove();
    document.body.style.setProperty('overflow', 'auto');
    AOS.refreshHard();
  }, 500);
};
