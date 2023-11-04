import React, { ComponentProps } from "react"
import Lottie from "@/components/Lottie"

export default function WritingWaitingView() {
  return (
    <section className="flex flex-col items-center justify-center">
      <WaitingLottie />
      <h2 className="my-4 whitespace-pre-wrap text-center text-xl font-bold">
        채점중 입니다.{"\n"}
        잠시만 기다려 주세요!
      </h2>
    </section>
  )
}

const WaitingLottie = (props: Omit<ComponentProps<typeof Lottie>, "src">) => (
  <Lottie
    {...props}
    data-testid="completeLottie"
    src="https://assets6.lottiefiles.com/packages/lf20_CXGNxPqYqJ.json"
    loop={true}
  />
)
