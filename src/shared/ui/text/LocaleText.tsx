"use client"
import React from "react"
import { useParams } from 'next/navigation'

interface LocaleTextProps {
  ru: string
  en: string
  id: number
  className?: string
}

const LocaleText = ({ ru, en, id, className }: LocaleTextProps) => {
  const params = useParams()
  const locale = params.locale as string
  
  const text = locale === 'ru' ? ru : en

  switch (id) {
    case 1:
      return (
        <h1 className={`text-[8.5vw] xl:text-[3.75vw] font-medium leading-none tracking-tight ${className || ''}`}>
          {text}
        </h1>
      )
    case 2:
      return <p className={`text-[4vw] xl:text-[1.167vw] font-light ${className || ''}`}>{text}</p>
    case 3:
      return (
        <p className={`text-[4vw] xl:text-[1.333vw] dark:text-dark-text/40 text-lightText/40 ${className || ''}`}>
          {text}
        </p>
      )
    case 4:
      return (
        <h3 className={`text-[4vw] xl:text-[1.2vw] font-medium leading-none tracking-tight ${className || ''}`}>
          {text}
        </h3>
      )
    case 5:
      return (
        <div className="GradientAnimation_gradient__text__7I6CI">
          <p className={`xl:text-[1.1vw] text-[3vw] ${className || ''}`}>{text}</p>
        </div>
      )
    case 6:
      return (
        <p className={`text-[6vw] xl:text-[2vw] font-medium leading-none tracking-tight ${className || ''}`}>
          {text}
        </p>
      )
    case 7:
      return (
        <p className={`text-[4vw] xl:text-[1.333vw] text-dark-text/40 dark:text-lightText/40 ${className || ''}`}>
          {text}
        </p>
      )
    default:
      return <p className={className}>{text}</p>
  }
}

export default LocaleText
