import { IBlockParams } from '@gdi/engine';
import { id } from '../Feature';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            ctaButtonText: { fieldType: 'text', order: 3 },
        },
        colors: {
            background: { fieldType: 'color', order: 0 },
            text: { fieldType: 'color', order: 1 },
        },
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', isRequired: true, order: 1 },
            animated: { fieldType: 'checkbox', order: 2 },
        },
    },
};
