// https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua
'use client'

import React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";
import Link from 'next/link';

export default function MainNavigation(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
           <nav className="z-50 w-full bg-nav-rgba items-end justify-between pt-2 pb-4 border-b border-blue-100 ">
               {/*Small screen*/}
               <div className="flex md:hidden">
                   <div className="flex flex-col items-center max-w-1100 lg:items-start p-6">
                       <div className="lg:border lg:rounded-xl lg:border-callout-border-rgb lg:px-4 lg:py-4">
                           <p className="font-mono text-white">
                               Website and Application Development by Brett Gamble&nbsp;
                           </p>
                       </div>
                   </div>
                   <section className="flex-1 w-full">
                       <div
                           className="space-y-2 px-8 py-8 float-right"
                           onClick={() => setIsNavOpen((prev) => !prev)}
                       >
                           <span className="block h-0.5 w-8 bg-white"></span>
                           <span className="block h-0.5 w-8 bg-white"></span>
                           <span className="block h-0.5 w-8 bg-white"></span>
                       </div>
                       <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
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
                           <nav className="flex">
                               <ul className="flex-col w-full text-black absolute top-14 left-0 h-128">
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 text-center hover:font-bold">
                                       <Link
                                           href="/"
                                       >
                                           Home
                                       </Link>
                                   </li>
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 text-center hover:font-bold">
                                       <Link
                                           href="/about"
                                       >
                                           About
                                       </Link>
                                   </li>
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 text-center hover:font-bold">
                                      <Link
                                           href="/sites"
                                       >
                                           Sites
                                       </Link>
                                   </li>
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 text-center hover:font-bold">
                                       <Link
                                           href="/contact"
                                       >
                                           Contact
                                       </Link>
                                   </li>
                               </ul>
                           </nav>
                       </div>
                   </section>
               </div>
                   {/* Full Screen */}
                   <div className="flex hidden md:flex">
                       <nav className="flex relative h-14 w-full items-center pl-2 pr-2">
                           <div className="flex flex-col items-center max-w-1100 lg:items-start p-6">
                               <div className="lg:border lg:rounded-xl lg:border-callout-border-rgb lg:px-4 lg:py-4">
                                   <p className="font-mono text-white">
                                       Website and Application Development by Brett Gamble&nbsp;
                                   </p>
                               </div>
                           </div>
                           <div className="ml-auto mr-16">
                               <ul className="flex p-0 text-white">
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 hover:font-bold">
                                       <Link
                                           href="/"
                                       >
                                           Home
                                       </Link>
                                   </li>
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 hover:font-bold">
                                       <Link
                                           href="/about"
                                       >
                                           CV
                                       </Link>
                                   </li>
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 hover:font-bold">
                                       <Link
                                           href="/sites"
                                       >
                                           Sites
                                       </Link>
                                   </li>
                                   <li className="border-0 rounded-lg border-slate-500 p-1 list-none mt-0 ml-2 mb-0 mr-2 hover:font-bold">
                                       <Link
                                           href="/contact"
                                       >
                                           Contact
                                       </Link>
                                   </li>
                               </ul>
                           </div>
                       </nav>
                   </div>
                   <style>
                       {`
                          .hideMenuNav {
                            display: none;
                          }
                          .showMenuNav {
                            display: block;
                            position: absolute;
                            width: 100%;
                            height: 100vh;
                            top: 0;
                            left: 0;
                            background: white;
                            z-index: 10;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;
                          }
                       `}
                   </style>
           </nav>
        </>
    )
}

MainNavigation.propTypes = {
    brand: PropTypes.string,
}
