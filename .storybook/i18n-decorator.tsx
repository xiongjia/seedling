import type { StoryContext } from '@storybook/react-vite'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/lib/i18n'

type I18nDecoratorProps = {
  children: React.ReactNode
  storyContext: StoryContext
}

export const I18nDecorator = ({
  storyContext,
  children,
}: I18nDecoratorProps) => {
  const { locale } = storyContext.globals
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
