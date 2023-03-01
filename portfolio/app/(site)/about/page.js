import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import serializers from "../../../components/serializers/serializer";
import BlockContent from "@sanity/block-content-to-react";
import Link from 'next/link';

const builder = imageUrlBuilder(client);

const query = groq `
    *[_type=='person'] {
        ...,
        introduction[]->{
            bio[]
        },
        organizations[]->{
            name,
            url,
            roles[]->{
                period,
                role[],
            },
            image{
                alt,
              asset->{
                _id,
                url
              }
            }
        },
        image{
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
        <div className="bg-white pb-32">
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
                            placeholder="blur"
                            blurDataURL={person.image.asset.url}
                        />
                        <div className="flex pl-8 bg-white flex-col justify-center pt-8 text-black text-sm hover:text-blue-700">
                            <ol >
                                <li>
                                    <a
                                        href={person.linkedinurl.href.valueOf()}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn!
                                    </a>
                                </li>
                            </ol>
                        </div>
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
                </div>
                <div className="w-full">
                        {person.organizations.map((org, id) => {
                            return (
                                <div className="flex pb-8">
                                    <div className="hidden flex-none p-2 sm:flex sm:basis-1/6 md:basis-1/6"></div>
                                    <div className="flex w-full  bg-white flex-col justify-start pt-4 text-black font-bold hover:text-blue-700
                                    sm:basis-1/3 md:basis-1/6 lg:basis-1/6" >
                                        {/*sm:w-2/5 md:w-3/4 lg:w-2/4"*/}
                                        {/*md:w-1/5 lg:w-1/6*/}
                                        <span key={id}>
                                            <Link
                                                href={org.url}
                                                target="_blank"
                                            >
                                                {org.name}
                                            </Link>
                                        </span>
                                        <div className="flex bg-white flex-col py-2 ">
                                            <Image
                                                className=" w-full object-left-top "
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
                                                // priority
                                                placeholder="blur"
                                                blurDataURL={org.image.asset.url}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex pl-16 pr-8 pt-4 justify-start  sm:basis-2/6 md:basis-2/3 lg:basis-5/6">
                                        {/* md:w-2/4 lg:w-2/4*/}
                                        {/*<div className="text-white text-center bg-blue-600 px-4 py-2 m-2 rounded-lg">2</div>*/}
                                        <div className=" font-roboto-400 text-black ">
                                            <div>
                                                <div className="text-black font-bold pb-4 -ml-4">
                                                    {person.organizations[0].roles[0].period}
                                                </div>
                                                <BlockContent
                                                    style={{fontSize: "3rem"}}
                                                    blocks={person.organizations[0].roles[0].role}
                                                    serializers={serializers}
                                                    projectId={client.projectId}
                                                    dataset={client.dataset}
                                                    imageOptions={{w: 500, h: 440, fit: 'max'}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="hidden flex-none p-2 sm:flex sm:basis-1/6 md:basis-1/6"></div>*/}
                                </div>


                            )
                        })}

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