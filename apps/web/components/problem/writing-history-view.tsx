"use client"

import { getHistoryDates, getSentenceProblem } from "@sayvoca/lib/api"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function WritingHistoryView() {
  const { data: historyDates } = useQuery({
    queryKey: ["sentence-history", "dates"],
    queryFn: () =>
      getHistoryDates({
        year: 2023,
        month: 11,
        languageFrom: "KOREAN",
        languageTo: "ENGLISH",
      }),
  })
  const [value, onChange] = useState(new Date())

  return (
    <section className="mt-4">
      <h2 className="mb-2 text-xl font-bold">히스토리</h2>
      <Calendar
        onChange={(value) => {
          console.log(value)
        }}
        value={value}
        tileClassName={({ date, view }) => {
          if (
            historyDates?.dates.find(
              (x) => x === dayjs(date).format("YYYY-MM-DD")
            )
          ) {
            return "bg-blue-500"
          }
        }}
      />
    </section>
  )
}
