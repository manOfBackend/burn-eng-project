import BottomNavigationBar from "@/components/bottom-navigation-bar"
import { Shell } from "@/components/shell"
import { Card, CardContent } from "@sayvoca/ui/card"

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="scrollbar-none h-screen w-full !max-w-[100vw] overflow-x-hidden overflow-y-scroll overscroll-none pb-[50px]">
      <Shell layout="dashboard">
        <Card className="pt-8">
          <CardContent className="grid gap-4">{children}</CardContent>
        </Card>
      </Shell>
      <BottomNavigationBar />
    </div>
  )
}
