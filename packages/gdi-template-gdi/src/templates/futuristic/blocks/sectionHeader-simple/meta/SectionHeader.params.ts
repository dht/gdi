import { id } from '../SectionHeader';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {
            id: { fieldType: 'text', order: 0 },
            isHidden: { fieldType: 'checkbox', order: 1 },
        },
    },
};
