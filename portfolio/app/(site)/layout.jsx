import { Roboto_Mono } from '@next/font/google'
import './globals.css';

import { AnalyticsWrapper } from "../../components/analytics";
import MainNavigation from "../../components/navigation/mainNavigation";
import Script from 'next/script'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'optional',
});

export const metadata ={
    title: "The Portfolio website of Brett Gamble",
    description: "Contains the CV, portfolio, and blog of Brett Gamble",
    generator: 'Next.js',
    applicationName: 'Brett Gamble - Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Sanity.io', 'Vercel'],
    authors: [{ name: 'Brett Gamble', url: 'https://brettkgamble.com' }],
    colorScheme: 'dark',
    creator: 'Brett Gamble',
    publisher: 'Brett Gamble',
    alternates: {},
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "The Portfolio website of Brett Gamble",
        description: "Contains the CV, portfolio, and blog of Brett Gamble who is originally from Sydney, Australia but now resides" +
        "in Edmonton, Alberta, Canada",
        url: 'https://www.brettkgamble.com',
        siteName: 'Brett Gamble - Portfolio',
        type: 'website',
        publishedTime: '2023-01-01T00:00:00.000Z',
        authors: ['Brett Gamble'],
        locale: 'en-US',
        // images: [
        //   {
        //     url: 'https://nextjs.org/og.png',
        //     width: 800,
        //     height: 600,
        //   },
        //   {
        //     url: 'https://nextjs.org/og-alt.png',
        //     width: 1800,
        //     height: 1600,
        //     alt: 'My custom alt',
        //   },
        // ],

  },
    robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <MainNavigation brand='' />
        {children}
        <AnalyticsWrapper />
      </body>
      {/*Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LKQZPYZYXX"></Script>
        <Script
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LKQZPYZYXX');
            `}
        />
    </html>
  )
}
