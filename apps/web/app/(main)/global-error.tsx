"use client"

import { useEffect } from "react"
import GlobalErrorView from "./components/error-view"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <GlobalErrorView reset={reset} />
      </body>
    </html>
  )
}
