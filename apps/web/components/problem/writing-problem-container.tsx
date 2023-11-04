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
import { queryClient } from "../queryClient"
import WritingProblemForm from "./writing-problem-form"
import WritingWaitingView from "./writing-waiting-view"

export default function WritingProblemContainer() {
  const router = useRouter()

  const { addFeedback } = useFeedbackStore()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const { data: problem } = useQuery({
    queryKey: ["sentence-random"],
    queryFn: () => getSentenceProblem(),
    enabled: Boolean(user),
  })

  const {
    mutate: submit,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["writing"],
    mutationFn: submitWriting,
    retry: false,
    onSuccess: (data) => {
      addFeedback(data)
      router.replace(`/writing/result`)
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
