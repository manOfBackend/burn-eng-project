import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@sayvoca/ui/card";
import { Shell } from "@/components/shell";
import SignInForm from "@/components/signin-form";
import Link from "next/link";
import { ZammanboLottie } from "@sayvoca/ui";

export default function Page() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1">
          <div className="mb-5 flex min-h-[375px] items-center justify-center">
            <ZammanboLottie className='max-w-xs' />
          </div>
          <CardTitle className="text-center text-2xl">Hi</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center space-x-2">
          <div className="text-muted-foreground flex-1 text-sm">
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
            className="text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            비밀번호 초기화
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  );
}