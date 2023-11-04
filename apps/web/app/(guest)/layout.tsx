import { Shell } from "@/components/shell"
import WithPreviousLayout from "@/components/with-previous-layout"
import { Card, CardContent } from "@sayvoca/ui/card"

interface GuestLayoutProps {
  children: React.ReactNode
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className="h-screen w-full !max-w-[100vw] overflow-x-hidden overflow-y-scroll overscroll-none pb-[100px] pt-[50px]">
      <WithPreviousLayout />
      <Shell>
        <Card className="relative">
          <CardContent className="grid gap-4 pt-8">{children}</CardContent>
        </Card>
      </Shell>
    </div>
  )
}
