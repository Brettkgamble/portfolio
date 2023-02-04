import countries from './countries'

export default {
    title: 'Address',
    name: 'address',
    type: 'document',
    fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'pobox', type: 'string', title: 'PO Box'},
        {name: 'unit', type: 'string', title: 'UNit #'},
        {name: 'address1', type: 'string', title: 'Address 1'},
        {name: 'address2', type: 'string', title: 'Address 2'},
        {name: 'postcode', type: 'string', title: 'Postal Code'},
        {name: 'city', type: 'string', title: 'City'},
        {name: 'state', type: 'string', title: 'Province / State'},
        {name: 'country', type: 'string', title: 'Country', Options:{
            list: [
                ...countries
            ]
        }},
        {name: 'telephone', type: 'string', title: 'Telephone: Address Specific'},
        {name: 'email', type: 'string', title: 'Email: Address Specific'},
    ]
}
