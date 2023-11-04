import { Shell } from "@/components/shell"
import WithPreviousLayout from "@/components/with-previous-layout"
import React from "react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="pt-[50px]">
      <WithPreviousLayout />
      <Shell>{children}</Shell>
    </div>
  )
}
