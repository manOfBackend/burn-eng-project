import { Shell } from "@/components/shell";
import VocaListForm from "@/components/voca-list-form";
import { Card, CardContent } from "@sayvoca/ui/card";
export default function Page() {
  return (
    <Shell layout="dashboard">
      <Card className="pt-8">
        <CardContent className="grid gap-4">
          <VocaListForm />
        </CardContent>
      </Card>
    </Shell>
  );
}