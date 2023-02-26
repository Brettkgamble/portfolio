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
        organizations[]->{
            image{
                alt,
              asset->{
                _id,
                url
              }
            },
           name
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
    console.log('Person', person)
    return (
        <div className="bg-white">
            <div className="flex flex-wrap ">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className="w-full flex-none pt-2 md:w-1/5 lg:w-1/6">
                    <div className="pl-8 font-roboto-600 font-bold text-black w-full uppercase
                        text-start tracking-widest  ">ABOUT ME
                       <hr className="mt-2 w-14 h-2 dark:bg-blue-700"/>
                    </div>
                    <div className="flex bg-white flex-col justify-center py-8 ">
                        <Image
                            className="mx-auto w-3/6 rounded-full sm:w-2/5 md:w-3/4 lg:w-2/4"
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
                </div>
                <div className="w-full flex-none px-8 md:w-2/4 lg:w-2/4">
                    {/*<div className="text-white text-center bg-blue-600 px-4 py-2 m-2 rounded-lg">2</div>*/}
                    <div className=" font-roboto-400 text-black md:pt-16">
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
                </div>
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className="w-full flex-none pt-2 md:w-1/5 lg:w-1/6">
                    <div className="pl-8 font-roboto-600 font-bold text-black w-full uppercase
                        text-start tracking-widest  ">Experience
                       <hr className="mt-2 w-14 h-2 dark:bg-blue-700"/>
                    </div>
                    <div className="flex pl-8 bg-white flex-col justify-center pt-8 text-black font-bold">
                        {person.organizations.map((org, id) => {
                            return (
                                <>
                                    <span key={id}>
                                        {org.name}
                                    </span>
                                    <div className="flex bg-white flex-col py-2 ">
                                        <Image
                                            className=" w-3/6 object-left-top sm:w-2/5 md:w-3/4 lg:w-2/4"
                                            src={
                                                urlFor(org.image.asset.url)
                                                .height(400)
                                                .width(800)
                                                .url()
                                            }
                                            alt={org.image.alt}
                                            quality='100'
                                            width="600"
                                            height="600"
                                            priority
                                        />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                {/*<div className="w-full flex-none p-2 md:w-2/5">*/}
                {/*    <div className="text-white text-center bg-blue-600 px-4 py-2 m-2 rounded-lg">3</div>*/}
                {/*</div>*/}
                {/*<div className="w-full flex-none p-2 md:w-2/5">*/}
                {/*    <div className="text-white text-center bg-blue-600 px-4 py-2 m-2 rounded-lg">4</div>*/}
                {/*</div>*/}
            </div>

             {/*Grid Example*/}
                {/*<div className="min-h-screen flex items-start justify-center">*/}
                {/*    <div className="grid grid-cols-2 z-40">*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">1</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">2</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">3</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">4</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">5</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">6</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">7</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">8</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">9</div>*/}
                {/*        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">10</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="grid grid-cols-2 z-40 md:grid-cols-3 lg:grid-cols-2 gap-4 p-5">*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">1</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">2</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">3</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">4</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">5</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">6</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">7</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">8</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">9</div>*/}
                {/*    <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">10</div>*/}
                {/*</div>*/}

            </div>
    )
}