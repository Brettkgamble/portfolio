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
                name,
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

    return (
        <div className="bg-white pb-32">
            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-2 pl-2 w-11/12 md:w-1/5 lg:w-1/6">
                    <div className=" font-roboto-600 font-bold text-black w-full uppercase
                        text-start tracking-widest  ">ABOUT ME
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </div>
                    <div className="relative flex bg-white flex-col justify-center py-8 sm:w-4/5 ">
                        <Image
                            className="mx-auto w-1/3 rounded-full sm:w-2/5 md:w-3/4 lg:w-2/4"
                            src={
                                urlFor(person.image.asset.url)
                                .height(300)
                                .width(300)
                                .url()
                            }
                            alt={person.image.alt}
                            quality='100'
                            width="120"
                            height="120"
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
            </div>

            {/* Experience Section*/}

            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-2 pl-2 pb-4 w-11/12 md:w-1/5 lg:w-1/6">
                    <div className=" font-roboto-600 font-bold text-black w-full uppercase
                        text-start tracking-widest  ">Experience
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </div>
                </div>
            </div>
            {person.organizations.map((org, id) => {
                return (
                    <>
                        <div className="flex flex-wrap pb-8">
                            <div className="hidden flex-none p-2 sm:flex  md:w-1/6"></div>
                            <div className="flex flex-col pt-2 pl-8 w-full justify-start text-black font-bold hover:text-blue-700 md:w-1/5 md:pl-4 lg:w-1/6">
                                {/*Sidebar*/}
                                <span key={id} className="text-2xl">

                                    <Link
                                        href={org.url}
                                        target="_blank"
                                    >
                                        {org.name}
                                    </Link>
                                </span>
                                <div className="relative overflow-hidden flex object-left basis-full bg-white flex-col py-2 lg:w-3/4">
                                        <Image
                                            className="flex pt-4 md:object-left-top "
                                            src={
                                                urlFor(org.image.asset.url)
                                                .height(350)
                                                .width(650)
                                                .crop("center")
                                                .url()
                                            }
                                            style={{
                                                objectFit: "scale-down"
                                            }}
                                            alt={org.image.alt}
                                            quality='100'

                                            height="200"
                                            width="200"
                                            // priority
                                            placeholder="blur"
                                            blurDataURL={org.image.asset.url}
                                        />
                                    </div>
                            </div>
                            <div className="flex  px-4 w-full md:w-1/2">
                                {/*Content*/}
                                {org.roles.map((role, roleid) => {
                                        return (
                                            <div key = {roleid}
                                                 className="basis-full flex ml-8  pt-3 justify-start md:w-1/2">
                                                <div className=" font-roboto-400 text-black ">
                                                    <div>
                                                        <div className="text-black text-xl font-bold pb-4 -ml-4">
                                                            {role.period}
                                                        </div>
                                                        <div className="text-black font-bold pb-4 -ml-4 text-blue-700">
                                                            {role.name}
                                                        </div>
                                                        <BlockContent
                                                            className="-ml-4"
                                                            style={{fontSize: "3rem"}}
                                                            blocks={role.role}
                                                            serializers={serializers}
                                                            projectId={client.projectId}
                                                            dataset={client.dataset}
                                                            imageOptions={{w: 500, h: 440, fit: 'max'}}
                                                        />
                                                    </div>
                                                    <hr className="mt-2 w-full h-0 dark:bg-blue-700"/>
                                                </div>
                                            </div>
                                        )
                                    })}

                            </div>

                            <div className="hidden flex-none p-2 sm:flex  md:w-1/6"></div>

                        </div>
                    </>
                )
            })}

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