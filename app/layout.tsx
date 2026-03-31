import { GeistMono } from 'geist/font/mono'
import './globals.css'

const geistMono = GeistMono({ subsets: ['latin'] })

export const metadata = {
  title: 'Episto Dashboard',
  description: 'AI-powered sports prediction platform with swarm intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={geistMono.className}>
        {children}
      </body>
    </html>
  )
}