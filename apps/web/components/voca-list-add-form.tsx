'use client'

import { AddWord } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { addWordSchema } from '@sayvoca/lib/validations'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@sayvoca/ui'
import { Icons } from '@sayvoca/ui/Icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function VocaListAddForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddWord>({
    resolver: zodResolver(addWordSchema),
    defaultValues: {
      word: '',
      meaning: ''
    },
  })


  function onSubmit(data: AddWord) {

  }


  return (
    <section>
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
                  <Input placeholder="apple" {...field} />
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
                  <Input placeholder="사과" {...field} />
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
            문장 생성
            <span className="sr-only">문장 생성</span>
          </Button>
        </form>
      </Form>
      <article className='flex flex-col gap-4 pt-4'>
        <div className='flex flex-col gap-2'>
          <div className="grid grid-cols-[1fr_8fr] gap-4 justify-center items-center">
            <p className='font-bold'>1</p>
            <div>
              <p>Cy Gandertony Ganderton</p>
              <p className='text-purple-400'>해석입니다.</p>
            </div>
          </div>
          <Button><Icons.check /></Button>
        </div>
        <div className='flex flex-col gap-2'>
          <div className="grid grid-cols-[1fr_8fr] gap-4 justify-center items-center">
            <p className='font-bold'>2</p>
            <div>
              <p>Cy Gandertony Ganderton</p>
              <p className='text-purple-400'>해석입니다.</p>
            </div>
          </div>
          <Button><Icons.check /></Button>
        </div>
        <div className='flex flex-col gap-2'>
          <div className="grid grid-cols-[1fr_8fr] gap-4 justify-center items-center">
            <p className='font-bold'>3</p>
            <div>
              <p>Cy Gandertony Ganderton</p>
              <p className='text-purple-400'>해석입니다.</p>
            </div>
          </div>
          <Button><Icons.check /></Button>
        </div>
      </article>
    </section>
  )
}
