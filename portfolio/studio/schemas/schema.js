// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import landingPage from './landingpage'
import builtWith from './builtwith'
import postBodyBlock from './postBodyBlock'
import category from './category'
import post from './post'
import person from './person';
import identifiesas from './identifiesas'
import organization from './organization'
import city from './city'

// Object Schemas
import address from './address'
import mainImage from './mainImage'
import schematicImage from './schematicImage'
import descriptionText from './descriptionText'
import marketingCampaign from "./marketingCampaign";
import professionalTypes from './professionalTypes'
import specialization from './specialization'
import serviceCategory from './serviceCategory'
import serviceTypes from './serviceTypes'
import callToActionText from './callToActionText'
import certification from './certification'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
      landingPage,
      builtWith,
      certification,
      postBodyBlock,
      category,
      city,
      mainImage,
      marketingCampaign,
      organization,
      schematicImage,
      post,
      person,
      address,
      callToActionText,
      identifiesas,
      serviceCategory,
      professionalTypes,
      serviceTypes,
      specialization,
      descriptionText,
  ]),
})

