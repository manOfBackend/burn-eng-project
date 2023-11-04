import React, { ComponentProps } from "react"
import Lottie from "@/components/Lottie"

export default function WritingWaitingView() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex min-h-[200px] max-w-[240px] items-center justify-center">
        <WaitingLottie />
      </div>
      <h2 className="my-4 whitespace-pre-wrap text-center text-xl font-bold">
        채점하고 있어요.{"\n"}
        잠시만 기다려 주세요!
      </h2>
    </section>
  )
}

const WaitingLottie = (props: Omit<ComponentProps<typeof Lottie>, "src">) => (
  <Lottie
    {...props}
    src="https://assets6.lottiefiles.com/packages/lf20_CXGNxPqYqJ.json"
    loop={true}
  />
)
