"use client"
import React, { useMemo } from "react"
import { ResponsiveBar } from "@nivo/bar"
import { SentenceResponse } from "@sayvoca/lib"

interface SentenceFeedbackChartProps {
  data: Pick<
    SentenceResponse["data"],
    | "grammarAccuracy"
    | "meaningAccuracy"
    | "naturalness"
    | "overallEvaluationScore"
  >
}
export default function SentenceFeedbackChart({
  data: {
    grammarAccuracy,
    meaningAccuracy,
    naturalness,
    overallEvaluationScore,
  },
}: SentenceFeedbackChartProps) {
  const data = useMemo(
    () => [
      {
        type: "의미정확도",
        score: meaningAccuracy,
        color: "hsl(173, 58%, 39%)",
      },
      {
        type: "문법정확도",
        score: grammarAccuracy,
        color: "hsl(173, 58%, 39%)",
      },
      {
        type: "자연스러움",
        score: naturalness,
        color: "hsl(173, 58%, 39%)",
      },
      {
        type: "종합점수",
        score: overallEvaluationScore,
        color: "hsl(12, 76%, 61%)",
      },
    ],
    [grammarAccuracy, meaningAccuracy, naturalness, overallEvaluationScore]
  )

  return (
    <ResponsiveBar
      data={data}
      keys={["score"]}
      indexBy="type"
      margin={{ top: 0, right: 0, bottom: 0, left: 70 }}
      padding={0.3}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ data }) => data["color"]}
      axisTop={null}
      axisRight={null}
      borderRadius={10}
      axisBottom={null}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      maxValue={100}
      minValue={0}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      ariaLabel="feedback chart"
    />
  )
}
