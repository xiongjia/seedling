// import { Home, Settings } from 'lucide-react'
// import { useTranslation } from 'react-i18next'
// import { TeamSwitcher } from '@/components/layout/team-switch'

import { LayoutDashboard } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { NavGroup } from './nav-group'
import type { NavItem } from './nav-types'

export const AppSidebar = () => {
  const href = useLocation()

  console.log('href = ', href)

  const navGroupItems: NavItem[] = [
    {
      url: '/',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
  ]
  console.log('grp', navGroupItems)

  // const { t } = useTranslation()

  // const menuItems = [
  //   {
  //     title: t('home'),
  //     url: '/',
  //     icon: Home,
  //   },
  //   {
  //     title: t('settings'),
  //     url: 'settings',
  //     icon: Settings,
  //   },
  // ]

  return (
    <Sidebar>
      <SidebarHeader>{/* <TeamSwitcher teams={[]} /> */}</SidebarHeader>
      <SidebarContent>
        <NavGroup items={navGroupItems} title="test" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
