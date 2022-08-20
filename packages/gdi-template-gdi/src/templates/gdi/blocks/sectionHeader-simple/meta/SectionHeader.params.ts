import { IBlockParams } from '@gdi/web-ui';
import { id } from '../SectionHeader';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            text: 'text?',
        },
        colors: {},
        extra: {
            id: 'text?',
            isHidden: 'checkbox?',
        },
    },
};
