import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from '@/components/layout/dashboard'
import { HomePage } from '@/pages/home/home'
import { SettingsPage } from '@/pages/settings'

export const useAppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
  ])
  return router
}
