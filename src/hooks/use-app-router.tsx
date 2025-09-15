import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from '@/components/layout/dashboard'
import { SettingsPage } from '@/pages/settings'
import { WelcomePage } from '@/pages/welcome'

export const useAppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        { index: true, element: <WelcomePage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
  ])
  return router
}
