import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import cnCommon from '@/locales/cn-common.json'
import enCommon from '@/locales/en-common.json'

const resources = {
  en: {
    common: enCommon,
  },
  zh: {
    common: cnCommon,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'navigator', 'localStorage'],
      lookupQuerystring: 'lang',
    },
    ns: ['common'],
    defaultNS: 'common',
  })

export default i18n
