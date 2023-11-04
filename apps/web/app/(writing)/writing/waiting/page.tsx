import React from "react"
import Lottie from "@/components/Lottie"

export default function WaitingPage() {
  return <WaitingLottie />
}

const WaitingLottie = (props: Omit<ComponentProps<typeof Lottie>, "src">) => (
  <Lottie
    {...props}
    data-testid="completeLottie"
    src="https://assets6.lottiefiles.com/packages/lf20_CXGNxPqYqJ.json"
    loop={true}
  />
)
