import React from 'react'

interface AdminSentenseProps {
  children: React.ReactNode,
  addModal: React.ReactNode,
  list: React.ReactNode,
}

export default function AdminSentenseLayout({ children, addModal, list }: AdminSentenseProps) {
  return (
    <section className='flex flex-col w-full'>
      <h2 className='text-center my-10'>문장 관리</h2>
      <div className='w-full flex justify-end mb-2'>
        {addModal}
      </div>
      {list}
    </section>
  )
}
