import { Shell } from "@/components/shell";
import SignUpForm from "@/components/signup-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@sayvoca/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignUpForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center space-x-2">
          <div className="flex-1 text-sm text-muted-foreground">
            <Link
              aria-label="Sign up"
              href="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              로그인하기
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
}