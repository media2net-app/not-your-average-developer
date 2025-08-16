import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['nl', 'en'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'nl'; // Default to Dutch if locale is invalid
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
