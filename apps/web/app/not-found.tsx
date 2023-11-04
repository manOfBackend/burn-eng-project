import { DeniedLottie } from "@sayvoca/ui/lotties"
import React from "react"

export default function NotFound() {
  return (
    <div className="flex w-full flex-col justify-center gap-10">
      <DeniedLottie />
      <p className="text-center text-lg font-semibold">
        존재하지 않는 페이지입니다.
      </p>
    </div>
  )
}
