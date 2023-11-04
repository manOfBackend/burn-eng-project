import { getUserInfo } from "@sayvoca/lib/api"
import { useQuery } from "@tanstack/react-query"

export default function DashboardStat() {
  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })

  return (
    <div className="stats w-full shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar placeholder">
            <div className="text-neutral-content w-16 rounded-full bg-purple-900">
              <span className="text-3xl">
                {user?.email?.slice(0, 1)?.toUpperCase()}
                {user?.email?.slice(1, 2)?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        <div className="stat-value">레벨 {user?.level ?? 1}</div>
        <div className="stat-title">작문 학습</div>
        <progress
          className="progress progress-info my-1 w-[100px]"
          value={user?.exp ?? 0}
          max="100"
        ></progress>
        <div className="stat-desc text-purple-600">
          현재 레벨에서 문제 푼 수 {user?.exp ?? 0}개
        </div>
      </div>
    </div>
  )
}
