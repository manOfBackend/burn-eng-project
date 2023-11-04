import BottomNavigationBar from "@/components/bottom-navigation-bar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-screen w-full overflow-y-scroll overscroll-y-none">
      {children}
      <BottomNavigationBar />
    </div>
  )
}
