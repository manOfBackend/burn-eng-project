import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@sayvoca/lib/utils"
import { buttonVariants } from "@sayvoca/ui"
import { Icons } from "@sayvoca/ui"
import { UserAuthForm } from "components/user-auth-form"

export const metadata: Metadata = {
  title: "로그인",
  description: "로그인 페이지",
}

export default function LoginPage() {
  return (
    <div className="container flex h-full w-full flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-8 w-8" />
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            로그인
          </h1>
          <p className="text-sm text-muted-foreground">
            이 사이트의 개발자 이름은?
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  )
}
