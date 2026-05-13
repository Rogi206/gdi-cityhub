import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = 'https://gdi-cityhub.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'GDI CityHub | Transformacion Digital para Comercios Locales',
  description: 'Agencia especializada en transformacion digital para comercios locales. Ofrecemos paginas web, apps/MVPs y agentes automatizados con IA. Tu negocio local, en la era digital.',
  keywords: ['transformacion digital', 'comercios locales', 'paginas web', 'apps', 'MVPs', 'agentes IA', 'automatizacion'],
  authors: [{ name: 'GDI CityHub', url: siteUrl }],
  creator: 'GDI CityHub',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'GDI CityHub',
    title: 'GDI CityHub | Transformacion Digital para Comercios Locales',
    description: 'Agencia especializada en transformacion digital para comercios locales. Ofrecemos paginas web, apps/MVPs y agentes automatizados con IA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDI CityHub | Transformacion Digital para Comercios Locales',
    description: 'Agencia especializada en transformacion digital para comercios locales.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
        >
          Saltar al contenido principal
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
