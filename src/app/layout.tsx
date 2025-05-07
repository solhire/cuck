import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import BackgroundImage from "./components/BackgroundImage";
import ColorProvider from "./components/ColorProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUCK",
  description: "WW3 DELUXE - Embrace what's coming. Let there be light.",
  metadataBase: new URL('https://bully2025.org'),
  openGraph: {
    title: "WW3 | BULLY2025",
    description: "WW3 DELUXE - Embrace what's coming. Let there be light.",
    url: 'https://bully2025.org',
    siteName: 'BULLY2025',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/coverdraft.png',
        width: 1200,
        height: 630,
        alt: 'WW3',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "WW3 | BULLY2025",
    description: "WW3 DELUXE - Embrace what's coming. Let there be light.",
    images: ['/coverdraft.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative overflow-x-hidden`}>
        <ColorProvider />
        <BackgroundImage />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
