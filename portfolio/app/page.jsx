import { Inter } from '@next/font/google'
import {HiArrowRight } from 'react-icons/hi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className="h-screen bg-black">
            <div className="flex flex-col items-center max-w-1100 lg:items-start p-6">
                  <div className="lg:border lg:rounded-xl lg:border-callout-border-rgb lg:px-4 lg:py-4">
                    <p className="font-mono">
                      Website and Application Development by Brett Gamble&nbsp;
                    </p>
                  </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-8 pl-8 pt-8 sm:pl-16 md:pl-32 lg:pl-48">
                    <span className={inter.className}>
                        <span className="inline-block">My stack is <span className="inline-block align-middle"><HiArrowRight /></span></span>
                    </span>
                </div>
            </div>

        </div>
    )
}