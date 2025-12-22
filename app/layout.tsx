import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Majda Mhaili - Développeuse Full-Stack',
  description: 'Portfolio de Majda Mhaili, développeuse full-stack passionnée par la création d\'expériences web innovantes',
  keywords: ['développeuse', 'full-stack', 'web', 'React', 'TypeScript', 'Node.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
