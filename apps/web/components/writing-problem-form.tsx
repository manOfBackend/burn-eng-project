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
  })


  function onSubmit(data: InputSentence) {
    startTransition(() => {
      mutate({
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
      <section className='mt-4'>
        <h2 className='font-bold mb-2'>피드백</h2>
        <div className='h-[200px] w-full'>
          <SentenceFeedbackChart />
        </div>
        <div className='flex gap-4 ml-2'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>의미정확도</p>
            <p className='text-base font-semibold text-green-900'>{data?.meaningAccuracy}%</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>문법정확도</p>
            <p className='text-base font-semibold text-green-900'>{data?.grammarAccuracy}%</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>자연스러움</p>
            <p className='text-base font-semibold text-green-900'>{data?.naturalness}%</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>종합점수</p>
            <p className='text-base font-semibold text-green-900'>{data?.overallEvaluationScore}점</p>
          </div>
        </div>
        <div className='h-52 w-full mt-4 border-solid border-2 p-2'>
          {data?.advice}
        </div>
        <ul className='mt-4 flex flex-col'>
          {data?.betterTranslatedSentences?.map((sentence, index) => (
            <li key={index} className='border-solid border-2 p-2'>
              {sentence}
            </li>
          ))
          }
        </ul>
      </section>
    </section >
  )
}
