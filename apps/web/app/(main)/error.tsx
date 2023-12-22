"use client"

import { useEffect } from "react"
import GlobalErrorView from "./components/ErrorView"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <GlobalErrorView reset={reset} />
}
