import { snakeCase } from 'shared-base';

export const objectToSnakeCase = (object: Json) => {
    return Object.keys(object).reduce((acc, key) => {
        acc[snakeCase(key)] = object[key];
        return acc;
    }, {} as Json);
};
