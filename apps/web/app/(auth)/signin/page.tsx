import { Shell } from "@/components/shell"
import SignInForm from "@/components/signin-form"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@sayvoca/ui/card"
import Link from "next/link"

export default function Page() {
  return (
    <Shell layout="auth" className="grid h-screen">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl">
            <section></section>
            <span className="text-red-700">Burn</span> English
          </CardTitle>
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
  )
}
