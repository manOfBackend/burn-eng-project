import React from 'react'

export default function DashboardStat() {
  return (
    <div className="stats w-full shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar placeholder">
            <div className="text-neutral-content w-24 rounded-full bg-purple-900">
              <span className="text-3xl">K</span>
            </div>
          </div>
        </div>
        <div className="stat-value">80%</div>
        <div className="stat-title">작문 학습</div>
        <div className="stat-desc text-purple-600">일일 목표 10문제 남음</div>
        <div className="rating">
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-purple-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-purple-500" checked />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-purple-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-purple-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-purple-500" />
        </div>
      </div>
    </div>
  )
}
