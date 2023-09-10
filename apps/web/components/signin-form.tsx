"use client"

import { Inputs } from '@/types'
import { signinErrorMessages } from '@/utils/errorMessage'
import { useSignIn } from '@clerk/nextjs'
import { zodResolver } from "@hookform/resolvers/zod"
import { userAuthSchema } from "@sayvoca/lib/validations/auth"
import { Button, Icons, Input, PasswordInput, useToast } from "@sayvoca/ui"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sayvoca/ui/form"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [isPending, startTransition] = React.useTransition()

  const router = useRouter()

  const { toast } = useToast()

  const form = useForm<Inputs>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  function onSubmit(data: Inputs) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        })

        if (result.status === "complete") {

          await setActive({ session: result.createdSessionId })

          router.push(`${window.location.origin}/dashboard`)
        } else {
          console.log(result)
        }
      } catch (error: any) {
        toast({
          title: signinErrorMessages.get(error.errors[0].code) ?? '알 수 없는 오류'
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
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          로그인
          <span className="sr-only">로그인</span>
        </Button>
      </form>
    </Form>
  )
}
