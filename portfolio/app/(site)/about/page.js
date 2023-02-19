import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import serializers from "../../../components/serializers/serializer";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(client);

const query = groq `
    *[_type=='person'] {
        ...,
        introduction[]->{
            bio[]
        },
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
            <section className="relative grid grid-cols-12 pb-32 bg-white w-screen auto-rows-auto grid-flow-row -mt-60 justify-center md:grid-rows-1 md:grid-flow-col">
                <div className="col-start-4 col-span-6 text-3xl font-roboto-600 font-bold text-black w-full uppercase text-start tracking-widest">ABOUT ME
                   <hr className="mt-2 w-14 h-2 dark:bg-blue-700"/>
                </div>
                <div className="col-start-4 col-span-2 pt-16 bg-white flex flex-col items-center  w-48 h-full">
                    <Image
                        className="rounded-full "
                        src={
                            urlFor(person.image.asset.url)
                            .height(600)
                            .width(600)
                            .url()
                        }
                        alt={person.image.alt}
                        quality='100'
                        width="600"
                        height="600"
                        priority
                    />
                </div>
                <div className="font-roboto-400 text-black col-start-6 col-span-4 pt-16 ">
                    <div>
                        <BlockContent
                            style={{fontSize: "3rem"}}
                            blocks={person.introduction[0].bio}
                            serializers={serializers}
                            projectId={client.projectId}
                            dataset={client.dataset}
                            imageOptions={{w: 500, h: 440, fit: 'max'}}
                        />
                    </div>
                </div>
                <div className="font-roboto-400 text-black col-start-4 col-span-6 pt-16 ">
                    <div className="col-start-4 col-span-6 text-3xl font-roboto-600 font-bold text-black w-full uppercase text-start tracking-widest">Experience
                        <hr className="mt-2 w-14 h-2 dark:bg-blue-700"/>
                    </div>
                </div>
            </section>
            </>
    )
}