import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className="h-screen bg-black">
            <div className="flex flex-col items-start lg:items-center p-6">
                  <div className="lg:border lg:rounded-xl lg:border-callout-border-rgb lg:px-4 lg:py-4">
                    <p className="font-mono">
                      Website and Application Development by Brett Gamble&nbsp;
                    </p>
                  </div>
            </div>
            <div className="flex justify-left p-6">
                <div className="grow w-32"></div>
                <div className="flex-initial w-96 text-white">
                    <h2 className={inter.className}>
                        My stack is <span>-&gt;</span>
                    </h2>
                </div>
                <div className="grow w-32"></div>
            </div>

        </div>
    )
}