import { Shell } from "@/components/shell"
import { Card, CardContent } from "@sayvoca/ui/card"

interface VocaLayoutProps {
  children: React.ReactNode
}

export default function WritingLayout({ children }: VocaLayoutProps) {
  return <div className="h-full w-full">
    <Shell layout="dashboard">
      <Card className="pt-8">
        <CardContent className="grid gap-4">
          {children}
        </CardContent>
      </Card>
    </Shell>
  </div>
}
