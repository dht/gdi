import { IBlockParams } from '@gdi/web-ui';
import { id } from '../Installation';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            command: 'text',
            nextStage: 'text',
            nextStageLink: 'text',
        },
        colors: {
            background: 'color?',
            text: 'color?',
        },
        extra: {
            hrefNextStage: 'url',
        },
    },
};
