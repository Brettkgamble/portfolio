import { Roboto_Mono } from '@next/font/google'
import './globals.css';

import { AnalyticsWrapper } from "../../components/analytics";
import MainNavigation from "../../components/navigation/mainNavigation";
import Script from 'next/script';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'optional',
});

export { main_meta_data as metadata } from '../../components/metadata/Main_metadata'

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <MainNavigation brand='' />
        {children}
        <AnalyticsWrapper />
      </body>
      {/*Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SVKRH289W0"></Script>
        <Script
            id='gtm-script'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `{
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-SVKRH289W0');
                }`
            }}

        />
    </html>
  )
}
