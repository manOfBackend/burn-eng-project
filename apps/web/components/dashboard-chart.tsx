"use client"
import React from "react"
import { ResponsiveLine, Serie } from "@nivo/line"
import dayjs from 'dayjs'
interface DashboardChartProps {
  data: Serie[] | null
}
export default function DashboardChart({ data }: DashboardChartProps) {
  return (
    <div className="relative h-full w-full">
      {(!data || data.length === 0) && (
        <div className="absolute left-1/2  top-0 flex h-full w-full -translate-x-1/2 items-center justify-center bg-white/30">
          <p>아직 데이터가 없습니다.</p>
        </div>
      )}
      <ResponsiveLine
        data={!data || data.length === 0 ? DUMMY_DATA : data}
        margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        enableGridX={false}
        enableGridY={false}
        isInteractive={false}
        enablePointLabel={true}
        pointLabel={({ y }) => (Number(y) > 0 ? `${y}` : "")}
        pointBorderColor={"#fff"}
        axisLeft={null}
        axisTop={null}
        axisRight={null}
        enableArea={true}
        pointSize={10}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </div>
  )
}

const DUMMY_DATA = [
  {
    id: "stats",
    color: "hsl(187, 70%, 50%)",
    data: [
      {
        x: dayjs().format("MM/DD"),
        y: 1,
      },
    ],
  },
]
