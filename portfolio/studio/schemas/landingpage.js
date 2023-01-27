export default {
    name: 'landingpage',
    title: 'Landingpage',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Frontend Layout Version',
            type: 'string',
            description: 'Determines the layout style of the page'
        },
        {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.title}`,
        maxLength: 96
      }
    },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: "Brief description?"
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
            description: "Set this layout to be the active layout."
        },
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
            description: "What's the title of the homepage hero?"
        },
        {
            name: 'subtitle',
            title: 'Landingpage subtitle',
            type: 'string',
            description: "What's the subtitle of the homepage hero?",
        },
        {
            name: 'image',
            title: 'Landingpage Image',
            type: 'mainImage',
              description: "Landing Page Image",
              options: {
                hotspot: true
              }
        },
        {
            name: 'logo',
            title: 'Front Page Logo',
            type: 'image'
        }
    ],
};