import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Suraj Patel | Backend-focused Full Stack Engineer",
  description:
    "Suraj Patel is a backend-focused full stack engineer based in Patna, Bihar, building secure, scalable APIs and applications.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geistMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
