"use client";

import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/style";
import { SidebarStatus, useSidebarStatus } from "@/contexts/sidebar";

export function ClientLayout({ children }: PropsWithChildren) {
  const sidebarStatus = useSidebarStatus();
  const isOpen = sidebarStatus === SidebarStatus.Open;
  const isClosed = sidebarStatus === SidebarStatus.Closed;

  return (
    <div
      className={cn(
        "grid h-full grid-rows-[3.5rem_1fr] transition-all",
        isOpen && "grid-cols-[18rem_1fr]",
        isClosed && "grid-cols-[0_1fr]"
      )}
    >
      {children}
    </div>
  );
}
