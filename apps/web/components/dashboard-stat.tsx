"use client"
import { getUserInfo, submitUserDailyGoal } from "@sayvoca/lib/api"
import { Icons } from "@sayvoca/ui/Icons"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import DailyGoalPopup from "./daily-goal-popup"
import { cn } from "@sayvoca/lib/utils"

export default function DashboardStat() {
  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
    suspense: true,
  })

  const { mutate, isLoading } = useMutation({
    mutationKey: ["submit-daily-goal"],
    mutationFn: submitUserDailyGoal,
    onSuccess: () => {
      setOpenDailyPopup(false)
    },
  })

  const [isOpenDailyPopup, setOpenDailyPopup] = useState(false)

  if (!user) return null

  const percent = Math.floor(
    (user?.dailyGoalCount / user?.dailyGoal ?? 0) * 100
  )

  return (
    <>
      <div className="flex w-full justify-between rounded-2xl p-4 shadow">
        <div className="flex flex-col gap-2">
          <div className="text-4xl font-bold">레벨 {user.level}</div>
          <div className="flex flex-col">
            <h2 className="text-sm text-gray-600">경험치</h2>
            <progress
              className="progress progress-info my-1 w-[100px]"
              value={user.userExp}
              max={user.totalLevelExp}
            ></progress>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-center">
            <div
              className={cn(
                "radial-progress whitespace-pre-wrap text-center ",
                {
                  "text-purple-200": percent === 0,
                  "text-purple-500": percent > 0,
                }
              )}
              style={
                {
                  "--value": percent === 0 ? 100 : percent,
                  "--thickness": "2px",
                } as React.CSSProperties
              }
            >
              <span>{percent}%</span>
            </div>
          </div>
          <div
            className="flex"
            onClick={() => {
              setOpenDailyPopup(true)
            }}
          >
            <p className="">
              하루 목표:{" "}
              <span className="font-bold text-purple-500">
                {user?.dailyGoal} 문제
              </span>
            </p>
            <Icons.chevronRight className="rotate-90 text-purple-500" />
          </div>
        </div>
      </div>
      <DailyGoalPopup
        open={isOpenDailyPopup}
        goal={user.dailyGoal}
        isSubmitting={isLoading}
        onClose={() => {
          setOpenDailyPopup(false)
        }}
        onConfirm={(goal) => {
          mutate({ goal })
        }}
      />
    </>
  )
}
