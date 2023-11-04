"use client"
import { Icons } from "@sayvoca/ui/Icons"
import { useRouter } from "next/navigation"
import React from "react"

export default function WithPreviousLayout() {
  const router = useRouter()

  return (
    <nav>
      <button
        type="button"
        className="absolute left-4 top-4"
        onClick={() => {
          router.back()
        }}
      >
        <Icons.chevronLeft />
      </button>
    </nav>
  )
}
