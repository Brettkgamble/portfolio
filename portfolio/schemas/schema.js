// Then import schema types from any plugins that might expose them
import category from './category';
import person from './person';
import address from './address'

// Then we give our schema to the builder and provide the result to Sanity
export default [
    address,
    category,
    person
]
