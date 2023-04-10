import {groq} from "next-sanity";
import {client} from '../lib/sanity.client';

export async function getSortedPostsData() {
    const query = groq `*[_type=='post']
    {
    slug,
    }`;
    //
    const slugs = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }))
}

