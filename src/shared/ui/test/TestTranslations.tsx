"use client"
import { useTranslations } from 'next-intl'

export default function TestTranslations() {
  const t = useTranslations()
  
  return (
    <div className="p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg m-4">
      <h2 className="text-lg font-bold mb-2">Тест переводов:</h2>
      <p>about.mission: {t('about.mission')}</p>
      <p>about.title: {t('about.title')}</p>
      <p>about.description: {t('about.description')}</p>
    </div>
  )
}
