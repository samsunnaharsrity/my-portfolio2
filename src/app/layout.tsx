import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/global/LenisProvider";
import ScrollProgress from "./components/global/ScrollProgress";
import MouseOrb from "./components/global/MouseOrb";
import NoiseOverlay from "./components/global/NoiseOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samsun Nahar | Full Stack Developer Portfolio",
  description: "Crafting modern, responsive, and user-friendly websites with passion and precision.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <LenisProvider>
          <ScrollProgress />
          <MouseOrb />
          <NoiseOverlay />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

