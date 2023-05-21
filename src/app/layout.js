'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import { CookiesProvider } from 'react-cookie'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <CookiesProvider>
        <html lang="ja">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </CookiesProvider>
    </>

  )
}
