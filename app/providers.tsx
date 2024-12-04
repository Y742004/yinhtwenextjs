"use client";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {" "}
      <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider></NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
