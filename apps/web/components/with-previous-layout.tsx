"use client"
import { Icons } from "@sayvoca/ui/Icons"
import { useRouter } from "next/navigation"
import React from "react"

export default function WithPreviousLayout() {
  const router = useRouter()

  return (
    <nav className="sticky top-0 h-[50px] w-full bg-white z-50">
      <button
        type="button"
        className="flex h-[50px] w-[50px] items-center justify-center active:bg-gray-300/50"
        onClick={() => {
          router.back()
        }}
      >
        <Icons.chevronLeft />
      </button>
    </nav>
  )
}
