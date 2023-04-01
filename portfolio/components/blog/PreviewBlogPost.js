"use client"

import BlogPost from '../blog/BlogPost'

export default function PreviewBlogPost({ query }) {
    return <BlogPost posts={query} />
}