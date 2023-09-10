'use client'
import React from 'react'
import { ResponsiveLine, Serie } from '@nivo/line'

interface DashboardChartProps {
  data: Serie[]
}
export default function DashboardChart({ data }: DashboardChartProps) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      enableGridX={false}
      enableGridY={false}
      isInteractive={false}
      enablePointLabel={true}
      pointLabel={({ y }) => Number(y) > 0 ? `${y}` : ''}
      pointBorderColor={'#fff'}
      axisLeft={null}
      axisTop={null}
      axisRight={null}
      enableArea={true}
      pointSize={10}
      pointBorderWidth={2}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  )
}
