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

  title: {
    default: "Samsun Nahar | Full Stack Developer",
    template: "%s | Samsun Nahar",
  },


  description:
    "Samsun Nahar is a Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, MongoDB and modern web applications.",


  keywords: [
    "Samsun Nahar",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Bangladesh"
  ],


  authors: [
    {
      name: "Samsun Nahar",
    },
  ],


  creator: "Samsun Nahar",


  metadataBase: new URL(
    "https://your-domain.com"
  ),


  openGraph: {

    title:
      "Samsun Nahar | Full Stack Developer Portfolio",

    description:
      "Explore my projects, skills and experience in modern full-stack web development.",


    url:
      "https://your-domain.com",


    siteName:
      "Samsun Nahar Portfolio",


    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Samsun Nahar Portfolio",
      },
    ],


    locale: "en_US",

    type: "website",

  },


  twitter: {

    card: "summary_large_image",

    title:
      "Samsun Nahar | Full Stack Developer",


    description:
      "Full Stack Developer portfolio showcasing modern web applications.",


    images: [
      "/profile.png"
    ],

  },


  robots: {

    index: true,

    follow: true,

  },


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

