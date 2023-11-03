import React from 'react'

interface AdminSentenseProps {
  children: React.ReactNode,
  addModal: React.ReactNode,
  list: React.ReactNode,
}

export default function AdminSentenseLayout({ children, addModal, list }: AdminSentenseProps) {
  return (
    <section className='flex w-full flex-col'>
      <h2 className='my-10 text-center'>문장 관리</h2>
      <div className='mb-2 flex w-full justify-end'>
        {addModal}
      </div>
      {list}
    </section>
  )
}
