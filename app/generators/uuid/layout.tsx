import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { toolGroups } from "@/config/tools";

export const metadata: Metadata = {
  title: toolGroups.generators.tools.uuid.longTitle,
  description: toolGroups.generators.tools.uuid.description,
  robots: {
    googleBot: {
      index: true,
    },
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
