import React from 'react'

interface AdminSentenseProps {
  children: React.ReactNode,
  addModal: React.ReactNode,
  list: React.ReactNode,
}

export default function AdminLevelLayout({ children, addModal, list }: AdminSentenseProps) {
  return (
    <section className='flex w-full flex-col'>
      <h2 className='my-10 text-center'>난이도 관리</h2>
      <div className='mb-2 flex w-full justify-end'>
        {addModal}
      </div>
      {list}
    </section>
  )
}
