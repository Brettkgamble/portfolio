import countries from './countries'

export default {
    type: 'document',
    name: 'organization',
    title: 'Organization',
    groups: [
        {
            name: 'descriptions',
            title: 'Logo & Description',
        },
        {
            name: 'organization',
            title: 'Organization'
        },
        {
            name: 'address',
            title: 'Address'
        },
        {
            name: 'contact',
            title: 'Contact'
        },
        {
            name: 'social',
            title: 'Social Media'
        },
        {
            name: 'pricing',
            title: 'Pricing'
        },
        {
            name: 'organizationcategory',
            title: 'Organization Category'
        },
        {
            name: 'regions',
            title: 'Regions'
        },
        {
            name: 'additionalregions',
            title: 'Additional Regions'
        },
        {
            name: 'servicetypes',
            title: 'Service Types'
        }
    ],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            group: 'descriptions',
            description: "REQUIRED: Typically this field will contain the Organization's name",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'descriptions',
            description: 'REQUIRED: The slug is used for searching and to provide the backend with a value to append to the ' +
                'url when navigating to a page identifying this service.  It can be entered manually or generated ' +
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
            group: 'descriptions',
        },
        {
            name: 'url',
            description: "This is a REQUIRED field and is the base URL for the organization.",
            title: 'URL',
            type: 'url',
            group: 'descriptions',
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
            description: 'REQUIRED: IMAGES that are SQUARE are preferred for Organization Logos. ' +
                'Typically this is the organizations logo or a defining image. ' +
            'Note that this image can be edited and a hotspot applied or the image can be cropped.  To do this, ' +
            'just click the 3 dots to open up an editing menu. All images must have corresponding ' +
            'attributions. ',
            group: 'descriptions',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText',
            group: 'descriptions',
            description: "REQUIRED: The description of the service(s) that this organization provides.  The more detail the better " +
              "here.  Any formatting will be used on the front-end for display purposes.  This information is the primary " +
              "information that is presented for this organization and should be informative and to the point. ",
        },
        {
            name: 'address',
            title: 'Primary Address',
            type: 'object',
            description: "The Organizations Address",
            group: 'address',
            fields: [
                {
                    title: 'Post Office Box',
                    name: 'pobox',
                    type: 'string',
                    description: 'OPTIONAL',
                },
                {
                    title: 'Unit #',
                    name: 'unit',
                    type: 'string',
                    description: 'OPTIONAL',
                },
                {
                    name: 'address1',
                    type: 'string',
                    title: 'Address 1',
                    description: 'OPTIONAL',
                },
                {
                    name: 'address2',
                    type: 'string',
                    title: 'Address 2',
                    description: 'OPTIONAL',
                },
                {
                    name: 'city',
                    type: 'string',
                    title: 'City',
                    description: 'OPTIONAL',
                },
                {
                    name: 'state',
                    type: 'string',
                    title: 'State / Province',
                    description: 'OPTIONAL',
                },
                {
                    name: 'postCode',
                    type: 'string',
                    title: 'Post Code',
                    description: 'OPTIONAL',
                },
                {
                    title: 'Country',
                    name: 'country',
                    type: 'string',
                    description: 'OPTIONAL',
                    options: {
                        list: [
                            ...countries
                        ]
                    }
                },
            ]
        },
        {
            name: 'additionalAddresses',
            type: 'array',
            description: 'OPTIONAL: This field can be used if an organization has many addresses.',
            title: 'Additional Address',
            group: 'address',
            of : [
                {
                    type: 'reference',
                    to: [{ type: 'address'}]
                }
            ]
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'object',
            description: "The Companies Contacts",
            group: 'contact',
            fields: [
                {
                    name: 'contactname',
                    type: 'string',
                    title: 'Contact Name',
                    description: 'OPTIONAL',
                },
                {
                    name: 'phone',
                    type: 'string',
                    title: 'Phone',
                    description: 'OPTIONAL',
                },
                {
                    name: 'altphone',
                    type: 'string',
                    title: 'Alternate Phone',
                    description: 'OPTIONAL',
                },
                {
                    name: 'tollfree',
                    type: 'string',
                    title: 'Toll Free Phone',
                    description: 'OPTIONAL',
                },
                {
                    name: 'fax',
                    type: 'string',
                    title: 'Fax',
                    description: 'OPTIONAL',
                },
                {
                    name: 'email',
                    type: 'string',
                    title: 'Email',
                    description: 'OPTIONAL',
                },
                {
                    name: 'altemail',
                    type: 'string',
                    title: 'Alternate Email',
                    description: 'OPTIONAL',
                },
            ]
        },
         {
            name: 'Organization',
            type: 'array',
            description: 'OPTIONAL: This field can be used if this organization belongs to a larger, parent ' +
              'organization.  For example, Evolve is a franchise system of many gyms. ' ,
            title: 'Parent Organization',
            group: 'organization',
            of : [
                {
                    type: 'reference',
                    to: [{ type: 'organization'}]
                }
            ]
        },
        {
            name: 'organizationcategories',
            type: 'array',
            description: 'REQUIRED: An Organization is categorized by the types of services it provides.  This field is ' +
                'specifically used to present information in an organized way on the front end.  It is also used as a search ' +
                'field or grouping.  NOTE: Always search for the existence of a Category prior to adding a new Category.  ',
            title: 'Organization Category',
            group: 'organizationcategory',
            of : [
                  {
                      type: 'reference',
                      to: [{ type: 'serviceCategory'}]
                  }
            ]
        },
       {
          name: 'serviceTypes',
          type: 'array',
          description: 'REQUIRED: Service Types define the many services that an Organization provides.  This field is used ' +
           'on the front end for searching for specific services.  NOTE: Always search for the existence of a ' +
           'Service Type prior to adding a new Service Type.  This field contains many hundreds of Service Types.',
          title: 'Available Service Types(s)',
          group: 'servicetypes',
          of : [
              {
                  type: 'reference',
                  to: [{ type: 'serviceTypes'}]
              }
          ]
       },
       {
          name: 'facebookurl',
          title: 'Facebook Url',
          type: 'object',
          description: "OPTIONAL: The Url to the Organizations facebook page",
          group: 'social',
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
          description: "OPTIONAL: The Url to the Organizations Twitter page",
          group: 'social',
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
          description: "OPTIONAL: The Url to the Organizations Instagram page",
          group: 'social',
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
            description: "OPTIONAL: The Url to the Organizations LinkedIn page",
            group: 'social',
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
           description: "OPTIONAL: The Url to the Organizations Pinterest page",
           group: 'social',
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
          description: "OPTIONAL: The Url to the Organizations Vimeo page",
          group: 'social',
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
          description: "OPTIONAL: The Url to the Organizations YouTube page",
          group: 'social',
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
