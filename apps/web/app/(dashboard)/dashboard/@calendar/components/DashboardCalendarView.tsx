"use client"
import { useHistoryStore } from "@/store/history"
import { getHistoryDates } from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { Icons } from "@sayvoca/ui/Icons"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import "react-calendar/dist/Calendar.css"

export default function DashboardCalendarView() {
  const { date, setDate } = useHistoryStore()
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
  const endWeek = dayjs().endOf("week")

  const weeks = [
    {
      start: startWeek,
      end: startWeek.add(1, "day"),
      text: "월",
    },
    {
      start: startWeek.add(1, "day"),
      end: startWeek.add(2, "day"),
      text: "화",
    },
    {
      start: startWeek.add(2, "day"),
      end: startWeek.add(3, "day"),
      text: "수",
    },
    {
      start: startWeek.add(3, "day"),
      end: startWeek.add(4, "day"),
      text: "목",
    },
    {
      start: startWeek.add(4, "day"),
      end: startWeek.add(5, "day"),
      text: "금",
    },
    {
      start: startWeek.add(5, "day"),
      end: startWeek.add(6, "day"),
      text: "토",
    },
    {
      start: startWeek.add(6, "day"),
      end: endWeek,
      text: "일",
    },
  ]
  return (
    <div
      className="grid grid-cols-7 gap-1 w-full max-w-xs justify-center place-items-center cursor-pointer"
      onClick={() => {
        router.push("/writing/history")
      }}
      role="button"
    >
      {weeks.map((x) => (
        <div
          key={x.text}
          className={cn(
            "w-8 h-8 grid relative border-solid border-2 place-content-center rounded-full bg-gray-100",
            {
              "bg-yellow-500 border-yellow-500": historyDates?.dates.find(
                (y) => y === dayjs(x.start).format("YYYY-MM-DD")
              ),
            }
          )}
        >
          {historyDates?.dates.find(
            (y) => y === dayjs(x.start).format("YYYY-MM-DD")
          ) ? (
            <Icons.trophy className="w-4 h-4 text-white" />
          ) : (
            <p className="text-xs">{x.text}</p>
          )}
        </div>
      ))}
    </div>
  )
}
