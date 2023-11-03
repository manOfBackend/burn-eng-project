'use client'

import { getSentenceProblem } from "@sayvoca/lib/api"
import { useQuery } from "@tanstack/react-query"

export default function WritingHistoryView() {
  // const { data: problem } = useQuery({
  //   queryKey: ['sentence-history'],
  //   queryFn: () => getSentenceProblem({ level: user?.level ?? 1 }),
  //   enabled: Boolean(user),
  // })
  return (
    <section className='mt-4'>
      <h2 className='mb-2 text-xl font-bold'>피드백</h2>
    </section>
  )
}
