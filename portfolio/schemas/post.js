import postBodyBlock from "./postBodyBlock";
import {mediaAssetSource} from "sanity-plugin-media";

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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'person'}
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'postCategory'}}]
    },
      {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string'
    },
      {
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{type: 'reference', to: {type: 'keywords'}}]
    },
      {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
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
      name: 'body',
      title: 'Post Body',
      type: 'postBodyBlock',
      // of: [{ type: 'reference', to: {type: 'postBodyBlock'}}]
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
}

