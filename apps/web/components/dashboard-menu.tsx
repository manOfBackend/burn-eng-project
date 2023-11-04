"use client"
import { Button } from "@sayvoca/ui/Button"
import { Icons } from "@sayvoca/ui/Icons"
import { useRouter } from "next/navigation"
import React from "react"

export default function DashboardMenu() {
  const router = useRouter()

  return (
    <article className="mt-7 flex flex-col gap-3">
      <Button
        className="w-full gap-2"
        variant={"dashboard"}
        size={"icon"}
        onClick={() => {
          router.push("/writing")
        }}
      >
        <Icons.pencil color="#9108bf" />
        작문 학습
      </Button>
      <Button
        className="w-full gap-2"
        variant={"dashboard"}
        size={"icon"}
        onClick={() => {
          router.push("/writing/history")
        }}
      >
        <Icons.history color="#9108bf" />
        학습이력
      </Button>
    </article>
  )
}
