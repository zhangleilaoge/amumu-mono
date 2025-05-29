// import './globals.css';

import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Briar",
  description: "",
  icons: {
    icon: "https://zzcjbauazgbnnpxahajj.supabase.co/storage/v1/object/public/amumu/img/bitbug_favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
