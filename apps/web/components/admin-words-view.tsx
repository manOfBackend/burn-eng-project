"use client"

import { Word } from '@/types'
import { Button } from '@sayvoca/ui/Button'
import { Icons } from '@sayvoca/ui/Icons'
import React from 'react'

interface AdminWordsViewProps {
  words: Word[],
}
export default function AdminWordsView({ words }: AdminWordsViewProps) {

  return (
    <div className='flex flex-col w-full'>
      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Word</th>
            <th>수정일</th>
            <th>생성일</th>
            <th>문장</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id} className='text-center'>
              <td>{word.id}</td>
              <td>{word.word}</td>
              <td>{word.updatedAt.toLocaleString()}</td>
              <td>{word.createdAt.toLocaleString()}</td>
              <td>문장</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
