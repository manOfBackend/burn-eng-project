import { auth, currentUser } from '@clerk/nextjs'
import React from 'react'

export default async function page() {
  const { user } = auth();
  const a = await currentUser()

  console.log(a)
  return (
    <div></div>
  )
}
