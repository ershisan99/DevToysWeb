import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { toolGroups } from "@/config/tools";

export const metadata: Metadata = {
  title: toolGroups.encodersDecoders.tools.url.longTitle,
  description: toolGroups.encodersDecoders.tools.url.description,
  robots: {
    googleBot: {
      index: true,
    },
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
