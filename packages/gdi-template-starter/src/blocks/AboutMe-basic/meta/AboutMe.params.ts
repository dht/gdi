import { id } from '../AboutMe';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 3 },
        },
        colors: {},
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
        },
    },
};
