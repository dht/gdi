import { id } from '../Hero';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            installation: { fieldType: 'text', order: 2 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 3 },
            secondaryButtonText: { fieldType: 'text', order: 4 },
        },
        colors: {},
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            hrefSecondary: { fieldType: 'url', order: 2 },
        },
    },
};
