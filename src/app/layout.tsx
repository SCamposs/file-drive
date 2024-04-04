import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConvexClientProvider from './ConvexClientProvider'
import { Header } from './header'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from './footer'
import { ThemeProvider } from './theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'File Drive',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
