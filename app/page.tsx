import React from "react"
import { LandingLayout } from "@/widgets/landing-layout"
import Head from "next/head"

export default function LandingPage() {
  return (
    <>
      <Head>
        <script
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

        <html lang="en"></html>
        <title>Maetry - Info Page</title>
        <meta
          name="description"
          content="Efficient Management of Your Beauty Salon and Business Download Maetry and take your beauty business to the next level!"
        />
        <meta
          name="keywords"
          content="maetry,beauty salon,booking,management,appointment,crm,automation,salon,service,nails,lashes,barber"
        />

        {/* main */}

        <meta property="og:title" content="Maetry" />
        <meta
          property="og:description"
          content="IT-service for beauty industry"
        />
        <meta
          property="og:image"
          content="https://maetry.com/_next/static/media/logo.30e07f0a.svg"
        />
        <meta property="og:url" content="https://maetry.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Maetry" />
        {/* OpenGraph */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maetry" />
        <meta
          name="twitter:description"
          content="IT-service for beauty industry"
        />
        <meta
          name="twitter:image"
          content="https://maetry.com/_next/static/media/logo.30e07f0a.svg"
        />

        {/* TwitterCards */}
      </Head>

      <LandingLayout />
    </>
  )
}
