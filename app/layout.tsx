import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Saviour Foundation | Empowering Education in Delta State, Nigeria',
  description: 'Saviour Foundation identifies and rewards academically outstanding primary and secondary school students in Warri, Delta State through scholarships, competitions, and educational support.',
  keywords: ['education', 'scholarships', 'Nigeria', 'Delta State', 'Warri', 'academic competition', 'NGO', 'foundation'],
  authors: [{ name: 'Saviour Foundation' }],
  icons: {
    icon: '/images/image_logo.png',
    apple: '/images/image_logo.png',
  },
  openGraph: {
    title: 'Saviour Foundation | Empowering Education',
    description: 'Rewarding academic excellence in Delta State, Nigeria',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
