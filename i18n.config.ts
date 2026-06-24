import { getRequestConfig } from 'next-intl/server';

export const locales = ['he', 'en'] as const;
export const defaultLocale = 'he' as const;

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await import(`./messages/${locale}.json`)
  ).default,
}));
