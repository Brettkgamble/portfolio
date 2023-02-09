import { groq } from 'next-sanity';
import {client } from '../../../lib/sanity.client';

const query = groq `
    *[_type=='person'] {
        ...,
        address[]->
    }
`

const p = await client.fetch(query)

export default function Resume() {

    const person = p[0]
    return (
        <div className="text-white pl-2">test{person.name}</div>
    )
}