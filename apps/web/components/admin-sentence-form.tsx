"use client"

import { InputSentence } from '@sayvoca/lib/types'
import { zodResolver } from "@hookform/resolvers/zod"
import { addSentence } from '@sayvoca/lib'
import { sentenceInputSchema } from '@sayvoca/lib/validations/word'
import { Button, Dialog, DialogContent, DialogTrigger, Input } from "@sayvoca/ui"
import { Icons } from '@sayvoca/ui/Icons'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sayvoca/ui/form"
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'


export default function AdminSentenceForm() {
  const [isPending, startTransition] = React.useTransition()

  const { mutate } = useMutation({
    mutationKey: ['addSentence'],
    mutationFn: addSentence,
  })

  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: '',
    },
  })

  function onSubmit(data: InputSentence) {
    startTransition(async () => {
      mutate(data)
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.addCircle
            className="mr-2 h-4 w-4"
            aria-hidden="true"
          />
          추가
          <span className="sr-only">추가</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <Form {...form}>
          <form
            className="grid gap-4"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name="sentence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>문장</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
              추가
              <span className="sr-only">추가</span>
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
