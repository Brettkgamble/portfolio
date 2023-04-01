import { groq } from 'next-sanity';
import { client } from '../../../../../lib/sanity.client';
import Image from 'next/image';
import urlFor from '../../../../../lib/urlFor';
import { PortableText } from "@portabletext/react";
import {RichTextComponents} from "../../../../../components/richtext/RichTextComponents";

import BlogHeader from '../../../../../components/headers/BlogHeader';
import BlogBanner from "../../../../../components/banners/BlogBanner";

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

    const query = groq `
       *[_type=='postCategory' && slug.current == $slug][0]
       {
        ...,
        
        } 
    `
    const post = await client.fetch(query, {slug} )
    return (
        <div>
            <BlogHeader />
            <BlogBanner />
            <article className="px-10 pb-28">
                <section>
                    <div className="text-white">Test Category</div>
                </section>
            </article>
        </div>
    )
}

export default Category;