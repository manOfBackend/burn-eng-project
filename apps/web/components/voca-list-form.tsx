'use client'

import { Button } from '@sayvoca/ui'
import { Icons } from '@sayvoca/ui/Icons'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function VocaListForm() {
  const router = useRouter();
  return (
    <section>
      <Button onClick={() => {
        router.push('/voca-list/add')
      }}>
        <Icons.add />
        추가
      </Button>
    </section>
  )
}
