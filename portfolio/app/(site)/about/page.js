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
                    <p>
                        I am an energetic and experienced IT professional.  For all of my career, I have been connected
                    with the technology sector. I have had a somewhat eclectic pathway, pursuing a number of different
                    avenues, including some entrepreneurial ventures stemming from some of my passion projects.
                    </p>
                    <p className="pt-8">
                        The common thread throughout all positions I have held in my career, all across the world,
                        is an unrelenting pursuit of excellence, innovation and dedication to outstanding customer
                        service or problem solving.  Whether in my capacity as entrepreneur, enterprise architect,
                        analyst, consultant or otherwise, I have a demonstrated track record of using different
                        techniques, technologies, methodologies, and processes to achieve a deep understanding of
                        the customer’s business, challenges, and opportunities.  Done properly, once that deep
                        knowledge gathering exercise has occurred, it builds trust, rapport, and credibility with
                        the customer, to allow the team to deliver value to the customer.
                    </p>
                    <p className="pt-8">
                        Like many, throughout my career, I have had the great fortune of working with excellent
                        colleagues and for excellent organizations.  I have also worked for organizations that
                        were still finding their niche of excellence.  All of these opportunities have taught me
                        many things; about leadership, mentorship, and adaptability.
                    </p>
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