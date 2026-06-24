import { getRequestConfig } from 'next-intl/server';

export const locales = ['he', 'en'] as const;
export const defaultLocale = 'he' as const;

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale || defaultLocale;
  return {
    locale: safeLocale,
    messages: (
      await import(`./messages/${safeLocale}.json`)
    ).default,
  };
});
