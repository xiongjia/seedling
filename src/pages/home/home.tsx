import { useTranslation } from 'react-i18next'
import { AppHeader } from '@/components/layout/app-header'
import { LangSwitcher } from '@/components/layout/lang-switch'
import { Main } from '@/components/layout/main'
import { ThemeSwitcher } from '@/components/layout/theme-switch'
import { TopNav } from '@/components/layout/top-nav'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { HomeCards } from './cards'
import { Overview } from './overview'
import { RecentSales } from './recent-sales'

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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              <Card className="col-span-1 lg:col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="ps-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}
