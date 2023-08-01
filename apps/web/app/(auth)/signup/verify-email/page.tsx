import React from 'react'
import { Metadata } from "next"
import { Shell } from '@/components/shell'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@sayvoca/ui/card'
import VerifyEmailForm from '@/components/verify-email-form'
import { WaitingLottie } from '@sayvoca/ui'

export const metadata: Metadata = {
  title: "이메일 인증",
  description: "회원가입 이메일 인증",
}

export default function VerifyEmailPage() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <WaitingLottie className='max-h-40' />
          </div>
          <CardTitle className="text-2xl">이메일 인증</CardTitle>
          <CardDescription>
            인증 번호를 이메일로 발송했습니다!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <VerifyEmailForm />
        </CardContent>
      </Card>
    </Shell>
  )
}
