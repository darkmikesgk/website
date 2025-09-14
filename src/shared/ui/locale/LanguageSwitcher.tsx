"use client"
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'desktop' | 'mobile'
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '', 
  variant = 'desktop' 
}) => {
  const params = useParams()
  const locale = params.locale as string

  const isActive = (lang: string) => locale === lang

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Link
          href="/ru"
          className={`text-[14px] md:text-[16px] lg:text-[22px] transition-colors ${
            isActive('ru')
              ? 'text-purple-600 font-semibold'
              : 'text-light-text dark:text-dark-text hover:text-purple-600'
          }`}
        >
          RU
        </Link>
        <span className="text-light-text dark:text-dark-text">/</span>
        <Link
          href="/en"
          className={`text-[14px] md:text-[16px] lg:text-[22px] transition-colors ${
            isActive('en')
              ? 'text-purple-600 font-semibold'
              : 'text-light-text dark:text-dark-text hover:text-purple-600'
          }`}
        >
          EN
        </Link>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Link
        href="/ru"
        className={`text-[1.1vw] transition-colors ${
          isActive('ru')
            ? 'text-purple-600 font-semibold'
            : 'text-light-text dark:text-dark-text hover:text-purple-600'
        }`}
      >
        RU
      </Link>
      <span className="text-light-text dark:text-dark-text">/</span>
      <Link
        href="/en"
        className={`text-[1.1vw] transition-colors ${
          isActive('en')
            ? 'text-purple-600 font-semibold'
            : 'text-light-text dark:text-dark-text hover:text-purple-600'
        }`}
      >
        EN
      </Link>
    </div>
  )
}