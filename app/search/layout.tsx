import { PropsWithChildren } from "react";
import { Metadata } from "next";

// TODO: use query param
export const metadata: Metadata = {
  title: "Search results",
  robots: {
    googleBot: {
      index: false,
    },
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
