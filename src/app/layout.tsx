import './globals.css'
import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'

const exo = Exo_2({ subsets: ['latin', 'latin-ext', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Taróloga Kelly',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  )
}
