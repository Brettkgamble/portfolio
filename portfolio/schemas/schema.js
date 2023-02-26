// Then import schema types from any plugins that might expose them
import bioBlock from './bioBlock';
import category from './category';
import organization from "./organization";
import orgDescriptionBlock from "./orgDescriptionBlock";
import person from './person';
import roles from './roles';
import address from './address';

// Then we give our schema to the builder and provide the result to Sanity
export default [
    address,
    bioBlock,
    category,
    organization,
    orgDescriptionBlock,
    person,
    roles
]
