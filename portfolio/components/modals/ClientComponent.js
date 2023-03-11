'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Counter( { skill } ) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log('Skill', skill)

  return (
      <>
          <span>
              <button
                  href="#"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                  className=" transititext-primary text-black mx-1 my-1 px-2 text-sm border
                                      border-solid rounded-lg hover:bg-blue-200 transition duration-150 ease-in-out"
                  data-te-toggle="tooltip"
                  title="Click for more info!"
              >{skill.name}
              </button>
          </span>
          {/*  Overlay */}
          <div id="my-modal" className={isNavOpen ? "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" : "hideModal"}>
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                  <div class="mt-3 text-center">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                          <svg
                              classname="h-6 w-6 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                              >
                              </path>
                          </svg>
                      </div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Successful!</h3>
                      <div className="mt-2 px-7 py-3">
                          <p className="text-sm text-gray-500">
                              Account has been successfully registered!
                          </p>
                      </div>
                      <div Name="items-center px-4 py-3">
                          <button
                              onClick={()=> setIsNavOpen(false)}
                              id="ok-btn"
                              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full
                                shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                              OK
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 px-8 py-8"
               onClick={()=> setIsNavOpen(false)}>
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