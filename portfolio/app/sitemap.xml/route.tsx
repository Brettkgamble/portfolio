import { getSortedPostsData} from '../../lib/getSortedPostsData';

const URL = "https://www.brettkgamble.com";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs we know already-->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/about</loc>
     </url>
      <url>
       <loc>${URL}/blog</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
           <url>
               <loc>${`${URL}/blog/post/${slug}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function GET() {
  const posts = await getSortedPostsData();
  const body = generateSiteMap(posts);

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}