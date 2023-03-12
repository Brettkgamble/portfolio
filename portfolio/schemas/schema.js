// Then import schema types from any plugins that might expose them
import bioBlock from './bioBlock';
import category from './category';
import courses from "./courses";
import higherEducation from "./higherEducation";
import organization from "./organization";
import orgDescriptionBlock from "./orgDescriptionBlock";
import person from './person';
import roles from './roles';
import skills from './skills';
import skillBlock from "./skillBlock";
import skillProficiency from "./skillProficiency";
import address from './address';

// Then we give our schema to the builder and provide the result to Sanity
export default [
    address,
    bioBlock,
    category,
    courses,
    higherEducation,
    organization,
    orgDescriptionBlock,
    person,
    roles,
    skills,
    skillBlock,
    skillProficiency
]
