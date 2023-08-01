"use client"
import { useAuth, useOrganization, useOrganizationList, useOrganizations, useUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/dist/types/server'
import React, { useEffect, useState } from 'react'

interface VocaFormProps {
  name: string;
}
export default function VocaForm({ name }: VocaFormProps) {
  const { user } = useUser()

  return (
    <div className='flex flex-col gap-2'>
      {name}
    </div>
  )
}
