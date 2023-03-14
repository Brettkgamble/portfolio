import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import serializers from "../../../components/serializers/serializer";
import BlockContent from "@sanity/block-content-to-react";
import Link from 'next/link';
import {FaLinkedinIn } from 'react-icons/fa';

import SkillModal from '../../../components/modals/skillModal';
import EducationModal from "../../../components/modals/educationModal";

const builder = imageUrlBuilder(client);

const query = groq `
    *[_type=='person'] {
        ...,
        introduction[]->{
            bio[]
        },
         skills[]->{
          name,
          skillProficiency[]->{
            title,
            description
          },
          description[]->{
            skill
          },
        },
        higherEducation[]->{
            name,
            courses[]->{
                ...,
              },
            Organization[]->{
              ...,
               image{
                alt,
              asset->{
                _id,
                url
              }
            }
            }
          },
        coursesAndCerts[]->{
            ...,
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

export const metadata ={
    title: "The Curriculum Vitae of Brett Gamble",
    description: "The full work experience for Brett Gamble who is originally from Sydney, Australia but now resides" +
        "in Edmonton, Alberta, Canada",
    generator: 'Next.js',
    applicationName: 'Brett Gamble - Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Sanity.io', 'Vercel'],
    authors: [{ name: 'Brett Gamble', url: 'https://brettkgamble.com' }],
    colorScheme: 'dark',
    creator: 'Brett Gamble',
    publisher: 'Brett Gamble',
    alternates: {},
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "The Curriculum Vitae of Brett Gamble",
        description: "The full work experience for Brett Gamble who is originally from Sydney, Australia but now resides" +
        "in Edmonton, Alberta, Canada",
        url: 'https://www.brettkgamble.com',
        siteName: 'Brett Gamble - Portfolio',
        type: 'article',
        publishedTime: '2023-01-01T00:00:00.000Z',
        authors: ['Brett Gamble'],
        locale: 'en-US',
        // images: [
        //   {
        //     url: 'https://nextjs.org/og.png',
        //     width: 800,
        //     height: 600,
        //   },
        //   {
        //     url: 'https://nextjs.org/og-alt.png',
        //     width: 1800,
        //     height: 1600,
        //     alt: 'My custom alt',
        //   },
        // ],

  },
    robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Resume() {

    const person = p[0]
    // console.log('Person', person)

    return (
        <div className="bg-white pb-32">

            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-8 pl-2 w-11/12 md:w-1/5 lg:w-1/6">
                    <h1 className="pt-4 pl-4 font-roboto-600 font-bold text-black text-3xl w-full uppercase
                        text-start tracking-widest  ">ABOUT ME
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </h1>
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
                                        <FaLinkedinIn className="text-white bg-linkedin rounded-sm" size={24} style={{paddingTop: "2"}}/>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-none pt-16 px-8 md:w-2/4 lg:w-2/4">
                    <div className=" font-roboto-400 text-black md:pt-16">
                        <section>
                            <BlockContent
                                style={{fontSize: "3rem"}}
                                blocks={person.introduction[0].bio}
                                serializers={serializers}
                                projectId={client.projectId}
                                dataset={client.dataset}
                                imageOptions={{w: 500, h: 440, fit: 'max'}}
                            />
                        </section>
                    </div>
                </div>
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
            </div>

            {/* Skills */}

            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-2 pl-2 pb-4 w-11/12 md:w-1/5 lg:w-1/6">
                    <h2 className="pl-4 font-roboto-600 font-bold text-black text-2xl w-full uppercase
                        text-start tracking-widest  ">Skills
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </h2>
                </div>
            </div>
            <div className="flex w-full justify-center py-8">
                <div className="hidden flex-none p-2 md:flex sm:w-1/12 md:w-2/6"></div>
                <div className="flex flex-wrap w-full px-8 md:pl-8">
                    {person.skills.map((skill, id) => {
                      return (
                          <SkillModal key={id} skill={skill}/>
                      )  })}
                </div>
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
            </div>

            {/* Education */}

            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-2 pl-2 pb-4 w-11/12 md:w-1/5 lg:w-1/6">
                    <h2 className="pl-4 font-roboto-600 font-bold text-black text-2xl w-full uppercase
                        text-start tracking-widest  ">Higher Education
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </h2>
                </div>
            </div>
            <div className="flex w-full justify-center py-8">
                <div className="hidden flex-none p-2 md:flex sm:w-1/12 md:w-2/6"></div>
                <div className="flex flex-wrap w-5/6 md:pl-8">
                    {person.higherEducation.map((higherEd, id) => {
                      return (
                          // <li key={id} className="text-black w-full font-bold">{higherEd.name}</li>
                          <EducationModal key={id} education={higherEd}/>
                      )  })}
                </div>
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
            </div>

            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-2 pl-2 pb-4 w-11/12 md:w-1/5 lg:w-1/6">
                    <h2 className="pl-4 font-roboto-600 font-bold text-black text-2xl w-full uppercase
                        text-start tracking-widest  ">Courses and Certificates
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </h2>
                </div>
            </div>
            <div className="flex w-full justify-center py-8">
                <div className="hidden flex-none p-2 md:flex sm:w-1/12 md:w-2/6"></div>
                <div className="flex flex-wrap w-3/6 md:pl-8">
                    {person.coursesAndCerts.map((courses, id) => {
                      return (
                          <li key={id} className="text-black w-full font-bold">{courses.name}</li>
                          // <SkillModal key={skill.id} skill={skill}/>
                      )  })}
                </div>
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
            </div>

            {/* Experience Section*/}

            <div className="flex flex-wrap">
                <div className="hidden flex-none p-2 sm:flex sm:w-1/12 md:w-1/6"></div>
                <div className=" flex-none pt-2 pl-2 pb-4 w-11/12 md:w-1/5 lg:w-1/6">
                    <h2 className="pl-4 font-roboto-600 font-bold text-black text-2xl w-full uppercase
                        text-start tracking-widest  ">Experience
                       <hr className="mt-2 w-64 h-2 dark:bg-blue-700"/>
                    </h2>
                </div>
            </div>
            {person.organizations.map((org, id) => {
                return (
                    <>
                        <div key={id} className="flex flex-wrap pb-8 even:bg-blue-100">
                            <div className="hidden flex-none p-2 sm:flex  md:w-1/6"></div>
                            <div className="flex flex-col pt-3 pl-8 w-full justify-start text-black font-bold hover:text-blue-700 md:w-1/5 md:pl-4 lg:w-1/6">
                                {/*Sidebar*/}
                                <h3 className="md:text-lg lg:text-xl">

                                    <Link
                                        href={org.url}
                                        target="_blank"
                                    >
                                        {org.name}
                                    </Link>
                                </h3>
                                <div className="relative overflow-hidden flex object-left basis-full  flex-col py-2 lg:w-3/4">
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
                            <div className="flex flex-col px-4 w-full md:w-1/2">
                                {/*Content*/}
                                {org.roles.map((role, id) => {
                                        return (
                                            <div key = {id}
                                                 className="basis-full flex  ml-8  pt-3 justify-start w-full">

                                                <div className="font-roboto-400 text-black ">
                                                    <div>
                                                        <h3 className="text-black text-lg font-bold pb-4 -ml-4">
                                                            {role.period}
                                                        </h3>
                                                        <h2 className="text-black font-bold pb-4 -ml-4 text-blue-700">
                                                            {role.name}
                                                        </h2>
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