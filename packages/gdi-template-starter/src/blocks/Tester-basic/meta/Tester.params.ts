import { id } from '../Tester';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 0 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {
            background: { fieldType: 'color', order: 0 },
            text: { fieldType: 'color', order: 1 },
        },
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            backgroundImageUrl: {
                fieldType: 'image',
                isRequired: true,
                order: 2,
            },
        },
    },
};
