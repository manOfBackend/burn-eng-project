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
        "x": "10/9",
        "y": 1
      },
      {
        "x": "10/10",
        "y": 3
      },
      {
        "x": "10/11",
        "y": 4
      },
      {
        "x": "10/12",
        "y": 8
      },
      {
        "x": "어제",
        "y": 15
      },
      {
        "x": "오늘",
        "y": 20
      }
    ]
  }
]

const data2: Serie[] = [
  {
    "id": "stats",
    "color": "hsl(187, 70%, 50%)",
    "data": [
      {
        "x": "10/9",
        "y": 80
      },
      {
        "x": "10/10",
        "y": 50
      },
      {
        "x": "10/11",
        "y": 40
      },
      {
        "x": "10/12",
        "y": 60
      },
      {
        "x": "어제",
        "y": 100
      },
      {
        "x": "오늘",
        "y": 90
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
        <h3 className='font-bold'>레벨</h3>
        <div className='h-52 w-full'>
          <DashboardChart data={data} />
        </div>
      </article>
      <article>
        <h3 className='font-bold'>최고 점수</h3>
        <div className='h-52 w-full'>
          <DashboardChart data={data2} />
        </div>
      </article>
      <article className='mt-7 flex flex-col gap-3'>
        {/* <div className='flex gap-4'>
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
        </div> */}
        <Button
          className='w-full gap-2'
          variant={'dashboard'}
          size={'icon'}
          onClick={() => {
            router.push('/writing')
          }}
        >
          <Icons.pencil color='#9108bf' />
          작문 학습
        </Button>
        <Button
          className='w-full gap-2'
          variant={'dashboard'}
          size={'icon'}
          onClick={() => {
            router.push('/writing/history')
          }}
        >
          <Icons.history color='#9108bf' />
          학습이력
        </Button>
      </article>
    </section>
  )
}
