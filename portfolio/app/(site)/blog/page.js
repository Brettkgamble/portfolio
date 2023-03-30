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

const categoryQuery = groq
    `
        *[_type=='postCategory'] {
            ...,
        }
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
    const categories = await client.fetch(categoryQuery)
    console.log(categories)
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <BlogHeader />
                <BlogBanner />
            </div>
             <div className="max-w-7xl mx-auto">
                 <hr className="border-[#F7AB0A] mb-10" />
                 <div className="flex flex-wrap">
                     <div className="w-full pt-16 px-8 lg:w-4/5">
                        <BlogList posts={posts}/>
                     </div>
                     <div className="hidden text-white pt-16 pl-2 w-11/12 lg:block lg:w-1/5 ">
                         <div className="text-white text-2xl pb-2">Categories</div>
                         <div className="grid grid-cols-1 pb-24">
                             {categories.map((category) => {
                                 return (
                                     <div className="text-white py-1">
                                         {category.title}
                                     </div>
                                 )

                             })}
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}