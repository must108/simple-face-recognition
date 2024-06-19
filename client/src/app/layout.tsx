import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from 'next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Face Detection Tool :D",
  description: "Detect faces in pictures!",
  icons: {
    icon: 'favicon.ico'
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        {children}
        </body>
    </html>
  );
}
