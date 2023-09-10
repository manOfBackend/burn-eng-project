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
      <article className=''>
        <div className="">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div>
                    <p>Cy Ganderton</p>
                    <p className='text-purple-400'>해석입니다.</p>
                  </div>
                </td>
                <td><Button>선택</Button></td>
              </tr>
              <tr>
                <th>2</th>
                <td>
                  <div>
                    <p>Cy Ganderton</p>
                    <p className='text-purple-400'>해석입니다.</p>
                  </div>
                </td>
                <td><Button>선택</Button></td>
              </tr>
              <tr>
                <th>3</th>
                <td>
                  <div>
                    <p>Cy Ganderton</p>
                    <p className='text-purple-400'>해석입니다.</p>
                  </div>
                </td>
                <td><Button>선택</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
