import { Manrope } from "next/font/google"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={manrope.className}>
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
