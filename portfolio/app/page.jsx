import { Inter } from '@next/font/google'
import {HiArrowRight } from 'react-icons/hi'
import Image from 'next/image';
import styles from "./page.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className="h-screen bg-black text-white">
            <div className="grid grid-cols-12">
                <div className="col-span-12 pl-8 pt-8 sm:pl-16 md:pl-32 lg:pl-48">
                    <span className={inter.className}>
                        <span className="inline-block">My stack is <span className="inline-block align-middle"><HiArrowRight /></span></span>
                    </span>
                </div>
                <div className="col-span-12 text-center mt-12 md:col-span-6 lg:col-span-3 xl:col-start-2 xl:col-span-2">
                    <div className="flex relative justify-center items-center ">
                        <Image
                            // className={styles.logo}
                            src="/react.svg"
                            alt="React Logo"
                            width={120}
                            height={37}
                            priority
                          />
                    </div>
                </div>

                <div className="col-span-12 text-center mt-16 mb-12 md:col-span-6 md:mt-24 lg:col-span-3 xl:col-start-4 xl:col-span-2">
                    <div className="flex relative justify-center items-center">
                        <Image
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={120}
                            height={37}
                            priority
                          />
                    </div>
                </div>
                <div className="col-span-12 text-center my-12 z-10 md:col-span-6 lg:col-span-3 lg:mt-24 xl:col-start-7 xl:col-span-2">
                    <div className="flex relative justify-center items-center ">
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={120}
                            height={37}
                            priority
                          />
                    </div>
                </div>
                <div className="col-span-12 text-center mt-12 mb-4 md:col-span-6 lg:col-span-3 lg:mt-24 xl:col-start-9 xl:col-span-2">
                    <div className="flex relative justify-center items-center ">
                        <Image
                            // className={styles.logo}
                            src="/sanity-logo.png"
                            alt="Sanity.io Logo"
                            width={120}
                            height={37}
                            priority
                          />
                    </div>
                </div>
                <div className="col-span-12 text-center px-4 pt-4">
                    <a
                      href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                      className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                      className="px-4 py-10 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <h2 className="block text-xl font-semibold mb-2">
                            <span className="inline-block">Resume<span className="inline-block align-middle"><HiArrowRight /></span></span>
                        </h2>
                        <div className="flex justify-center items-center">
                            <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                I have experienced many professional opportunities and you can read about them here.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="col-span-12 text-center px-4 ">
                    <a
                      href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                      className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                      className="px-4 py-10 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <h2 className="block text-xl font-semibold mb-2">
                            <span className="inline-block">About<span className="inline-block align-middle"><HiArrowRight /></span></span>
                        </h2>
                        <div className="flex justify-center items-center">
                            <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                A little less formal.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="col-span-12 text-center px-4 ">
                    <a
                      href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                      className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                      className="px-4 py-10 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <h2 className="block text-xl font-semibold mb-2">
                            <span className="inline-block">Sites<span className="inline-block align-middle"><HiArrowRight /></span></span>
                        </h2>
                        <div className="flex justify-center items-center">
                            <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                See what I am building.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="col-span-12 text-center px-4 mb-8">
                    <a
                      href="/contact"
                      className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                      className="px-4 py-10 "
                      target=""
                      rel="noopener noreferrer"
                    >
                        <h2 className="block text-xl font-semibold mb-2">
                            <span className="inline-block">Contact<span className="inline-block align-middle"><HiArrowRight /></span></span>
                        </h2>
                        <div className="flex justify-center items-center">
                            <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                Get in Contact.
                            </p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}