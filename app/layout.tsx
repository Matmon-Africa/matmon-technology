import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Matmon Technology - Sovereign Data Center in Kisumu, Kenya',
  description: 'Kenya\'s first sovereign data center in Kisumu. DPA compliant colocation, managed analytics, and private cloud solutions for African businesses.',
  generator: 'Matmon Technology',
  icons: {
    icon: [
      {
        url: '/logos/matmon-tech-icon-black.svg',
        media: '(prefers-color-scheme: light)',
        type: 'image/svg+xml',
      },
      {
        url: '/logos/matmon-tech-icon-white.svg',
        media: '(prefers-color-scheme: dark)',
        type: 'image/svg+xml',
      },
      {
        url: '/logos/matmon-tech-icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logos/matmon-tech-icon-white.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
