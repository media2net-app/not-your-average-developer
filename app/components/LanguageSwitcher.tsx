'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('language')
  const [isOpen, setIsOpen] = useState(false)

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher">
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('select')}
      >
        <span className="language-icon">🌐</span>
        <span className="current-language">
          {locale === 'nl' ? 'NL' : 'EN'}
        </span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${locale === 'nl' ? 'active' : ''}`}
            onClick={() => switchLanguage('nl')}
          >
            <span className="flag">🇳🇱</span>
            <span>{t('dutch')}</span>
          </button>
          <button
            className={`language-option ${locale === 'en' ? 'active' : ''}`}
            onClick={() => switchLanguage('en')}
          >
            <span className="flag">🇬🇧</span>
            <span>{t('english')}</span>
          </button>
        </div>
      )}
    </div>
  )
}
