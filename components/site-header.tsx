"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/style";
import { useSidebar } from "@/hooks/use-sidebar";
import * as icons from "@/components/icons";
import { Menu } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

type Props = {
  className?: string;
};

export function SiteHeader({ className }: Props) {
  const { toggleSidebar } = useSidebar();

  return (
    <header className={cn("flex items-center justify-between px-4", className)}>
      <div className="flex items-center gap-x-2.5">
        <button
          type="button"
          className="flex items-center rounded p-1.5 hover:bg-accent"
          onClick={toggleSidebar}
        >
          <Menu />
        </button>
        {/* @ts-expect-error react 19 beta error */}
        <Link className="text-lg" href="/">
          {siteConfig.name}
        </Link>
      </div>
      <div className="flex gap-x-1">
        <a
          className="group size-10 rounded-md p-2"
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
