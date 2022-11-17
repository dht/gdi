import { id } from '../CtaAction';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 3 },
            imageCreditsTitle: { fieldType: 'text', order: 4 },
            imageCreditsDescription: { fieldType: 'text', order: 5 },
        },
        colors: {
            background: { fieldType: 'color', order: 0 },
            text: { fieldType: 'color', order: 1 },
        },
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            hrefSecond: { fieldType: 'url', order: 2 },
            headerFontSize: { fieldType: 'number', isRequired: true, order: 3 },
            showBeta: { fieldType: 'checkbox', order: 4 },
        },
    },
};
