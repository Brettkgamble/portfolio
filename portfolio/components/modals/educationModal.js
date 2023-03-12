// https://www.section.io/engineering-education/creating-a-modal-dialog-with-tailwind-css/
'use client';

import { useState } from 'react';
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../serializers/serializer";
import {client} from "../../lib/sanity.client";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source)
}

export default function EducationModal( { education } ) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
      <>
          <span className="block w-full">
              <button
                  href="#"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                  className=" transititext-primary text-black mx-1 my-1 px-2 text-sm
                                  border-solid rounded-lg hover:bg-blue-200 transition duration-150 ease-in-out"
                  data-te-toggle="tooltip"
                  title="Click for more info!"
              >
                  {education.name}
              </button>
          </span>

          {/*  Overlay */}

          <div id="my-modal" className={isNavOpen ? "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" : "hideModal"}>
              <div className="relative top-60 mx-auto p-5 border w-2/5 shadow-lg rounded-md bg-white">
                  <div className=" text-center">
                      <div className=" text-center">
                          <div
                              className="mx-auto flex items-center justify-center "
                          >
                              <Image
                              className="flex pt-4 md:object-left-top "
                                            src={
                                               urlFor(education.Organization[0].image.asset.url)
                                                .height(350)
                                                .width(650)
                                                .crop("center")
                                                .url()
                                            }
                                            style={{
                                                objectFit: "scale-down"
                                            }}
                                            alt={education.Organization[0].image.alt}
                                            quality='100'

                                            height="200"
                                            width="200"
                                            // priority
                                            placeholder="blur"
                                            blurDataURL={education.Organization[0].image.asset.url}
                              />
                          </div>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 ">{education.Organization[0].name}</h3>
                      <h3 className="text-base font-medium text-gray-900 ">{education.name}

                      </h3>
                      <div className="w-full flex-none py-4 ">
                          <div className=" font-roboto-400 text-black pt-1">
                              {education.courses ?
                                      <>
                                        {education.courses.map((course, id)=> {
                                          return(
                                              <span
                                                  key={id}
                                                  className=" transititext-primary text-blue-800 mx-1 my-2 px-2 pb-1 text-sm
                                                                 border border-solid rounded-lg hover:bg-blue-200 transition duration-150 ease-in-out"
                                                  data-te-toggle="tooltip"
                                                  title={course.name}
                                              >
                                                  {course.name}
                                              </span>
                                          )
                                          })}
                                      </>
                                : null
                              }
                              {/*{skill.skillProficiency ?*/}
                              {/*        <span*/}
                              {/*            className=" transititext-primary text-blue-800 mx-1 my-2 px-2 pb-1 text-base*/}
                              {/*                           border border-solid rounded-lg hover:bg-blue-200 transition duration-150 ease-in-out"*/}
                              {/*            data-te-toggle="tooltip"*/}
                              {/*            title={skill.skillProficiency[0].description}*/}
                              {/*        >*/}
                              {/*            {skill.skillProficiency[0].title}*/}
                              {/*        </span>*/}
                              {/*    : null}*/}
                          </div>
                      </div>
                      <div className="w-full flex-none py-4 ">
                          <div className=" font-roboto-400 text-black pt-1">
                              {/*<section>*/}
                              {/*    <BlockContent*/}
                              {/*        blocks={skill.description[0].skill}*/}
                              {/*        serializers={serializers}*/}
                              {/*        projectId={client.projectId}*/}
                              {/*        dataset={client.dataset}*/}
                              {/*        imageOptions={{w: 500, h: 440, fit: 'max'}}*/}
                              {/*    />*/}
                              {/*</section>*/}
                          </div>
                      </div>
                      <div className="items-center px-4 py-3">
                          <button
                              onClick={()=> setIsNavOpen(false)}
                              id="ok-btn"
                              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-3/6
                                shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                              Close
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 px-8 py-8"
               onClick={()=> setIsNavOpen(false)}
          >
              <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
          </div>
          <style>
              {`
                .hideModal {
                    display: none;
                }
              `}
          </style>
      </>
  );
}