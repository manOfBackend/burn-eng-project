import { ComponentProps } from "react";
import Lottie from "./components/lottieContainer";

export const ZammanboLottie = (props: Omit<ComponentProps<typeof Lottie>, 'src'>) => (
  <Lottie
    {...props}
    src="https://lottie.host/fcc310bc-f060-4dbf-994f-b22854da0491/OgBsa2llRr.json"
    loop={true}
  />
);

export const WelcomeLottie = (props: Omit<ComponentProps<typeof Lottie>, 'src'>) => (
  <Lottie
    {...props}
    src="https://assets-v2.lottiefiles.com/a/246003ce-1185-11ee-a1fb-b35ad4109460/DQHn3B1vxy.json"
    loop={true}
  />
);
export const DevelopingLottie = (props: Omit<ComponentProps<typeof Lottie>, 'src'>) => (
  <Lottie
    {...props}
    src="https://assets-v2.lottiefiles.com/a/30ddf12a-1152-11ee-bea4-43ae90fa7130/R80cDrHHDt.json"
    loop={true}
  />
);
export const DeniedLottie = (props: Omit<ComponentProps<typeof Lottie>, 'src'>) => (
  <Lottie
    {...props}
    src="https://assets-v2.lottiefiles.com/a/b5d75b1a-1188-11ee-ad09-b39071d5f7c9/a49csySEbr.json"
    loop={true}
  />
);