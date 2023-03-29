// import type { NextApiRequest, NextApiResponse } from "next";

export default function previewBlogList(req, res) {
    res.setPreviewData({});
    res.writeHead(307, { Location: "/blog/post/[slug]"});
    res.end();
}