import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Borion - Minecraft Utility',
  description: 'Borion is an updated version of Horion, a Minecraft Bedrock Edition utility mod.',
  keywords: 'borion, horion, toolbox, minecraft hack, minecraft cheat, minecraft utility, hack, cheat, utility',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="https://github.com/Borion-Updated/Borion-Updated.github.io/blob/master/img/icon.png?raw=true" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

