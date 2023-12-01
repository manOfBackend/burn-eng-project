import BottomNavigationBar from "@/components/bottom-navigation-bar"
import { Shell } from "@/components/shell"
import WithPreviousLayout from "@/components/with-previous-layout"
import { Card, CardContent } from "@sayvoca/ui/card"

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="scrollbar-none h-screen w-full !max-w-[100vw] overflow-x-hidden overflow-y-scroll overscroll-none py-[50px]">
      <WithPreviousLayout />
      <Shell>
        <Card className="relative">
          <CardContent className="grid gap-4 pt-8">{children}</CardContent>
        </Card>
      </Shell>
      <BottomNavigationBar />
    </div>
  )
}
