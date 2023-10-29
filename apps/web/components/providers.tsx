"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@sayvoca/ui/Theme-Provider";
import { queryClient } from "./queryClient";

type Props = {
  children: React.ReactNode;
};

async function loadDevTools() {

  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('../mocks/browser')
  return worker.start()

}

function Providers({ children }: Props) {
  // const [ready, setIsReady] = useState(false);
  // loadDevTools().then(() => {
  //   setIsReady(true)
  // })

  // if (!ready) {
  //   return null
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;