"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { SidebarProvider } from "@/hooks/use-sidebar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { SearchTextProvider } from "@/contexts/search-text";

import { ClientLayout } from "../client-layout";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SearchTextProvider>
        <SidebarProvider>
          <ClientLayout>{children}</ClientLayout>
          <TailwindIndicator />
        </SidebarProvider>
      </SearchTextProvider>
    </NextThemesProvider>
  );
}
