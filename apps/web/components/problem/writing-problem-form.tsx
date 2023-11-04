"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputSentence } from "@sayvoca/lib/types"
import { sentenceInputSchema } from "@sayvoca/lib/validations"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@sayvoca/ui"
import { Icons } from "@sayvoca/ui/Icons"
import { useForm } from "react-hook-form"

interface WritingProblemFormProps {
  level: number
  problem: string
  onSubmit: (data: InputSentence) => void
  isLoading?: boolean
}
export default function WritingProblemForm({
  level,
  problem,
  onSubmit,
  isLoading,
}: WritingProblemFormProps) {
  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: "",
    },
  })

  return (
    <section className="h-full">
      <Form {...form}>
        <section className="pb-4">
          <div className="flex justify-between">
            <h2 className="mb-2 font-bold">문제</h2>
            <p>레벨 {level}</p>
          </div>
          <p className="ml-2 text-base font-semibold text-green-900">
            {problem}
          </p>
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
                  <FormLabel className="font-bold">작문</FormLabel>
                  <FormControl>
                    <Input className="ml-2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading || !problem}>
              {isLoading && (
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
    </section>
  )
}
