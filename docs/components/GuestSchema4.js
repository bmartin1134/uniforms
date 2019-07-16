import Ajv from 'ajv';

import ImageField from './ImageField.js';
import LongTextField from 'uniforms-unstyled/LongTextField';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    workExperience: {
      description: 'Work experience in years',
      type: 'integer',
      minimum: 0,
      maximum: 100
    },
    profession: {
      type: 'string',
      options: [
        {
          label: 'Developer',
          value: 'Developer'
        },
        {
          label: 'Tester',
          value: 'Tester'
        },
        {
          label: 'Product owner',
          value: 'Product owner'
        },
        {
          label: 'Project manager',
          value: 'Project manager'
        },
        {
          label: 'Businessman',
          value: 'Businessman'
        }
      ]
    },
    additionalInfo: {
      type: 'string',
      uniforms: {
        component: LongTextField
      }
    },
    pictureUrl: {
      type: 'string',
      uniforms: {
        component: ImageField
      }
    }
  },
  required: ['firstName', 'lastName']
};

const validator = new Ajv({ allErrors: true, useDefaults: true }).compile(
  schema
);

const schemaValidator = model => {
  validator(model);
  if (validator.errors && validator.errors.length) {
    throw { details: validator.errors };
  }
};

const bridge = new JSONSchemaBridge(schema, schemaValidator);

export default bridge;