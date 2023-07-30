"use client"
import { useClerk } from '@clerk/nextjs'
import React from 'react'

export default function SignOutForm() {
  const { signOut } = useClerk();

  return (
    <button onClick={() => signOut()}>
      로그아웃
    </button>
  )
}
