import { set } from 'lodash';

export const flattenInstanceProps = (instanceProps: Json = {}) => {
    const output: Json = {};

    const { strings = {}, colors = {}, extra = {} } = instanceProps;

    Object.keys(strings).forEach((key) => {
        output[`strings_${key}`] = strings[key];
    });

    Object.keys(colors).forEach((key) => {
        output[`colors_${key}`] = colors[key];
    });

    Object.keys(extra).forEach((key) => {
        output[`extra_${key}`] = extra[key];
    });

    return output;
};

export const unflattenInstanceProps = (flattenInstanceProps: Json = {}) => {
    const output: Json = {
        strings: {},
        colors: {},
        extra: {},
    };

    Object.keys(flattenInstanceProps).forEach((key) => {
        const xPath = key.split('_').join('.');
        set(output, xPath, flattenInstanceProps[key]);
    });

    return output;
};
