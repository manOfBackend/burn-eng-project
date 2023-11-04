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
import { queryClient } from "../queryClient"
import { useGuestStore } from "@/store/guest"

export default function WritingGuestProblemContainer() {
  const router = useRouter()

  const { level, setLevel } = useGuestStore()

  const { addFeedback } = useFeedbackStore()

  const { data: problem } = useQuery({
    queryKey: ["sentence-random"],
    queryFn: () => getSentenceProblem({ level }),
  })

  const {
    mutate: submit,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["writing"],
    mutationFn: submitWriting,
    onSuccess: (data) => {
      addFeedback(data)
      if (data.feedbackResult === "PASS" && level < 5) {
        setLevel(level + 1)
      }
      router.replace(`/guest/writing/result`)
      queryClient.invalidateQueries(["sentence-random"])
      queryClient.invalidateQueries(["users"])
    },
  })

  function onSubmit(data: InputSentence) {
    if (!problem) return
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
      level={problem.level}
      problem={problem.sentence}
      onSubmit={onSubmit}
    />
  )
}
