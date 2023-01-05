// https://www.youtube.com/watch?v=xWuuCUgbfOw&list=PLYmDjL9mFsW8uKDn4M6lEpT99XA_-nXrR&index=3
'use client'
import '../globals.css';
import React, { useState } from 'react';
import Input from '../../components/input';
import TextArea from "../../components/text";

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response)=> response.json())
        .catch((error) => {
            console.error('Error', error)
        });

  };

    return (
        <main className="flex flex-col justify-between items-center p-24  min-h-screen">
            <div className="px-3 pt-10 w-full md:w-4/5 lg:w-3/5 xl:w-2/5">Test
                <form className="flex flex-col items-center w-full mx-auto" onSubmit={handleSubmit}>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        label="Your Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        label="Your Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextArea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        label="Message"
                        onChange={e => setMessage(e.target.value)}
                    />

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