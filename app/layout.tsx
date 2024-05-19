import "@/styles/globals.css";

import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/style";
import { Providers } from "@/components/ui/providers";
import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  generator: "Next.js",
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: {
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    title: siteConfig.name,
    siteName: siteConfig.name,
    type: "website",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  verification: {
    google: "LlndxXYLHOwTH1LOIcckAWY3xg3y9TMfL-U__wnKAFw",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-screen bg-background font-sans text-sm font-medium text-foreground antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers attribute="class" defaultTheme="system" disableTransitionOnChange>
          <SiteHeader className="col-span-full" />
          <Sidebar />
          <main className="overflow-y-auto rounded-tl-md border bg-page p-12">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
