import { useEffect, useState } from 'react'
import i18n from '@/lib/i18n'

type SupportedLanguage = 'en' | 'zh'

export const useLanguage = () => {
  const [language, setLanguage] = useState<SupportedLanguage>(
    ((): SupportedLanguage => {
      const curLang = i18n.language.split('-')[0]
      if (curLang !== 'en' && curLang !== 'zh') {
        return 'en'
      }
      return curLang
    })(),
  )
  const changeLanguage = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng)
  }
  useEffect(() => {
    const onLanguageChange = (lng: string) => {
      let baseLng = lng.split('-')[0] as SupportedLanguage
      if (baseLng !== 'en' && baseLng !== 'zh') {
        baseLng = 'en'
      }
      setLanguage(baseLng)
    }
    i18n.on('languageChanged', onLanguageChange)
    return () => {
      i18n.off('languageChanged', onLanguageChange)
    }
  }, [])
  return [language, changeLanguage] as const
}
