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
            <section className="relative grid h-screen w-screen auto-rows-auto grid-flow-row md:grid-rows-1 md:grid-flow-col">
                <div className="relative h-1/3 md:h-2/4 lg:h-3/4">
                    <div className="relative pt-48 text-5xl font-roboto-400 text-blue-500 z-40 uppercase text-center tracking-wider">{person.name}</div>
                    <div className="relative pt-8 text-base font-roboto-400 text-blue-500 z-40 uppercase text-center tracking-wider">A work in progress</div>
                    <Image
                        // className="profile mx-auto rounded-full py-2 w-16 "
                        className="profile mx-auto w-auto h-auto "
                        src={person.splashImage.asset.url}
                        alt={person.splashImage.alt}
                        quality='100'
                        // width="1000"
                        // height="600"
                        priority
                        fill
                        // sizes="(max-width: 768px) 100vw,
                        //   (max-width: 1200px) 50vw,
                        //   33vw"
                    />
                </div>
            </section>
    )
}