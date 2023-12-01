interface DashboardLayoutProps {
  children: React.ReactNode
  stats: React.ReactNode
  chart: React.ReactNode
  menu: React.ReactNode
}

export default function DashboardLayout({
  children,
  stats,
  chart,
  menu,
}: DashboardLayoutProps) {
  return (
    <section className="overflow-y-scroll scrollbar-none">
      <article className="mb-5 overflow-hidden p-1">{stats}</article>
      <article>
        <h3 className="font-bold">최고 레벨</h3>
        <div className="h-52 w-full">{chart}</div>
      </article>
      <article className="mt-7 flex flex-col gap-3">{menu}</article>
      {children}
    </section>
  )
}
