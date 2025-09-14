import React from "react"
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Script from 'next/script';

import { LandingLayout } from "@/widgets/landing-layout"

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}): Promise<Metadata> {
  // Простая локализация метаданных
  const metadata = {
    ru: {
      title: "Maetry - Info Page",
      description: "Автоматизируйте бизнес-процессы"
    },
    en: {
      title: "Maetry - Info Page", 
      description: "Automate your business processes"
    }
  };

  const t = metadata[locale as keyof typeof metadata] || metadata.ru;

  return {
    title: t.title,
    description: t.description,
    keywords: "maetry,beauty salon,booking,management,appointment,crm,automation,salon,service,nails,lashes,barber",
    openGraph: {
      title: "Maetry",
      description: t.description,
      url: "https://maetry.com",
      siteName: "Maetry",
      images: [
        {
          url: "https://maetry.com/_next/static/media/logo.30e07f0a.svg",
        },
      ],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Maetry",
      description: t.description,
      images: ["https://maetry.com/_next/static/media/logo.30e07f0a.svg"],
    },
  };
}

export default async function LandingPage({
  params: {locale}
}: {
  params: {locale: string};
}) {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Maetry",
            url: "https://maetry.com",
            logo: "https://maetry.com/images/tild3031-3665-4331-b066-353633643661__photo.svg",
            sameAs: [
              "https://www.instagram.com/maetry.co",
              "https://t.me/maetry_app",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-818-877-8913",
              contactType: "Customer Service",
              areaServed: "US",
            },
          }),
        }}
      />
      

      <LandingLayout />
    </>
  )
}
