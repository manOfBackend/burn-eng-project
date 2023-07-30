import { Shell } from '@/components/shell'
import React from 'react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Shell>
      {children}
    </Shell>
  )
}
