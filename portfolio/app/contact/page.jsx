// https://www.youtube.com/watch?v=xWuuCUgbfOw&list=PLYmDjL9mFsW8uKDn4M6lEpT99XA_-nXrR&index=3
'use client'
import '../globals.css';
import React, { useState } from 'react';
import Input from '../../components/input';
import TextArea from "../../components/text";

export default function Page() {
    const [values, setValues] = useState({
            name: '',
            email: '',
            message: ''
        }
    )
    const [errors, setErrors ] = useState()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const errors = validate(values)
        const isError = Object.keys(errors).length
        if (isError && isError > 0) {
            setErrors(errors)
            return
        }
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            if(!res.ok){
                setValues({name: '', message: '', email: ''})
            }
        } catch(error)  {
            console.error(error)
        }
    }

    return (
        <main className="flex flex-col justify-between items-center p-24  min-h-screen">
            <div className="px-3 pt-10 w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
                <form className="flex flex-col items-center w-full mx-auto">
                    <Input  id="name" name="name" placeholder="Your Name" label="Your Name"/>
                    <Input  id="email" name="email" placeholder="email@email.com" label="Your Email"/>
                    <TextArea id="message" name="message" placeholder="Your message" label="Message"/>

                    <button className="w-full py-2 mt-6 text-lg text-white bg-purple-500 rounded-md
                                outline-none active:bg-purple-600 focus:ring-2 focus:ring-purple-400
                                disabled:bg-opacity-40 disabled:cursor-not-allowed"
                        type="submit"
                        // disabled={true}
                    >
                        Submit
                    </button>
                </form>

            </div>

        </main>
    )
}