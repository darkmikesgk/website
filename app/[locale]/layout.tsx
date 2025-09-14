import { Manrope } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/shared/config/i18n';

import type { Metadata } from "next"

import "@/styles/globals.css"
import { StoreProvider } from "@/shared/store"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maetry",
  description: "Automate your business processes",
  icons: {
    icon: "/images/favicon.png",
  },
}

export function generateStaticParams(): { locale: string }[] {
  return locales.map((locale: string) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Проверяем, что локаль поддерживается
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html className={manrope.className} lang={locale}>
      <head>
        <link rel="icon" sizes="16x16" href="/images/favicon.png" />
        <link rel="icon" sizes="32x32" href="/images/favicon.png" />
      </head>
      <body className="dark:bg-dark-bg dark:text-dark-text flex flex-col relative">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
