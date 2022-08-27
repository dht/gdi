import { id } from '../Footer';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {
            copyright: { fieldType: 'text', isRequired: true, order: 0 },
        },
        colors: {},
        extra: {},
    },
};
