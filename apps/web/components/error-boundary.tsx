"use client"
import {
  Component,
  ComponentType,
  createElement,
  ReactNode,
  ErrorInfo,
} from "react"

type ErrorBoundaryState = {
  hasError: boolean
  error: Error | null
}

type FallbackProps = {
  error: Error | null
  resetErrorBoundary: () => void // resetErrorBoundary 함수를 사용하는쪽에서 사용 가능하도록 props로 전달
}

type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>
  onReset: () => void
  children: ReactNode
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
      error: null,
    }

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this) // this 바인딩 처리
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  resetErrorBoundary(): void {
    this.props.onReset()

    this.setState({
      hasError: false,
      error: null,
    })
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo })
  }

  render() {
    const { state, props, resetErrorBoundary } = this

    const { hasError, error } = state

    const { fallback, children } = props

    const fallbackProps: FallbackProps = {
      error,
      resetErrorBoundary,
    }

    const fallbackComponent = createElement(fallback, fallbackProps)

    return hasError ? fallbackComponent : children
  }
}
