"use client"

import { Button } from "@sayvoca/ui"
import React, { useMemo } from "react"
import DashboardChart from "./dashboard-chart"
import DashboardStat from "./dashboard-stat"
import { Serie } from "@nivo/line"
import { Icons } from "@sayvoca/ui/Icons"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getUserInfo } from "@sayvoca/lib/api"
import { useClerk } from "@clerk/nextjs"
import dayjs from "dayjs"

export default function DashboardForm() {
  const router = useRouter()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const chartData: Serie[] | null = useMemo(() => {
    const today = dayjs().format("YYYY-MM-DD")
    const data = user?.recentLevelHistories.map((x) => {
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
  }, [user?.recentLevelHistories])
  const { signOut } = useClerk()

  return (
    <section className="overflow-y-scroll">
      <article className="mb-5">
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
        <Button
          className="w-full gap-2"
          variant={"ghost"}
          size={"icon"}
          onClick={() => {
            signOut()
          }}
        >
          <Icons.logOut color="#9108bf" />
          로그아웃
        </Button>
      </article>
    </section>
  )
}
