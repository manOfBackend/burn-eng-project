import DashboardForm from "@/components/dashboard-form";
import { Shell } from "@/components/shell";
import { Card, CardContent, CardHeader, CardTitle } from "@sayvoca/ui/card";

export default function Page() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">잠만보카</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <DashboardForm />
        </CardContent>
      </Card>
    </Shell>
  );
}