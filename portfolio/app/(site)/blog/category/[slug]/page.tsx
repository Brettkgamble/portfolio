import { groq } from 'next-sanity';
import { client } from '../../../../../lib/sanity.client';
import Image from 'next/image';
import urlFor from '../../../../../lib/urlFor';
import { PortableText } from "@portabletext/react";
import {RichTextComponents} from "../../../../../components/richtext/RichTextComponents";
import BlogList from '../../../../../components/blog/BlogList'
import BlogHeader from '../../../../../components/headers/BlogHeader';
import BlogBanner from "../../../../../components/banners/BlogBanner";
import ClientSideRoute from "../../../../../components/ClientSideRoute";

type Props = {
    params: {
        slug: string
    }
}

export const revalidate = 30; // revalidates the page every 30 seconds

export async function generateStaticParams() {

    const query = groq `*[_type=='postCategory']
    {
        slug,
    }`;

    const slugs = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }))
}

async function Category({ params: {slug}}: Props) {

    const posts = groq
    `
         *[_type=='post' && "${slug}" in categories[]->slug.current] {
         ...,
         postIntroduction->,
         author->,
         categories[]->
         } | order(_createdAt desc)   
    `

    const query = groq `
       *[_type=='postCategory' && slug.current == $slug][0]
       {
        ...,
        
        } 
    `

    const categoryQuery = groq
    `
        *[_type=='postCategory'] {
            ...,
        }
    `

    const category = await client.fetch(query, {slug} )
    const categories = await client.fetch(categoryQuery)
    const categoryPosts = await client.fetch(posts, {slug} )

    return (
        <div>
            <div>
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

                    <div className="flex flex-col w-full  lg:flex-row lg:space-x-5 justify-between font-bold px-20 mb-10">
                        <div>
                            <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-xs font-semibold">
                                <p>{category.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pl-8 lg:w-4/5">
                        <BlogList posts={categoryPosts}/>
                    </div>
                    {/*Screens lg and above*/}
                    <div className="hidden text-white  w-11/12 pr-4 lg:block lg:w-1/5 ">
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

export default Category;