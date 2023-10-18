import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@sayvoca/ui/navigation-menu'
import React from 'react'

interface AdminLayoutProps {
  children: React.ReactNode,

}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
