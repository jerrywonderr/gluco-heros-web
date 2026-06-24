import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Default to Hebrew - the layout will provide the correct locale and messages
  return {
    locale: 'he',
    messages: (await import(`../messages/he.json`)).default,
  };
});
