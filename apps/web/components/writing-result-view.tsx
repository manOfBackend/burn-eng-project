'use client'
import React from 'react'
import SentenceFeedbackChart from './sentence-feedback-chart'
import { useMutation } from '@tanstack/react-query'
import { submitWriting } from '@sayvoca/lib/api'

export default function WritingResultView() {
  const { data } = useMutation({
    mutationKey: ['writing'],
    mutationFn: submitWriting,
  })

  return (
    <section className='mt-4'>
      <h2 className='font-bold mb-2'>피드백</h2>
      <div className='h-[200px] w-full'>
        {data && (
          <SentenceFeedbackChart data={{
            ...data
          }} />
        )}
      </div>
      <div className='flex gap-4 ml-2'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>의미정확도</p>
          <p className='text-base font-semibold text-green-900'>{data?.meaningAccuracy}%</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>문법정확도</p>
          <p className='text-base font-semibold text-green-900'>{data?.grammarAccuracy}%</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>자연스러움</p>
          <p className='text-base font-semibold text-green-900'>{data?.naturalness}%</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>종합점수</p>
          <p className='text-base font-semibold text-green-900'>{data?.overallEvaluationScore}점</p>
        </div>
      </div>
      <div className='h-52 w-full mt-4 border-solid border-2 p-2'>
        {data?.advice}
      </div>
      <ul className='mt-4 flex flex-col'>
        {data?.betterTranslatedSentences?.map((sentence, index) => (
          <li key={index} className='border-solid border-2 p-2'>
            {sentence}
          </li>
        ))
        }
      </ul>
    </section>
  )
}
