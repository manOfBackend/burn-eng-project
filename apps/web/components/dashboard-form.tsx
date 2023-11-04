"use client"

import { Serie } from "@nivo/line"
import { getUserInfo } from "@sayvoca/lib/api"
import { Button } from "@sayvoca/ui"
import { Icons } from "@sayvoca/ui/Icons"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { useMemo } from "react"
import DashboardChart from "./dashboard-chart"
import DashboardStat from "./dashboard-stat"

export default function DashboardForm() {
  const router = useRouter()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const chartData: Serie[] | null = useMemo(() => {
    const today = dayjs().format("YYYY-MM-DD")
    const data = user?.recentUserLevelHistories?.map((x) => {
      return {
        x: today === x.date ? "오늘" : dayjs(x.date).format("MM/DD"),
        y: x.level,
      }
    })

    if (!data) return null

    return [
      {
        id: "stats",
        color: "hsl(187, 70%, 50%)",
        data,
      },
    ]
  }, [user?.recentUserLevelHistories])

  return (
    <section className="overflow-y-scroll">
      <article className="mb-5 overflow-hidden p-1">
        <DashboardStat />
      </article>
      <article>
        <h3 className="font-bold">최고 레벨</h3>
        <div className="h-52 w-full">
          {chartData && <DashboardChart data={chartData} />}
        </div>
      </article>
      <article className="mt-7 flex flex-col gap-3">
        <Button
          className="w-full gap-2"
          variant={"dashboard"}
          size={"icon"}
          onClick={() => {
            router.push("/writing")
          }}
        >
          <Icons.pencil color="#9108bf" />
          작문 학습
        </Button>
        <Button
          className="w-full gap-2"
          variant={"dashboard"}
          size={"icon"}
          onClick={() => {
            router.push("/writing/history")
          }}
        >
          <Icons.history color="#9108bf" />
          학습이력
        </Button>
      </article>
    </section>
  )
}
