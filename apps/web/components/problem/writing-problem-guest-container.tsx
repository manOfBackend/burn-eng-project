"use client"

import { useFeedbackStore } from "@/store/feedback"
import { useGuestStore } from "@/store/guest"
import { getSentenceProblem, submitGuestWriting } from "@sayvoca/lib/api"
import { InputSentence } from "@sayvoca/lib/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import WritingProblemForm from "./writing-problem-form"
import WritingWaitingView from "./writing-waiting-view"

export default function WritingGuestProblemContainer() {
  const router = useRouter()

  const { level, setLevel } = useGuestStore()

  const { addFeedback, setProblem } = useFeedbackStore()

  const { data: problem } = useQuery({
    queryKey: ["sentence-random-guest"],
    staleTime: 60 * 1000 * 10,
    queryFn: () => getSentenceProblem({ level }),
  })

  const {
    mutate: submit,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["writing-guest"],
    mutationFn: submitGuestWriting,
    useErrorBoundary: true,
    onSuccess: (data) => {
      addFeedback(data)
      if (data.feedbackResult === "PASS" && level < 5) {
        setLevel(level + 1)
      }
      router.replace(`/guest/writing/result`)
    },
  })

  function onSubmit(data: InputSentence) {
    if (!problem) return
    setProblem(problem)
    submit({
      sentenceId: problem.id,
      translatedLanguage: "ENGLISH",
      translatedSentence: data.sentence,
    })
  }

  if (!problem) return null

  if (isLoading || isSuccess) {
    return <WritingWaitingView />
  }
  return (
    <WritingProblemForm
      percentageOfCorrectAnswers={problem.percentageOfCorrectAnswers}
      isLoading={isLoading || isSuccess}
      level={problem.level}
      problem={problem.sentence}
      onSubmit={onSubmit}
    />
  )
}
