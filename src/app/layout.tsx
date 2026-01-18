import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kasey McFadden",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
