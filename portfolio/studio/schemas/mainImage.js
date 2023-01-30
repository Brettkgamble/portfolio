import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
          hotspot: true
      },
      fields: [
          {
            name: 'name',
            title: 'Title',
            type: 'string',
            description: "A name to describe the image",
        },
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative Text',
          description: `Some of your visitors cannot see images, be they blind, color-blind, low-sighted; 
          alternative text is of great help for those people that can rely on it to have a good idea of 
          what\'s on your page.`,
          options: {
            isHighlighted: true,
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
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption'
        }
    }
}