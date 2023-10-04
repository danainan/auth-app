import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'

const notoFont = Noto_Sans_Thai({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Authenication Web',
  description: 'With docker AUTH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoFont.className}>{children}</body>
    </html>
  )
}
