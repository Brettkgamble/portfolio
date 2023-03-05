import '../(site)/globals.css'

import { AnalyticsWrapper } from "../../components/analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}