import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@sayvoca/ui/card";
import { Shell } from "@/components/shell";
import SignInForm from "@/components/signin-form";
import Link from "next/link";

export default function Page() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">로그인</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center space-x-2">
          <div className="flex-1 text-sm text-muted-foreground">
            <Link
              aria-label="Sign up"
              href="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              회원가입
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            href="/signin/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            비밀번호 초기화
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  );
}