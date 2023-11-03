interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="mb-[200px] h-full w-full overflow-y-scroll pb-10">
      {children}
    </div>
  )
}
