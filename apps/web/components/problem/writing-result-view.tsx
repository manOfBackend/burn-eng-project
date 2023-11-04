"use client"
import React, { useEffect, useLayoutEffect } from "react"
import SentenceFeedbackChart from "../sentence-feedback-chart"
import { useMutation } from "@tanstack/react-query"
import { submitWriting } from "@sayvoca/lib/api"
import { queryClient } from "../queryClient"
import { useFeedbackStore } from "@/store/feedback"
import { useRouter } from "next/navigation"
import { Button } from "@sayvoca/ui/Button"
import { Icons } from "@sayvoca/ui/Icons"
import { cn } from "@sayvoca/lib/utils"

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
      <div className="flex items-center justify-center py-4">
        <div
          className={cn("radial-progress whitespace-pre-wrap text-center", {
            "text-green-800": data?.feedbackResult === "PASS",
            "text-red-800": data?.feedbackResult === "FAIL",
          })}
          style={
            {
              "--value": data?.overallEvaluationScore,
            } as React.CSSProperties
          }
        >
          <span>
            {data?.feedbackResult}
            {"\n"}
            <span className="font-bold">{data?.overallEvaluationScore}</span>
          </span>
        </div>
      </div>
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
      <article className="mt-4 flex gap-2">
        <Button
          className="w-full gap-2"
          variant={"dashboard"}
          disabled={data?.feedbackResult !== "PASS"}
          size={"icon"}
          onClick={() => {
            router.replace("/writing")
          }}
        >
          <Icons.arrowRightCircle color="#9108bf" />
          다음문제
        </Button>
        <Button
          className="w-full gap-2"
          variant={"dashboard"}
          size={"icon"}
          onClick={() => {
            router.replace("/dashboard")
          }}
        >
          <Icons.home color="#9108bf" />
          돌아가기
        </Button>
      </article>
    </section>
  )
}
