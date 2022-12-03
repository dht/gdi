import { id } from '../CtaAction';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 3 },
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 0 },
            href: { fieldType: 'url', isRequired: true, order: 1 },
        },
    },
};
