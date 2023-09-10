import { Shell } from "@/components/shell";
import VocaListAddForm from "@/components/voca-list-add-form";
import { Card, CardContent } from "@sayvoca/ui/card";
export default function Page() {
  return (
    <Shell layout="dashboard">
      <Card className="pt-8">
        <CardContent className="grid gap-4">
          <VocaListAddForm />
        </CardContent>
      </Card>
    </Shell>
  );
}