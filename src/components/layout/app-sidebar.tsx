import { Fingerprint, LayoutDashboard, Shell } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { type TeamItem, TeamSwitcher } from '@/components/layout/team-switch'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { NavGroup } from './nav-group'
import type { NavItem } from './nav-types'

export const AppSidebar = () => {
  const { t } = useTranslation()

  // APP teams
  const appTeams: TeamItem[] = [
    {
      name: t('team.admin'),
      logo: Shell,
      plan: t('team.admin.plan'),
    },
    {
      name: t('team.test1'),
      logo: Fingerprint,
      plan: t('team.test1.plan'),
    },
  ]

  const navGroupItems: NavItem[] = [
    {
      url: '/',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
  ]

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
      <SidebarHeader>
        <TeamSwitcher teams={appTeams} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroup items={navGroupItems} title="test" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
