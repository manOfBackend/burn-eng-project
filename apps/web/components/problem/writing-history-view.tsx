"use client"

import { getSentenceProblem } from "@sayvoca/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function WritingHistoryView() {
  // const { data: problem } = useQuery({
  //   queryKey: ['sentence-history'],
  //   queryFn: () => getSentenceProblem({ level: user?.level ?? 1 }),
  //   enabled: Boolean(user),
  // })
  const [value, onChange] = useState(new Date())

  return (
    <section className="mt-4">
      <h2 className="mb-2 text-xl font-bold">히스토리</h2>
      <Calendar
        onChange={(value) => {
          console.log(value)
        }}
        value={value}
      />
    </section>
  )
}
