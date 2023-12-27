// https://www.youtube.com/watch?v=xWuuCUgbfOw&list=PLYmDjL9mFsW8uKDn4M6lEpT99XA_-nXrR&index=3
'use client'
import '../globals.css';
import React, { useState } from 'react';
import Input from '../../../components/input';
import TextArea from "../../../components/text";

export default function Page() {

    return (
        <main className="flex flex-col justify-between items-center p-8 sm:p-16 md:p-24  min-h-screen">
            <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-2/5">
                <div>Projects Coming Soon</div>
            </div>
        </main>
    )
}