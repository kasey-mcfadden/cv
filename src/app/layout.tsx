import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const cmuSerif = localFont({
  src: [
    {
      path: "../../public/fonts/cmu-serif/cmunrm.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cmu-serif/cmunbx.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/cmu-serif/cmunti.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/cmu-serif/cmunbi.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-cmu-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaseym.com"),
  title: "Kasey McFadden",
  description: "Full Stack Software Engineer",
  alternates: {
    canonical: "/cv",
  },
  icons: {
    icon: "/cv/favicon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cmuSerif.className}>{children}</body>
    </html>
  );
}
