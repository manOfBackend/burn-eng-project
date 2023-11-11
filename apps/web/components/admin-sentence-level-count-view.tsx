"use client"
import { getSentenceLevelCount } from "@sayvoca/lib/api"
import { cn } from "@sayvoca/lib/utils"
import { useQuery } from "@tanstack/react-query"
import React from "react"

export default function AdminSentenceLevelCountView() {
  const { data: sentenceLevelCount } = useQuery({
    queryKey: ["sentence-count"],
    queryFn: () => getSentenceLevelCount(),
  })
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th className="text-lg font-bold">레벨</th>
          <th className="text-lg font-bold">개수</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {sentenceLevelCount?.levelToSentenceCounts.map((x) => (
          <tr key={x.level}>
            <th></th>
            <td className="font-bold">{x.level}</td>
            <td
              className={cn({
                "text-red-500": x.sentenceCount < 10,
                "text-yellow-500":
                  x.sentenceCount >= 10 && x.sentenceCount < 20,
                "text-green-500": x.sentenceCount >= 20,
              })}
            >
              {x.sentenceCount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
