import {mediaAssetSource} from "sanity-plugin-media";

export default {
    type: 'document',
    name: 'keywords',
    title: 'Keywords',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Some frontends will require a slug to be set to be able to show the category',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
    ]
}