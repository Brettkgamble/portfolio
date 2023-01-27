import {createClient, groq} from 'next-sanity'
import {cache} from 'react'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"

const projectId = "6dbea0lo"
const dataset = "production"
const apiVersion = "2022-11-16"

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== 'undefined', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
})

// Wrap the cache function in a way that reuses the TypeScript definitions
const clientFetch = cache(client.fetch.bind(client))

// Now use it just like before, fully deduped, cached and optimized by react
const data = await clientFetch(groq`*[]`)



export default function Resume() {
    return (
        <div className="text-white pl-2">This is the resume page</div>
    )
}