import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/lib/i18n'

const I18nDecorator = ({ storyContext, children }) => {
  const { locale } = storyContext.globals
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export const withI18next = (Story, context) => {
  return (
    <I18nDecorator storyContext={context}>
      <Story {...context} />
    </I18nDecorator>
  )
}
