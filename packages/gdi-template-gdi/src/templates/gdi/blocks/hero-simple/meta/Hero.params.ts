import { IBlockParams } from '@gdi/web-ui';
import { id } from '../Hero';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            slogan: 'text?',
            header: 'text',
            description: 'text?',
            ctaButtonText: 'text',
            imageCreditsTitle: 'text?',
            imageCreditsDescription: 'text?',
        },
        colors: {
            background: 'color?',
            text: 'color?',
        },
        extra: {
            headerFontSize: 'number',
            href: 'url',
            hrefSecond: 'url?',
            imageUrl: 'image',
        },
    },
};
