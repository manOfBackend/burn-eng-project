"use client"

import { cn } from "@sayvoca/lib/utils"
import { useEffect, useState } from "react"

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const [fade, setFade] = useState(false)
  useEffect(() => {
    setFade(true)
    return () => {
      setFade(false)
    }
  }, [])
  return (
    <div
      className={cn(
        fade ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        "transition duration-500 ease-out"
      )}
    >
      {children}
    </div>
  )
}
