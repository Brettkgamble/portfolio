export default {
    name: 'builtwith',
    title: 'Builtwith',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Logo Title',
            type: 'string',
            description: "What is the name of the logo?"
        },
        {
            name: 'attribution',
            title: 'Logo Attribution',
            type: 'string',
            description: "What is the attribution for the logo?",
        },
        {
            name: 'logo',
            title: 'Logo Image',
            type: 'image'
        },
    ],
};