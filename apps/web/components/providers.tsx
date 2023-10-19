"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@sayvoca/ui/Theme-Provider";

type Props = {
  children: React.ReactNode;
};

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser')
  worker.start()
}

function Providers({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;