import { Shell } from "@/components/shell"
import WithPreviousLayout from "@/components/with-previous-layout"
import { Card, CardContent } from "@sayvoca/ui/card"

interface VocaLayoutProps {
  children: React.ReactNode
}

export default function WritingLayout({ children }: VocaLayoutProps) {
  return (
    <div className="h-full w-full overflow-y-scroll">
      <WithPreviousLayout />
      <Shell>
        <Card className="relative">
          <CardContent className="grid gap-4">{children}</CardContent>
        </Card>
      </Shell>
    </div>
  )
}
