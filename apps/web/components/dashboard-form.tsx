"use client"

import { Button } from "@sayvoca/ui"
import React from "react"
import DashboardChart from "./dashboard-chart"
import DashboardStat from "./dashboard-stat"
import { Serie } from "@nivo/line"
import { Icons } from "@sayvoca/ui/Icons"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getUserInfo } from "@sayvoca/lib/api"
import { useClerk } from "@clerk/nextjs"

const data: Serie[] = [
  {
    id: "stats",
    color: "hsl(187, 70%, 50%)",
    data: [
      {
        x: "10/9",
        y: 1,
      },
      {
        x: "10/10",
        y: 3,
      },
      {
        x: "10/11",
        y: 4,
      },
      {
        x: "10/12",
        y: 8,
      },
      {
        x: "어제",
        y: 15,
      },
      {
        x: "오늘",
        y: 20,
      },
    ],
  },
]

const data2: Serie[] = [
  {
    id: "stats",
    color: "hsl(187, 70%, 50%)",
    data: [
      {
        x: "10/9",
        y: 80,
      },
      {
        x: "10/10",
        y: 50,
      },
      {
        x: "10/11",
        y: 40,
      },
      {
        x: "10/12",
        y: 60,
      },
      {
        x: "어제",
        y: 100,
      },
      {
        x: "오늘",
        y: 90,
      },
    ],
  },
]
export default function DashboardForm() {
  const router = useRouter()

  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  const { signOut } = useClerk()

  return (
    <section className="overflow-y-scroll">
      <article className="mb-5">
        <DashboardStat />
      </article>
      <article>
        <h3 className="font-bold">레벨</h3>
        <div className="h-52 w-full">
          <DashboardChart data={data} />
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
        {user?.role === "ADMIN" && (
          <Button
            className="w-full gap-2"
            variant={"secondary"}
            size={"icon"}
            onClick={() => {
              router.push("/admin")
            }}
          >
            <Icons.lock color="#9108bf" />
            관리자 메뉴
          </Button>
        )}
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
