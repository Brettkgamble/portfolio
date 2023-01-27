export default {
    type: 'document',
    name: 'professionalTypes',
    title: 'Professional Types',
    fields: [
        {
            name: 'professionalType',
            title: 'Profession',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Some frontends will require a slug to be set to be able to show the category',
            options: {
                source: 'professionalType',
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