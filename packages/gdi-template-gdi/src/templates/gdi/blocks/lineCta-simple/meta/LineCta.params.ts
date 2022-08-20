import { IBlockParams } from '@gdi/web-ui';
import { id } from '../LineCta';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            textStrong: 'text?',
            text: 'text',
            ctaButtonText: 'text',
        },
        colors: {
            background: 'color?',
            text: 'color?',
        },
        extra: {
            href: 'text',
        },
    },
};
