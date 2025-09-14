import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Список поддерживаемых локалей
export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];

// Локаль по умолчанию
export const defaultLocale: Locale = 'ru';

export default getRequestConfig(async ({ locale }) => {
  // Проверяем, что локаль поддерживается
  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
