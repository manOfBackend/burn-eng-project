"use client"
import { useFeedbackStore } from "@/store/feedback"
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
  sentenceId: number
  onSubmit: (data: InputSentence) => void
  isLoading?: boolean
}
export default function WritingProblemForm({
  level,
  problem,
  onSubmit,
  sentenceId,
  isLoading,
}: WritingProblemFormProps) {
  const { userInputSentence } = useFeedbackStore()

  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: userInputSentence?.get(sentenceId)?.sentence ?? "",
    },
  })

  return (
    <section className="h-full !max-w-[100vw] scrollbar-none overflow-x-hidden overflow-y-scroll overscroll-none">
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
                  <div className="px-2">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button disabled={isLoading || !problem} variant={"submit"}>
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
