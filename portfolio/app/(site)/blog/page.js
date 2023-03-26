import { previewData} from "next/headers";
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import {PreviewSuspense} from "next-sanity/preview";
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
            <BlogHeader />
            <BlogBanner />
            <BlogList posts={posts}/>
        </div>
    )
}