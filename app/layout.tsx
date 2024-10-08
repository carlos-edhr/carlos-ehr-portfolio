import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";
import { siteConfig } from "@/config/site";
// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "./css/satoshi.css";
// import "./css/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.png",
      href: "/logo.png",
    },
    // TODO: Include dark mode logo
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">{children}</body>
    </html>
  );
}
