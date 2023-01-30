export default {
    type: 'document',
    name: 'marketingCampaign',
    title: 'MarketingCampaign',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: "REQUIRED: The Name of the Campaign",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'REQUIRED: The slug is used for searching and to provide the backend with a value to append to the ' +
                'url when navigating to a page identifying this campaign.  It can be entered manually or generated ' +
                'automatically by clicking the generate button.',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'descriptionText',
            description: "REQUIRED: The description of the Campaign.",
        },
    ]
}
