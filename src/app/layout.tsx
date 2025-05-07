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
  title: "CUCK 2025",
  description: "Official website for CUCK 2025",
  metadataBase: new URL('https://cuck2025.com'),
  openGraph: {
    title: "CUCK 2025",
    description: "Official website for CUCK 2025",
    url: 'https://cuck2025.com',
    siteName: 'CUCK 2025',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CUCK 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CUCK 2025",
    description: "Official website for CUCK 2025",
    images: ['/og-image.jpg'],
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
