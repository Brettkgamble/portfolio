import countries from './countries'
import {mediaAssetSource} from "sanity-plugin-media";

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
          type: 'image',
          fields: [
            //   {
            //     name: 'name',
            //     title: 'Title',
            //     type: 'string',
            //     description: "A name to describe the image",
            // },
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
              description: `Some of your visitors cannot see images, be they blind, color-blind, low-sighted; 
              alternative text is of great help for those people that can rely on it to have a good idea of 
              what\'s on your page.`,
              options: {
                hotspot: true
              }
            },
            {
              type: 'url',
              name: 'attribution_url',
              title: 'Attribution Url',
              description: 'Link to the creator for copyright attribution',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            }
          ],
          options: {
            sources: [mediaAssetSource],
            hotspot: true,
          }
        },
        // {
        //     name: 'description',
        //     title: 'Description',
        //     type: 'descriptionText',
        //     group: 'descriptions',
        //     description: "REQUIRED: The description of the service(s) that this organization provides.  The more detail the better " +
        //       "here.  Any formatting will be used on the front-end for display purposes.  This information is the primary " +
        //       "information that is presented for this organization and should be informative and to the point. ",
        // },
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
        {
          name: 'roles',
          title: 'Roles',
          type: 'array',
          of: [{ type: 'reference', to: {type: 'roles'}}]
        },
    ]
}
