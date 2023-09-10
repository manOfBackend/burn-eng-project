'use client'

import { Button } from '@sayvoca/ui'
import React from 'react'
import DashboardChart from './dashboard-chart'
import DashboardStat from './dashboard-stat'
import { Serie } from '@nivo/line'
import { Icons } from '@sayvoca/ui/Icons'
import { useRouter } from 'next/navigation'


const data: Serie[] = [
  {
    "id": "stats",
    "color": "hsl(187, 70%, 50%)",
    "data": [
      {
        "x": "9/5",
        "y": 0
      },
      {
        "x": "9/6",
        "y": 0
      },
      {
        "x": "9/7",
        "y": 0
      },
      {
        "x": "9/8",
        "y": 8
      },
      {
        "x": "어제",
        "y": 15
      },
      {
        "x": "오늘",
        "y": 26
      }
    ]
  }
]
export default function DashboardForm() {

  const router = useRouter();

  return (
    <section>
      <article className='mb-5'>
        <DashboardStat />
      </article>
      <article>
        <h3 className='font-bold'>어휘 학습 정보</h3>
        <div className='w-full h-52'>
          <DashboardChart data={data} />
        </div>
      </article>
      <article className='flex flex-col gap-3'>
        <div className='flex gap-4'>
          <Button className='flex-[3] gap-2' variant={'dashboard'} size={'icon'}>
            <Icons.bookOpenCheck color='#9108bf' />
            어휘 학습
          </Button>
          <Button className='min-w-[100px] flex-1 gap-2 bg-red-100 text-black font-bold' variant={'dashboard'} size={'icon'} onClick={() => {
            router.push('/voca-list')
          }}>
            <Icons.bookOpen color='#9108bf' />
            단어장
          </Button>
        </div>
        <Button className='w-full gap-2' variant={'dashboard'} size={'icon'}>
          <Icons.pencil color='#9108bf' />
          작문 학습
        </Button>
      </article>
    </section>
  )
}
