'use client'

import { AddWord, InputSentence } from '@sayvoca/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitWriting } from '@sayvoca/lib'
import { addWordSchema, sentenceInputSchema } from '@sayvoca/lib/validations'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@sayvoca/ui'
import { Icons } from '@sayvoca/ui/Icons'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import SentenceFeedbackChart from './sentence-feedback-chart'

export default function WritingProblemForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: '',
    },
  })

  const { mutate, data } = useMutation({
    mutationKey: ['writing'],
    mutationFn: submitWriting,
    onSuccess: (data) => {
      router.push('/writing/result')
    }
  })


  function onSubmit(data: InputSentence) {
    startTransition(async () => {
      await mutate({
        sentenceId: 2,
        translatedLanguage: 'ENGLISH',
        translatedSentence: data.sentence,
      })
    })
  }


  return (
    <section>
      <Form {...form}>
        <section className='pb-4'>
          <div className='flex justify-between'>
            <h2 className='mb-2 font-bold'>문제</h2>
            <p>레벨 4</p>
          </div>
          <p className='text-base font-semibold ml-2 text-green-900'>너가 아니였으면, 나는 정말 힘들었을 거야</p>
        </section>
        <section>
          <form
            className="grid gap-4"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name="sentence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold'>작문</FormLabel>
                  <FormControl>
                    <Input className='ml-2' {...field} />
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
              제출
              <span className="sr-only">제출</span>
            </Button>
          </form>
        </section>
      </Form>
    </section >
  )
}
