import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dedi Irawan',
  description: 'Website ini di buat dengan nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body className={poppins.className}
        suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
