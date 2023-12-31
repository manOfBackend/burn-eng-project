"use client"
import { useHistoryStore } from "@/store/history"
import { getHistoryDates } from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { Icons } from "@sayvoca/ui/Icons"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import "react-calendar/dist/Calendar.css"
import DailyDay from "./DailyDay"

export default function DashboardCalendarView() {
  const { date } = useHistoryStore()
  const router = useRouter()

  const { data: historyDates } = useQuery({
    queryKey: [
      "sentence-history",
      "dates",
      date.getFullYear(),
      date.getMonth() + 1,
    ],
    queryFn: () =>
      getHistoryDates({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        languageFrom: "KOREAN",
        languageTo: "ENGLISH",
      }),
    suspense: true,
  })
  const startWeek = dayjs().startOf("week")

  const weeks = [
    {
      date: startWeek.add(1, "day"),
      text: "월",
    },
    {
      date: startWeek.add(2, "day"),
      text: "화",
    },
    {
      date: startWeek.add(3, "day"),
      text: "수",
    },
    {
      date: startWeek.add(4, "day"),
      text: "목",
    },
    {
      date: startWeek.add(5, "day"),
      text: "금",
    },
    {
      date: startWeek.add(6, "day"),
      text: "토",
    },
    {
      date: startWeek.add(7, "day"),
      text: "일",
    },
  ]

  const datesWithAccomplishedDailyGoal = historyDates?.data?.filter(
    (x) => x.isAccomplishedDailyGoal
  )

  return (
    <div
      className="grid w-full max-w-xs cursor-pointer grid-cols-7 place-items-center justify-center gap-1"
      onClick={() => {
        router.push("/writing/history")
      }}
      role="button"
    >
      {weeks.map((x) => {
        const date = historyDates?.data?.find(
          (y) => y.date === dayjs(x.date).format("YYYY-MM-DD")
        )
        return (
          <DailyDay
            key={x.text}
            status={
              date?.isAccomplishedDailyGoal
                ? "GOAL_DONE"
                : date
                ? "DOING"
                : "NOT_DONE"
            }
            text={x.text}
          />
        )
      })}
    </div>
  )
}
