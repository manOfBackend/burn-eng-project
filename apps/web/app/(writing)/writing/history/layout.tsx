import React from "react"

interface HistoryLayoutProps {
  calendar: React.ReactNode
  histories: React.ReactNode
}
export default function HistoryLayout({
  calendar,
  histories,
}: HistoryLayoutProps) {
  return (
    <section className="scrollbar-none mt-4 overflow-x-hidden overflow-y-scroll">
      <h2 className="mb-2 text-xl font-bold">히스토리</h2>
      {calendar}
      <section className="scrollbar-none mt-4 flex w-full flex-col gap-2">
        {histories}
      </section>
    </section>
  )
}
