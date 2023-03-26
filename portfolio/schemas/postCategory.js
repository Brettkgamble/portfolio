export default {
  name: 'postCategory',
  title: 'Category',
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
     description: 'Example: Car Detailing Projects'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}