interface DashboardLayoutProps {
  children: React.ReactNode
  stats: React.ReactNode
  chart: React.ReactNode
  menu: React.ReactNode
  calendar: React.ReactNode
}

export default function DashboardLayout({
  children,
  stats,
  chart,
  menu,
  calendar
}: DashboardLayoutProps) {
  return (
    <section className="scrollbar-none overflow-y-scroll">
      <article className="mb-5 overflow-hidden p-1">{stats}</article>
      <article>
        <h3 className="font-bold">최고 레벨</h3>
        <div className="h-52 w-full">{chart}</div>
      </article>
      <article className="mt-7 flex flex-col gap-3">
        <h3 className="font-bold">출석체크</h3>
        <div className="flex justify-center">
          {calendar}
        </div>
      </article>
      <article className="mt-7 flex flex-col gap-3">{menu}</article>
      {children}
    </section>
  )
}
