// Then import schema types from any plugins that might expose them
import category from './category';
import person from './person';

// Then we give our schema to the builder and provide the result to Sanity
export default [
    category,
    person
]
