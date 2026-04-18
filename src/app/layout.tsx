import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import PageLoadFeedback from "@/components/PageLoadFeedback";
import ThemeInit from "@/components/ThemeInit";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panto — Make Your Interior Modern",
  description: "Premium furniture for minimalistic modern interiors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground">
        <ThemeInit />
        <PageLoadFeedback />
        {children}
      </body>
    </html>
  );
}
