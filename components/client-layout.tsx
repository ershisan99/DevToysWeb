"use client";

import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/style";
import { useSidebar } from "@/hooks/use-sidebar";

export function ClientLayout({ children }: PropsWithChildren) {
  const { isSidebarOpen, isLoading } = useSidebar();
  const isOpen = isSidebarOpen && !isLoading;

  return (
    <div
      className={cn(
        "grid h-full grid-rows-[3.5rem_1fr] transition-all",
        isOpen ? "grid-cols-[18rem_1fr]" : "grid-cols-[0_1fr]"
      )}
    >
      {children}
    </div>
  );
}
