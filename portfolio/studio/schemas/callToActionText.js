import React from 'react';
import { GrSubscript, GrSuperscript } from 'react-icons/gr';
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineOrderedList

} from 'react-icons/ai';


const textAlignCenter = () => (
    <span style={{textAlign: "center"}}>< AiOutlineAlignCenter /></span>
)

const textAlignLeft = () => (
    <span style={{textAlign: "left"}}>< AiOutlineAlignLeft /></span>
)

const textAlignRight = () => (
    <span style={{textAlign: "right"}}>< AiOutlineAlignRight /></span>
)


export default {
    name: 'callToActionText',
    type: 'array',
    title: 'Call To Action',
    validation: Rule => Rule.custom(blocks => {
      let tally = 0;
      blocks?.map((block) => {
        return block.children.map(child => {
          if (child?.text.length > 0) {
            tally += child.text.length;
          }
        })
      })
      return tally > 300 ? '300 characters maximum.' : true;
    }),
    of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
          {title: 'Bullet', value: 'bullet'},
          {title: 'Numbered', value: 'number', blockEditor:{icon: () => <><AiOutlineOrderedList /></>}}
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          { title: "Superscript",
            value: "sup",
            blockEditor: {
              icon: () => <><GrSuperscript /></>,
              render: props => <sup>{props.children}</sup>
            }
          },
          { title: "Subscript",
            value: "sub",
            blockEditor: {
              icon: () => <><GrSubscript /></>,
              render: props => <sub>{props.children}</sub>
            }
          },
          {
            title:"Text Align Left",
            value: "textAlignLeft",
            blockEditor: {
              icon: textAlignLeft,
              render: props => <div style={{textAlign: "left"}}>{props.children}</div>
            }
          },
          {
            title:"Text Align Center",
            value: "textAlignCenter",
            blockEditor: {
              icon: textAlignCenter,
              render: props => <div style={{textAlign: "center"}}>{props.children}</div>
            }
          },
            {
            title:"Text Align Right",
            value: "textAlignRight",
            blockEditor: {
              icon: textAlignRight,
              render: props => <div style={{textAlign: "right"}}>{props.children}</div>
            }
          }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   type: 'code',
    // },

    {
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
            isHighlighted: true,
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
    }
  ]
}