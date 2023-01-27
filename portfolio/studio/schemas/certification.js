export default {
    type: 'document',
    name: 'certification',
    title: 'Certification',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: "REQUIRED: The Name of the Certification",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'REQUIRED: The slug is used for searching and to provide the backend with a value to append to the ' +
                'url when navigating to a page identifying this service.  It can be entered manually or generated ' +
                'automatically by clicking the generate button.',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText',
            description: "REQUIRED: The description of the Certification.",
        },
         {
            name: 'Organization',
            type: 'array',
            description: 'OPTIONAL: This field can be used if this organization belongs to a larger, parent ' +
              'organization.  For example, Evolve is a franchise system of many gyms. ' ,
            title: 'Parent Organization',
            of : [
                {
                    type: 'reference',
                    to: [{ type: 'organization'}]
                }
            ]
        },

    ]
}
