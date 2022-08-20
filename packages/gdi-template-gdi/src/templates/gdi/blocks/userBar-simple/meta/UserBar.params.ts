import { IBlockParams } from '@gdi/web-ui';
import { id } from '../UserBar';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {},
        colors: {
            background: 'color?',
        },
        extra: {
            logoImageUrl: 'url',
            githubLink: 'url',
        },
    },
};
