import { IBlockParams } from '@gdi/web-ui';
import { id } from '../Installation';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            slogan: false,
            header: true,
            description: false,
            ctaButtonText: true,
        },
        colors: {
            background: '#1a7870',
        },
        extra: {
            href: 'url',
            imageUrl: 'url',
        },
    },
};
