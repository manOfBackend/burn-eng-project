import BottomNavigationBar from "@/components/bottom-navigation-bar"
import { Shell } from "@/components/shell"
import WithPreviousLayout from "@/components/with-previous-layout"
import { Card, CardContent } from "@sayvoca/ui/card"

interface VocaLayoutProps {
  children: React.ReactNode
}

export default function WritingLayout({ children }: VocaLayoutProps) {
  return (
    <div className="h-screen w-full !max-w-[100vw] overflow-x-hidden overflow-y-scroll overscroll-none pt-[50px] pb-[150px]">
      <WithPreviousLayout />
      <Shell>
        <Card className="relative">
          <CardContent className="grid gap-4 pt-8 overscroll-none overflow-y-scroll">{children}</CardContent>
        </Card>
      </Shell>
      <BottomNavigationBar />
    </div>
  )
}
