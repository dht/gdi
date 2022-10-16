import { createTranslationHook } from '@gdi/platformer';
import { APP_ID } from './ids';

export const useTranslation = createTranslationHook(APP_ID);

const keyRegex = /([a-zA-Z]+)Key$/;

type T = (key: string) => any;

export const translateItem = (item: Json, fields: string[] | null, t: T) => {
    return Object.keys(item).reduce((output, key) => {
        const match = key.match(keyRegex);

        if (match) {
            const newKey = match[1];
            output[newKey] = t(item[key]);
        } else if (fields && fields.includes(key)) {
            output[key] = t(item[key]);
        } else {
            output[key] = item[key];
        }

        return output;
    }, {} as Json);
};

export const translateItems = (
    items: Json[],
    fields: string[] | null,
    t: T
) => {
    return items.map((item) => {
        return translateItem(item, fields, t);
    });
};

export const translateFormConfig = (config: IFormConfig, t: T) => {
    const { header, fields, submit } = config;

    return {
        ...config,
        header: t(header),
        fields: translateItems(
            fields,
            ['label', 'placeholder', 'description'],
            t
        ),
        submit: translateItem(submit, ['title'], t),
    };
};
