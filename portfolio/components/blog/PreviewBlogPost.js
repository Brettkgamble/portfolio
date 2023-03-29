"use client"

import { usePreview } from "../../lib/sanity.preview";
import BlogPost from '../blog/BlogPost'

export default function PreviewBlogPost({ query }) {
    console.log('Query', query)
    const post = usePreview(null, query);
    console.log('POST', post)
    return <BlogPost posts={post} />
}