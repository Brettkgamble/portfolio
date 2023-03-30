// Then import schema types from any plugins that might expose them
import bioBlock from './bioBlock';
import courses from "./courses";
import continuousEducation from "./continuousEducation";
import higherEducation from "./higherEducation";
import organization from "./organization";
import orgDescriptionBlock from "./orgDescriptionBlock";
import person from './person';
import post from './post';
import postBodyBlock from "./postBodyBlock";
import postCategory from "./postCategory";
import roles from './roles';
import skills from './skills';
import skillBlock from "./skillBlock";
import skillProficiency from "./skillProficiency";
import address from './address';

// Then we give our schema to the builder and provide the result to Sanity
export default [
    address,
    bioBlock,
    courses,
    continuousEducation,
    higherEducation,
    organization,
    orgDescriptionBlock,
    person,
    post,
    postBodyBlock,
    postCategory,
    roles,
    skills,
    skillBlock,
    skillProficiency
]
