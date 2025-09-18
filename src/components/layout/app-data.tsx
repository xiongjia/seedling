import { Fingerprint, LayoutDashboard, Settings, Shell } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { type TeamItem, TeamSwitcher } from '@/components/layout/team-switch'
import { NavGroup } from './nav-group'
import type { NavGroupProps } from './nav-types'

export const AppTeamSwitcher = () => {
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
  return <TeamSwitcher teams={appTeams} />
}

export const AppNavGroups = () => {
  // APP siderbar menus
  const navGroups: NavGroupProps[] = [
    {
      title: 'General',
      items: [
        {
          url: '/',
          title: 'Dashboard',
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: 'Others',
      items: [
        {
          url: '/settings',
          title: 'Settings',
          icon: Settings,
        },
      ],
    },
  ]

  return (
    <>
      {navGroups.map((props) => (
        <NavGroup key={props.title} {...props} />
      ))}
    </>
  )
}
