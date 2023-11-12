"use client"

import { useFeedbackStore } from "@/store/feedback"
import {
  getSentenceProblem,
  getUserInfo,
  submitWriting,
} from "@sayvoca/lib/api"
import { InputSentence } from "@sayvoca/lib/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import WritingProblemForm from "./writing-problem-form"
import WritingWaitingView from "./writing-waiting-view"

export default function WritingProblemContainer() {
  const router = useRouter()

  const { addFeedback, setUserInputSentence, setProblem } = useFeedbackStore()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const { data: problem } = useQuery({
    queryKey: ["sentence-random"],
    queryFn: () => getSentenceProblem(),
    staleTime: 60 * 1000 * 10,
    enabled: Boolean(user),
  })

  const {
    mutate: submit,
    isLoading,
    isError,
    reset,
    isSuccess,
  } = useMutation({
    mutationKey: ["writing"],
    mutationFn: submitWriting,
    useErrorBoundary: true,
    onSuccess: (data) => {
      addFeedback(data)
      router.replace(`/writing/result`)
    },
  })

  function onSubmit(data: InputSentence) {
    if (!problem) return
    setUserInputSentence(problem.id, data)
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
      isLoading={isLoading || isSuccess}
      sentenceId={problem.id}
      level={problem.level}
      problem={problem.sentence}
      onSubmit={onSubmit}
    />
  )
}
