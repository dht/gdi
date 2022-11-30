import { id } from '../Twins';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 0 },
            description: {
                fieldType: 'longText',
                isRequired: true,
                order: 1,
            },
            buttonText: { fieldType: 'text', isRequired: true, order: 3 },
            headerSecondary: { fieldType: 'text', isRequired: true, order: 2 },
            descriptionSecondary: {
                fieldType: 'longText',
                isRequired: true,
                order: 3,
            },
            buttonTextSecondary: {
                fieldType: 'text',
                isRequired: true,
                order: 3,
            },
            notes: {
                fieldType: 'longText',
                isRequired: false,
                order: 4,
            },
        },
        colors: {},
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            hrefSecondary: { fieldType: 'url', isRequired: true, order: 1 },
            rotation: { fieldType: 'number', isRequired: false, order: 2 },
        },
    },
};
