import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConditionalChrome } from "@/components/ConditionalChrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seattle Lot Subdivision Bootcamp — Curriculum",
  description:
    "Table-based one-week curriculum for Seattle-area startup founders exploring infill, lot splits, and development realism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <ConditionalChrome />
        {children}
      </body>
    </html>
  );
}
