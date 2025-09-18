import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { AppNavGroups, AppTeamSwitcher } from './app-data'

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <AppTeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <AppNavGroups />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
