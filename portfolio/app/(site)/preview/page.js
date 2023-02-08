import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import {client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../../components/PreviewSuspense';
import PreviewPeopleList from '../../../components/PreviewPeopleList'
import PeopleList from "../../../components/PeopleList";

export const query = groq `
    *[_type=='person'] {
        ...,
        address[]->
    }
`

export default async function Preview() {
        if (previewData()) {
           return (
               <PreviewSuspense
                   fallback={
                   <div role="status">
                       <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
                           Loading preview data...
                       </p>
                   </div>
               }
           >
           <PreviewPeopleList query={query}/>
           </PreviewSuspense>
           )
        }

        const person = await client.fetch(query)

       return (
           <PeopleList query={person}/>
       )

}