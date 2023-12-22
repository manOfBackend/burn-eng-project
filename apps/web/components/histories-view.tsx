"use client"
import { useHistoryStore } from "@/store/history"
import { getSentenceProblemHistory } from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { Icons } from "@sayvoca/ui/Icons"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import React from "react"

export default function HistoriesView() {
  const { date } = useHistoryStore()
  const { data: histories } = useQuery({
    queryKey: ["sentence-history", "dates", dayjs(date).format("YYYY-MM-DD")],
    queryFn: () =>
      getSentenceProblemHistory({
        date: dayjs(date).format("YYYY-MM-DD"),
        languageFrom: "KOREAN",
        languageTo: "ENGLISH",
      }),
    suspense: true,
  })

  return (
    <>
      {histories?.length === 0 && (
        <div className="flex w-full items-center justify-center py-10">
          <p>해당 날짜에 제출한 기록이 없습니다.</p>
        </div>
      )}
      {histories?.map((history, index) => (
        <article
          key={index}
          className="flex w-full items-center justify-between gap-4 rounded-xl border-2 border-solid p-3"
        >
          <div>
            <h3 className="font-bold">{history.sentence}</h3>
            <p>{history.translatedSentence}</p>
            <details className="collapse">
              <summary className="collapse-title !px-0 text-xs font-medium">
                <span>피드백 보기</span>
                <Icons.chevronRightIcon className="inline-block" />
              </summary>
              <div className="collapse-content !px-0">
                <p className="text-sm">
                  {history.translatedFeedback?.data?.advice}
                </p>
              </div>
            </details>
          </div>
          <div className="flex w-20 items-center justify-center">
            <div
              className={cn("radial-progress whitespace-pre-wrap text-center", {
                "text-green-800 bg-green-100":
                  history.translatedFeedback?.data?.feedbackResult === "PASS",
                "text-red-800 bg-red-100":
                  history.translatedFeedback?.data?.feedbackResult === "FAIL",
              })}
              style={
                {
                  "--value":
                    history.translatedFeedback?.data?.overallEvaluationScore,
                } as React.CSSProperties
              }
            >
              <span>
                {history.translatedFeedback?.data?.feedbackResult}
                {"\n"}
                <span className="font-bold">
                  {history.translatedFeedback?.data?.overallEvaluationScore}
                </span>
              </span>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
