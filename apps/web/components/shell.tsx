import * as React from "react"
import { cn } from "@sayvoca/lib/utils"

interface ShellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  layout?: "default" | "dashboard" | "auth"
}

export function Shell({
  children,
  layout = "default",
  className,
  ...props
}: ShellProps) {
  return (
    <section
      className={cn(
        "grid min-h-screen items-center gap-8 pb-8 pt-6 md:py-8",
        layout === "default" && "container",
        layout === "auth" && "container h-screen",
        layout === "dashboard" && "container h-screen",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
