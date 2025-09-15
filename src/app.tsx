import './index.css'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/context/theme-provider'
import { useAppRouter } from '@/hooks/use-app-router'
import i18n from '@/lib/i18n'

export const App = () => {
  const router = useAppRouter()

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nextProvider>
  )
}
