"use client"

import React from "react"
import { QueryErrorResetBoundary } from "@tanstack/react-query"
import { ErrorBoundary } from "@/components/error-boundary"
import WritingProblemContainer from "./writing-problem-container"
import WritingErrorView from "./writing-error-view"

interface Props {
  children?: React.ReactNode
}
export default function WritingErrorContainer({ children }: Props = {}) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallback={({ error, resetErrorBoundary }) => (
            <WritingErrorView reset={resetErrorBoundary} />
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
