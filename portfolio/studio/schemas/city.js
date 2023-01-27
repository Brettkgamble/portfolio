import countries from './countries'

export default {
    type: 'document',
    name: 'city',
    title: 'City',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: "REQUIRED: City Name - Example, Edmonton",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'REQUIRED: The slug is used for searching and to provide the backend with a value to append to the ' +
                'url when navigating to a page identifying this city.  It can be entered manually or generated ' +
                'automatically by clicking the generate button.',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'calltoaction',
            title: 'Call To Action',
            type: 'callToActionText',
            description: "REQUIRED: MAX LENGTH !!! 300 characters !!! This field is used as the headline that " +
                "appears below the image. ",
        },
        {
            name: 'url',
            description: "This is a REQUIRED field and is the base URL for the organization.",
            title: 'URL',
            type: 'url',
            options: {
              maxLength: 200,
            },
            validation: Rule =>
               [
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        }),
                        Rule.required().error('Field cannot be empty')
               ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
            description: 'REQUIRED: IMAGES need to be reasonable hi-resolution. [TODO] Specify the resolution and' +
                ' size',
            options: {
            hotspot: true
          }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText',
            description: "REQUIRED: Brief Description of the city. ",
        },
       {
          name: 'facebookurl',
          title: 'Facebook Url',
          type: 'object',
          description: "OPTIONAL: The Url to the City's facebook page",
          fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
          ]
       },
       {
          name: 'twitterurl',
          title: 'Twitter Url',
          type: 'object',
          description: "OPTIONAL: The Url to the City's Twitter page",
          fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
          ]
       },
       {
          name: 'instagramurl',
          title: 'Instagram Url',
          type: 'object',
          description: "OPTIONAL: The Url to the City's Instagram page",
          fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
          ]
       },
        {
            name: 'linkedinurl',
            title: 'LinkedIn Url',
            type: 'object',
            description: "OPTIONAL: The Url to the City's LinkedIn page",
            fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
            ]
        },
        {
           name: 'pinteresturl',
           title: 'Pinterest Url',
           type: 'object',
           description: "OPTIONAL: The Url to the City's Pinterest page",
           fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
          ]
        },
        {
          name: 'vimeourl',
          title: 'Vimeo Url',
          type: 'object',
          description: "OPTIONAL: The Url to the City's Vimeo page",
          fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
          ]
        },
        {
          name: 'youtubeurl',
          title: 'YouTube Url',
          type: 'object',
          description: "OPTIONAL: The Url to the City's YouTube page",
          fields: [
                {
                    title: 'Url',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel']
                        })
                },
          ]
        },
    ]
}
