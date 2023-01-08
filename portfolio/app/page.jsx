import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="flex flex-col justify-between items-center p-6 h-screen">
          <div className={styles.description}>
            <p>
              Website and Application Development by Brett Gamble&nbsp;
            </p>
          </div>

      {/*<div className={styles.grid}>*/}
      {/*  <h2 className={inter.className}>*/}
      {/*      My stack is <span>-&gt;</span>*/}
      {/*  </h2>*/}
      {/*</div>*/}
      {/*<div className={styles.grid}>*/}
      {/*  <div className={styles.center}>*/}
      {/*    <Image*/}
      {/*      // className={styles.logo}*/}
      {/*      src="/react.svg"*/}
      {/*      alt="React Logo"*/}
      {/*      width={120}*/}
      {/*      height={37}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.center}>*/}
      {/*    <Image*/}
      {/*      className={styles.logo}*/}
      {/*      src="/next.svg"*/}
      {/*      alt="Next.js Logo"*/}
      {/*      width={120}*/}
      {/*      height={37}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*   <div className={styles.center}>*/}
      {/*    <Image*/}
      {/*      className={styles.logo}*/}
      {/*      src="/vercel.svg"*/}
      {/*      alt="Vercel Logo"*/}
      {/*      width={120}*/}
      {/*      height={37}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.center}>*/}
      {/*    <Image*/}
      {/*      // className={styles.logo}*/}
      {/*      src="/sanity-logo.png"*/}
      {/*      alt="Sanity.io Logo"*/}
      {/*      width={120}*/}
      {/*      height={37}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className={styles.grid}>*/}
      {/*  <a*/}
      {/*    href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    className={styles.card}*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={inter.className}>*/}
      {/*      Resume <span>-&gt;</span>*/}
      {/*    </h2>*/}
      {/*    <p className={inter.className}>*/}
      {/*      I have experienced many professional opportunities and you can read about them here.*/}
      {/*    </p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    className={styles.card}*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={inter.className}>*/}
      {/*      About <span>-&gt;</span>*/}
      {/*    </h2>*/}
      {/*    <p className={inter.className}>A little less formal than my resume.</p>*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    className={styles.card}*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <h2 className={inter.className}>*/}
      {/*      Sites <span>-&gt;</span>*/}
      {/*    </h2>*/}
      {/*    <p className={inter.className}>*/}
      {/*      See what I have built and what I am building.*/}
      {/*    </p>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </main>
  )
}
