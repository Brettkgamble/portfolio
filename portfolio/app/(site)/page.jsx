import { Inter } from '@next/font/google'
import {HiArrowRight } from 'react-icons/hi'
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className="h-screen bg-black text-white">
            <div className="grid grid-cols-12 lg:mt-16">
                <div className="col-span-12 pl-8 pt-8 pb-8 sm:pl-16 md:pl-32 lg:pl-48">
                    <span className={inter.className}>
                        <span className="inline-block">My stack is <span className="inline-block align-middle"><HiArrowRight /></span></span>
                    </span>
                </div>
                <div className="col-span-12 text-center mt-12 md:col-span-6 lg:col-span-3 xl:col-start-2 xl:col-span-2">
                    <div className="flex relative justify-center items-center ">
                        <a href="https://reactjs.org" target="_blank">
                            <Image
                                // className={styles.logo}
                                src="/react.svg"
                                alt="React Logo"
                                width={120}
                                height={37}
                                priority
                              />
                        </a>
                    </div>
                </div>

                <div className="col-span-12 text-center mt-16 mb-12 md:col-span-6 md:mt-24 lg:col-span-3 xl:col-start-4 xl:col-span-2">
                    <div className="flex relative justify-center items-center">
                        <a href="https://nextjs.org" target="_blank">
                            <Image
                                src="/next.svg"
                                alt="Next.js Logo"
                                width={120}
                                height={37}
                                priority
                              />
                        </a>
                    </div>
                </div>
                <div className="col-span-12 text-center my-12 z-10 md:col-span-6 lg:col-span-3 lg:mt-24 xl:col-start-7 xl:col-span-2">
                    <div className="flex relative justify-center items-center ">
                        <a href="https://vercel.com/" target="_blank">
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={120}
                            height={37}
                            priority
                          />
                        </a>
                    </div>
                </div>
                <div className="col-span-12 text-center mt-12 mb-4 md:col-span-6 lg:col-span-3 lg:mt-24 xl:col-start-10 xl:col-span-2">
                    <div className="flex relative justify-center items-center ">
                        <a href="https://sanity.io" target="_blank">
                        <Image
                            // className={styles.logo}
                            src="/sanity-logo.png"
                            alt="Sanity.io Logo"
                            width={120}
                            height={37}
                            priority
                          />
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 pb-16 mt-16 md:grid-cols-3 md:gap-4 md:px-4 lg:mt-48 ">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <Link href="/resume"
                              // className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                        >
                            {/*<h2 className="block text-xl font-semibold mb-2">*/}
                            <h2 className="flex justify-center text-xl font-semibold mb-2">
                                <span className="inline-block">
                                    Resume
                                <span className="inline-block align-middle"><HiArrowRight /></span></span>
                            </h2>
                            <div className="flex justify-center items-center">
                                <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                    I have experienced many professional opportunities and you can read about them here.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <Link href="/about"
                              // className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                        >
                            {/*<h2 className="block text-xl font-semibold mb-2">*/}
                            <h2 className="flex justify-center text-xl font-semibold mb-2 mt-8 md:mt-0">
                                <span className="inline-block">About<span className="inline-block align-middle"><HiArrowRight /></span></span>
                            </h2>
                            <div className="flex justify-center items-center">
                                <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                    More about me, my story, and a lot less formality.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <Link href="/sites"
                              // className="px-4 py-10 rounded-xl border border-solid bg-card-rgb border-card-border ease-in duration-200"
                        >
                            {/*<h2 className="block text-xl font-semibold mb-2">*/}
                            <h2 className="flex justify-center text-xl font-semibold mb-2 mt-8 md:mt-0">
                                <span className="inline-block">Sites<span className="inline-block align-middle"><HiArrowRight /></span></span>
                            </h2>
                            <div className="flex justify-center items-center">
                                <p className="inline m-0 opacity-60 text-base leading-normal w-4/6 text-center">
                                    What have I built?  What am I building?
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}