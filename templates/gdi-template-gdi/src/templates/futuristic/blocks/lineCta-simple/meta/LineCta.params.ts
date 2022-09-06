import { id } from '../LineCta';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            textStrong: { fieldType: 'text', order: 0 },
            text: { fieldType: 'text', isRequired: true, order: 1 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 2 },
        },
        colors: {
            background: { fieldType: 'color', order: 0 },
            text: { fieldType: 'color', order: 1 },
        },
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
        },
    },
};
