import { groq } from 'next-sanity';
import {client } from '../../../lib/sanity.client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const query = groq `
    *[_type=='person'] {
        ...,
        image{
            alt,
              asset->{
                _id,
                url
              }
            },
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

function urlFor(source) {
    return builder.image(source)
}

export default function Resume() {
    console.log(p[0])

    const person = p[0]
    return (
        <>
            <section className="relative grid bg-white  h-screen w-screen auto-rows-auto grid-flow-row md:grid-rows-1 md:grid-flow-col">
                <div className="relative h-1/3 md:h-2/4 lg:h-2/3">
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
            <section className="relative grid grid-cols-12 bg-white  w-screen auto-rows-auto grid-flow-row -mt-60 justify-center md:grid-rows-1 md:grid-flow-col">
                <div className="col-start-4 col-span-6 text-3xl font-roboto-600 font-bold text-black w-full uppercase text-start tracking-widest">ABOUT ME
                   <hr className="w-14 h-2 dark:bg-blue-700"/>
                </div>
                <div className="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64">
                    <Image
                        className="profile mx-auto rounded-full py-2 w-16 "
                        src={
                            urlFor(person.image.asset.url)
                            .height(400)
                            .width(400)
                            .url()
                        }
                        alt={person.image.alt}
                        quality='100'
                        width="400"
                        height="400"
                        priority
                    />
                        </div>
            </section>
            </>
    )
}