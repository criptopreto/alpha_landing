import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import clsx from "clsx";

const space = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Sign Up Alpha",
  description: "Find great jobs at ♥️ startups",
  keywords: ["Startups", "Jobs", "Values", "Interests"],
  openGraph: {
    title: "Sign Up Alpha",
    description: "Find great jobs at ♥️ startups",
    images: [
      {
        url: "https://signupalpha.com/images/opengraph-image.png", // Must be an absolute URL
        width: 630,
        height: 632,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(space.className, "bg-white")}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
