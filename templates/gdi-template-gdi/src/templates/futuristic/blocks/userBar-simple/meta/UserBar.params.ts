import { id } from '../UserBar';

export const params: IBlockParams = {
    id,
    schema: {
        strings: {},
        colors: {
            background: { fieldType: 'color', order: 0 },
        },
        extra: {
            logoImageUrl: { fieldType: 'url', isRequired: true, order: 0 },
            githubLink: { fieldType: 'url', isRequired: true, order: 1 },
        },
    },
};
