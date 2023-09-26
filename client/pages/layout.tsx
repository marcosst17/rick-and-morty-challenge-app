import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from '@/node_modules/next/image'
import logo from "@/public/assets/rick-morty-logo.png"

const poppins = Poppins({ subsets: ["latin"], weight: '400'})

export const metadata: Metadata = {
  title: 'Fulltimeforce Task',
  description: 'Github Commit History Application',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
    <body className={`${poppins.className}`}>
        {children}
    </body>
    </html>
  )
}
