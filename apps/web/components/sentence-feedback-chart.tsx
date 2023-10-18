import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    "type": "의미정확도",
    "score": 85,
    "color": "hsl(261, 70%, 50%)",
  },
  {
    "type": "문법정확도",
    "score": 100,
    "color": "hsl(352, 70%, 50%)",

  },
  {
    "type": "자연스러움",
    "score": 90,
    "color": "hsl(195, 70%, 50%)",

  },
  {
    "type": "종합점수",
    "score": 50,
    "color": "hsl(7, 70%, 50%)",
  },
]

export default function SentenceFeedbackChart() {
  return (
    <ResponsiveBar
      data={data}
      keys={[
        'score',
      ]}
      indexBy="type"
      margin={{ top: 0, right: 0, bottom: 0, left: 70 }}
      padding={0.3}
      layout="horizontal"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={({ data }) => data['color']}
      axisTop={null}
      axisRight={null}
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
        from: 'color',
        modifiers: [
          [
            'darker',
            1.6
          ]
        ]
      }}
      role="application"
      ariaLabel="feedback chart"
      barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
  )
}
