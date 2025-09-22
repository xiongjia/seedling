import { useTranslation } from 'react-i18next'
import { AppHeader } from '@/components/layout/app-header'
import { LangSwitcher } from '@/components/layout/lang-switch'
import { Main } from '@/components/layout/main'
import { ThemeSwitcher } from '@/components/layout/theme-switch'
import { TopNav } from '@/components/layout/top-nav'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { IconMoney } from '@/icons'

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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <IconMoney />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-muted-foreground text-xs">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-muted-foreground text-xs">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-muted-foreground text-xs">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-muted-foreground text-xs">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}
