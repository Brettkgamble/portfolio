export default {
    type: 'document',
    name: 'specialization',
    title: 'Specialization',
    fields: [
        {
            name: 'specialization',
            title: 'Specialization',
            type: 'string'
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Some frontends will require a slug to be set to be able to show the category',
            options: {
                source: 'specialization',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
            description: 'REQUIRED: IMAGES that are SQUARE are preferred for all images. ',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText'
        },
        {
          name: 'yearsExperience',
          title: 'Years Experience',
          type: 'string'
        },
    ]
}