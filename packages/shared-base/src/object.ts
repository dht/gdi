export const toArray = <T = Json>(objectOrArray: T | T[]): T[] => {
    if (!objectOrArray) {
        return [];
    }
    return Array.isArray(objectOrArray) ? objectOrArray : [objectOrArray];
};

export const isEmpty = (object: Json | any[]) => {
    if (Array.isArray(object)) {
        return object.length === 0;
    }

    return Object.keys(object ?? {}).length === 0;
};

export const itemsToObject = (arr: Json[] = [], page = 1, pageSize = 0) => {
    return arr.reduce((output, item, index) => {
        output[item.id] = { ...item, index: index + pageSize * (page - 1) };
        return output;
    }, {} as Json);
};

type variableType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'array'
    | 'function'
    | 'undefined'
    | 'null'
    | 'bigint'
    | 'symbol'
    | 'unknown';

export const getVariableType = (variable: any): variableType => {
    if (variable === null) {
        return 'null';
    }

    if (variable === undefined) {
        return 'undefined';
    }

    if (Array.isArray(variable)) {
        return 'array';
    }

    return typeof variable;
};
