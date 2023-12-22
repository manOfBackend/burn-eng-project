import { ComponentProps } from "react"
import Lottie from "./components/lottieContainer"

export const WelcomeLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://assets-v2.lottiefiles.com/a/246003ce-1185-11ee-a1fb-b35ad4109460/DQHn3B1vxy.json"
    loop={true}
  />
)
export const DevelopingLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://assets-v2.lottiefiles.com/a/30ddf12a-1152-11ee-bea4-43ae90fa7130/R80cDrHHDt.json"
    loop={true}
  />
)
export const DeniedLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://assets-v2.lottiefiles.com/a/b5d75b1a-1188-11ee-ad09-b39071d5f7c9/a49csySEbr.json"
    loop={true}
  />
)

export const CongratulationsLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://lottie.host/d75313ce-4637-4387-b5be-e345887de369/jtmPgcaxHM.json"
    loop={true}
  />
)

export const SadLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://lottie.host/c2426b12-d9d9-46ac-b822-2885c51b7f9a/eb3SkAd5e8.json"
    loop={true}
  />
)

export const ErrorLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://lottie.host/71395ddc-dc6d-4d04-b076-2455f6bda666/jwtZoZzgyw.json"
    loop={true}
  />
)

export const AILottie = (props: Omit<ComponentProps<typeof Lottie>, "src">) => (
  <Lottie
    {...props}
    src="https://lottie.host/4e665d02-0038-4731-a724-9da45dbb224c/aS86VvnOnP.json"
    loop={true}
  />
)
export const CommunityLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    src="https://lottie.host/6d696aba-b3a1-4caf-9c94-a7ffc640b573/UkeWwFVqIq.json"
    loop={true}
  />
)

export const WaitingLottie = (
  props: Omit<ComponentProps<typeof Lottie>, "src">
) => (
  <Lottie
    {...props}
    data-testid="completeLottie"
    src="https://assets6.lottiefiles.com/packages/lf20_CXGNxPqYqJ.json"
    loop={true}
  />
)
