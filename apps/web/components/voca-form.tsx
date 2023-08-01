"use client"
import { useAuth, useOrganization } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/dist/types/server'
import React, { useEffect, useState } from 'react'

interface VocaFormProps {
  name: string;
}
export default function VocaForm({ name }: VocaFormProps) {
  const { orgId, orgRole, actor, isSignedIn } = useAuth()
  const { organization, membership } = useOrganization()

  console.log(orgId, orgRole, actor, organization, membership, isSignedIn)
  return (
    <div className='flex flex-col gap-2'>
      {name}
      {orgId}
      {orgRole}
      {organization?.name}
      {membership?.id}
    </div>
  )
}
