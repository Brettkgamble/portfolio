import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Website and Application Development by Brett Gamble&nbsp;
        </p>
        {/*<div>*/}
        {/*  <a*/}
        {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    By{' Brett Gamble'}*/}
        {/*    <Image*/}
        {/*      src="/vercel.svg"*/}
        {/*      alt="Vercel Logo"*/}
        {/*      className={styles.vercelLogo}*/}
        {/*      width={100}*/}
        {/*      height={24}*/}
        {/*      priority*/}
        {/*    />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>

      <div className={styles.grid}>
        <h2 className={inter.className}>
            My stack is <span>-&gt;</span>
        </h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          {/*<div className={styles.thirteen}>*/}
          {/*  <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />*/}
          {/*</div>*/}
        </div>
         <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/vercel.svg"
            alt="Vercel Logo"
            width={180}
            height={37}
            priority
          />
          {/*<div className={styles.thirteen}>*/}
          {/*  <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />*/}
          {/*</div>*/}
        </div>
        <div className={styles.center}>
          <Image
            // className={styles.logo}
            src="/sanity-logo.png"
            alt="Sanity.io Logo"
            width={180}
            height={37}
            priority
          />
          {/*<div className={styles.thirteen}>*/}
          {/*  <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />*/}
          {/*</div>*/}
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Resume <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            I have experienced many professional opportunities and you can read about them here.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
          <p className={inter.className}>A little less formal than my resume.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Sites <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            See what I have built and what I am building.
          </p>
        </a>
      </div>
    </main>
  )
}
