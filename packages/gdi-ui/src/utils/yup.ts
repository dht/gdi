import * as yup from 'yup';
import { FieldType, IFormConfig } from '../components/Form/Form.types';
import { upperFirst } from 'lodash';

export const rulesToYup = (config: IFormConfig) => {
  const { fields } = config;

  const json: Json = {};

  fields.forEach((field) => {
    const { id, fieldType, isRequired, params, label, rules = [] } = field;
    let yupMethod = fieldTypeToYupMethod[fieldType];

    if (isRequired) {
      yupMethod = yupMethod.required(`${upperFirst(id)} is a required field`);
    }

    if (params?.maxChars) {
      yupMethod = yupMethod.max(
        params.maxChars,
        `${label} must be up to ${params.maxChars} characters`
      );
    }

    if (params?.maxTags) {
      yupMethod = yupMethod.max(params.maxTags, `Must be up to ${params.maxTags} tags`);
    }

    if (params?.minTags) {
      yupMethod = yupMethod.min(params.minTags, `At least ${params.minTags} tag/s is required`);
    }

    rules.forEach((rule) => {
      const { message, value } = rule;

      switch (rule.type) {
        case 'equal':
          yupMethod = yupMethod.oneOf([yup.ref(value), null], message);
          break;
      }
    });

    json[id] = yupMethod;
  });

  const schema = yup.object(json);

  return schema;
};

const fieldTypeToYupMethod: Record<FieldType, any> = {
  email: yup
    .string()
    .email('Email must be valid')
    .test('no-plus', 'Email must not contain +', (value) => {
      if (value) {
        return !value.includes('+');
      }
      return true;
    }),
  password: yup.string(),
  // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  // .matches(/[0-9]/, 'Password must contain at least one number')
  // .matches(/[!@#$%^&*()_+]/, 'Password must contain at least one special character'),
  slider: yup.string(),
  text: yup.string(),
  tags: yup.array().of(yup.string()),
  stopSequences: yup.array().of(yup.string()),
};
