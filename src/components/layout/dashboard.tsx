import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/components/layout/app-header'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { LangSwitch } from '@/components/layout/lang-switch'
import { ThemeSwitch } from '@/components/layout/theme-switch'
import { TopNav } from '@/components/layout/top-nav'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export const Dashboard = () => {
  const { t } = useTranslation()
  const topNavMenus = [
    {
      title: t('top.menu1'),
      href: '#',
      isActive: true,
      disabled: true,
    },
    {
      title: t('top.menu2'),
      href: '#',
      isActive: false,
      disabled: true,
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset
        className={cn(
          // Set content container, so we can use container queries
          '@container/content',
          // If layout is fixed, set the height
          // to 100svh to prevent overflow
          'has-[[data-layout=fixed]]:h-svh',
          // If layout is fixed and sidebar is inset,
          // set the height to 100svh - spacing (total margins) to prevent overflow
          'peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]',
        )}
      >
        <AppHeader>
          <TopNav links={topNavMenus} />
          <div className="ms-auto flex items-center space-x-4">
            <LangSwitch />
            <ThemeSwitch />
          </div>
        </AppHeader>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
