"use client"

import { usePreview } from "../../lib/sanity.preview";
import BlogPost from '../blog/BlogPost'

export default function PreviewBlogPost({ slug, params }) {
    console.log('POST', params)
    return <BlogPost posts={query} />
}