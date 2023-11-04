"use client"

import React, { useState } from "react"
import WritingProblemForm from "./writing-problem-form"
import { useMutation, useQuery } from "@tanstack/react-query"
import {
  getSentenceProblem,
  getUserInfo,
  submitWriting,
} from "@sayvoca/lib/api"
import { useRouter } from "next/navigation"
import { useFeedbackStore } from "@/store/feedback"
import { InputSentence } from "@sayvoca/lib/types"

export default function WritingProblemView() {
  const router = useRouter()

  const { addFeedback } = useFeedbackStore()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const { data: problem } = useQuery({
    queryKey: ["sentence-random"],
    queryFn: () => getSentenceProblem({ level: user?.level ?? 1 }),
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
      router.push("/writing/result")
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

  return (
    <WritingProblemForm
      isLoading={isLoading || isSuccess}
      level={problem?.level}
      problem={problem?.sentence ?? ""}
      onSubmit={onSubmit}
    />
  )
}
