"use client"

import { getHistoryDates, getSentenceProblemHistory } from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useState } from "react"
import { Icons } from "@sayvoca/ui/Icons"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function WritingHistoryView() {
  const [date, onChange] = useState(new Date())
  const { data: historyDates } = useQuery({
    queryKey: ["sentence-history", "dates"],
    queryFn: () =>
      getHistoryDates({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        languageFrom: "KOREAN",
        languageTo: "ENGLISH",
      }),
  })
  const { data: histories } = useQuery({
    queryKey: ["sentence-history", "dates", dayjs(date).format("YYYY-MM-DD")],
    queryFn: () =>
      getSentenceProblemHistory({
        date: dayjs(date).format("YYYY-MM-DD"),
        languageFrom: "KOREAN",
        languageTo: "ENGLISH",
      }),
  })

  return (
    <section className="mt-4 overflow-x-hidden overflow-y-scroll">
      <h2 className="mb-2 text-xl font-bold">히스토리</h2>
      <div className="flex w-full justify-center">
        <Calendar
          onChange={(value) => {
            onChange(dayjs(value?.toString()).toDate())
          }}
          className="!w-full !max-w-[600px] !border-none text-sm"
          value={date}
          calendarType="gregory"
          formatDay={(locale, date) => {
            return dayjs(date).format("D")
          }}
          tileClassName={({ date, view }) => {
            return cn("h-8", {
              "!bg-green-800 !font-bold text-white": historyDates?.dates.find(
                (x) => x === dayjs(date).format("YYYY-MM-DD")
              ),
            })
          }}
        />
      </div>
      <section className="mt-4 flex w-full flex-col gap-2">
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
                className={cn(
                  "radial-progress whitespace-pre-wrap text-center",
                  {
                    "text-green-800 bg-green-100":
                      history.translatedFeedback?.data?.feedbackResult ===
                      "PASS",
                    "text-red-800 bg-red-100":
                      history.translatedFeedback?.data?.feedbackResult ===
                      "FAIL",
                  }
                )}
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
      </section>
    </section>
  )
}
