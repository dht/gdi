import { id } from '../TopHeader';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {
            logoImageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            hrefExtra: { fieldType: 'url', order: 2 },
        },
    },
};
