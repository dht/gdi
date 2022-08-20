import { IBlockParams } from '@gdi/web-ui';
import { id } from '../ImageAndText';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            slogan: 'text?',
            header: 'text',
            description: 'text?',
            ctaButtonText: 'text',
        },
        colors: {
            background: 'color?',
            text: 'color?',
        },
        extra: {
            href: 'url',
            imageUrl: 'url?',
            backgroundImageUrl: 'url?',
        },
    },
};
