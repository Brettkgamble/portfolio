import { previewData} from "next/headers";
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../../lib/PreviewSuspense'
import PreviewBlogList from "../../../components/blog/PreviewBlogList";
import BlogList from "../../../components/blog/BlogList";
import ClientSideRoute from "../../../components/ClientSideRoute";

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
                 {/*<hr className="border-[#F7AB0A] mb-10" />*/}
                 <div className="flex flex-wrap">
                     {/*for small screens < lg*/}
                     <div className=" text-white w-full pr-4 pl-8 lg:w-4/5 lg:hidden">
                         <div className="text-white text-2xl pb-2 pl-10 ">Categories</div>
                         <div className="flex flex-col pl-10 md:flex-row gap-y-2 md:gap-x-2 items-center">
                            {categories.map((category) => (
                                <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-xs font-semibold">
                                    <p>{category.title}</p>
                                </div>
                            ))}
                        </div>
                     </div>
                     <div className="w-full pt-16 pl-8 lg:w-4/5">
                        <BlogList posts={posts}/>
                     </div>
                     {/*Screens lg and above*/}
                     <div className="hidden text-white pt-16 w-11/12 pr-4 lg:block lg:w-1/5 ">
                         <div className="text-white text-2xl pb-2">Categories</div>
                         <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                            {categories.map((category) => (
                                <ClientSideRoute key={category._id} route={`/blog/category/${category.slug.current}`}>
                                    <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-xs font-semibold">
                                        <p>{category.title}</p>
                                    </div>
                                </ClientSideRoute>
                            ))}
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}