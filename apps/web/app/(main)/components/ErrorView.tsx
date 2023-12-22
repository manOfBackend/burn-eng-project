import { Button, ErrorLottie } from "@sayvoca/ui"

interface GlobalErrorViewProps {
  reset: () => void
}

export default function GlobalErrorView({ reset }: GlobalErrorViewProps) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex min-h-[200px] max-w-[240px] items-center justify-center">
        <ErrorLottie />
      </div>
      <h2 className="my-4 whitespace-pre-wrap text-center text-xl font-bold">
        일시적으로 에러가 발생해서 처리하지 못했어요.
      </h2>
      <div>
        <Button className="w-full" variant="submit" onClick={reset}>
          재시도
        </Button>
      </div>
    </section>
  )
}
