import cloneDeep from 'lodash/cloneDeep';

type Translate = (key: string) => string;

export const translateForm = (data: Json, t: Translate) => {
    const output = cloneDeep(data);

    const typeOfData = typeOfVariable(data);

    switch (typeOfData) {
        case 'object':
            return Object.keys(data).reduce((memo, key) => {
                memo[key] = translateForm(data[key], t);
                return memo;
            }, {} as Json);
        case 'array':
            return data.map((item: Json) => translateForm(item, t));
        case 'string':
            if (data.includes('_key')) {
                return t(data.replace('_key', ''));
            }
    }

    return output;
};

export const typeOfVariable = (variable: any) => {
    if (typeof variable === 'string') {
        return 'string';
    }
    if (typeof variable === 'number') {
        return 'number';
    } else if (typeof variable === 'boolean') {
        return 'boolean';
    } else if (typeof variable === 'object') {
        return Array.isArray(variable) ? 'array' : 'object';
    }

    return 'unknown';
};

type Option = { id: string; text: string };
type OptionsMap = Record<string, Option[]>;

export const translateOptions = (optionsMap: OptionsMap, t: Translate) => {
    const output = cloneDeep(optionsMap);

    for (let listId of Object.keys(output)) {
        output[listId] = output[listId].map((option) => {
            const { text } = option;
            return {
                ...option,
                text: t(text),
            };
        });
    }

    return output;
};
