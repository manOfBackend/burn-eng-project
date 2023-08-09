"use client"

import { Inputs } from '@/types'
import { signUpErrorMessages } from '@/utils/errorMessage'
import { useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { userAuthSchema } from '@sayvoca/lib/validations/auth'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Icons, Input, PasswordInput, useToast } from '@sayvoca/ui'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function SignUpForm() {
  const router = useRouter()
  const { isLoaded, signUp } = useSignUp()
  const [isPending, startTransition] = React.useTransition()

  const { toast } = useToast()

  const form = useForm<Inputs>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: Inputs) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        await signUp.create({
          emailAddress: data.email,
          password: data.password,
        })

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        })

        router.push("/signup/verify-email")

      } catch (error: any) {
        toast({
          title: signUpErrorMessages.get(error.errors[0].code) ?? '알 수 없는 오류가 발생했습니다.'
        })
      }
    })
  }
  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="hyunbell@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          계속하기
          <span className="sr-only">계속하기</span>
        </Button>
      </form>
    </Form>
  )
}
