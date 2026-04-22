import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Syne } from 'next/font/google'
import { BRAND, getMetaTags } from '@/lib/branding'
import './globals.css'

const geistSans = Geist({
  subsets:  ['latin'],
  variable: '--font-geist-sans',
  display:  'swap',
})

const geistMono = Geist_Mono({
  subsets:  ['latin'],
  variable: '--font-geist-mono',
  display:  'swap',
})

const syne = Syne({
  subsets:  ['latin'],
  weight:   ['700', '800'],
  variable: '--font-syne',
  display:  'swap',
})

const meta = getMetaTags()

export const metadata: Metadata = {
  title: {
    default:  meta.title,
    template: `%s | ${BRAND.NAME}`,
  },
  description:  meta.description,
  keywords:     BRAND.META_KEYWORDS,
  authors:      [{ name: BRAND.LEGAL_NAME }],
  creator:      BRAND.NAME,
  publisher:    BRAND.NAME,
  metadataBase: new URL(BRAND.LANDING_URL),
  openGraph: {
    type:      'website',
    locale:    'en_NG',
    url:       BRAND.LANDING_URL,
    siteName:  BRAND.NAME,
    title:     meta.title,
    description: meta.description,
    images: [
      {
        url:    BRAND.OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    BRAND.META_TITLE,
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    site:        BRAND.TWITTER,
    creator:     BRAND.TWITTER,
    title:       meta.title,
    description: meta.description,
    images:      [BRAND.OG_IMAGE],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
    },
  },
}

export const viewport: Viewport = {
  width:         'device-width',
  initialScale:  1,
  themeColor:    '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}