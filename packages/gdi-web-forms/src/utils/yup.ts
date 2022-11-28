import * as yup from 'yup';
import { FieldType, IFormConfig } from '../types';

export const rulesToYup = (config: IFormConfig) => {
    const { fields } = config;

    const json: Json = {};

    fields.forEach((field) => {
        const { id, fieldType, isRequired } = field;
        let yupMethod = fieldTypeToYupMethod[fieldType];

        if (isRequired) {
            yupMethod = yupMethod.required();
        }

        json[id] = yupMethod;
    });

    const schema = yup.object(json);

    return schema;
};

const fieldTypeToYupMethod: Record<FieldType, any> = {
    barSelect: yup.string(),
    boolean: yup.bool(),
    checkbox: yup.string(),
    choice: yup.string(),
    color: yup.string(),
    dataset: yup.string(),
    date: yup.date(),
    details: yup.string(),
    hidden: yup.string(),
    icon: yup.string(),
    email: yup.string().email(),
    imageUpload: yup.string(),
    number: yup.number(),
    paragraph: yup.string(),
    password: yup.string(),
    phone: yup.string(),
    select: yup.string(),
    slider: yup.string(),
    tags: yup.array().of(yup.string()),
    text: yup.string(),
    url: yup.string().url(),
};

/*
import { setLocale } from 'yup';
setLocale({
    mixed: {
        default: 'field_invalid',
        required: () => ({ key: 'field_required' }),
    },
    string: {
        email: () => ({ key: 'field_valid_email' }),
    },
    number: {
        min: ({ min }) => ({ key: 'field_too_small', values: { min } }),
        max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
    },
    date: {},
    boolean: {},
    object: {},
    array: {
        min: ({ min }) => ({ key: 'field_required', values: { min } }),
    },
});
*/
