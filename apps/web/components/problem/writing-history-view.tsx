"use client"

import {
  getHistoryDates,
  getSentenceProblem,
  getSentenceProblemHistory,
} from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useState } from "react"
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
      <Calendar
        onChange={(value) => {
          onChange(dayjs(value?.toString()).toDate())
        }}
        value={date}
        calendarType="gregory"
        tileClassName={({ date, view }) => {
          if (
            historyDates?.dates.find(
              (x) => x === dayjs(date).format("YYYY-MM-DD")
            )
          ) {
            return "!bg-blue-500"
          }
        }}
      />
      <section className="mt-4 flex flex-col gap-2">
        {histories?.map((history, index) => (
          <article
            key={index}
            className="w-full rounded-xl border-2 border-solid p-2"
          >
            <h3 className="font-bold">{history.sentence}</h3>
            <p>{history.translatedSentence}</p>
            <div className="flex gap-1">
              <p
                className={cn({
                  "text-green-800":
                    history.translatedFeedback?.feedbackResult === "PASS",
                  "text-red-800":
                    history.translatedFeedback?.feedbackResult === "FAIL",
                })}
              >
                {history.translatedFeedback?.feedbackResult}
              </p>
              <p>점수: {history.translatedFeedback?.overallEvaluationScore}</p>
            </div>
            <p>피드백: {history.translatedFeedback?.advice}</p>
          </article>
        ))}
      </section>
    </section>
  )
}
