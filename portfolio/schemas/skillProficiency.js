export default {
  name: 'skillProficiency',
  title: 'Skill Profienciency',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
    },
    {
     name: 'seoDescription',
     title: 'SEO Description',
     type: 'string',
     description: 'Example: Business Analysis'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}