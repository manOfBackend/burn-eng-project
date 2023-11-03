"use client"
import React, { useEffect, useLayoutEffect } from "react"
import SentenceFeedbackChart from "../sentence-feedback-chart"
import { useMutation } from "@tanstack/react-query"
import { submitWriting } from "@sayvoca/lib/api"
import { queryClient } from "../queryClient"
import { useFeedbackStore } from "@/store/feedback"
import { useRouter } from "next/navigation"

export default function WritingResultView() {
  const { addFeedback, ...data } = useFeedbackStore()
  const router = useRouter()

  useLayoutEffect(() => {
    if (!data?.advice) {
      router.replace("/dashboard")
    }
  }, [data, router])

  if (!data?.advice) return null

  return (
    <section className="mt-4">
      <h2 className="mb-2 text-xl font-bold">피드백</h2>
      <div className="h-[200px] w-full">
        {data && (
          <SentenceFeedbackChart
            data={{
              ...data,
            }}
          />
        )}
      </div>

      <section className="mt-4 h-52 w-full border-2 border-solid p-2">
        <h2 className="text-lg font-bold">코멘트</h2>
        <p className="pl-2 text-sm">{data?.advice}</p>
      </section>
      {data?.betterTranslatedSentences?.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2">
          <h2 className="text-lg font-bold">제안</h2>
          {data?.betterTranslatedSentences.map((sentence, index) => (
            <li key={index} className="border-2 border-solid p-2 font-medium">
              {`${index + 1}. ${sentence}`}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
