"use client"

import { InputWord } from '@/types'
import { zodResolver } from "@hookform/resolvers/zod"
import { addWord } from '@sayvoca/lib/fetch'
import { wordInputSchema } from '@sayvoca/lib/validations/word'
import { Button, Dialog, DialogContent, DialogTrigger, Input } from "@sayvoca/ui"
import { Icons } from '@sayvoca/ui/Icons'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sayvoca/ui/form"
import React from 'react'
import { useForm } from 'react-hook-form'


export default function AdminWordsForm() {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<InputWord>({
    resolver: zodResolver(wordInputSchema),
    defaultValues: {
      word: '',
      meaning: '',
    },
  })


  function onSubmit(data: InputWord) {
    startTransition(async () => {
      addWord(data.word, data.meaning ?? '')
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
              name="word"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>단어</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="meaning"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>뜻</FormLabel>
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
