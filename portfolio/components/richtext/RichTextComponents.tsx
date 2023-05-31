import Image from 'next/image';
import Link from 'next/link';
import urlFor from "../../lib/urlFor";
import { Source_Code_Pro} from 'next/font/google';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const source_code_pro= Source_Code_Pro({
    weight: '200',
    subsets: ['latin']
})

export const RichTextComponents = {
    types: {
        image: ( {value} : any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            );
        },
        code: ( {value} : any) => {
            // return (
            //     <SyntaxHighlighter language="javascript" style={docco}>
            //         {value.code}
            //     </SyntaxHighlighter>
            // )

            return (
                    <div className={source_code_pro.className}>
                    <pre className="text-white text-base px-4 py-2 mx-6 my-4 bg-stone-700 rounded-xl">
                        {value.code}
                    </pre>
                </div>
            )
        }
    },
    list: {
        bullet: ({ children }: any)  => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children}: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),
    },

    block: {
        h1: ({ children}: any) => (
               <h1 className="text-5xl py-10 font-bold">{children}</h1>
        ),
        h2: ({ children}: any) => (
               <h1 className="text-4xl py-10 font-bold">{children}</h1>
        ),
        h3: ({ children}: any) => (
               <h1 className="text-3xl py-10 font-bold">{children}</h1>
        ),
        h4: ({ children}: any) => (
               <h1 className="text-2xl py-10 font-bold">{children}</h1>
        ),
        normal: ({children}: any) => (
            <p className="pb-2 text-lg">{children}</p>
        ),


        blockquote: ({children}: any) => (
            <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({children, value}: any) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#F7AB0A] hover:decoration-black"
                >
                    {children}
                </Link>
            );
        },
    }
}