import React from "react"

export default function Loading() {
  return (
    <div className="stats w-full animate-pulse bg-gray-100 shadow">
      <div className="stat">
        <div className="stat-figure text-secondary animate-pulse">
          <div className="avatar placeholder">
            <div className="text-neutral-content w-16 rounded-full bg-purple-300"></div>
          </div>
        </div>
        <div className="stat-value h-10 w-20 rounded-md bg-gray-300"></div>
        <div className="stat-title h-6 w-10 rounded-md bg-gray-300"></div>
        <progress
          className="progress progress-info my-1 w-[100px]"
          value={0}
          max="5"
        ></progress>
        <div className="stat-desc text-purple-600"></div>
      </div>
    </div>
  )
}
