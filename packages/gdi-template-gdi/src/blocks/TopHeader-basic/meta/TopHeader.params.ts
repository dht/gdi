import { id } from '../TopHeader';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            logoImageUrl: { fieldType: 'image', isRequired: true, order: 0 },
            githubUrl: { fieldType: 'url', order: 1 },
            socialDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 2,
            },
        },
    },
};
