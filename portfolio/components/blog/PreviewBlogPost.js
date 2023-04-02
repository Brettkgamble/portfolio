"use client"

import BlogPost from '../blog/BlogPost'
import { usePreview} from "../../lib/sanity.preview";

export default function PreviewBlogPost({ query, queryParams }) {
    const post = usePreview(null, query, queryParams)
    return <BlogPost post={post} />
}