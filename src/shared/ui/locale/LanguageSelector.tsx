"use client"

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface Language {
  key: string;
  name: string;
  shortName: string;
  flag: string;
}

interface LanguageSelectorProps {
  className?: string;
  variant?: 'desktop' | 'mobile';
}

const languages: Language[] = [
  { key: 'ru', name: 'Русский', shortName: 'RU', flag: 'ru' },
  { key: 'en', name: 'English', shortName: 'EN', flag: 'us' }
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  className = '', 
  variant = 'desktop' 
}) => {
  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as string) || 'ru';
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedLanguage = languages.find(language => language.key === locale) || languages[0];

  // Функция для создания ссылки с сохранением текущего пути
  const createLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname?.replace(`/${locale}`, '') || '/';
    return `/${newLocale}${pathWithoutLocale}`;
  };


  // Обработчик клика вне селектора
  const LANGUAGE_SELECTOR_ID = 'language-selector';
  useEffect(() => {
    const handleWindowClick = (event: Event) => {
      const target = event.target as Element;
      if (target && target.closest('button')?.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  if (variant === 'mobile') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 bg-white dark:bg-dark-bg text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          style={{ border: 'none', outline: 'none' }}
          id={LANGUAGE_SELECTOR_ID}
          aria-expanded={isOpen}
        >
          <span className={`fi fis fi-${selectedLanguage.flag} mr-2`} />
          {selectedLanguage.shortName}
          <svg
            className="-me-1 ms-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-bg ring-1 ring-black ring-opacity-5 z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={LANGUAGE_SELECTOR_ID}
          >
            <div className="py-1" role="none">
              {languages.map((language) => (
                <Link
                  key={language.key}
                  href={createLocalizedPath(language.key)}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    selectedLanguage.key === language.key
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-700 dark:text-dark-text"
                  } flex px-4 py-2 text-sm text-start items-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full`}
                  role="menuitem"
                >
                  <span className={`fi fis fi-${language.flag} mr-3`} />
                  <span className="truncate">{language.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 bg-white dark:bg-dark-bg text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        style={{ border: 'none', outline: 'none' }}
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        <span className={`fi fis fi-${selectedLanguage.flag} mr-2`} />
        {selectedLanguage.shortName}
        <svg
          className="-me-1 ms-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-bg ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <Link
                key={language.key}
                href={createLocalizedPath(language.key)}
                onClick={() => setIsOpen(false)}
                className={`${
                  selectedLanguage.key === language.key
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-dark-text"
                } flex px-4 py-2 text-sm text-start items-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full`}
                role="menuitem"
              >
                <span className={`fi fis fi-${language.flag} mr-3`} />
                <span className="truncate">{language.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
