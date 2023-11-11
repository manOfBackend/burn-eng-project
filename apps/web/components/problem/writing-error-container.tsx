"use client"

import React from "react"
import { QueryErrorResetBoundary } from "@tanstack/react-query"
import { ErrorBoundary } from "@/components/error-boundary"
import WritingProblemContainer from "./writing-problem-container"
import WritingErrorView from "./writing-error-view"
export default function WritingErrorContainer() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallback={({ error, resetErrorBoundary }) => (
            <WritingErrorView reset={resetErrorBoundary} />
          )}
        >
          <WritingProblemContainer />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
