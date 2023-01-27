export default {
    type: 'document',
    name: 'serviceCategory',
    title: 'Service Category',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage'
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
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText'
        }
    ]
}