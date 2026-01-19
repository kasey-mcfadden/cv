import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaseym.com"),
  title: "Kasey McFadden",
  description: "Full Stack Software Engineer",
  alternates: {
    canonical: "/cv",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Kasey McFadden - Resume",
  description: "Full Stack Software Engineer",
  url: "https://kaseym.com/cv",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/cv/fonts/cmu-serif/cmunrm.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/cv/fonts/cmu-serif/cmunbx.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
