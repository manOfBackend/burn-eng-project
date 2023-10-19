"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@sayvoca/ui/Theme-Provider";
import { queryClient } from "./queryClient";

type Props = {
  children: React.ReactNode;
};

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser')
  worker.start()
}

function Providers({ children }: Props) {
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