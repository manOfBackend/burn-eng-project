"use client"

import { useEffect } from "react"
import WritingErrorView from "@/components/problem/writing-error-view"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <WritingErrorView reset={reset} />
}
