import { useTranslation } from 'react-i18next'
import { AppHeader } from '@/components/layout/app-header'
import { LangSwitcher } from '@/components/layout/lang-switch'
import { Main } from '@/components/layout/main'
import { ThemeSwitcher } from '@/components/layout/theme-switch'
import { TopNav } from '@/components/layout/top-nav'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import {HomeCards } from './cards'

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
      <Main>
        <Tabs
          orientation="vertical"
          defaultValue="overview"
          className="space-y-4"
        >
          <TabsContent value="overview" className="space-y-4">
            <HomeCards />
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}
