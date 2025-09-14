import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const t = await getTranslations('ambassador');

  return {
    title: t('meta.ambassador.title'),
    description: t('meta.ambassador.description'),
    keywords: t('meta.ambassador.keywords'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      url: "https://maetry.com/ambassador",
      type: 'website',
    },
  };
}

export default function AmbassadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
