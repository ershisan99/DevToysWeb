"use client";

import { useCallback } from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/style";
import * as icons from "@/components/icons";
import { Menu } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarStatus, useSetSidebarStatus, useSidebarStatus } from "@/contexts/sidebar";

type Props = {
  className?: string;
};

export function SiteHeader({ className }: Props) {
  const setSidebarStatus = useSetSidebarStatus();
  const sidebarStatus = useSidebarStatus();
  const handleMenuToggle = useCallback(() => {
    setSidebarStatus(
      sidebarStatus === SidebarStatus.Open ? SidebarStatus.Closed : SidebarStatus.Open
    );
  }, [sidebarStatus, setSidebarStatus]);

  return (
    <header className={cn("flex items-center justify-between px-4", className)}>
      <div className="flex items-center gap-x-2.5">
        <button
          type="button"
          className="flex items-center rounded p-1.5 hover:bg-accent"
          onClick={handleMenuToggle}
        >
          <Menu />
        </button>
        <Link className="text-lg" href="/">
          {siteConfig.name}
        </Link>
      </div>
      <div className="flex gap-x-1">
        <a
          className="group h-10 w-10 rounded-md p-2"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <icons.GitHub className="group-hover:opacity-70" />
          <span className="sr-only">GitHub</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
