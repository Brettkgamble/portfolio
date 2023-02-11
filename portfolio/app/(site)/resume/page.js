import { groq } from 'next-sanity';
import {client } from '../../../lib/sanity.client';
import Image from 'next/image';

const query = groq `
    *[_type=='person'] {
        ...,
        splashImage{
                alt,
              asset->{
                _id,
                url
              }
            },
        address[]->
    }
`

const p = await client.fetch(query)

export default function Resume() {

    const person = p[0]
    return (
        // <div className="bg-white h-screen w-screen font-roboto font-bold">
        //      <div className="flex flex-col text-black items-center pt-8">
        //          <div className="basis-1/4 text-2xl">{person.name}</div>
        //      </div>
        //          <Image
        //                 // className="profile mx-auto rounded-full py-2 w-16 "
        //                 className="profile mx-auto pt-6 w-auto h-auto"
        //                 src={person.splashImage.asset.url}
        //                 // alt={person.splashImage.image.alt}
        //                 quality='100'
        //                 width="200"
        //                 height="10"
        //                 priority
        //             />
        //      <div className="bg-white h-100vh text-black pl-2"></div>
        // </div>
        <>
            <section className="relative grid h-screen w-screen auto-rows-auto grid-flow-row md:grid-rows-1 md:grid-flow-col">
                <div className="relative h-5/6">
                    <Image
                        // className="profile mx-auto rounded-full py-2 w-16 "
                        className="profile mx-auto w-auto h-auto"
                        src={person.splashImage.asset.url}
                        // alt={item.image.alt}
                        quality='100'
                        // width="1000"
                        // height="600"
                        priority
                        fill
                    />
                </div>
            </section>
        </>

    )
}