"use client";

import { ComponentProps } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/style";

export const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) => (
  <SeparatorPrimitive.Root
    className={cn(
      "bg-separator",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className
    )}
    {...{ decorative, orientation }}
    {...props}
  />
);
