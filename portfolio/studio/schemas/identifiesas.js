export default {
    type: 'document',
    name: 'identifiesAs',
    title: 'Identifies As',
    fields: [
        {
            name: 'identity',
            title: 'Identity',
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
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText'
        }
    ]
}