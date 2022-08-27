
import { id } from '../ImageAndText';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            slogan: { fieldType: 'text', order: 0 },
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
            ctaButtonText: { fieldType: 'text', isRequired: true, order: 3 },
        },
        colors: {
            background: { fieldType: 'color', order: 0 },
            text: { fieldType: 'color', order: 1 },
        },
        extra: {
            href: { fieldType: 'url', isRequired: true, order: 0 },
            imageUrl: { fieldType: 'image', order: 1 },
            backgroundImage: { fieldType: 'image', order: 2 },
        },
    },
};
