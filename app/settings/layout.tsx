import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { singleTools } from "@/config/tools";

export const metadata: Metadata = {
  title: singleTools.settings.longTitle,
  robots: {
    googleBot: {
      index: false,
    },
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
