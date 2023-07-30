import React from 'react'

interface AdminLayoutProps {
  children: React.ReactNode,
  addModal: React.ReactNode,
  list: React.ReactNode,
}

export default function AdminWordsLayout({ children, addModal, list }: AdminLayoutProps) {
  return (
    <section className='flex flex-col w-full'>
      <h2 className='text-center my-10'>단어 목록</h2>
      <div className='w-full flex justify-end mb-2'>
        {addModal}
      </div>
      {list}
    </section>
  )
}
