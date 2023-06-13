import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lavitz Online',
  description: 'Lavitz Starlove\'s website landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} test`}>{children}</body>
    </html>
  )
}
