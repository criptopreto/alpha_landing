import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const space = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Sign Up Alpha",
  description: "Find great jobs at ♥️ startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
