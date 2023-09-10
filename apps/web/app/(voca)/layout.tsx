interface VocaLayoutProps {
  children: React.ReactNode
}

export default function VocaLayout({ children }: VocaLayoutProps) {
  return <div className="h-full w-full">{children}</div>
}
