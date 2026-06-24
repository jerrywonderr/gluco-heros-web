import { Config } from 'next-intl';

const config: Config = {
  locales: ['he', 'en'],
  defaultLocale: 'he',
  messages: {
    he: () => import('./messages/he.json').then(m => m.default),
    en: () => import('./messages/en.json').then(m => m.default),
  },
  pathnames: {
    '/': '/',
    '/support': '/support',
    '/privacy': '/privacy',
    '/terms': '/terms',
  },
  localeDetection: true,
};

export default config;
