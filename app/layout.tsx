import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LiquidEther from "@/components/LiquidEther";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurorealis - UX Design & Research Agency",
  description: "Crafting research-driven digital experiences. Expert UX design and research services including user research, wireframes, prototypes, and usability testing.",
  keywords: ["UX design", "user research", "prototyping", "usability testing", "digital experiences"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
          <LiquidEther />
        </div>
        {children}
      </body>
    </html>
  );
}
