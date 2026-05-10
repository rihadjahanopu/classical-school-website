import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greenwood High School | Excellence in Education",
  description: "Nurturing tomorrow's leaders through innovative education and character development since 1950.",
  keywords: ["education", "high school", "greenwood high", "academic excellence", "STEM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} min-h-screen w-full antialiased`}
    >
      <body className="min-h-screen w-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
