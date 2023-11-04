import WithPreviousLayout from "@/components/with-previous-layout"

interface SignupLayoutProps {
  children: React.ReactNode
}

export default function SignupLayout({ children }: SignupLayoutProps) {
  return (
    <div className="h-screen w-full">
      <WithPreviousLayout />
      {children}
    </div>
  )
}
