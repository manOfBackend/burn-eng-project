"use client"
import { useHistoryStore } from "@/store/history"
import { getHistoryDates } from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function CalendarView() {
  const { date, setDate } = useHistoryStore()
  const { data: historyDates } = useQuery({
    queryKey: ["sentence-history", "dates"],
    queryFn: () =>
      getHistoryDates({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        languageFrom: "KOREAN",
        languageTo: "ENGLISH",
      }),
    suspense: true,
  })
  return (
    <div className="flex w-full justify-center">
      <Calendar
        onChange={(value) => {
          setDate(dayjs(value?.toString()).toDate())
        }}
        className="!w-full !max-w-[600px] !border-none text-sm"
        value={date}
        calendarType="gregory"
        formatDay={(locale, date) => {
          return dayjs(date).format("D")
        }}
        tileClassName={({ date, view }) => {
          return cn("h-8", {
            "!bg-green-600 !font-bold text-white": historyDates?.dates.find(
              (x) => x === dayjs(date).format("YYYY-MM-DD")
            ),
          })
        }}
      />
    </div>
  )
}
