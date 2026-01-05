import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Une Histoire Sans Faim - Storytelling Collaboratif',
  description: 'Plateforme collaborative de storytelling avec micro-donations pour une cause charitable',
  keywords: ['storytelling', 'collaborative', 'charity', 'écriture', 'solidaire'],
  authors: [{ name: 'Ilyes & Nour' }],
  openGraph: {
    title: 'Une Histoire Sans Faim',
    description: 'Écrivons ensemble une histoire qui compte',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Une Histoire Sans Faim',
    description: 'Écrivons ensemble une histoire qui compte',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
