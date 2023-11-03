'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { InputSentence } from '@sayvoca/lib/types'
import { sentenceInputSchema } from '@sayvoca/lib/validations'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@sayvoca/ui'
import { Icons } from '@sayvoca/ui/Icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function VocaListAddForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: '',
    },
  })


  function onSubmit(data: InputSentence) {

  }


  return (
    <section>
      <Form {...form}>
        <section className='pb-4'>
          <div className='flex justify-between'>
            <h2 className='mb-2 font-bold'>문제</h2>
            <p>레벨 4</p>
          </div>
          <p className='ml-2 text-base font-semibold text-green-900'>너가 아니였으면, 나는 정말 힘들었을 거야</p>
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
      <section className='mt-4'>
        <h2 className='mb-2 font-bold'>피드백</h2>
        <div className='ml-2 flex gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>의미정확도</p>
            <p className='text-base font-semibold text-green-900'>90%</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>문법정확도</p>
            <p className='text-base font-semibold text-green-900'>80%</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>자연스러움</p>
            <p className='text-base font-semibold text-green-900'>70%</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>종합점수</p>
            <p className='text-base font-semibold text-green-900'>90점</p>
          </div>
        </div>
        <div className='mt-4 h-52 w-full border-2 border-solid'>

        </div>
      </section>
    </section >
  )
}
