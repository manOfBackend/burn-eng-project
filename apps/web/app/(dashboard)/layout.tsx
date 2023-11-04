import BottomNavigationBar from "@/components/bottom-navigation-bar"
import { Shell } from "@/components/shell"
import { Card, CardContent } from "@sayvoca/ui/card"

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-screen w-full overflow-y-scroll overscroll-y-none">
      <Shell layout="dashboard">
        <Card className="pt-8">
          <CardContent className="grid gap-4">{children}</CardContent>
        </Card>
      </Shell>
      <BottomNavigationBar />
    </div>
  )
}
