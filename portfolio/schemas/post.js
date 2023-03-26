export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: {
     likes: 0,
    views: 0
  },
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
      name: 'Publish',
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
    {
          type: 'image',
          name: "mainImage",
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
              description: `Some of your visitors cannot see images, be they blind, color-blind, low-sighted; 
              alternative text is of great help for those people that can rely on it to have a good idea of 
              what\'s on your page.`,
              options: {
                hotspot: true
              },

            },
            {
              type: 'string',
              name: 'caption',
              title: 'Caption',
              description: `Image Caption`,
            }
          ]
        },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'postCategory'}}]
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
      name: 'likes',
      title: 'likes',
      type: 'number'
    },
      {
      name: 'views',
      title: 'views',
      type: 'number'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'person.name',
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

