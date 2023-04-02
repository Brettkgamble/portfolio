import { groq } from 'next-sanity';
import { client } from '../../../../../lib/sanity.client';
import Image from 'next/image';
import urlFor from '../../../../../lib/urlFor';
import { PortableText } from "@portabletext/react";
import {RichTextComponents} from "../../../../../components/richtext/RichTextComponents";
import Categories from '../../../../../components/blog/Categories';
import PreviewSuspense from '../../../../../lib/PreviewSuspense';
import { previewData } from "next/headers";
import BlogPost from '../../../../../components/blog/BlogPost'
import PreviewBlogPost from '../../../../../components/blog/PreviewBlogPost'

import BlogHeader from '../../../../../components/headers/BlogHeader';
import BlogBanner from "../../../../../components/banners/BlogBanner";

type Props = {
    params: {
        slug: string
    }
}

const query = groq `
       *[_type=='post' && slug.current == $slug][0]
       {
        ...,
         author->,
         categories[]->,
         body,
        } 
    `

const categoryQuery = groq
`
    *[_type=='postCategory'] {
        ...,
    }
`
export const revalidate = 30;

export default async function Post({ params: {slug}}: Props) {

    const post = await client.fetch(query, {slug} )
    const queryParams = { slug }

        if (previewData()) {
            return (
                <PreviewSuspense fallback={
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#F71B0A]">
                            Loading Preview Data...
                        </p>
                    </div>
                }>
                <PreviewBlogPost query={query} queryParams={queryParams}/>
                </PreviewSuspense>
            )
         }

    // const post = await client.fetch(query, {slug} )
    const categories = await client.fetch(categoryQuery)

    return (
        <div>
            <BlogHeader />
            <BlogBanner />
            <div className="max-w-7xl mx-auto pt-8">
                <div className="flex flex-wrap">
                    {/*for small screens < lg*/}
                     <div className=" text-white w-full pr-4 pl-8 lg:w-4/5 lg:hidden">
                         <Categories categories={categories} />
                     </div>
                    <div className="w-full pl-8 lg:w-4/5">
                        <article className="px-10 pb-28 pt-8">
                            <section className="space-y-2 border bg-[#F7AB0A] text-white">
                                <div className="relative min-h-56 flex flex-col md:flex-row">
                                    <div className="absolute top-0 w-full h-full opacity-30 blur-sm p-10">
                                        <Image
                                            className="object-cover object-center mx-auto"
                                            src={urlFor(post.mainImage.asset).url()}
                                            alt={post.author.name}
                                            fill
                                        />
                                    </div>
                                    <section className="p-5 bg-[#F7ABoA] w-full">
                                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                                            <div>
                                                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                                                <p>
                                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric"
                                                    })}
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 ">
                                                <Image
                                                    className="rounded-full"
                                                    src={urlFor(post.author.image).url()}
                                                    alt={post.author.name}
                                                    height={40}
                                                    width={40}
                                                />
                                                <div className="w-64">
                                                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="italic pt-10">{post.seoDescription}</h2>
                                            <div className="flex items-center justify-end mt-auto space-x-2 ">
                                                {post.categories.map((category) => (
                                                    <p key={category._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                                        {category.title}
                                                    </p>
                                                    ))}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </section>
                            <article className="pt-4">
                                <PortableText  value={post.body.body} components={RichTextComponents} />
                            </article>

                        </article>
                    </div>
                    {/*Screens lg and above*/}
                    <div className="hidden text-white  pt-6 w-11/12 pr-4 lg:block lg:w-1/5 ">
                         <Categories categories={categories} />
                    </div>
                </div>
            </div>
        </div>
    )
}

