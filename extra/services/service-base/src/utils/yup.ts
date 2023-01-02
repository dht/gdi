import * as yup from 'yup';
import { IEndpointSchema } from '../types';

export const endpointSchemaToYup = (schema: IEndpointSchema) => {
    const { body } = schema;

    const object: any = {};

    if (body) {
        Object.keys(body).forEach((key) => {
            const type = body[key];

            switch (type) {
                case 'string':
                    object[key] = yup.string();
                    break;
                case 'number':
                    object[key] = yup.number();
                    break;
                case 'boolean':
                    object[key] = yup.boolean();
                    break;
                case 'date':
                    object[key] = yup.date();
                    break;
            }

            if (!type.endsWith('?')) {
                object[key] = object[key].required();
            }
        });
    }

    return yup.object(object);
};
