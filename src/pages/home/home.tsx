import { useTranslation } from 'react-i18next'
import { AppHeader } from '@/components/layout/app-header'
import { LangSwitcher } from '@/components/layout/lang-switch'
import { ThemeSwitcher } from '@/components/layout/theme-switch'
import { TopNav } from '@/components/layout/top-nav'
import { ComingSoon } from '@/components/misc/coming-soon'

export const HomePage = () => {
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
    <>
      <AppHeader>
        <TopNav links={topNavMenus} />
        <div className="ms-auto flex items-center space-x-4">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </AppHeader>
      <ComingSoon />
    </>
  )
}
