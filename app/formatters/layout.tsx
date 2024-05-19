import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { toolGroups } from "@/config/tools";

export const metadata: Metadata = {
  title: toolGroups.formatters.title,
  robots: {
    googleBot: {
      index: false,
    },
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
