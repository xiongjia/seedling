import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export const Dashboard = () => {
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
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
