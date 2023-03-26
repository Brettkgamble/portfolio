// import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req, res) {
    res.setPreviewData({});
    res.writeHead(307, { Location: "/blog"});
    res.end();
}