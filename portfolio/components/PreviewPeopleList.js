'use client'

import {usePreview} from "../lib/sanity.preview";
import PeopleList from "./PeopleList";

export default function PreviewPeopleList( {query}) {
    const people = usePreview(null, query);
    return <PeopleList people={people} />
}