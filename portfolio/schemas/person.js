import countries from "./countries";
import {mediaAssetSource} from "sanity-plugin-media";

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
      {
          name: 'name',
          title: 'Full Name',
          type: 'string'
      },
    {
      name: 'givenName',
      title: 'First Name',
      type: 'string'
    },
      {
      name: 'surname',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.givenName}-${doc.surname}`,
        maxLength: 96
      }
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      type: 'string',
      description: 'Simple three word CTA that appears on the contact button'
    },
    // {
    //   name: 'image',
    //   title:'Image',
    //   type: 'image',
    //   options: {
    //     sources: [mediaAssetSource],
    //     hotspot: true,
    //   }
    // },
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
    {
      name: 'address',
      title: 'Address',
      type: 'array',
      description: 'Typically the private address',
      of : [
        {
          type: 'reference',
          to:[{ type: 'address'}]
        }
      ]

    },
    {
      name: 'splashImage',
      title: 'Splash Image',
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
      {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'bioBlock'}}]
    },
    {
      name: 'skills',
      title: 'skills',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'skills'}}]
    },
     {
      name: 'higherEducation',
      title: 'Higher Education',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'higherEducation'}}]
    },
       {
      name: 'coursesAndCerts',
      title: 'Courses and Certificates',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'higherEducation'}}]
    },
    {
      name: 'organizations',
      type: 'array',
      description: 'These are the work experience blocks',
      title: 'Work Experience',
      // validation: Rule => Rule.unique().error('You can only have one of a category'),
      of : [{type: 'reference', to: { type: 'organization'}}
      ]
    },
      {
            name: 'linkedinurl',
            title: 'LinkedIn Url',
            type: 'object',
            description: "LinkedIn page",
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

    //   {
    //         name: 'address',
    //         title: 'Primary Address',
    //         type: 'object',
    //         description: "The Persons Mailing Address",
    //         fields: [
    //             {
    //                 title: 'Post Office Box',
    //                 name: 'pobox',
    //                 type: 'string',
    //                 description: 'OPTIONAL',
    //             },
    //             {
    //                 title: 'Unit #',
    //                 name: 'unit',
    //                 type: 'string',
    //                 description: 'OPTIONAL',
    //             },
    //             {
    //                 name: 'address1',
    //                 type: 'string',
    //                 title: 'Address 1',
    //                 description: 'OPTIONAL',
    //             },
    //             {
    //                 name: 'address2',
    //                 type: 'string',
    //                 title: 'Address 2',
    //                 description: 'OPTIONAL',
    //             },
    //             {
    //               name: 'city1',
    //               type: 'array',
    //               description: 'Home City?',
    //               title: 'Home City',
    //               // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //               of : [
    //                   {
    //                       type: 'reference',
    //                       to: [{ type: 'city'}]
    //                   }
    //               ]
    //             },
    //             {
    //                 name: 'state',
    //                 type: 'string',
    //                 title: 'State / Province',
    //                 description: 'OPTIONAL',
    //             },
    //             {
    //                 name: 'postCode',
    //                 type: 'string',
    //                 title: 'Post Code',
    //                 description: 'OPTIONAL',
    //             },
    //             {
    //                 title: 'Country',
    //                 name: 'country',
    //                 type: 'string',
    //                 description: 'OPTIONAL',
    //                 options: {
    //                     list: [
    //                         ...countries
    //                     ]
    //                 }
    //             },
    //
    //         ]
    //     },
    //    {
    //       name: 'marketingCampaigns',
    //       type: 'array',
    //       description: 'What are this persons current campaigns?',
    //       title: 'Marketing Campaigns',
    //       // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //       of : [
    //           {
    //               type: 'reference',
    //               to: [{ type: 'marketingCampaign'}]
    //           }
    //       ]
    //     },
    //   {
    //   name: 'primaryprofessionalSpecialization',
    //   type: 'reference',
    //   description: 'NB: DO NOT PICK ALL:  What is this persons primary profession?',
    //   title: 'Primary Profession',
    //   to: [{ type: 'professionalTypes'}]
    // },
    //   {
    //   name: 'professionalSpecializations',
    //   type: 'array',
    //   description: 'NB: DO NOT PICK ALL: What additional professions does this person have?',
    //   title: 'Other Professions',
    //   // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //   of : [
    //       {
    //           type: 'reference',
    //           to: [{ type: 'professionalTypes'}]
    //       }
    //   ]
    // },
    //  {
    //   name: 'identifiesas',
    //   type: 'array',
    //   description: 'How does this person gender identify',
    //   title: 'Identifies As',
    //   // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //   of : [
    //       {
    //           type: 'reference',
    //           to: [{ type: 'identifiesAs'}]
    //       }
    //   ]
    // },
    //    {
    //   name: 'primarySpecialization',
    //   type: 'reference',
    //   description: 'What specialization does this person have?',
    //   title: 'Primary Specialization',
    //   to: [{ type: 'specialization'}]
    // },
    // {
    //   name: 'secondarySpecialization',
    //   type: 'array',
    //   description: 'What additional specializations does this person have?',
    //   title: 'Additional Specializations',
    //   // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //   of : [
    //       {
    //           type: 'reference',
    //           to: [{ type: 'specialization'}]
    //       }
    //   ]
    // },
    // {
    //   name: 'availableLocations',
    //   type: 'array',
    //   description: 'Where is this person available?',
    //   title: 'Locations',
    //   // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //   of : [
    //       {
    //           type: 'reference',
    //           to: [{ type: 'organization'}]
    //       }
    //   ]
    // },
    //   {
    //   name: 'certifications',
    //   type: 'array',
    //   description: 'What are this persons Certifications?',
    //   title: 'Certifications',
    //   // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //   of : [
    //       {
    //           type: 'reference',
    //           to: [{ type: 'certification'}]
    //       }
    //   ]
    // },
    // {
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'descriptionText',
    //   description: "REQUIRED: A full descriptive bio of the trainer.  Use styling as much as possible.",
    //  },
    //   {
    //   name: 'seobio',
    //   title: 'SEO Bio',
    //   type: 'descriptionText',
    //     description: 'Less than 250 characters.  Displayed with Bio Photo as summary',
    // },
    // {
    //   name: 'carouselImages',
    //   type: 'array',
    //   description: 'Add up to 6 images',
    //   title: 'Carousel Images',
    //
    //   // validation: Rule => Rule.unique().error('You can only have one of a category'),
    //   of : [
    //       {
    //           type: 'mainImage',
    //       },
    //   ]
    //   },
    //  {
    //       name: 'facebookurl',
    //       title: 'Facebook Url',
    //       type: 'object',
    //       description: "OPTIONAL: The Url to the Organizations facebook page",
    //       fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //       ]
    //    },
    //    {
    //       name: 'twitterurl',
    //       title: 'Twitter Url',
    //       type: 'object',
    //       description: "OPTIONAL: The Url to the Organizations Twitter page",
    //       fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //       ]
    //    },
    //    {
    //       name: 'instagramurl',
    //       title: 'Instagram Url',
    //       type: 'object',
    //       description: "OPTIONAL: The Url to the Organizations Instagram page",
    //       fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //       ]
    //    },
    //     {
    //         name: 'linkedinurl',
    //         title: 'LinkedIn Url',
    //         type: 'object',
    //         description: "OPTIONAL: The Url to the Organizations LinkedIn page",
    //         fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //         ]
    //     },
    //     {
    //        name: 'pinteresturl',
    //        title: 'Pinterest Url',
    //        type: 'object',
    //        description: "OPTIONAL: The Url to the Organizations Pinterest page",
    //        fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //       ]
    //     },
    //     {
    //       name: 'vimeourl',
    //       title: 'Vimeo Url',
    //       type: 'object',
    //       description: "OPTIONAL: The Url to the Organizations Vimeo page",
    //       fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //       ]
    //     },
    //     {
    //       name: 'youtubeurl',
    //       title: 'YouTube Url',
    //       type: 'object',
    //       description: "OPTIONAL: The Url to the Organizations YouTube page",
    //       fields: [
    //             {
    //                 title: 'Url',
    //                 name: 'href',
    //                 type: 'url',
    //                 validation: Rule =>
    //                     Rule.uri({
    //                         allowRelative: true,
    //                         scheme: ['https', 'http', 'mailto', 'tel']
    //                     })
    //             },
    //       ]
    //     },
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image'
  //   }
  // }
}