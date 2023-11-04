"use client"

import { Serie } from "@nivo/line"
import { getUserInfo } from "@sayvoca/lib/api"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useMemo } from "react"
import DashboardChart from "./dashboard-chart"

export default function DashboardChartContainer() {
  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
    suspense: true,
  })

  const chartData: Serie[] | null = useMemo(() => {
    const today = dayjs().format("YYYY-MM-DD")
    const data = user?.recentUserLevelHistories
      ?.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))
      .map((x) => {
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

  return <>{chartData && <DashboardChart data={chartData} />}</>
}
