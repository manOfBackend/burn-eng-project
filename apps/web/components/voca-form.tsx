"use client"
import { User } from '@clerk/nextjs/dist/types/server'
import React, { useEffect, useState } from 'react'

interface VocaFormProps {
  name: string;
}
export default function VocaForm({ name }: VocaFormProps) {

  return (
    <div>{name}</div>
  )
}
