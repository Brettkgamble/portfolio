import { previewData} from "next/headers";
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../../lib/PreviewSuspense'
import PreviewBlogList from "../../../components/blog/PreviewBlogList";
import BlogList from "../../../components/blog/BlogList";
import Categories from '../../../components/blog/Categories'

import BlogHeader from '../../../components/headers/BlogHeader';
import BlogBanner from "../../../components/banners/BlogBanner";


const query= groq
    `
         *[_type=='post'] {
         ...,
         postIntroduction->,
         author->,
         categories[]->
         } | order(_createdAt desc)   
    `

const categoryQuery = groq
    `
        *[_type=='postCategory'] {
            ...,
        }
    `
export const revalidate = 30;


const posts = await client.fetch(query)
const categories = await client.fetch(categoryQuery)

export const metadata ={
    title: "Blog List",
    description: "Contains the CV, portfolio, and blog of Brett Gamble",
    generator: 'Next.js',
    applicationName: 'Brett Gamble - Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Sanity.io', 'Vercel'],
    authors: [{ name: 'Brett Gamble', url: 'https://brettkgamble.com' }],
    colorScheme: 'dark',
    creator: 'Brett Gamble',
    publisher: 'Brett Gamble',
    alternates: {},
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "The Portfolio website of Brett Gamble",
        description: "Contains the CV, portfolio, and blog of Brett Gamble who is originally from Sydney, Australia but now resides" +
        "in Edmonton, Alberta, Canada",
        url: 'https://www.brettkgamble.com',
        siteName: 'Brett Gamble - Portfolio',
        type: 'website',
        publishedTime: '2023-01-01T00:00:00.000Z',
        authors: ['Brett Gamble'],
        locale: 'en-US',
        // images: [
        //   {
        //     url: 'https://nextjs.org/og.png',
        //     width: 800,
        //     height: 600,
        //   },
        //   {
        //     url: 'https://nextjs.org/og-alt.png',
        //     width: 1800,
        //     height: 1600,
        //     alt: 'My custom alt',
        //   },
        // ],

  },
    robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default async function Blog() {
    if (previewData()) {
        return (
            <PreviewSuspense fallback={
                <div role="status">
                    <p className="text-center text-lg animate-pulse text-[#F71B0A]">
                        Loading Preview Data...
                    </p>
                </div>
            }>
            <PreviewBlogList query={query} />
            </PreviewSuspense>
        )
    }


    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <BlogHeader />
                <BlogBanner />
            </div>
             <div className="max-w-7xl mx-auto">
                 {/*<hr className="border-[#F7AB0A] mb-10" />*/}
                 <div className="flex flex-wrap">
                     {/*for small screens < lg*/}
                     <div className=" text-white w-full pr-4 pl-8 lg:w-4/5 lg:hidden">
                         <Categories categories={categories}/>
                     </div>
                     <div className="w-full pt-16 pl-8 lg:w-4/5">
                        <BlogList posts={posts}/>
                     </div>
                     {/*Screens lg and above*/}
                     <div className="hidden text-white pt-16 w-11/12 pr-4 lg:block lg:w-1/5 ">
                         <Categories categories={categories}/>
                     </div>
                 </div>
             </div>
        </div>
    )
}