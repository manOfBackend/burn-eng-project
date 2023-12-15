"use client"
import { getUserInfo } from "@sayvoca/lib/api"
import { Icons } from "@sayvoca/ui/Icons"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export default function WithDailyGoalLayout() {
  const router = useRouter()
  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
    suspense: true,
  })

  return (
    <nav className="fixed top-0 z-50 h-[50px] w-full bg-white">
      <div className="flex w-full">
        <button
          type="button"
          className="flex h-[50px] w-[50px] items-center justify-center active:bg-gray-300/50"
          onClick={() => {
            router.back()
          }}
        >
          <Icons.chevronLeft />
        </button>
        {user ? (
          <div className="mr-[50px] flex flex-1 items-center justify-center">
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-bold">하루 목표</h1>
              <div className="text-sm text-gray-500">
                {user?.dailyGoalCount ?? 0} / {user?.dailyGoal ?? 0}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
