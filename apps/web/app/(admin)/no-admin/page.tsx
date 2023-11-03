import { DeniedLottie } from '@sayvoca/ui'
import React from 'react'

export default function NoAdmin() {
  return (
    <div className='flex w-full flex-col justify-center gap-10'>
      <DeniedLottie />
      <p className='text-center text-lg font-semibold'>아쉽지만, 관리자 권한이 필요합니다. 관리자에게 요청하세요.</p>
    </div>
  )
}
