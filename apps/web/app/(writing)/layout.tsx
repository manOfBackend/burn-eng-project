import BottomNavigationBar from "@/components/bottom-navigation-bar"
import { Shell } from "@/components/shell"
import WithDailyGoalLayout from "@/components/with-daily-goal-layout"
import WithPreviousLayout from "@/components/with-previous-layout"
import { Card, CardContent } from "@sayvoca/ui/card"

interface VocaLayoutProps {
  children: React.ReactNode
}

export default function WritingLayout({ children }: VocaLayoutProps) {
  return (
    <div className="scrollbar-none h-screen w-full overflow-x-hidden overflow-y-scroll overscroll-none pb-[150px] pt-[50px]">
      <WithDailyGoalLayout />
      <Shell>
        <Card className="relative">
          <CardContent className="scrollbar-none grid gap-4 pt-8">
            {children}
          </CardContent>
        </Card>
      </Shell>
      <BottomNavigationBar />
    </div>
  )
}
