import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

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
    image: "/images/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
