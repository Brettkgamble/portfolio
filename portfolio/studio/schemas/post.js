export default {
  name: 'post',
  title: 'Post',
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
      }
    },
      {
      name: 'doNotPublish',
      title: 'Publish',
      type: 'boolean',
      initialValue:  true
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'person'}
    },
    {
     name: 'seoDescription',
     title: 'SEO Description',
     type: 'string',
     description: 'Example: Car Detailing of 2012 Chevrolet Malibu'
    },
    //   {
    //  name: 'seoOgTitle',
    //  title: 'SEO OG: Title',
    //  type: 'string',
    //  description: 'Example: Car Detailing of 2012 Chevrolet Malibu'
    // },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
     {
      name: 'postIntroduction',
      title: 'Introduction Text',
      validation: Rule => Rule.required(),
       description: 'This text appears in the Category Listing page as an introduction to your post.  When presented in the' +
           'actual blog post, this section will appear before the post content and therefore should not be replicated ' +
           'inside of the post itself.' ,
      type: 'postBodyBlock'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'postBodyBlock'
    },
    {
      name: 'schematicImage',
      title: 'Schematic image',
      type: 'schematicImage',
    },
    {
      name: 'likes',
      title: 'likes',
      type: 'number'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}