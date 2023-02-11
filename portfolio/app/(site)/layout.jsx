import { Roboto_Mono } from '@next/font/google'
import './globals.css';

import { AnalyticsWrapper } from "../../components/analytics";
import MainNavigation from "../../components/navigation/mainNavigation";

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'optional',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MainNavigation brand='' />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
