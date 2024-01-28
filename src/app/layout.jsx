import { Space_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Sign Up Alpha",
  description: "Work in progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  );
}
