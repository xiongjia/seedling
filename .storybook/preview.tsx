import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { withThemeByClassName } from '@storybook/addon-themes'
import { I18nDecorator } from './i18n-decorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
    (Story, context) => (
      <I18nDecorator storyContext={context}>
        <Story {...context} />
      </I18nDecorator>
    ),
  ],
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'zh', title: '中文 (Chinese)' },
      ],
      showName: true,
    },
  },
}

export default preview
