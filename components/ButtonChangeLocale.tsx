"use client"
import { useRouter } from "next/navigation"
import React from "react"

interface LocaleProps {
  locale: string
}

const ButtonChangeLocale = ({ locale }: LocaleProps) => {
  const router = useRouter()

  return (
    <button className="mr-[3%]" onClick={() => router.push(`/${locale}`)}>
      {locale}
    </button>
  )
}

export default ButtonChangeLocale
