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

export default function WritingProblemView() {
  const router = useRouter()

  const { addFeedback } = useFeedbackStore()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const { data: problem } = useQuery({
    queryKey: ["sentence-random"],
    queryFn: () => user && getSentenceProblem({ level: user.level }),
    enabled: Boolean(user),
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
      router.replace("/writing/result")
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

  return (
    <WritingProblemForm
      isLoading={isLoading || isSuccess}
      level={problem.level}
      problem={problem.sentence}
      onSubmit={onSubmit}
    />
  )
}
