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
import { cn } from "@sayvoca/lib/utils"
interface WritingProblemFormProps {
  level: number
  percentageOfCorrectAnswers: number
  problem: string
  onSubmit: (data: InputSentence) => void
  isLoading?: boolean
}
export default function WritingProblemForm({
  level,
  percentageOfCorrectAnswers,
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
    <section className="scrollbar-none relative h-full !max-w-[100vw] overflow-x-hidden overflow-y-scroll overscroll-none">
      <Form {...form}>
        <section className="pb-4">
          <div className="mb-3 flex flex-nowrap justify-between">
            <h2 className="mb-2 font-bold">문제</h2>
            <div className="flex flex-nowrap gap-1">
              <p className="whitespace-nowrap rounded-md bg-blue-400 px-2 py-1 font-bold text-white">
                레벨 {level}
              </p>
              <p className={cn("whitespace-nowrap rounded-md px-2 py-1 font-bold text-white", {
                "bg-green-400": percentageOfCorrectAnswers >= 70,
                "bg-yellow-400": percentageOfCorrectAnswers < 70 && percentageOfCorrectAnswers >= 30,
                "bg-red-400": percentageOfCorrectAnswers < 30,
              })}>
                정답률 {Number(percentageOfCorrectAnswers.toFixed(2))}%
              </p>
            </div>
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
