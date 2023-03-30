import { previewData} from "next/headers";
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../../lib/PreviewSuspense'
import PreviewBlogList from "../../../components/blog/PreviewBlogList";
import BlogList from "../../../components/blog/BlogList";

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
export const revalidate = 30;

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

    const posts = await client.fetch(query)
    console.log(posts)
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <BlogHeader />
                <BlogBanner />
            </div>
             <div className="max-w-7xl mx-auto">
                 <hr className="border-[#F7AB0A] mb-10" />
                 <div className="flex flex-wrap">
                     <div className="w-full flex-none pt-16 px-8 md:w-2/4 lg:w-3/4">
                        <BlogList posts={posts}/>
                     </div>
                     <div className=" flex-none text-white pt-16 pl-2 w-11/12 md:w-1/5 lg:w-1/5">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-16 pb-24">
                             Categories
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}